"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  pulse: number;
  pulseSpeed: number;
};

/**
 * SignalField — the site's signature visual motif.
 * A quiet lattice of nodes and connecting lines drifting behind content,
 * standing in for the message-queues, pipelines, and async data-flow
 * that define the work (Kafka topics, Spark streams, alert propagation).
 * Deliberately restrained: low opacity, slow motion, respects reduced-motion.
 */
export default function SignalField({ density = 46 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let raf = 0;

    function resize() {
      const c = canvas as HTMLCanvasElement;
      const ctx2 = ctx as CanvasRenderingContext2D;
      const rect = c.parentElement?.getBoundingClientRect();
      width = rect?.width ?? window.innerWidth;
      height = rect?.height ?? window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      c.width = width * dpr;
      c.height = height * dpr;
      c.style.width = `${width}px`;
      c.style.height = `${height}px`;
      ctx2.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round((width * height) / (1_000_000 / density));
      nodes = Array.from({ length: Math.max(18, Math.min(count, 90)) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.004 + Math.random() * 0.006,
      }));
    }

    function draw() {
      const ctx2 = ctx as CanvasRenderingContext2D;
      const isLight = document.documentElement.classList.contains("light");
      const lineColor = isLight ? "34, 211, 238" : "107, 123, 255";
      const nodeColor = isLight ? "79, 70, 229" : "139, 107, 245";
      ctx2.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += n.pulseSpeed;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      const linkDist = Math.max(width, height) * 0.12;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * 0.16;
            ctx2.strokeStyle = `rgba(${lineColor}, ${isLight ? alpha * 0.7 : alpha})`;
            ctx2.lineWidth = 1;
            ctx2.beginPath();
            ctx2.moveTo(a.x, a.y);
            ctx2.lineTo(b.x, b.y);
            ctx2.stroke();
          }
        }
      }

      for (const n of nodes) {
        const glow = 0.35 + Math.sin(n.pulse) * 0.25;
        ctx2.beginPath();
        ctx2.fillStyle = `rgba(${nodeColor}, ${isLight ? glow * 0.65 : glow})`;
        ctx2.arc(n.x, n.y, 1.4, 0, Math.PI * 2);
        ctx2.fill();
      }

      if (!reduceMotion) raf = requestAnimationFrame(draw);
    }

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full pointer-events-none"
    />
  );
}
