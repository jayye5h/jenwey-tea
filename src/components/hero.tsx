"use client";

import React from "react";
import Image from "next/image";
import {
  LazyMotion,
  domAnimation,
  m,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { PageWrapper } from "@/components/page-wrapper";

export function Hero() {
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

  function onPointerMove(e: React.PointerEvent<HTMLElement>) {
    // Only track physical mouse movements; ignore touch devices and reduced motion
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function onPointerLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <LazyMotion features={domAnimation}>
      <section
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        className="relative w-full h-[calc(100dvh-88px)] min-h-[500px] sm:min-h-[580px] md:min-h-[640px] max-h-[960px] overflow-hidden flex flex-col justify-between bg-[#131313]"
      >
        {/* Background Hero Layer: Center Expanding Circular Iris Aperture Reveal */}
        <m.div
          initial={
            reduce
              ? { opacity: 1, clipPath: "circle(150% at 50% 50%)" }
              : { clipPath: "circle(0% at 50% 50%)" }
          }
          animate={{
            clipPath: "circle(150% at 50% 50%)",
          }}
          transition={{
            duration: 3.6,
            ease: [0.4, 0.0, 0.2, 1.0],
          }}
          className="absolute inset-0 z-0 bg-[#131313] overflow-hidden"
        >
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/hero.webp"
              alt="Jenwey Tea Co. Luxury Concierge Tea Table"
              fill
              priority
              sizes="100vw"
              className="object-center object-cover"
            />
            {/* Subtle Vignette & Contrast Overlay */}
            <div className="absolute inset-0 bg-black/25" />
          </div>
        </m.div>

        {/* Subtle expanding circular halo accent emanating from center */}
        {!reduce && (
          <m.div
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 3.4, opacity: 0 }}
            transition={{
              duration: 3.6,
              ease: [0.4, 0.0, 0.2, 1.0],
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] rounded-full border border-amber-200/30 pointer-events-none z-10"
          />
        )}

        {/* Top spacer for the hanging navbar arch */}
        <div className="relative z-10 h-12 sm:h-16 pointer-events-none" />

        {/* Main Center Headline: Intro Bloom + Per-Line Cursor Depth */}
        <PageWrapper className="relative z-10 flex flex-col items-center justify-center my-auto text-center px-4 perspective-[1200px]">
          {/* Intro load container: scales and fades in during initial circular expansion */}
          <m.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.8,
              delay: 1.0,
              ease: [0.4, 0.0, 0.2, 1.0],
            }}
            className="flex flex-col items-center select-none"
          >
            {/* Line 1: YOUR SEVEN STAR */}
            <m.h1
              style={
                reduce
                  ? undefined
                  : {
                      x: line1X,
                      y: line1Y,
                      rotateX: rotX,
                      rotateY: rotY,
                      transformStyle: "preserve-3d",
                    }
              }
              className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-[84px] xl:text-[90px] font-normal tracking-[0.06em] text-white uppercase leading-[1.12] sm:leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]"
            >
              YOUR SEVEN STAR
            </m.h1>

            {/* Line 2: CONCIERGE TEA CO. (Moves ~30% more for multi-plane floating depth) */}
            <m.h1
              style={
                reduce
                  ? undefined
                  : {
                      x: line2X,
                      y: line2Y,
                      rotateX: rotX,
                      rotateY: rotY,
                      transformStyle: "preserve-3d",
                    }
              }
              className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-[84px] xl:text-[90px] font-normal tracking-[0.06em] text-white uppercase leading-[1.12] sm:leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]"
            >
              CONCIERGE TEA <i>CO.</i>
            </m.h1>
          </m.div>
        </PageWrapper>
      </section>
    </LazyMotion>
  );
}
