"use client";

import React from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  type HTMLMotionProps,
  type Variants,
} from "motion/react";

/* =========================================================
   1. REVEAL COMPONENT (Reveal on scroll with LazyMotion)
   - Consistent luxury fade-up distance: ~35px
   - Duration: 0.6s
   - Viewport: { once: true, margin: "-40px" }
   ========================================================= */

interface RevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 35,
  className = "",
  once = true,
  ...props
}: RevealProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: yOffset }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once, margin: "-40px" }}
        transition={{
          duration,
          delay,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
        className={className}
        {...props}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

/* =========================================================
   2. STAGGER CONTAINER & ITEM (Stagger for grids, lists, menus)
   ========================================================= */

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { staggerChildren?: number; delayChildren?: number } = {}) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.staggerChildren ?? 0.1,
      delayChildren: custom.delayChildren ?? 0.05,
    },
  }),
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
  once?: boolean;
}

export function StaggerContainer({
  children,
  staggerChildren = 0.1,
  delayChildren = 0.05,
  className = "",
  once = true,
  ...props
}: StaggerContainerProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-40px" }}
        variants={staggerContainerVariants}
        custom={{ staggerChildren, delayChildren }}
        className={className}
        {...props}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export function StaggerItem({
  children,
  className = "",
  ...props
}: StaggerItemProps) {
  return (
    <m.div
      variants={staggerItemVariants}
      className={className}
      {...props}
    >
      {children}
    </m.div>
  );
}
