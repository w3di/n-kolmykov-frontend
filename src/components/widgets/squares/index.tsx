"use client";

import { useRef, useEffect } from "react";
import styles from "./squares.module.scss";
import clsx from "clsx";

interface SquaresProps {
  direction?: "right" | "left" | "up" | "down" | "diagonal";
  speed?: number;
  borderColor?: string;
  squareSize?: number;
  hoverFillColor?: string;
  className?: string;
  borderStyle?: "solid" | "dashed";
  dashPattern?: number[];
}

interface HoveredSquare {
  x: number;
  y: number;
}

const Squares = ({
  direction = "right",
  speed = 1,
  borderColor = "#999",
  squareSize = 40,
  hoverFillColor = "#222",
  className = "",
  borderStyle = "solid",
  dashPattern = [5, 5],
}: SquaresProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);
  const numSquaresX = useRef<number>(0);
  const numSquaresY = useRef<number>(0);
  const gridOffset = useRef({ x: 0, y: 0 });
  const hoveredSquare = useRef<HoveredSquare | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const drawGrid = () => {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

      if (hoveredSquare.current) {
        for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
          for (
            let y = startY;
            y < canvas.height + squareSize;
            y += squareSize
          ) {
            if (
              Math.floor((x - startX) / squareSize) ===
                hoveredSquare.current.x &&
              Math.floor((y - startY) / squareSize) === hoveredSquare.current.y
            ) {
              const squareX = x - (gridOffset.current.x % squareSize);
              const squareY = y - (gridOffset.current.y % squareSize);
              ctx.fillStyle = hoverFillColor;
              ctx.fillRect(squareX, squareY, squareSize, squareSize);
              break;
            }
          }
        }
      }

      if (borderStyle === "dashed") {
        ctx.setLineDash(dashPattern);
      } else {
        ctx.setLineDash([]);
      }

      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 1;

      ctx.beginPath();
      for (let x = startX; x <= canvas.width + squareSize; x += squareSize) {
        const lineX = x - (gridOffset.current.x % squareSize);
        if (lineX >= 0 && lineX <= canvas.width) {
          ctx.moveTo(lineX, 0);
          ctx.lineTo(lineX, canvas.height);
        }
      }
      ctx.stroke();

      ctx.beginPath();
      for (let y = startY; y <= canvas.height + squareSize; y += squareSize) {
        const lineY = y - (gridOffset.current.y % squareSize);
        if (lineY >= 0 && lineY <= canvas.height) {
          ctx.moveTo(0, lineY);
          ctx.lineTo(canvas.width, lineY);
        }
      }
      ctx.stroke();
      ctx.setLineDash([]);

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
      );
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1);
      switch (direction) {
        case "right":
          gridOffset.current.x =
            (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
          break;
        case "left":
          gridOffset.current.x =
            (gridOffset.current.x + effectiveSpeed + squareSize) % squareSize;
          break;
        case "up":
          gridOffset.current.y =
            (gridOffset.current.y + effectiveSpeed + squareSize) % squareSize;
          break;
        case "down":
          gridOffset.current.y =
            (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
          break;
        case "diagonal":
          gridOffset.current.x =
            (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
          gridOffset.current.y =
            (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
          break;
        default:
          break;
      }

      drawGrid();
      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

      const hoveredSquareX = Math.floor(
        (mouseX + gridOffset.current.x - startX) / squareSize
      );
      const hoveredSquareY = Math.floor(
        (mouseY + gridOffset.current.y - startY) / squareSize
      );

      if (
        !hoveredSquare.current ||
        hoveredSquare.current.x !== hoveredSquareX ||
        hoveredSquare.current.y !== hoveredSquareY
      ) {
        hoveredSquare.current = { x: hoveredSquareX, y: hoveredSquareY };
      }
    };

    const handleMouseLeave = () => {
      hoveredSquare.current = null;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    requestRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [
    direction,
    speed,
    borderColor,
    hoverFillColor,
    squareSize,
    borderStyle,
    dashPattern,
  ]);

  return (
    <canvas ref={canvasRef} className={clsx(styles.squaresCanvas, className)} />
  );
};

export default Squares;
