"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { ShowcasePanel, type ShowcaseProduct } from "./ShowcasePanel";

export const SHOWCASE_PRODUCTS: ShowcaseProduct[] = [
  {
    id: "blooming-tea-ball-gift-set",
    title: "Blooming Tea Ball Gift Set",
    label: "SEASONAL GIFT SET",
    description:
      "Hand tied blooming tea ball gift set, stunning blooming teas crafted by our artisans in China - known as Double Happiness. Flowers, herbs, tea leaves make up this beautiful Signature Jenwey Tea gift set. Tied with our Jenwey black ribbon.",
    leftImage: "/images/blooming-tea-balls.webp",
    rightImage: "/images/tea-lifestyle.webp",
    href: "#buy-blooming-gift-set",
  },
  {
    id: "hand-made-tea-cakes",
    title: "Hand Made Tea Cakes",
    label: "EXCLUSIVE HAND MADE TEA CAKES GIFT SET",
    description:
      "Designed by Lisa Marie - Made Exclusively by our farmers in China. Hand made Tea Cakes - Preserve the tea - beautifully packaged and ready to brew. Simply break a small piece from your cake and infuse in your teapot Each cake brews up to 20 pots",
    leftImage: "/images/tea-cakes-lifestyle.webp",
    rightImage: "/images/tea-disks.webp",
    href: "#buy-tea-cakes",
  },
  {
    id: "jenwey-luxe-fall-teas",
    title: "Jenwey Luxe Fall Teas",
    label: "",
    description:
      "Immerse yourself in the luxurious indulgence of Jenwey Teas' latest masterpieces - Cloves, cinnamons, ginger!!\nEach sip unveils a vibrant dance of flavors\nThis, dear connoisseur, is more than just tea - it's a transcendent journey, a moment of respite wrapped in the allure of fine ingredients and exceptional craft.\nA luxury in every sip, an escapade in every glass.",
    buttonText: "SHOP NOW",
    leftImage: "/images/luxe-fall-tea.webp",
    rightImage: "",
    href: "#shop-luxe-fall-teas",
  },
];

/* =========================================================
   COLUMN SUBCOMPONENTS FOR FIVE-PHASE CHOREOGRAPHED SCROLL
   ========================================================= */

/**
 * Left Column:
 * - Base Layer (z-10): Blooming Tea Balls on white (pinned in place, opacity remains 1)
 * - Phase 2 (0.19 -> 0.32, z-20): Green cocktail lifestyle photo slides on top from y: 100% to 0%
 * - Phase 4 (0.51 -> 0.64, z-30): Luxe Fall Tea loose leaf photo on white slides on top from y: 100% to 0%
 * - Phase 5 & 6 (0.64 -> 1.00): Remains pinned in place (y stays 0%)
 */
function LeftColumn({
  progress,
}: {
  progress: MotionValue<number>;
}) {
  const phase2LayerY = useTransform(progress, [0.19, 0.32], ["100%", "0%"]);
  const phase4LayerY = useTransform(progress, [0.51, 0.64], ["100%", "0%"]);

  // Subtle Parallax depth for layer content
  const ballsParallaxY = useTransform(progress, [0, 0.25], ["0%", "-5%"]);
  const cocktailParallaxY = useTransform(progress, [0.19, 0.45], ["-8%", "8%"]);
  const luxeParallaxY = useTransform(progress, [0.51, 0.75], ["5%", "-5%"]);

  return (
    <div className="relative w-full h-full bg-white overflow-hidden">
      {/* 1. Base Layer: Blooming Tea Balls (stays pinned in place with subtle vertical floating parallax) */}
      <div className="absolute inset-0 z-10 w-full h-full bg-white flex items-center justify-center p-8 sm:p-10 lg:p-12 xl:p-16">
        <motion.div
          style={{ y: ballsParallaxY }}
          className="relative w-full h-full flex items-center justify-center"
        >
          <Image
            src="/images/blooming-tea-balls.webp"
            alt="Blooming Tea Balls"
            fill
            sizes="(min-width: 1024px) 33vw, 500px"
            className="object-contain object-center"
          />
        </motion.div>
      </div>

      {/* 2. Phase 2 Layer: Green cocktail lifestyle photo with internal parallax glide */}
      <motion.div
        style={{ y: phase2LayerY }}
        className="absolute inset-0 z-20 w-full h-full bg-[#224225] overflow-hidden"
      >
        <motion.div
          style={{ y: cocktailParallaxY }}
          className="absolute inset-0 h-[116%] -top-[8%] w-full"
        >
          <Image
            src="/images/tea-cakes-lifestyle.webp"
            alt="Hand Made Tea Cakes Cocktails"
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover object-center w-full h-full"
          />
        </motion.div>
      </motion.div>

      {/* 3. Phase 4 Layer: Luxe Fall Tea loose leaf photo on white with subtle floating glide */}
      <motion.div
        style={{ y: phase4LayerY }}
        className="absolute inset-0 z-30 w-full h-full bg-white flex items-center justify-center p-8 sm:p-10 lg:p-12 xl:p-16 overflow-hidden"
      >
        <motion.div
          style={{ y: luxeParallaxY }}
          className="relative w-full h-full flex items-center justify-center"
        >
          <Image
            src="/images/luxe-fall-tea.webp"
            alt="Jenwey Luxe Fall Teas"
            fill
            sizes="(min-width: 1024px) 33vw, 500px"
            className="object-contain object-center"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

/**
 * Middle Column:
 * - Phase 1 (0.03 -> 0.16): Track scrolls up so black text scrolls away and white tea disks come up
 * - Phase 2 (0.19 -> 0.32): Holds steady with white tea disks centered
 * - Phase 3 (0.35 -> 0.48): Tea Box gift set on white slides on top from y: 100% to 0%
 * - Phase 4 (0.51 -> 0.64): Holds steady with Tea Box gift set centered
 * - Phase 5 (0.67 -> 0.80): Direct scroll — Tea Box layer scrolls directly UP and away (0% -> -100%)
 *                           while Jenwey Luxe Fall Teas black panel scrolls directly UP into view (100% -> 0%)
 * - Phase 6 (0.80 -> 1.00): Holds steady as new section slides over the pinned showcase
 */
function MiddleSection({
  products,
  progress,
}: {
  products: ShowcaseProduct[];
  progress: MotionValue<number>;
}) {
  const trackY = useTransform(progress, [0.03, 0.16], ["0%", "-50%"]);
  const boxLayerY = useTransform(
    progress,
    [0.35, 0.48, 0.67, 0.80],
    ["100%", "0%", "0%", "-100%"]
  );
  const luxePanelY = useTransform(progress, [0.67, 0.80], ["100%", "0%"]);

  // Subtle product float
  const disksParallaxY = useTransform(progress, [0.03, 0.28], ["5%", "-5%"]);
  const boxParallaxY = useTransform(progress, [0.35, 0.65], ["5%", "-5%"]);

  return (
    <div className="relative w-full h-full bg-[#171717] overflow-hidden">
      {/* 1. Base Track: Panel 1 (Black text) and Panel 2 (White Tea Disks) */}
      <motion.div
        style={{ y: trackY }}
        className="w-full h-[200%] flex flex-col"
      >
        {/* Panel 1: Black Text Panel (Blooming Tea Ball Gift Set) */}
        <div className="w-full h-1/2 flex items-center justify-start">
          <ShowcasePanel product={products[0]} />
        </div>

        {/* Panel 2: White Tea Disks Image Panel (vertically centered on white with gentle parallax) */}
        <div className="w-full h-1/2 bg-white flex items-center justify-center p-8 sm:p-10 lg:p-12 xl:p-16">
          <motion.div
            style={{ y: disksParallaxY }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <Image
              src="/images/tea-disks.webp"
              alt="Artisan Tea Disks"
              fill
              sizes="(min-width: 1024px) 33vw, 500px"
              className="object-contain object-center"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* 2. Phase 3 & 5 Layer: Tea Box Gift Set on white */}
      <motion.div
        style={{ y: boxLayerY }}
        className="absolute inset-0 z-20 w-full h-full bg-white flex items-center justify-center p-8 sm:p-10 lg:p-12 xl:p-16 overflow-hidden"
      >
        <motion.div
          style={{ y: boxParallaxY }}
          className="relative w-full h-full flex items-center justify-center"
        >
          <Image
            src="/images/tea-box.webp"
            alt="Hand Made Tea Cakes Gift Box Set"
            fill
            sizes="(min-width: 1024px) 33vw, 500px"
            className="object-contain object-center"
          />
        </motion.div>
      </motion.div>

      {/* 3. Phase 5 Layer: Jenwey Luxe Fall Teas black text panel (scrolls directly up into view) */}
      <motion.div
        style={{ y: luxePanelY }}
        className="absolute inset-0 z-20 w-full h-full bg-[#171717] flex items-center justify-start"
      >
        <ShowcasePanel product={products[2]} />
      </motion.div>
    </div>
  );
}

/**
 * Right Column:
 * - Base Layer (z-10): Teapot lifestyle photo on green (pinned in place with Lenis-smoothed parallax)
 * - Phase 2 (0.19 -> 0.32, z-20): Black text section slides on top from y: 100% to 0%
 * - Phase 3, 4, 5, 6 (0.32 -> 1.00): Remains pinned in place (y stays 0%)
 */
function RightColumn({
  product,
  progress,
}: {
  product: ShowcaseProduct;
  progress: MotionValue<number>;
}) {
  const topLayerY = useTransform(progress, [0.19, 0.32], ["100%", "0%"]);

  // Lifestyle Parallax Glide (8% movement with subtle scale)
  const lifestyleParallaxY = useTransform(progress, [0, 0.35], ["-8%", "8%"]);
  const lifestyleScale = useTransform(progress, [0, 0.32], [1.08, 1]);

  return (
    <div className="relative w-full h-full bg-[#1a2e1d] overflow-hidden">
      {/* 1. Base Layer: Teapot Lifestyle Photo on Green with Parallax Glide */}
      <div className="absolute inset-0 z-10 w-full h-full bg-[#1a2e1d] overflow-hidden">
        <motion.div
          style={{ y: lifestyleParallaxY, scale: lifestyleScale }}
          className="absolute inset-0 h-[116%] -top-[8%] w-full"
        >
          <Image
            src="/images/tea-lifestyle.webp"
            alt="Lifestyle Tea Table"
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover object-left w-full h-full"
          />
        </motion.div>
      </div>

      {/* 2. Top Layer: Black Text Panel (Hand Made Tea Cakes, slides on top from below) */}
      <motion.div
        style={{ y: topLayerY }}
        className="absolute inset-0 z-20 w-full h-full bg-[#171717] flex items-center justify-start"
      >
        <ShowcasePanel product={product} />
      </motion.div>
    </div>
  );
}

/* =========================================================
   MAIN STICKY SHOWCASE COMPONENT
   ========================================================= */

export function StickyShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking across the tall 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Reduced motion fallback: Render stacked layout without pinned scroll
  if (shouldReduceMotion) {
    return (
      <section className="relative w-full bg-[#131313] border-t border-white/5 py-12">
        <div className="flex flex-col w-full divide-y divide-white/5">
          {SHOWCASE_PRODUCTS.map((product) => (
            <div key={product.id} className="grid grid-cols-1 lg:grid-cols-3 w-full">
              <div className="relative w-full h-[65vh] min-h-[420px] lg:h-[calc(100vh-88px)] lg:min-h-[640px] xl:lg:min-h-[700px] bg-white flex items-center justify-center p-8 lg:p-12 overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={product.leftImage}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 500px, 90vw"
                    className="object-contain object-center"
                  />
                </div>
              </div>
              <div className="w-full bg-[#171717] py-16 px-6 flex items-center justify-center">
                <ShowcasePanel product={product} />
              </div>
              <div className="relative w-full h-[65vh] min-h-[420px] lg:h-[calc(100vh-88px)] lg:min-h-[640px] xl:lg:min-h-[700px] bg-[#1a2e1d] overflow-hidden">
                <Image
                  src={product.rightImage}
                  alt={`${product.title} Lifestyle`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-contain object-left w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#131313] border-t border-white/5 h-auto lg:h-[600vh]"
    >
      {/* =========================================================
          DESKTOP PINNED CONTAINER (Sticky below 88px navbar)
         ========================================================= */}
      <div className="hidden lg:block sticky top-[88px] w-full h-[calc(100vh-88px)] min-h-[640px] xl:min-h-[700px] overflow-hidden">
        <div className="grid grid-cols-3 w-full h-full">
          {/* Column 1: Left Column (Tea balls -> Cocktails -> Luxe Fall Tea) */}
          <LeftColumn progress={scrollYProgress} />

          {/* Column 2: Middle Section (Blooming text -> Tea disks -> Tea box -> Luxe Fall Teas text) */}
          <MiddleSection
            products={SHOWCASE_PRODUCTS}
            progress={scrollYProgress}
          />

          {/* Column 3: Right Column (Teapot photo -> Black Hand Made Tea Cakes text) */}
          <RightColumn
            product={SHOWCASE_PRODUCTS[1]}
            progress={scrollYProgress}
          />
        </div>
      </div>

      {/* =========================================================
          MOBILE & TABLET RESPONSIVE STACKED LAYOUT (< lg)
         ========================================================= */}
      <div className="lg:hidden flex flex-col w-full divide-y divide-white/5">
        {/* Product 1: Blooming Tea Balls */}
        <div className="relative w-full h-[48vh] sm:h-[58vh] min-h-[320px] sm:min-h-[400px] bg-white flex items-center justify-center p-6 sm:p-8 overflow-hidden">
          <motion.div
            initial={{ opacity: 0.9, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <Image
              src="/images/blooming-tea-balls.webp"
              alt="Blooming Tea Balls"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 500px, 90vw"
              className="object-contain object-center"
            />
          </motion.div>
        </div>

        <div className="w-full py-12 sm:py-16 px-6 bg-[#171717]">
          <ShowcasePanel product={SHOWCASE_PRODUCTS[0]} />
        </div>

        {/* Hero Green Lifestyle Visual (Motion + Lenis Parallax on mobile) */}
        <ParallaxImage
          src="/images/tea-lifestyle.webp"
          alt="Lifestyle Tea Table"
          className="relative w-full h-[52vh] sm:h-[62vh] min-h-[340px] sm:min-h-[440px] bg-[#1a2e1d]"
          imageClassName="object-cover object-center w-full h-full"
          intensity={0.1}
        />

        {/* Product 2: Hand Made Tea Cakes */}
        <div className="relative w-full h-[48vh] sm:h-[58vh] min-h-[320px] sm:min-h-[400px] bg-white flex items-center justify-center p-6 sm:p-8 overflow-hidden">
          <motion.div
            initial={{ opacity: 0.9, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <Image
              src="/images/tea-disks.webp"
              alt="Artisan Tea Disks"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 500px, 90vw"
              className="object-contain object-center"
            />
          </motion.div>
        </div>

        <div className="relative w-full h-[48vh] sm:h-[58vh] min-h-[320px] sm:min-h-[400px] bg-white flex items-center justify-center p-6 sm:p-8 overflow-hidden">
          <motion.div
            initial={{ opacity: 0.9, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <Image
              src="/images/tea-box.webp"
              alt="Hand Made Tea Cakes Gift Box Set"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 500px, 90vw"
              className="object-contain object-center"
            />
          </motion.div>
        </div>

        <div className="w-full py-12 sm:py-16 px-6 bg-[#171717]">
          <ShowcasePanel product={SHOWCASE_PRODUCTS[1]} />
        </div>

        {/* Product 3: Jenwey Luxe Fall Teas */}
        <div className="relative w-full h-[48vh] sm:h-[58vh] min-h-[320px] sm:min-h-[400px] bg-white flex items-center justify-center p-6 sm:p-8 overflow-hidden">
          <motion.div
            initial={{ opacity: 0.9, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <Image
              src="/images/luxe-fall-tea.webp"
              alt="Jenwey Luxe Fall Teas"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 500px, 90vw"
              className="object-contain object-center"
            />
          </motion.div>
        </div>

        <div className="w-full py-12 sm:py-16 px-6 bg-[#171717]">
          <ShowcasePanel product={SHOWCASE_PRODUCTS[2]} />
        </div>
      </div>
    </section>
  );
}
