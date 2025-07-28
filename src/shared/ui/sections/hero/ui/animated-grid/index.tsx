"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";
import styles from "./anumated-grid.module.scss";

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

export const AnimatedGrid = ({ children }: AnimatedGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosRef = useRef<Point>({
    x: -1000,
    y: -1000,
    originalX: -1000,
    originalY: -1000,
    velocityX: 0,
    velocityY: 0,
  });
  const animationRef = useRef<number>(null);
  const [containerStyle, setContainerStyle] = useState<React.CSSProperties>({});
  const iconsCache = useRef<Map<string, HTMLImageElement>>(new Map());

  const iconsNames = [
    "spore",
    "hash",
    "git-commit",
    "git-branch",
    "flow-arrow",
    "fingerprint",
    "code-simple",
    "code-block",
    "binary",
    "bezier-curve",
  ] as const;

  const defaultNotAllowCells = [
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 3, y: 1 },
    { x: 4, y: 1 },
    { x: 5, y: 1 },
    { x: 6, y: 1 },
    { x: 7, y: 1 },
    { x: 8, y: 1 },
    { x: 9, y: 1 },
    { x: 10, y: 1 },
    { x: 1, y: 2 },
    { x: 2, y: 2 },
    { x: 3, y: 2 },
    { x: 4, y: 2 },
    { x: 5, y: 2 },
    { x: 6, y: 2 },
    { x: 7, y: 2 },
    { x: 8, y: 2 },
    { x: 9, y: 2 },
    { x: 10, y: 2 },
    { x: 1, y: 3 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
    { x: 4, y: 3 },
    { x: 5, y: 3 },
    { x: 6, y: 3 },
    { x: 7, y: 3 },
    { x: 8, y: 3 },
    { x: 9, y: 3 },
    { x: 10, y: 3 },
    { x: 1, y: 4 },
    { x: 2, y: 4 },
    { x: 3, y: 4 },
    { x: 4, y: 4 },
    { x: 5, y: 4 },
    { x: 6, y: 4 },
    { x: 7, y: 4 },
    { x: 8, y: 4 },
    { x: 9, y: 4 },
    { x: 10, y: 4 },
  ];

  const generateRandomCells = () => {
    const allCells = [];
    const gridWidth = 12;
    const gridHeight = 8;

    for (let x = 0; x < gridWidth; x++) {
      for (let y = 0; y < gridHeight; y++) {
        allCells.push({ x, y });
      }
    }

    const availableCells = allCells.filter(
      (cell) =>
        !defaultNotAllowCells.some(
          (notAllow) => notAllow.x === cell.x && notAllow.y === cell.y
        )
    );

    const shuffledCells = availableCells.sort(() => Math.random() - 0.5);

    const cellsForIcons = shuffledCells.slice(0, iconsNames.length);

    return cellsForIcons.map((cell, index) => ({
      x: cell.x,
      y: cell.y,
      iconName: iconsNames[index],
    }));
  };

  const cells = useMemo(() => {
    return generateRandomCells();
  }, []);

  const notAllowCells = useMemo(() => {
    return defaultNotAllowCells;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const getGridConfig = () => {
      const width = window.innerWidth;

      if (width < 768) {
        return { gridWidth: 12, gridHeight: 7, squareSize: 60.68 };
      } else if (width < 1024) {
        return { gridWidth: 12, gridHeight: 8, squareSize: 58.6 };
      } else if (width < 1920) {
        return { gridWidth: 12, gridHeight: 8, squareSize: 78.55 };
      } else {
        return { gridWidth: 12, gridHeight: 8, squareSize: 89.83 };
      }
    };

    const { gridWidth, gridHeight, squareSize } = getGridConfig();

    const loadIcon = async (iconName: string): Promise<HTMLImageElement> => {
      if (iconsCache.current.has(iconName)) {
        return iconsCache.current.get(iconName)!;
      }

      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          iconsCache.current.set(iconName, img);
          resolve(img);
        };
        img.onerror = reject;

        img.src = `/svg/icons/${iconName}.svg`;
      });
    };

    const getIconSize = (cellWidth: number, cellHeight: number) => {
      const width = window.innerWidth;

      if (width < 1024) {
        return Math.min(cellWidth, cellHeight) * 0.27; // ~16px для ячейки 59px
      } else if (width < 1920) {
        // Ноутбуки - 20px
        return Math.min(cellWidth, cellHeight) * 0.25; // ~20px для ячейки 79px
      } else {
        // Большие экраны - 24px
        return Math.min(cellWidth, cellHeight) * 0.27; // ~24px для ячейки 89px
      }
    };

    // Загружаем все иконки
    const loadAllIcons = async () => {
      const iconNames = cells
        .filter((cell) => cell.iconName)
        .map((cell) => cell.iconName!)
        .filter((name, index, arr) => arr.indexOf(name) === index);

      await Promise.all(iconNames.map(loadIcon));
    };

    const padding = 1;
    const canvasWidth = gridWidth * squareSize + padding * 2;
    const canvasHeight = gridHeight * squareSize + padding * 2;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;

    setContainerStyle({
      width: `${canvasWidth}px`,
      height: `${canvasHeight}px`,
      minWidth: `${canvasWidth}px`,
      minHeight: `${canvasHeight}px`,
    });

    const points: Point[][] = [];
    for (let y = 0; y <= gridHeight; y++) {
      points[y] = [];
      for (let x = 0; x <= gridWidth; x++) {
        points[y][x] = {
          x: x * squareSize + padding,
          y: y * squareSize + padding,
          originalX: x * squareSize + padding,
          originalY: y * squareSize + padding,
          velocityX: 0,
          velocityY: 0,
        };
      }
    }

    const springStrength = 0.05;
    const damping = 0.85;
    const mouseInfluence = 0.8;
    const mouseRadius = 150;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      mousePosRef.current = {
        x: mouseX,
        y: mouseY,
        originalX: mouseX,
        originalY: mouseY,
        velocityX: 0,
        velocityY: 0,
      };
    };

    const handleMouseLeave = () => {
      mousePosRef.current = {
        x: -1000,
        y: -1000,
        originalX: -1000,
        originalY: -1000,
        velocityX: 0,
        velocityY: 0,
      };
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      const newConfig = getGridConfig();
      const newGridWidth = newConfig.gridWidth;
      const newGridHeight = newConfig.gridHeight;
      const newSquareSize = newConfig.squareSize;

      const newCanvasWidth = newGridWidth * newSquareSize + padding * 2;
      const newCanvasHeight = newGridHeight * newSquareSize + padding * 2;
      canvas.width = newCanvasWidth;
      canvas.height = newCanvasHeight;
      canvas.style.width = `${newCanvasWidth}px`;
      canvas.style.height = `${newCanvasHeight}px`;

      setContainerStyle({
        width: `${newCanvasWidth}px`,
        height: `${newCanvasHeight}px`,
        minWidth: `${newCanvasWidth}px`,
        minHeight: `${newCanvasHeight}px`,
      });

      for (let y = 0; y <= newGridHeight; y++) {
        if (!points[y]) points[y] = [];
        for (let x = 0; x <= newGridWidth; x++) {
          if (!points[y][x]) {
            points[y][x] = {
              x: x * newSquareSize + padding,
              y: y * newSquareSize + padding,
              originalX: x * newSquareSize + padding,
              originalY: y * newSquareSize + padding,
              velocityX: 0,
              velocityY: 0,
            };
          } else {
            points[y][x].originalX = x * newSquareSize + padding;
            points[y][x].originalY = y * newSquareSize + padding;
            points[y][x].x = x * newSquareSize + padding;
            points[y][x].y = y * newSquareSize + padding;
          }
        }
      }
    };

    window.addEventListener("resize", handleResize);

    loadAllIcons().then(() => {
      animate();
    });

    const shouldDrawLine = (x1: number, y1: number, x2: number, y2: number) => {
      if (
        x1 === 0 ||
        x2 === 0 ||
        x1 === gridWidth ||
        x2 === gridWidth ||
        y1 === 0 ||
        y2 === 0 ||
        y1 === gridHeight ||
        y2 === gridHeight
      ) {
        return true;
      }

      if (shouldDrawBufferZoneBoundary(x1, y1, x2, y2)) {
        return true;
      }

      for (const cell of notAllowCells) {
        if (x1 === x2) {
          if (x1 === cell.x && y1 >= cell.y && y1 < cell.y + 1) {
            return false;
          }
        }
        if (y1 === y2) {
          if (y1 === cell.y && x1 >= cell.x && x1 < cell.x + 1) {
            return false;
          }
        }
      }
      return true;
    };

    const shouldDrawBufferZoneBoundary = (
      x1: number,
      y1: number,
      x2: number,
      y2: number
    ) => {
      const maxX = Math.max(...notAllowCells.map((cell) => cell.x));
      const maxY = Math.max(...notAllowCells.map((cell) => cell.y));

      if (x1 === x2) {
        if (x1 === 1 && y1 >= 1 && y1 <= maxY + 1) {
          return true;
        }
        if (x1 === maxX + 1 && y1 >= 1 && y1 <= maxY + 1) {
          return true;
        }
      }
      if (y1 === y2) {
        if (y1 === 1 && x1 >= 1 && x1 <= maxX + 1) {
          return true;
        }
        if (y1 === maxY + 1 && x1 >= 1 && x1 <= maxX + 1) {
          return true;
        }
      }
      return false;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      for (let y = 0; y <= gridHeight; y++) {
        for (let x = 0; x <= gridWidth; x++) {
          const point = points[y][x];

          if (y === gridHeight) {
            continue;
          }

          const dx = mousePosRef.current.x - point.x;
          const dy = mousePosRef.current.y - point.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseRadius && distance > 0) {
            const force =
              ((mouseRadius - distance) / mouseRadius) * mouseInfluence;
            point.velocityX += (dx / distance) * force;
            point.velocityY += (dy / distance) * force;
          }

          const springX = (point.originalX - point.x) * springStrength;
          const springY = (point.originalY - point.y) * springStrength;

          point.velocityX += springX;
          point.velocityY += springY;

          point.velocityX *= damping;
          point.velocityY *= damping;

          point.x += point.velocityX;
          point.y += point.velocityY;
        }
      }

      ctx.strokeStyle = "rgb(226, 226, 226)";
      ctx.lineWidth = 1;

      for (let x = 0; x <= gridWidth; x++) {
        for (let y = 0; y < gridHeight; y++) {
          if (shouldDrawLine(x, y, x, y + 1)) {
            ctx.beginPath();
            ctx.moveTo(points[y][x].x, points[y][x].y);
            ctx.lineTo(points[y + 1][x].x, points[y + 1][x].y);
            ctx.stroke();
          }
        }
      }

      for (let y = 0; y <= gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
          if (shouldDrawLine(x, y, x + 1, y)) {
            ctx.beginPath();
            ctx.moveTo(points[y][x].x, points[y][x].y);
            ctx.lineTo(points[y][x + 1].x, points[y][x + 1].y);
            ctx.stroke();
          }
        }
      }

      cells.forEach((cell) => {
        const topLeft = points[cell.y]?.[cell.x];
        const topRight = points[cell.y]?.[cell.x + 1];
        const bottomLeft = points[cell.y + 1]?.[cell.x];
        const bottomRight = points[cell.y + 1]?.[cell.x + 1];

        if (topLeft && topRight && bottomLeft && bottomRight) {
          ctx.fillStyle = "white";

          ctx.beginPath();
          ctx.moveTo(topLeft.x, topLeft.y);
          ctx.lineTo(topRight.x, topRight.y);
          ctx.lineTo(bottomRight.x, bottomRight.y);
          ctx.lineTo(bottomLeft.x, bottomLeft.y);
          ctx.closePath();

          ctx.fill();
          ctx.stroke();

          if (cell.iconName) {
            const centerX = (topLeft.x + topRight.x) / 2;
            const centerY = (topLeft.y + bottomLeft.y) / 2;

            if (iconsCache.current.has(cell.iconName)) {
              const icon = iconsCache.current.get(cell.iconName)!;
              const cellWidth = topRight.x - topLeft.x;
              const cellHeight = bottomLeft.y - topLeft.y;
              const iconSize = getIconSize(cellWidth, cellHeight);

              const iconX = centerX - iconSize / 2;
              const iconY = centerY - iconSize / 2;

              ctx.drawImage(icon, iconX, iconY, iconSize, iconSize);
            }
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.animatedGrid} style={containerStyle}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <>{children}</>
    </div>
  );
};
