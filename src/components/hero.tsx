import React from "react";
import Image from "next/image";
import { PageWrapper } from "@/components/page-wrapper";
import { HeroInteractive } from "./hero-interactive";

export function Hero() {
  return (
    <section className="relative w-full h-[calc(100dvh-88px)] min-h-[500px] sm:min-h-[580px] md:min-h-[640px] max-h-[960px] overflow-hidden flex flex-col justify-between bg-[#131313]">
      {/* 1. Server-Rendered Hero Image (LCP Element) - Immediate First Paint */}
      <div className="absolute inset-0 z-0 bg-[#131313] overflow-hidden">
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
      </div>

      {/* Top spacer for the hanging navbar arch */}
      <div className="relative z-10 h-12 sm:h-16 pointer-events-none" />

      {/* 2. Main Center Headline: Server-Rendered HTML + Progressive Mouse Enhancement */}
      <PageWrapper className="relative z-10 flex flex-col items-center justify-center my-auto text-center px-4 perspective-[1200px]">
        <HeroInteractive>
          <div className="flex flex-col items-center select-none">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-[84px] xl:text-[90px] font-normal tracking-[0.06em] text-white uppercase leading-[1.12] sm:leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]">
              YOUR SEVEN STAR
            </h1>
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-[84px] xl:text-[90px] font-normal tracking-[0.06em] text-white uppercase leading-[1.12] sm:leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]">
              CONCIERGE TEA <i>CO.</i>
            </h1>
          </div>
        </HeroInteractive>
      </PageWrapper>
    </section>
  );
}
