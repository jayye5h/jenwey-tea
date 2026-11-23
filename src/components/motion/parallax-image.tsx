"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  LazyMotion,
  domAnimation,
  m,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  intensity?: number;
}

export function ParallaxImage({
  src,
  alt,
  className = "relative h-[52vh] sm:h-[62vh] min-h-[340px] sm:min-h-[440px] overflow-hidden",
  imageClassName = "object-cover object-center",
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
  intensity = 0.1, // 10% subtle parallax movement
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rangePercent = Math.round(intensity * 100);
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${rangePercent}%`, `${rangePercent}%`]
  );

  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={className}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={imageClassName}
        />
      </div>
    );
  }

  return (
    <div ref={ref} className={`${className} overflow-hidden`}>
      <LazyMotion features={domAnimation}>
        <m.div
          style={{ y }}
          className="absolute inset-0 h-[120%] -top-[10%] w-full"
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className={imageClassName}
          />
        </m.div>
      </LazyMotion>
    </div>
  );
}
