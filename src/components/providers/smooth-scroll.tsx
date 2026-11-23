"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import ReactLenis so Lenis runtime JS is not part of the critical SSR / initial paint bundle
const ReactLenis = dynamic(
  () => import("lenis/react").then((m) => m.ReactLenis),
  { ssr: false }
);

interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const [mounted, setMounted] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    // Check user preference natively without loading full motion hooks on first paint
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setPrefersReduced(true);
      return;
    }

    // Activate Lenis only after the page is interactive (non-blocking for LCP)
    setMounted(true);
  }, []);

  if (!mounted || prefersReduced) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
