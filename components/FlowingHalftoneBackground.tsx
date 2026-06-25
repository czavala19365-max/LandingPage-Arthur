"use client";

import { useEffect, useRef } from "react";

const DOT_SPACING = 6;
const NOISE_SCALE = 0.0018;
const RENDER_SCALE = 0.45;

function fract(n: number) {
  return n - Math.floor(n);
}

function smoothstep(t: number) {
  return t * t * (3 - 2 * t);
}

function hash(x: number, y: number) {
  return fract(Math.sin(x * 127.1 + y * 311.7) * 43758.5453);
}

function noise2D(x: number, y: number) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;
  const u = smoothstep(xf);
  const v = smoothstep(yf);
  const a = hash(xi, yi);
  const b = hash(xi + 1, yi);
  const c = hash(xi, yi + 1);
  const d = hash(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

function fbm(x: number, y: number, octaves: number) {
  let value = 0;
  let amplitude = 0.5;
  let frequency = 1;
  for (let i = 0; i < octaves; i++) {
    value += amplitude * noise2D(x * frequency, y * frequency);
    amplitude *= 0.5;
    frequency *= 2.1;
  }
  return value;
}

function sampleField(x: number, y: number, time: number) {
  const drift = time * 0.000028;
  const swirl = Math.sin(y * NOISE_SCALE * 2.4 + drift * 1.3) * 420;
  const ripple = Math.cos(x * NOISE_SCALE * 1.8 - drift * 0.9) * 380;

  const nx = x * NOISE_SCALE + swirl + drift * 120;
  const ny = y * NOISE_SCALE + ripple + drift * 90;

  const base = fbm(nx, ny, 4);
  const veins = fbm(
    nx + Math.sin(ny * 0.012 + drift * 2) * 1.8,
    ny + Math.cos(nx * 0.01 - drift) * 1.6,
    3,
  );

  return base * 0.58 + veins * 0.42;
}

export default function FlowingHalftoneBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const reducedMotionRef = useRef(false);
  const visibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = motionQuery.matches;

    const onMotionChange = (event: MediaQueryListEvent) => {
      reducedMotionRef.current = event.matches;
    };
    motionQuery.addEventListener("change", onMotionChange);

    const onVisibilityChange = () => {
      visibleRef.current = document.visibilityState === "visible";
      if (visibleRef.current && !reducedMotionRef.current) {
        frameRef.current = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    let width = 0;
    let height = 0;
    let bufferWidth = 0;
    let bufferHeight = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      bufferWidth = Math.max(1, Math.floor(width * RENDER_SCALE));
      bufferHeight = Math.max(1, Math.floor(height * RENDER_SCALE));
      canvas.width = bufferWidth;
      canvas.height = bufferHeight;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    let lastFrame = 0;

    const draw = (time: number) => {
      frameRef.current = 0;

      if (!visibleRef.current) return;

      const frozen = reducedMotionRef.current;
      const t = frozen ? 0 : time;

      if (!frozen && time - lastFrame < 48) {
        frameRef.current = requestAnimationFrame(draw);
        return;
      }
      lastFrame = time;

      ctx.clearRect(0, 0, bufferWidth, bufferHeight);

      const spacing = bufferWidth < 480 ? DOT_SPACING + 1 : DOT_SPACING;
      const threshold = 0.28;

      for (let y = 0; y < bufferHeight; y += spacing) {
        for (let x = 0; x < bufferWidth; x += spacing) {
          const sampleX = (x / bufferWidth) * width;
          const sampleY = (y / bufferHeight) * height;
          const field = sampleField(sampleX, sampleY, t);
          if (field < threshold) continue;

          const intensity = (field - threshold) / (1 - threshold);
          const radius = intensity * spacing * 0.46;
          const alpha = 0.07 + intensity * 0.28;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(220, 205, 175, ${alpha})`;
          ctx.fill();
        }
      }

      if (!frozen) {
        frameRef.current = requestAnimationFrame(draw);
      }
    };

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      motionQuery.removeEventListener("change", onMotionChange);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="flow-bg" aria-hidden="true">
      <canvas ref={canvasRef} className="flow-bg__canvas" />
      <div className="flow-bg__veil" />
    </div>
  );
}
