"use client";

import React from "react";
import { m } from "motion/react";
import { PageWrapper } from "@/components/page-wrapper";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal";
import {
  CaesarsPalaceLogo,
  VaynerMediaLogo,
  TMobileArenaLogo,
  FourSeasonsLogo,
  CanyonRanchLogo,
  TheVenetianLogo,
  MontageLogo,
  NobleHouseLogo,
  GurneysResortsLogo,
  RitzCarltonLogo,
  DelanoLogo,
  TheRanchMalibuLogo,
  TheRanchHudsonValleyLogo,
  WaldorfAstoriaLogo,
} from "@/components/icons/partner-logos";

export function ProudlyServed() {
  return (
    <section className="bg-[#131313] pt-20 sm:pt-28 md:pt-32 pb-0 border-t border-white/5">
      <PageWrapper className="flex flex-col items-center">
        {/* Section Heading with standard Reveal fade-up */}
        <Reveal>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-center text-white/90 font-normal tracking-wide mb-14 sm:mb-20 md:mb-24">
            Proudly Served At
          </h2>
        </Reveal>

        {/* Partners Content Container with Staggered Entrance */}
        <StaggerContainer
          staggerChildren={0.06}
          className="w-full max-w-6xl mx-auto flex flex-col space-y-12 sm:space-y-16 md:space-y-20 px-4 sm:px-6"
        >
          {/* Row 1: Caesars Palace, VaynerMedia, T-Mobile Arena, Four Seasons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-14 items-center justify-items-center">
            <StaggerItem className="w-full flex items-center justify-center">
              <m.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center h-20 sm:h-24 md:h-28 w-full text-white/85 hover:text-white cursor-pointer"
              >
                <CaesarsPalaceLogo className="h-13 sm:h-16 md:h-20 w-auto max-w-[150px] sm:max-w-[180px] object-contain" />
              </m.div>
            </StaggerItem>

            <StaggerItem className="w-full flex items-center justify-center">
              <m.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center h-20 sm:h-24 md:h-28 w-full text-white/85 hover:text-white cursor-pointer"
              >
                <VaynerMediaLogo className="h-5 sm:h-6 md:h-8 w-auto max-w-[170px] sm:max-w-[210px] object-contain" />
              </m.div>
            </StaggerItem>

            <StaggerItem className="w-full flex items-center justify-center">
              <m.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center h-20 sm:h-24 md:h-28 w-full text-white/85 hover:text-white cursor-pointer"
              >
                <TMobileArenaLogo className="h-8 sm:h-9 md:h-11 w-auto max-w-[170px] sm:max-w-[210px] object-contain" />
              </m.div>
            </StaggerItem>

            <StaggerItem className="w-full flex items-center justify-center">
              <m.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center h-20 sm:h-24 md:h-28 w-full text-white/85 hover:text-white cursor-pointer"
              >
                <FourSeasonsLogo className="h-14 sm:h-18 md:h-22 w-auto max-w-[150px] sm:max-w-[180px] object-contain" />
              </m.div>
            </StaggerItem>
          </div>

          {/* Row 2: Canyon Ranch, The Venetian, Montage, Noble House */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-14 items-center justify-items-center">
            <StaggerItem className="w-full flex items-center justify-center">
              <m.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center h-20 sm:h-24 md:h-28 w-full text-white/85 hover:text-white cursor-pointer"
              >
                <CanyonRanchLogo className="h-5 sm:h-6 md:h-7 w-auto max-w-[170px] sm:max-w-[210px] object-contain" />
              </m.div>
            </StaggerItem>

            <StaggerItem className="w-full flex items-center justify-center">
              <m.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center h-20 sm:h-24 md:h-28 w-full text-white/85 hover:text-white cursor-pointer"
              >
                <TheVenetianLogo className="h-11 sm:h-14 md:h-17 w-auto max-w-[160px] sm:max-w-[200px] object-contain" />
              </m.div>
            </StaggerItem>

            <StaggerItem className="w-full flex items-center justify-center">
              <m.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center h-20 sm:h-24 md:h-28 w-full text-white/85 hover:text-white cursor-pointer"
              >
                <MontageLogo className="h-12 sm:h-15 md:h-18 w-auto max-w-[150px] sm:max-w-[190px] object-contain" />
              </m.div>
            </StaggerItem>

            <StaggerItem className="w-full flex items-center justify-center">
              <m.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center h-20 sm:h-24 md:h-28 w-full text-white/85 hover:text-white cursor-pointer"
              >
                <NobleHouseLogo className="h-9 sm:h-11 md:h-13 w-auto max-w-[170px] sm:max-w-[210px] object-contain" />
              </m.div>
            </StaggerItem>
          </div>

          {/* Row 3: Gurney's Resorts, The Ritz-Carlton, Delano Miami Beach, The Ranch Malibu */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-14 items-center justify-items-center">
            <StaggerItem className="w-full flex items-center justify-center">
              <m.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center h-20 sm:h-24 md:h-28 w-full text-white/85 hover:text-white cursor-pointer"
              >
                <GurneysResortsLogo className="h-11 sm:h-14 md:h-17 w-auto max-w-[150px] sm:max-w-[190px] object-contain" />
              </m.div>
            </StaggerItem>

            <StaggerItem className="w-full flex items-center justify-center">
              <m.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center h-20 sm:h-24 md:h-28 w-full text-white/85 hover:text-white cursor-pointer"
              >
                <RitzCarltonLogo className="h-13 sm:h-16 md:h-20 w-auto max-w-[160px] sm:max-w-[200px] object-contain" />
              </m.div>
            </StaggerItem>

            <StaggerItem className="w-full flex items-center justify-center">
              <m.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center h-20 sm:h-24 md:h-28 w-full text-white/85 hover:text-white cursor-pointer"
              >
                <DelanoLogo className="h-10 sm:h-12 md:h-14 w-auto max-w-[160px] sm:max-w-[200px] object-contain" />
              </m.div>
            </StaggerItem>

            <StaggerItem className="w-full flex items-center justify-center">
              <m.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center h-20 sm:h-24 md:h-28 w-full text-white/85 hover:text-white cursor-pointer"
              >
                <TheRanchMalibuLogo className="h-7 sm:h-8 md:h-10 w-auto max-w-[160px] sm:max-w-[200px] object-contain" />
              </m.div>
            </StaggerItem>
          </div>

          {/* Row 4: The Ranch Hudson Valley, Waldorf Astoria Hotels & Resorts */}
          <div className="flex flex-wrap items-center justify-center gap-6 xs:gap-8 sm:gap-20 md:gap-28">
            <StaggerItem>
              <m.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center h-16 sm:h-24 md:h-28 text-white/85 hover:text-white cursor-pointer"
              >
                <TheRanchHudsonValleyLogo className="h-6 sm:h-8 md:h-10 w-auto max-w-[130px] xs:max-w-[150px] sm:max-w-[200px] object-contain" />
              </m.div>
            </StaggerItem>

            <StaggerItem>
              <m.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center h-16 sm:h-24 md:h-28 text-white/85 hover:text-white cursor-pointer"
              >
                <WaldorfAstoriaLogo className="h-9 sm:h-14 md:h-17 w-auto max-w-[130px] xs:max-w-[150px] sm:max-w-[200px] object-contain" />
              </m.div>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </PageWrapper>
    </section>
  );
}
