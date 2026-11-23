import React from "react";
import { Reveal } from "@/components/motion/reveal";

export function AboutUs() {
  return (
    <section className="relative z-30 w-full bg-[#131313] text-white py-14 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-10 xl:px-14">
      <div className="w-full max-w-[1340px] mx-auto flex flex-col justify-between">
        {/* Top Row: Left Headline Block & Right Poetic Paragraph (Animated as a unified block) */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-end">
            {/* Left Column: Eyebrow + Main Headline */}
            <div className="flex flex-col justify-center">
              {/* Eyebrow */}
              <p className="font-baskerville text-base sm:text-lg md:text-xl lg:text-[22px] text-white/90 font-normal tracking-wide mb-2 sm:mb-2.5">
                About Us
              </p>

              {/* Main Headline with italicized 'TRULY' */}
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-normal leading-[1.12] text-white tracking-wide">
                <span className="inline lg:whitespace-nowrap">
                  I <span className="italic">TRULY</span> believe tea touches
                </span>
                <br />
                <span>all our lives</span>
              </h2>
            </div>

            {/* Right Column: Poetic Main Paragraph */}
            <div>
              <p className="font-baskerville text-lg sm:text-xl lg:text-[21px] xl:text-[22px] font-normal leading-[1.38] sm:leading-[1.4] text-white/95 tracking-wide max-w-[620px]">
                In the moments the rain is pouring outside your doorstep, in the
                moments you share desserts at your favorite aunts house, with
                cookies after your first day at a new job, or on your drive to search
                for your new home, chilled during a hot summers afternoon, at the
                table of a loved one speaking of their cancer, the lazy morning you
                wake up in a new country, and in the moment you first realize how
                truly wonderful this day is.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Bottom Row: Lower Sub-tagline and Smaller Supporting Statement */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-end mt-8 sm:mt-14 lg:mt-22 xl:mt-15">
            {/* Lower Sub-tagline */}
            <div>
              <p className="font-baskerville text-lg sm:text-xl lg:text-2xl text-white/90 font-normal leading-[1.25] sm:leading-[1.3] max-w-md">
                Immerse yourself in our world of steeped
                opulence
              </p>
            </div>

            {/* Smaller Supporting Statement */}
            <div>
              <p className="font-sans text-[11px] sm:text-xs leading-relaxed text-[#757575] font-light max-w-xl">
                Tea starts us off, meets us in the middle, and dances us through
                to the end. May all your days be filled with health, happiness,
                love, laughter, and the simplest pleasures life has to offer,
                like a beautiful cup of tea. Thank you for allowing us to share
                in your life&apos;s wondrous moments.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
