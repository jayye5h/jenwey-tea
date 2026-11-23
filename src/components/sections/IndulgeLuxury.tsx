"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { m } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";
import { Reveal } from "@/components/motion/reveal";

export function IndulgeLuxury() {
  return (
    <section className="relative z-30 w-full bg-[#181818] text-white mt-0 lg:-mt-[calc(100vh-88px)] flex flex-col items-center justify-start text-center px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 lg:pt-24 pb-4 sm:pb-6 overflow-hidden shadow-2xl">
      {/* 1. Header Text Block (Animated as a unified block) */}
      <Reveal className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center z-10">
        {/* Subheading */}
        <p className="font-serif text-sm sm:text-base md:text-2xl text-white font-normal tracking-wide mb-6 sm:mb-8 text-center">
          Boutique Blended Loose Tea
        </p>

        {/* Main Large Headline */}
        <h2 className="font-serif text-4xl xs:text-[46px] sm:text-[64px] md:text-[80px] lg:text-[100px] xl:text-[108px] font-normal tracking-[0.05em] uppercase text-white leading-[1.08] sm:leading-[1.06] mb-6 sm:mb-10 text-center select-none">
          INDULGE IN
          <br />
          THE <span className="italic font-serif">LUXURY</span>
        </h2>

        {/* Supporting Description */}
        <p className="text-xs sm:text-sm md:text-[14px] text-[#888888] font-light max-w-md sm:max-w-lg leading-relaxed mb-8 sm:mb-9 text-center">
          Bold, vibrant flavors, expertly blended with luxurious tea leaves to
          bring you an unparalleled experience.
        </p>

        {/* Outlined Pill Button with whileHover & whileTap */}
        <m.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href="#view-our-collection"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full !border !border-white/80 !bg-transparent !text-white hover:!bg-white hover:!text-black uppercase tracking-[0.18em] text-[10px] sm:text-[10.5px] font-medium px-6 sm:px-7 h-9 sm:h-9.5 transition-all duration-300 cursor-pointer shadow-none inline-flex items-center justify-center no-underline relative z-20"
            )}
          >
            VIEW OUR COLLECTION
          </Link>
        </m.div>
      </Reveal>

      {/* 2. Huge Orchid Tea Image with gentle fade-up Reveal */}
      <Reveal
        delay={0.12}
        className="relative w-full max-w-7xl 2xl:max-w-[1680px] mx-auto mt-4 sm:mt-6 pointer-events-none select-none flex justify-center"
      >
        <Image
          src="/images/luxury-orchid-tea.webp"
          alt="Luxury Boutique Blended Loose Tea with Orchids"
          width={1600}
          height={944}
          sizes="(min-width: 1536px) 1680px, (min-width: 1024px) 1400px, 100vw"
          className="w-full h-auto max-h-[72vh] sm:max-h-[80vh] lg:max-h-[86vh] object-contain object-top scale-[1.18] origin-top transition-transform duration-300"
        />
      </Reveal>
    </section>
  );
}
