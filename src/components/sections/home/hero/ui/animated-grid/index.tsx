'use client';

import React, { useRef, useEffect, useState, useMemo } from 'react';

import styles from './anumated-grid.module.scss';

interface AnimatedGridProps {
  children?: React.ReactNode;
}

interface Point {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  velocityX: number;
  velocityY: number;
}

const ICONS_NAMES = [
  'spore',
  'hash',
  'git-commit',
  'git-branch',
  'flow-arrow',
  'fingerprint',
  'code-simple',
  'code-block',
  'binary',
  'bezier-curve'
] as const;

// Set для O(1) проверки вместо O(n) перебора массива
const NOT_ALLOW_CELLS_SET = new Set([
  '1,1',
  '2,1',
  '3,1',
  '4,1',
  '5,1',
  '6,1',
  '7,1',
  '8,1',
  '9,1',
  '10,1',
  '1,2',
  '2,2',
  '3,2',
  '4,2',
  '5,2',
  '6,2',
  '7,2',
  '8,2',
  '9,2',
  '10,2',
  '1,3',
  '2,3',
  '3,3',
  '4,3',
  '5,3',
  '6,3',
  '7,3',
  '8,3',
  '9,3',
  '10,3',
  '1,4',
  '2,4',
  '3,4',
  '4,4',
  '5,4',
  '6,4',
  '7,4',
  '8,4',
  '9,4',
  '10,4'
]);

// Предвычисленные границы буферной зоны (вместо Math.max на каждый кадр)
const BUFFER_MAX_X = 11; // 10 + 1
const BUFFER_MAX_Y = 5; // 4 + 1

const SPRING_STRENGTH = 0.05;
const DAMPING = 0.85;
const MOUSE_INFLUENCE = 0.8;
const MOUSE_RADIUS = 150;
const MOUSE_RADIUS_SQ = MOUSE_RADIUS * MOUSE_RADIUS;
const VELOCITY_THRESHOLD = 0.01;

const getGridConfig = (width: number) => {
  if (width < 768) return { gridWidth: 12, gridHeight: 7, squareSize: 60.68 };
  if (width < 1024) return { gridWidth: 12, gridHeight: 8, squareSize: 58.6 };
  if (width < 1920) return { gridWidth: 12, gridHeight: 8, squareSize: 78.55 };
  return { gridWidth: 12, gridHeight: 8, squareSize: 89.83 };
};

const getIconSizeMultiplier = (width: number) => {
  if (width < 1024) return 0.27;
  if (width < 1920) return 0.25;
  return 0.27;
};

// Предвычисление видимости линий — результат не зависит от позиций точек
const buildLineVisibility = (gw: number, gh: number) => {
  const shouldDraw = (x1: number, y1: number, x2: number, y2: number) => {
    if (
      x1 === 0 ||
      x2 === 0 ||
      x1 === gw ||
      x2 === gw ||
      y1 === 0 ||
      y2 === 0 ||
      y1 === gh ||
      y2 === gh
    )
      return true;

    // Граница буферной зоны
    if (x1 === x2) {
      if ((x1 === 1 || x1 === BUFFER_MAX_X) && y1 >= 1 && y1 <= BUFFER_MAX_Y)
        return true;
    }
    if (y1 === y2) {
      if ((y1 === 1 || y1 === BUFFER_MAX_Y) && x1 >= 1 && x1 <= BUFFER_MAX_X)
        return true;
    }

    // Линии внутри запрещённой зоны скрыты
    if (x1 === x2 && NOT_ALLOW_CELLS_SET.has(`${x1},${y1}`)) return false;
    if (y1 === y2 && NOT_ALLOW_CELLS_SET.has(`${x1},${y1}`)) return false;
    return true;
  };

  const vertical: boolean[][] = [];
  for (let x = 0; x <= gw; x++) {
    vertical[x] = [];
    for (let y = 0; y < gh; y++) {
      vertical[x][y] = shouldDraw(x, y, x, y + 1);
    }
  }

  const horizontal: boolean[][] = [];
  for (let y = 0; y <= gh; y++) {
    horizontal[y] = [];
    for (let x = 0; x < gw; x++) {
      horizontal[y][x] = shouldDraw(x, y, x + 1, y);
    }
  }

  return { vertical, horizontal };
};

export const AnimatedGrid = ({ children }: AnimatedGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseX = useRef(-1000);
  const mouseY = useRef(-1000);
  const animationRef = useRef<number>(null);
  const isVisibleRef = useRef(true);
  const isSettledRef = useRef(false);
  const [containerStyle, setContainerStyle] = useState<React.CSSProperties>({});
  const iconsCache = useRef<Map<string, HTMLImageElement>>(new Map());
  const [isCanvasVisible, setIsCanvasVisible] = useState(false);
  const hasRenderedOnceRef = useRef(false);
  const vLinesRef = useRef<boolean[][]>([]);
  const hLinesRef = useRef<boolean[][]>([]);

  const cells = useMemo(() => {
    const allCells: { x: number; y: number }[] = [];
    for (let x = 0; x < 12; x++) {
      for (let y = 0; y < 8; y++) {
        if (!NOT_ALLOW_CELLS_SET.has(`${x},${y}`)) {
          allCells.push({ x, y });
        }
      }
    }
    const count = Math.min(ICONS_NAMES.length, allCells.length);
    for (let i = 0; i < count; i++) {
      const j = i + Math.floor(Math.random() * (allCells.length - i));
      [allCells[i], allCells[j]] = [allCells[j], allCells[i]];
    }
    return allCells.slice(0, count).map((cell, i) => ({
      x: cell.x,
      y: cell.y,
      iconName: ICONS_NAMES[i]
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const padding = 1;
    let config = getGridConfig(window.innerWidth);
    let { gridWidth, gridHeight, squareSize } = config;
    let iconSizeMul = getIconSizeMultiplier(window.innerWidth);

    const setupCanvas = () => {
      const cssW = gridWidth * squareSize + padding * 2;
      const cssH = gridHeight * squareSize + padding * 2;
      canvas.width = cssW * dpr;
      canvas.height = cssH * dpr;
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const { vertical, horizontal } = buildLineVisibility(
        gridWidth,
        gridHeight
      );
      vLinesRef.current = vertical;
      hLinesRef.current = horizontal;
    };

    const points: Point[][] = [];
    const initPoints = () => {
      for (let y = 0; y <= gridHeight; y++) {
        if (!points[y]) points[y] = [];
        for (let x = 0; x <= gridWidth; x++) {
          const px = x * squareSize + padding;
          const py = y * squareSize + padding;
          if (!points[y][x]) {
            points[y][x] = {
              x: px,
              y: py,
              originalX: px,
              originalY: py,
              velocityX: 0,
              velocityY: 0
            };
          } else {
            const p = points[y][x];
            p.originalX = px;
            p.originalY = py;
            p.x = px;
            p.y = py;
            p.velocityX = 0;
            p.velocityY = 0;
          }
        }
      }
    };

    setupCanvas();
    initPoints();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX.current = e.clientX - rect.left;
      mouseY.current = e.clientY - rect.top;
      if (isSettledRef.current) {
        isSettledRef.current = false;
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    const handleMouseLeave = () => {
      mouseX.current = -1000;
      mouseY.current = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        config = getGridConfig(window.innerWidth);
        gridWidth = config.gridWidth;
        gridHeight = config.gridHeight;
        squareSize = config.squareSize;
        iconSizeMul = getIconSizeMultiplier(window.innerWidth);
        setupCanvas();
        initPoints();
        isSettledRef.current = false;
      }, 100);
    };
    window.addEventListener('resize', handleResize);

    // Пауза анимации когда секция вне viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting && !isSettledRef.current) {
          animationRef.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const loadAllIcons = async () => {
      const unique = [...new Set(cells.map((c) => c.iconName))];
      await Promise.all(
        unique.map(
          (name) =>
            new Promise<void>((resolve, reject) => {
              if (iconsCache.current.has(name)) {
                resolve();
                return;
              }
              const img = new Image();
              img.onload = () => {
                iconsCache.current.set(name, img);
                resolve();
              };
              img.onerror = reject;
              img.src = `/svg/icons/${name}.svg`;
            })
        )
      );
    };

    const animate = () => {
      if (!isVisibleRef.current) return;

      const cssW = gridWidth * squareSize + padding * 2;
      const cssH = gridHeight * squareSize + padding * 2;
      ctx.clearRect(0, 0, cssW, cssH);

      const mx = mouseX.current;
      const my = mouseY.current;
      let totalMotion = 0;

      // Физика
      for (let y = 0; y < gridHeight; y++) {
        const row = points[y];
        for (let x = 0; x <= gridWidth; x++) {
          const p = row[x];
          const dx = mx - p.x;
          const dy = my - p.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < MOUSE_RADIUS_SQ && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const force =
              ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * MOUSE_INFLUENCE;
            p.velocityX += (dx / dist) * force;
            p.velocityY += (dy / dist) * force;
          }

          p.velocityX =
            (p.velocityX + (p.originalX - p.x) * SPRING_STRENGTH) * DAMPING;
          p.velocityY =
            (p.velocityY + (p.originalY - p.y) * SPRING_STRENGTH) * DAMPING;
          p.x += p.velocityX;
          p.y += p.velocityY;
          totalMotion += Math.abs(p.velocityX) + Math.abs(p.velocityY);
        }
      }

      // Линии сетки — один beginPath/stroke вместо сотен
      ctx.strokeStyle = 'rgb(226, 226, 226)';
      ctx.lineWidth = 1;
      ctx.beginPath();

      const vLines = vLinesRef.current;
      for (let x = 0; x <= gridWidth; x++) {
        const col = vLines[x];
        for (let y = 0; y < gridHeight; y++) {
          if (col[y]) {
            ctx.moveTo(points[y][x].x, points[y][x].y);
            ctx.lineTo(points[y + 1][x].x, points[y + 1][x].y);
          }
        }
      }

      const hLines = hLinesRef.current;
      for (let y = 0; y <= gridHeight; y++) {
        const row = hLines[y];
        for (let x = 0; x < gridWidth; x++) {
          if (row[x]) {
            ctx.moveTo(points[y][x].x, points[y][x].y);
            ctx.lineTo(points[y][x + 1].x, points[y][x + 1].y);
          }
        }
      }

      ctx.stroke();

      // Ячейки с иконками
      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        const tl = points[cell.y]?.[cell.x];
        const tr = points[cell.y]?.[cell.x + 1];
        const bl = points[cell.y + 1]?.[cell.x];
        const br = points[cell.y + 1]?.[cell.x + 1];

        if (tl && tr && bl && br) {
          ctx.fillStyle = 'white';
          ctx.beginPath();
          ctx.moveTo(tl.x, tl.y);
          ctx.lineTo(tr.x, tr.y);
          ctx.lineTo(br.x, br.y);
          ctx.lineTo(bl.x, bl.y);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          if (cell.iconName && iconsCache.current.has(cell.iconName)) {
            const icon = iconsCache.current.get(cell.iconName)!;
            const cw = tr.x - tl.x;
            const ch = bl.y - tl.y;
            const iconSize = Math.min(cw, ch) * iconSizeMul;
            const cx = (tl.x + tr.x) / 2;
            const cy = (tl.y + bl.y) / 2;
            ctx.drawImage(
              icon,
              cx - iconSize / 2,
              cy - iconSize / 2,
              iconSize,
              iconSize
            );
          }
        }
      }

      if (!hasRenderedOnceRef.current) {
        hasRenderedOnceRef.current = true;
        setIsCanvasVisible(true);
      }

      // Остановка цикла когда движения нет и мышь далеко
      if (totalMotion < VELOCITY_THRESHOLD && mx < -500) {
        isSettledRef.current = true;
        return;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    loadAllIcons().then(() => {
      animationRef.current = requestAnimationFrame(animate);
    });

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
      observer.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [cells]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateContainerStyle = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      setContainerStyle({
        width: `${w}px`,
        height: `${h}px`,
        minWidth: `${w}px`,
        minHeight: `${h}px`
      });
    };

    updateContainerStyle();
    const resizeObserver = new ResizeObserver(updateContainerStyle);
    resizeObserver.observe(canvas);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className={styles.animatedGrid} style={containerStyle}>
      <canvas
        ref={canvasRef}
        aria-hidden='true'
        className={`${styles.canvas} ${isCanvasVisible ? styles.visible : ''}`}
      />
      <>{children}</>
    </div>
  );
};
