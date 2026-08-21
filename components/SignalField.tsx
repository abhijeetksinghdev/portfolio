"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  pulse: number;
  pulseSpeed: number;
  radius: number;
  brightness: number;
};

type TrailPoint = {
  x: number;
  y: number;
  life: number;
};

/**
 * SignalField — the site's signature visual motif.
 * A quiet, fixed lattice of nodes and connecting lines drifting behind content,
 * standing in for the message-queues, pipelines, and async data-flow
 * that define the work (Kafka topics, Spark streams, alert propagation).
 * Nearby nodes and links respond gently to the cursor, while the animation
 * pauses when the tab is hidden and respects reduced-motion preferences.
 */
export default function SignalField({ density = 46 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const interactivePointer =
      !reduceMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let trail: TrailPoint[] = [];
    let raf = 0;
    const pointer = { x: -9999, y: -9999, active: false };

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
      nodes = Array.from({ length: Math.max(24, Math.min(count, 110)) }, () => {
        const baseVx = (Math.random() - 0.5) * 0.1;
        const baseVy = (Math.random() - 0.5) * 0.1;

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: baseVx,
          vy: baseVy,
          baseVx,
          baseVy,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.003 + Math.random() * 0.004,
          radius: 0.8 + Math.random() * 1.1,
          brightness: 0.45 + Math.random() * 0.55,
        };
      });
    }

    function draw() {
      if (document.hidden) {
        raf = 0;
        return;
      }

      const ctx2 = ctx as CanvasRenderingContext2D;
      const isLight = document.documentElement.classList.contains("light");
      const lineColor = isLight ? "67, 86, 180" : "89, 113, 218";
      const nodeColor = isLight ? "79, 70, 229" : "139, 157, 255";
      const pointerColor = isLight ? "79, 70, 229" : "56, 139, 253";
      ctx2.clearRect(0, 0, width, height);

      if (pointer.active) {
        const spotlight = ctx2.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          190
        );
        spotlight.addColorStop(0, `rgba(${pointerColor}, ${isLight ? 0.085 : 0.075})`);
        spotlight.addColorStop(0.52, `rgba(${pointerColor}, ${isLight ? 0.03 : 0.026})`);
        spotlight.addColorStop(1, `rgba(${pointerColor}, 0)`);
        ctx2.fillStyle = spotlight;
        ctx2.fillRect(0, 0, width, height);
      }

      trail = trail.filter((point) => {
        point.life -= 0.025;
        return point.life > 0;
      });

      if (interactivePointer && trail.length > 1) {
        ctx2.lineCap = "round";
        for (let i = 1; i < trail.length; i++) {
          const point = trail[i];
          ctx2.beginPath();
          ctx2.moveTo(trail[i - 1].x, trail[i - 1].y);
          ctx2.lineTo(point.x, point.y);
          ctx2.strokeStyle = `rgba(${pointerColor}, ${point.life * (isLight ? 0.16 : 0.28)})`;
          ctx2.lineWidth = point.life * 1.8;
          ctx2.stroke();
        }
      }

      for (const n of nodes) {
        if (pointer.active) {
          const dx = pointer.x - n.x;
          const dy = pointer.y - n.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > 0 && distance < 150) {
            const force = (1 - distance / 150) * 0.016;
            n.vx += (dx / distance) * force;
            n.vy += (dy / distance) * force;
          }
        }

        n.vx += (n.baseVx - n.vx) * 0.012;
        n.vy += (n.baseVy - n.vy) * 0.012;
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += n.pulseSpeed;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      const linkDist = Math.max(120, Math.min(Math.max(width, height) * 0.13, 180));

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            const midX = (a.x + b.x) / 2;
            const midY = (a.y + b.y) / 2;
            const pointerDistance = Math.hypot(midX - pointer.x, midY - pointer.y);
            const pointerBoost = pointer.active ? Math.max(0, 1 - pointerDistance / 220) : 0;
            const alpha =
              (1 - dist / linkDist) * (isLight ? 0.135 : 0.12) +
              pointerBoost * (isLight ? 0.15 : 0.2);
            ctx2.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            ctx2.lineWidth = 0.75 + pointerBoost * 0.35;
            ctx2.beginPath();
            ctx2.moveTo(a.x, a.y);
            ctx2.lineTo(b.x, b.y);
            ctx2.stroke();
          }
        }
      }

      for (const n of nodes) {
        const pointerDistance = Math.hypot(n.x - pointer.x, n.y - pointer.y);
        const pointerBoost = pointer.active ? Math.max(0, 1 - pointerDistance / 155) : 0;
        const glow =
          (0.3 + Math.sin(n.pulse) * 0.18) * n.brightness + pointerBoost * 0.42;
        const radius = n.radius + pointerBoost * 1.35;

        if (n.brightness > 0.86 || pointerBoost > 0.08) {
          const haloRadius = 9 + pointerBoost * 8;
          const halo = ctx2.createRadialGradient(n.x, n.y, 0, n.x, n.y, haloRadius);
          halo.addColorStop(
            0,
            `rgba(${pointerBoost > 0.08 ? pointerColor : nodeColor}, ${
              isLight ? glow * 0.16 : glow * 0.22
            })`
          );
          halo.addColorStop(1, `rgba(${nodeColor}, 0)`);
          ctx2.beginPath();
          ctx2.fillStyle = halo;
          ctx2.arc(n.x, n.y, haloRadius, 0, Math.PI * 2);
          ctx2.fill();
        }

        ctx2.beginPath();
        ctx2.fillStyle = `rgba(${pointerBoost > 0.08 ? pointerColor : nodeColor}, ${
          isLight ? glow * 0.84 : glow
        })`;
        ctx2.arc(n.x, n.y, radius, 0, Math.PI * 2);
        ctx2.fill();
      }

      if (!reduceMotion) raf = requestAnimationFrame(draw);
    }

    resize();
    draw();

    function handlePointerMove(event: MouseEvent) {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
      trail.push({ x: event.clientX, y: event.clientY, life: 1 });
      if (trail.length > 20) trail.shift();
    }

    function handlePointerLeave() {
      pointer.active = false;
      trail = [];
    }

    function handleVisibilityChange() {
      cancelAnimationFrame(raf);
      raf = 0;
      if (!document.hidden) draw();
    }

    const ro = new ResizeObserver(() => {
      resize();
      if (reduceMotion) draw();
    });
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    if (interactivePointer) {
      window.addEventListener("mousemove", handlePointerMove, { passive: true });
      document.documentElement.addEventListener("mouseleave", handlePointerLeave);
    }
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
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
