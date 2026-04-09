"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

const PARTICLE_COUNT = 110;
const MAX_CONNECT_DIST = 140;
const MAX_CONNECT_DIST_SQ = MAX_CONNECT_DIST * MAX_CONNECT_DIST;
const MOUSE_REPEL_DIST = 160;
const MOUSE_REPEL_DIST_SQ = MOUSE_REPEL_DIST * MOUSE_REPEL_DIST;

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    window.addEventListener("mouseleave", () => {
      mouse.x = -9999;
      mouse.y = -9999;
    });

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.5 + 0.4,
      opacity: Math.random() * 0.4 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        // Mouse repel
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mDistSq = mdx * mdx + mdy * mdy;
        if (mDistSq < MOUSE_REPEL_DIST_SQ && mDistSq > 0) {
          const mDist = Math.sqrt(mDistSq);
          const force = (MOUSE_REPEL_DIST - mDist) / MOUSE_REPEL_DIST;
          p.x += (mdx / mDist) * force * 2.5;
          p.y += (mdy / mDist) * force * 2.5;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0) { p.x = 0; p.vx *= -1; }
        if (p.x >= canvas.width) { p.x = canvas.width; p.vx *= -1; }
        if (p.y <= 0) { p.y = 0; p.vy *= -1; }
        if (p.y >= canvas.height) { p.y = canvas.height; p.vy *= -1; }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${p.opacity})`;
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < MAX_CONNECT_DIST_SQ) {
            const alpha = (1 - Math.sqrt(distSq) / MAX_CONNECT_DIST) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,212,255,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
