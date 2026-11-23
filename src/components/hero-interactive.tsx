"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";

interface HeroInteractiveProps {
  children: React.ReactNode;
}

export function HeroInteractive({ children }: HeroInteractiveProps) {
  const [isInteractive, setIsInteractive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Mouse coordinate motion values (-0.5 to 0.5 normalized across hero)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // Luxurious spring with lower stiffness (60) for a calm, expensive feel
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.5 });

  // Text Layer 1: Line 1 moves with cursor (~18px)
  const line1X = useTransform(sx, [-0.5, 0.5], [-18, 18]);
  const line1Y = useTransform(sy, [-0.5, 0.5], [-10, 10]);

  // Text Layer 2: Line 2 moves ~30% more (~24px) for multi-plane per-line depth
  const line2X = useTransform(sx, [-0.5, 0.5], [-24, 24]);
  const line2Y = useTransform(sy, [-0.5, 0.5], [-14, 14]);

  // Very subtle 3D perspective rotation (1.5 degrees max)
  const rotX = useTransform(sy, [-0.5, 0.5], [1.5, -1.5]);
  const rotY = useTransform(sx, [-0.5, 0.5], [-1.5, 1.5]);

  useEffect(() => {
    // Only activate cursor tracking after initial paint & hydration
    setIsInteractive(true);

    function handlePointerMove(e: PointerEvent) {
      if (reduce || e.pointerType !== "mouse") return;
      const heroEl = containerRef.current?.closest("section");
      if (!heroEl) return;
      const r = heroEl.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    }

    function handlePointerLeave() {
      mx.set(0);
      my.set(0);
    }

    const heroEl = containerRef.current?.closest("section");
    if (heroEl) {
      heroEl.addEventListener("pointermove", handlePointerMove);
      heroEl.addEventListener("pointerleave", handlePointerLeave);
    }

    return () => {
      if (heroEl) {
        heroEl.removeEventListener("pointermove", handlePointerMove);
        heroEl.removeEventListener("pointerleave", handlePointerLeave);
      }
    };
  }, [mx, my, reduce]);

  // Static server render & first paint: return visible children immediately (no JS delay)
  if (!isInteractive || reduce) {
    return <div ref={containerRef}>{children}</div>;
  }

  return (
    <div ref={containerRef}>
      <LazyMotion features={domAnimation}>
        <div className="flex flex-col items-center select-none">
          {/* Line 1: YOUR SEVEN STAR */}
          <m.h1
            style={{
              x: line1X,
              y: line1Y,
              rotateX: rotX,
              rotateY: rotY,
              transformStyle: "preserve-3d",
            }}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-[84px] xl:text-[90px] font-normal tracking-[0.06em] text-white uppercase leading-[1.12] sm:leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]"
          >
            YOUR SEVEN STAR
          </m.h1>

          {/* Line 2: CONCIERGE TEA CO. */}
          <m.h1
            style={{
              x: line2X,
              y: line2Y,
              rotateX: rotX,
              rotateY: rotY,
              transformStyle: "preserve-3d",
            }}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-[84px] xl:text-[90px] font-normal tracking-[0.06em] text-white uppercase leading-[1.12] sm:leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]"
          >
            CONCIERGE TEA <i>CO.</i>
          </m.h1>
        </div>
      </LazyMotion>
    </div>
  );
}
