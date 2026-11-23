"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal";

export interface JournalArticle {
  id: string;
  title: string;
  titleStyle?: "standard" | "uppercase";
  description: string;
  image: string;
  imageAlt: string;
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: "tea-adornments",
    title: "Tea Adornments Are a Thing",
    titleStyle: "standard",
    description:
      "We take luxury, beauty, and tea very seriously! And in doing so, I have designed a line of Tea Adornments I can not wait for you to experience. In the meantime, you can enjoy them at our favorite hotels.",
    image: "/images/journal/tea-adornments.webp",
    imageAlt: "Tea Adornments on a luxury gold tray by Jenwey Tea Co.",
  },
  {
    id: "now-offered-at",
    title: "NOW OFFERED AT",
    titleStyle: "uppercase",
    description:
      "The World Renowned Gurney's Montauk, where luxury meets seaside beaches and New England's most memorable evenings. We are beyond excited to be a part of this stunning resort and Spa. The tea program you will experience here will be worth the wait... Stay tuned xox",
    image: "/images/journal/gurneys-montauk.webp",
    imageAlt: "Gurney's Montauk luxury tea program presentation",
  },
  {
    id: "blessed-pure-direct",
    title: "Blessed Pure & Direct",
    titleStyle: "standard",
    description:
      "Have you ever ordered tea that was blessed with your life in mind? One of our favorite monks makes frequent visits to our production facility and graciously blesses all our tea inventory. He casts upon them well wishes for an abundance of love, prosperity, and happiness to all those who enjoy our Teas.",
    image: "/images/journal/blessed-pure-direct.webp",
    imageAlt: "Blessed Pure and Direct tea in a luxury setting",
  },
];

export function LisasJournal() {
  return (
    <section className="relative z-30 w-full bg-white text-neutral-900 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 xl:px-16">
      <div className="w-full max-w-[1600px] mx-auto">
        {/* Section Heading with standard Reveal */}
        <Reveal>
          <h2 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-normal tracking-wide text-neutral-900 mb-6 sm:mb-8 text-left">
            Lisa&apos;s Journal
          </h2>
        </Reveal>

        {/* 3-Column Articles Grid with Stagger & Card Hover */}
        <StaggerContainer
          staggerChildren={0.1}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-14 xl:gap-16"
        >
          {JOURNAL_ARTICLES.map((article) => (
            <StaggerItem key={article.id}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                {/* Square 1:1 Image Container with scale on hover */}
                <div className="relative w-full aspect-square overflow-hidden bg-neutral-100">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Article Headline - Center Aligned & Consistent Font Size */}
                <h3 className="w-full text-center font-serif text-lg sm:text-xl lg:text-[22px] font-normal tracking-wide text-neutral-900 mt-6 sm:mt-7 mb-3 sm:mb-4">
                  {article.title}
                </h3>

                {/* Description Paragraph */}
                <p className="font-sans text-[14px] sm:text-[15px] lg:text-base font-normal leading-[1.7] sm:leading-[1.75] text-neutral-700 text-left w-full max-w-[420px]">
                  {article.description}
                </p>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
