"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { useLenis } from "lenis/react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

export interface ShowcaseProduct {
  id: string;
  title: string;
  label?: string;
  description: string;
  buttonText?: string;
  leftImage: string;
  rightImage: string;
  href: string;
}

interface ShowcasePanelProps {
  product: ShowcaseProduct;
  className?: string;
}

export function ShowcasePanel({ product, className = "" }: ShowcasePanelProps) {
  const lenis = useLenis();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (product.href.startsWith("#") && lenis) {
      e.preventDefault();
      const targetElement = document.querySelector(product.href);
      if (targetElement) {
        lenis.scrollTo(targetElement as HTMLElement, { offset: -88, duration: 1.2 });
      }
    }
  };

  return (
    <div
      className={`w-full h-full bg-[#171717] text-white flex flex-col justify-center p-8 sm:p-12 md:p-16 text-left select-none ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="max-w-md w-full flex flex-col items-start text-left"
      >
        {/* 1. Product Title */}
        <h2 className="font-serif text-2xl sm:text-3xl md:text-[28px] font-normal tracking-wide text-white mb-3 text-left">
          {product.title}
        </h2>

        {/* 2. Small uppercase label */}
        {product.label ? (
          <p className="text-xs uppercase tracking-[0.22em] text-[#888888] font-medium mb-5 text-left">
            {product.label}
          </p>
        ) : null}

        {/* 3. Short description */}
        <p className="text-xs sm:text-[13px] text-[#888888] leading-relaxed max-w-[340px] mb-8 font-light text-left whitespace-pre-line">
          {product.description}
        </p>

        {/* 4. Outlined pill button with smooth Lenis scroll and hover/tap interactions */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href={product.href}
            onClick={handleLinkClick}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full !border !border-white/80 !bg-transparent !text-white hover:!bg-white hover:!text-black uppercase tracking-[0.2em] text-[11px] font-semibold px-8 h-10 transition-all duration-300 cursor-pointer shadow-none inline-flex items-center justify-center no-underline"
            )}
          >
            {product.buttonText || "BUY NOW"}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
