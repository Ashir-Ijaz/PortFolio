"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "../../lib/utils"; // Optional: remove if unused

interface StarfieldBackgroundProps {
  className?: string;
  starCount?: number;
  shootingStarFrequency?: number;
  twinkleSpeed?: number;
}

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
}

export default function StarBackground({
  className,
  starCount = 500, // Lower default for smoother performance
  shootingStarFrequency = 0.15,
  twinkleSpeed = 0.05,
}: StarfieldBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [shootingStars, setShootingStars] = useState<any[]>([]);
  const controls = useAnimation();

  const generateStars = (width: number, height: number): Star[] => {
    const stars: Star[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.2,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * twinkleSpeed + 0.01,
      });
    }
    return stars;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars = generateStars(window.innerWidth, window.innerHeight);
    let shootingStars: any[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = generateStars(canvas.width, canvas.height);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Spawn a few random shooting stars immediately on mount
    for (let i = 0; i < 2; i++) {
      const edge = Math.floor(Math.random() * 4);
      let x, y, vx, vy;
      const speed = Math.random() * 6 + 4;
      switch (edge) {
        case 0: // top
          x = Math.random() * window.innerWidth;
          y = 0;
          vx = (Math.random() - 0.5) * 8;
          vy = speed;
          break;
        case 1: // right
          x = window.innerWidth;
          y = Math.random() * window.innerHeight;
          vx = -speed;
          vy = (Math.random() - 0.5) * 8;
          break;
        case 2: // bottom
          x = Math.random() * window.innerWidth;
          y = window.innerHeight;
          vx = (Math.random() - 0.5) * 8;
          vy = -speed;
          break;
        case 3: // left
        default:
          x = 0;
          y = Math.random() * window.innerHeight;
          vx = speed;
          vy = (Math.random() - 0.5) * 8;
          break;
      }
      shootingStars.push({ x, y, vx, vy, opacity: 1 });
    }

    const render = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update stars
      stars.forEach((star) => {
        star.opacity += star.twinkleSpeed;
        if (star.opacity >= 1 || star.opacity <= 0) {
          star.twinkleSpeed *= -1;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.shadowBlur = 2; // Lower shadow for performance
        ctx.shadowColor = `rgba(255,255,255,${star.opacity})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Update and draw shooting stars
      shootingStars = shootingStars
        .map((star) => {
          star.x += star.vx;
          star.y += star.vy;
          star.opacity -= 0.015;
          return star;
        })
        .filter((star) => star.opacity > 0);

      shootingStars.forEach((star) => {
        // Draw the tail as a fading line
        const tailLength = 15;
        const tailX = star.x - star.vx * tailLength;
        const tailY = star.y - star.vy * tailLength;
        const grad = ctx.createLinearGradient(star.x, star.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255,255,255,${star.opacity})`);
        grad.addColorStop(1, `rgba(255,255,255,0)`);
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.5;
        ctx.shadowColor = `rgba(255,255,255,${star.opacity})`;
        ctx.shadowBlur = 3; // Lower shadow for performance
        ctx.stroke();
        ctx.restore();

        // Draw the star head
        ctx.beginPath();
        ctx.arc(star.x, star.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.shadowColor = `rgba(255,255,255,${star.opacity})`;
        ctx.shadowBlur = 5; // Lower shadow for performance
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    // Expose createShootingStar to the effect scope
    const createShootingStar = (x: number, y: number, vx?: number, vy?: number) => {
      if (vx === undefined || vy === undefined) {
        vx = Math.random() * 6 + 4;
        vy = Math.random() * 2 - 1;
      }
      const newStar = { x, y, vx, vy, opacity: 1 };
      shootingStars.push(newStar);
    };

    // Automatic shooting stars interval
    const interval = setInterval(() => {
      // Only spawn if fewer than 2 shooting stars are on screen
      if (shootingStars.length < 3 && Math.random() < shootingStarFrequency * 4) {
        const numStars = Math.min(3 - shootingStars.length, Math.floor(Math.random() * 2) + 1); // 1 or 2, but not exceeding 3
        for (let i = 0; i < numStars; i++) {
          if (shootingStars.length >= 3) break;
          // Randomly pick an edge: 0=top, 1=right, 2=bottom, 3=left
          const edge = Math.floor(Math.random() * 4);
          let x, y, vx, vy;
          const speed = Math.random() * 6 + 4;
          switch (edge) {
            case 0: // top
              x = Math.random() * window.innerWidth;
              y = 0;
              vx = (Math.random() - 0.5) * 8;
              vy = speed;
              break;
            case 1: // right
              x = window.innerWidth;
              y = Math.random() * window.innerHeight;
              vx = -speed;
              vy = (Math.random() - 0.5) * 8;
              break;
            case 2: // bottom
              x = Math.random() * window.innerWidth;
              y = window.innerHeight;
              vx = (Math.random() - 0.5) * 8;
              vy = -speed;
              break;
            case 3: // left
            default:
              x = 0;
              y = Math.random() * window.innerHeight;
              vx = speed;
              vy = (Math.random() - 0.5) * 8;
              break;
          }
          shootingStars.push({ x, y, vx, vy, opacity: 1 });
        }
      }
    }, 50);

    // Click handler for shooting stars
    const handleClick = (e: MouseEvent) => {
      // Randomize direction for click as well
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 6 + 4;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;
      createShootingStar(e.clientX, e.clientY, vx, vy);
    };
    canvas.addEventListener("click", handleClick);

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      clearInterval(interval);
      canvas.removeEventListener("click", handleClick);
    };
  }, [starCount, twinkleSpeed, shootingStarFrequency]);

  return (
    <motion.div
      className={cn("fixed inset-0 z-0", className)}
      animate={controls}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </motion.div>
  );
}
