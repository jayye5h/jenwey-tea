"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal";

export interface BoutiqueProduct {
  id: string;
  title: string;
  image: string;
  href?: string;
}

export const BOUTIQUE_PRODUCTS: BoutiqueProduct[] = [
  {
    id: "atelier-fall-collection",
    title: "Atelier Fall Collection",
    image: "/images/boutique-collection/boutique-10.webp",
  },
  {
    id: "atelier-luxe-collection",
    title: "Atelier Luxe Collection",
    image: "/images/boutique-collection/boutique-14.webp",
  },
  {
    id: "atelier-signature-tea-collection",
    title: "Atelier Signature Tea Collection",
    image: "/images/boutique-collection/boutique-03.webp",
  },
  {
    id: "atelier-holiday-collection",
    title: "Atelier Holiday Collection",
    image: "/images/boutique-collection/boutique-05.webp",
  },
  {
    id: "atelier-petite-collection",
    title: "Atelier Petite Collection",
    image: "/images/boutique-collection/boutique-04.webp",
  },
  {
    id: "berry-hibiscus-tisane",
    title: "Berry Hibiscus Tisane",
    image: "/images/boutique-collection/boutique-18.webp",
  },
  {
    id: "spiced-chai-reserve",
    title: "Spiced Chai Reserve",
    image: "/images/boutique-collection/boutique-12.webp",
  },
  {
    id: "imperial-jasmine-green",
    title: "Imperial Jasmine Green",
    image: "/images/boutique-collection/boutique-20.webp",
  },
  {
    id: "chamomile-blossom-rest",
    title: "Chamomile Blossom Rest",
    image: "/images/boutique-collection/boutique-01.webp",
  },
  {
    id: "earl-grey-creme-reserve",
    title: "Earl Grey Creme Reserve",
    image: "/images/boutique-collection/boutique-02.webp",
  },
  {
    id: "moroccan-mint-botanical",
    title: "Moroccan Mint Botanical",
    image: "/images/boutique-collection/boutique-06.webp",
  },
  {
    id: "rooibos-vanilla-nectar",
    title: "Rooibos Vanilla Nectar",
    image: "/images/boutique-collection/boutique-07.webp",
  },
  {
    id: "midnight-rose-black-tea",
    title: "Midnight Rose Black Tea",
    image: "/images/boutique-collection/boutique-08.webp",
  },
  {
    id: "citrus-lavender-infusion",
    title: "Citrus Lavender Infusion",
    image: "/images/boutique-collection/boutique-09.webp",
  },
  {
    id: "white-peony-mountain-harvest",
    title: "White Peony Mountain Harvest",
    image: "/images/boutique-collection/boutique-11.webp",
  },
  {
    id: "golden-dragon-oolong",
    title: "Golden Dragon Oolong",
    image: "/images/boutique-collection/boutique-13.webp",
  },
  {
    id: "matcha-ceremonial-reserve",
    title: "Matcha Ceremonial Reserve",
    image: "/images/boutique-collection/boutique-15.webp",
  },
  {
    id: "orchid-vanilla-blossom",
    title: "Orchid Vanilla Blossom",
    image: "/images/boutique-collection/boutique-16.webp",
  },
  {
    id: "harvest-apple-cinnamon",
    title: "Harvest Apple Cinnamon",
    image: "/images/boutique-collection/boutique-19.webp",
  },
  {
    id: "signature-holiday-blend",
    title: "Wynn Berry Berry Mint",
    image: "/images/boutique-collection/boutique-17.webp",
  },
];

const INITIAL_COUNT = 12; // 3 rows * 4 columns

export function BoutiqueCollection() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const visibleProducts = BOUTIQUE_PRODUCTS.slice(0, visibleCount);
  const hasMore = visibleCount < BOUTIQUE_PRODUCTS.length;

  const handleLoadMore = () => {
    setVisibleCount(BOUTIQUE_PRODUCTS.length); // reveals remaining 2 rows (8 items)
  };

  return (
    <section className="relative z-30 w-full bg-[#181818] text-white pt-10 sm:pt-16 md:pt-20 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-12 xl:px-16">
      <div className="w-full max-w-[1600px] mx-auto">
        {/* Section Heading with standard Reveal */}
        <Reveal>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-normal tracking-wide text-white text-center mb-10 sm:mb-14">
            The Boutique Collection
          </h2>
        </Reveal>

        {/* 4-Column Product Grid with Stagger & Card Hover Lift */}
        <StaggerContainer
          staggerChildren={0.05}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3.5 sm:gap-x-4 lg:gap-x-5 gap-y-9 sm:gap-y-11"
        >
          <AnimatePresence mode="popLayout">
            {visibleProducts.map((product) => (
              <StaggerItem key={product.id}>
                <motion.div
                  layout
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="group relative flex flex-col items-start cursor-pointer select-none border-none outline-none"
                >
                  {/* Image Container with subtle image scale on hover */}
                  <div className="relative w-full aspect-[16/9] bg-transparent flex items-center justify-center overflow-hidden border-none outline-none">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    />

                    {/* Sliding 'Quick View' Bar from bottom of image area on Hover */}
                    <div className="absolute inset-x-0 bottom-0 h-11 sm:h-12 bg-[#c8c8c8]/85 text-neutral-900 text-xs sm:text-sm font-normal tracking-normal flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none sm:pointer-events-auto border-none outline-none z-10">
                      Quick View
                    </div>
                  </div>

                  {/* Product Title below */}
                  <h3 className="mt-3 text-sm sm:text-[15px] lg:text-base text-white/95 font-normal tracking-wide text-left group-hover:text-white transition-colors border-none outline-none">
                    {product.title}
                  </h3>
                </motion.div>
              </StaggerItem>
            ))}
          </AnimatePresence>
        </StaggerContainer>

        {/* Load More Button with whileHover & whileTap */}
        {hasMore && (
          <Reveal className="mt-16 sm:mt-20 lg:mt-24 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <button
                onClick={handleLoadMore}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "rounded-full !border !border-white/70 !bg-transparent !text-white hover:!bg-white hover:!text-black text-xs sm:text-[13px] font-normal tracking-wide px-11 sm:px-14 h-10 transition-all duration-300 cursor-pointer shadow-none inline-flex items-center justify-center"
                )}
              >
                Load More
              </button>
            </motion.div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
