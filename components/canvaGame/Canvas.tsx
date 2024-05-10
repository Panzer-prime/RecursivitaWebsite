"use client";
import React, { useRef, useEffect, useState } from "react";
import renderMaze from "@/lib/mazeGenerator";
import MazeArray from "@/constants/mazeArray";
import characterLogic from "./character";

export const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [direction, setDirection] = useState<string>("idle");

  useEffect(() => {
    // Get canvas context
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Calculate canvas size
    let borderWidth = Math.min(window.innerWidth, window.innerHeight);
    borderWidth = Math.max(borderWidth, 300);
    let roadWidth = borderWidth / MazeArray[0].length;

    // Set canvas size
    canvas.width = borderWidth;
    canvas.height = borderWidth;

    context.clearRect(0, 0, borderWidth, borderWidth);
    renderMaze({ context, mazeArray: MazeArray, borderWidth });

    
    const handleDirection = () => {};
    characterLogic({
      context,
      roadWidth: roadWidth,
      direction: direction,
      canvasHeight: borderWidth,
      canvasWidth: borderWidth,
    });
    setDirection("");
  }, [direction]);

  const handleDirection = (direction: string) => {
    setDirection(direction);
  };

  return (
    <div className="flex flex-col gap-x-4 lg:flex-row-reverse">
      <canvas ref={canvasRef} className="bg-red-600" />
      <div className="flex flex-col gap-3 text-white">
        <button
          className="w-[8.75rem] h-10 bg-purple-600 text-white font-bold rounded-md px-2"
          onClick={() => {
            handleDirection("down");
          }}
        >
          down
        </button>
        <button
          className="w-[8.75rem] h-10 bg-purple-600 text-white font-bold rounded-md px-2"
          onClick={() => {
            setDirection("right");
          }}
        >
          right
        </button>
        <button
          className="w-[8.75rem] h-10 bg-purple-600 text-white font-bold rounded-md px-2"
          onClick={() => {
            setDirection("left");
          }}
        >
          left
        </button>
        <button
          className="w-[8.75rem] h-10 bg-purple-600 text-white font-bold rounded-md px-2"
          onClick={() => {
            setDirection("up");
          }}
        >
          up
        </button>
      </div>
     
    </div>
  );
};


