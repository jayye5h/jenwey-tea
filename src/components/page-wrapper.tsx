import React from "react";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "main" | "section";
}

/**
 * Apple-style Centered Canvas Root Wrapper:
 * 1. Max Width (1680px): Prevents content from stretching wildly on 4K/Ultrawide displays or when zooming out.
 * 2. Centered (mx-auto): Automatically generates equal, elegant gutters on both sides when zoomed out.
 * 3. Responsive Edge Padding:
 *    - Mobile (<640px): px-4 (16px touch safe area)
 *    - Tablet (640px - 1024px): sm:px-6 md:px-8
 *    - Desktop (>=1024px): lg:px-12
 */
export function PageWrapper({
  children,
  className = "",
  as: Component = "div",
}: PageWrapperProps) {
  return (
    <Component
      className={`w-full max-w-[1680px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 ${className}`}
    >
      {children}
    </Component>
  );
}
