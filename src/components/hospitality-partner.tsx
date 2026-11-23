"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "motion/react";
import { PageWrapper } from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function HospitalityPartner() {
  return (
    <section className="bg-[#131313] pt-12 sm:pt-16 md:pt-30 pb-16 sm:pb-20 md:pb-24 text-white font-[Arial,Helvetica,sans-serif]">
      <PageWrapper className="flex flex-col items-center text-center px-4 sm:px-6">
        <Reveal className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Eyebrow / Heading */}
          <h3 className="text-[15px] text-white/90 font-normal tracking-wide mb-3 font-[Arial,Helvetica,sans-serif]">
            Trusted by luxury hospitality
          </h3>

          {/* Quote Body / Paragraph (animated as a block, not line-by-line) */}
          <blockquote className="text-[13px] text-white/80 font-normal leading-relaxed tracking-wide mb-8 sm:mb-10 max-w-[1080px] font-[Arial,Helvetica,sans-serif]">
            “Jenwey Tea partners with leading resorts, hotels, spas, and private clubs to create distinctive tea experiences- from proprietary blends and signature <br className="hidden lg:inline" />
            beverage programs to retail collections guests can enjoy long after their stay.”
          </blockquote>

          {/* Call to Action Button with subtle hover and tap interaction */}
          <LazyMotion features={domAnimation}>
            <m.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                variant="outline"
                className="rounded-full !border-3 !border-white !bg-transparent !text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 sm:px-10 h-11 sm:h-12 hover:!bg-white hover:!text-black transition-all duration-300 cursor-pointer font-[Arial,Helvetica,sans-serif]"
              >
                BECOME A PARTNER
              </Button>
            </m.div>
          </LazyMotion>
        </Reveal>
      </PageWrapper>
    </section>
  );
}
