"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  alpha: number;
  speedX: number;
  speedY: number;
  blur: number;
};

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;

    const particles: Particle[] = [];

    const PARTICLE_COUNT = 40;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    window.addEventListener("resize", resize);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,

        size: Math.random() * 2 + 0.5,

        alpha: Math.random() * 0.5 + 0.08,

        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,

        blur: Math.random() * 12 + 4,
      });
    }

    const drawParticle = (p: Particle) => {
      ctx.beginPath();

      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.blur);

      gradient.addColorStop(0, `rgba(255, 245, 200, ${p.alpha})`);

      gradient.addColorStop(1, "rgba(255, 245, 200, 0)");

      ctx.fillStyle = gradient;

      ctx.arc(p.x, p.y, p.size + p.blur, 0, Math.PI * 2);

      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;

        if (p.y < -50) p.y = canvas.height + 50;
        if (p.y > canvas.height + 50) p.y = -50;

        drawParticle(p);
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="
        fixed
        inset-0
        z-0
        pointer-events-none
        opacity-80
      "
    />
  );
}
