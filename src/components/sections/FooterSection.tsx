"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Logo } from "@/components/icons/logo";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal";

const TESTIMONIALS = [
  {
    id: "review-1",
    quote:
      "Since the launch of Jenwey Tea in our Hotel we have increased sales by over 30% - Game Changer! Spa, cafe, In room, dining and cocktails. There is no one doing what Lisa Marie is! A full service concierge tea company - at its finest",
    author: "Dick F.",
    role: "Partner Review",
  },
  {
    id: "review-2",
    quote:
      "Blew my mind the first time I tried it at Four Seasons. The flavors were like nothing I have experienced before - Real ingredients - hand blended - super special",
    author: "Payton H.",
    role: "Client Review",
  },
  {
    id: "review-3",
    quote:
      "Literally obsessed! Our whole office is addicted after I brought some in - Now we order for the office! Too spoiled to drink anything else. Love Jenwey Teas",
    author: "Elizabeth J.",
    role: "Client Review",
  },
];

const MENU_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "#shop" },
  { label: "About Us", href: "#about-us" },
  { label: "Lisa's Journal", href: "#journal" },
  { label: "Wholesale", href: "#wholesale" },
  { label: "Contact Us", href: "#contact" },
];

const TEA_LINKS = [
  { label: "Boutique Blends", href: "#boutique-blends" },
  { label: "Luxe", href: "#luxe" },
  { label: "Lifestyle", href: "#lifestyle" },
  { label: "Blessed Pure & Direct", href: "#blessed-pure-direct" },
  { label: "Hotel Collection", href: "#hotel-collection" },
];

const SUPPORT_LINKS = [
  { label: "Privacy Policy", href: "#privacy-policy" },
  { label: "Terms of Service", href: "#terms-of-service" },
  { label: "Shipping & Returns", href: "#shipping-returns" },
];

export function FooterSection() {
  const [email, setEmail] = useState("");
  const [isJoined, setIsJoined] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsJoined(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative z-30 w-full overflow-hidden">
      {/* =========================================================
          UPPER PART OF FOOTER: bg-[#181818]
          (Testimonials, Embossed Seal Logo, Brand Navigation)
         ========================================================= */}
      <div className="w-full bg-[#181818] text-white pt-20 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="w-full max-w-[1500px] mx-auto flex flex-col items-center">
          {/* =========================================================
              TOP: TESTIMONIALS
             ========================================================= */}
          <div className="w-full">
            {/* Eyebrow Heading with standard Reveal */}
            <Reveal>
              <h2 className="font-playfair text-xl sm:text-2xl text-white font-normal tracking-wide mb-8 sm:mb-12 md:mb-16">
                Testimonials
              </h2>
            </Reveal>

            {/* 3-Column Reviews with Stagger */}
            <StaggerContainer
              staggerChildren={0.12}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-14 xl:gap-20 items-start"
            >
              {TESTIMONIALS.map((item) => (
                <StaggerItem key={item.id} className="flex flex-col items-start text-left">
                  {/* Thin dash rule */}
                  <div className="w-8 h-[1px] bg-white/50 mb-3.5 sm:mb-5 md:mb-6" />

                  {/* Review Quote - with natural mobile height */}
                  <p className="font-playfair text-sm sm:text-[15px] lg:text-base text-white/90 font-normal leading-[1.42] sm:leading-[1.46] tracking-normal min-h-0 md:min-h-[135px] lg:min-h-[145px]">
                    {item.quote}
                  </p>

                  {/* Author Info */}
                  <div className="mt-3 sm:mt-4 md:mt-5">
                    <p className="font-playfair text-base sm:text-[17px] text-white font-normal leading-tight">
                      {item.author}
                    </p>
                    <p className="font-sans text-xs sm:text-[13px] text-neutral-400 font-light mt-1 leading-tight">
                      {item.role}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* =========================================================
              CENTER: BIG EMBOSSED SEAL LOGO (Reveal)
             ========================================================= */}
          <Reveal
            delay={0.1}
            className="my-10 sm:my-16 lg:my-22 w-full max-w-4xl mx-auto flex flex-col items-center justify-center select-none px-4"
          >
            <div className="relative w-full max-w-[280px] xs:max-w-[340px] sm:max-w-[440px] lg:max-w-[520px] h-auto flex justify-center">
              <Image
                src="/images/jenwey-seal.webp"
                alt="Jenwey Tea Co. Established in 2001 - Boston, MA"
                width={600}
                height={600}
                sizes="(min-width: 1024px) 520px, (min-width: 640px) 440px, 80vw"
                className="w-full h-auto max-h-[280px] xs:max-h-[340px] sm:max-h-[440px] lg:max-h-[500px] object-contain mx-auto"
              />
            </div>
          </Reveal>

          {/* =========================================================
              BRAND FOOTER NAVIGATION (Logo, Menu, Contact Us)
             ========================================================= */}
          <Reveal className="w-full pt-8 sm:pt-12 flex flex-col md:flex-row justify-between items-start gap-12 lg:gap-16">
            {/* Left: Logo & Brand Tagline */}
            <div className="flex flex-col items-start max-w-sm">
              <div className="mb-6 text-white">
                <Logo className="h-10 sm:h-11 w-auto text-white" />
              </div>
              <p className="font-sans text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Couture Tea for Five Star Hotels  <br />and Connoisseurs
              </p>
            </div>

            {/* Right: Menu & Contact Columns */}
            <div className="grid grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
              {/* Menu Links */}
              <div className="flex flex-col items-start">
                <p className="font-sans text-xs sm:text-sm text-neutral-300 font-normal mb-4 sm:mb-5">
                  Menu
                </p>
                <nav className="flex flex-col space-y-2.5 sm:space-y-3">
                  {MENU_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="font-sans text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Contact Information */}
              <div className="flex flex-col items-start">
                <p className="font-sans text-xs sm:text-sm text-neutral-300 font-normal mb-4 sm:mb-5">
                  Contact us
                </p>
                <div className="flex flex-col space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-neutral-400 font-light">
                  <a
                    href="mailto:info@jenweytea.com"
                    className="hover:text-white transition-colors"
                  >
                    Email: info@jenweytea.com
                  </a>
                  <p>Tel: 855 NE TEA CO</p>
                  <p>Hours: 24 / 7</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* =========================================================
          BOTTOM PART OF FOOTER: bg-black
          (TEA, SUPPORT, Newsletter Signup & Copyright)
         ========================================================= */}
      <div className="w-full bg-black text-white pt-14 sm:pt-18 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 xl:px-16 border-t border-neutral-900">
        <Reveal className="w-full max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Column 1: TEA */}
            <div className="md:col-span-3 flex flex-col items-start">
              <p className="font-playfair text-xs tracking-[0.2em] uppercase font-semibold text-white/90 mb-5 sm:mb-6">
                TEA
              </p>
              <nav className="flex flex-col space-y-1.5 sm:space-y-2 ">
                {TEA_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-playfair text-sm sm:text-[15px] text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Desktop Copyright Notice (Below TEA) */}
              <p className="hidden md:block font-sans text-xs text-neutral-400 font-light mt-10 sm:mt-14">
                &copy; 2026 Jenwey Tea Co. All Rights Reserved.
              </p>
            </div>

            {/* Column 2: SUPPORT */}
            <div className="md:col-span-3 flex flex-col items-start">
              <p className="font-playfair text-xs tracking-[0.2em] uppercase font-semibold text-white/90 mb-5 sm:mb-6">
                SUPPORT
              </p>
              <nav className="flex flex-col space-y-1.5 sm:space-y-2">
                {SUPPORT_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-playfair text-sm sm:text-[15px] text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 3: NEWSLETTER */}
            <div className="md:col-span-6 flex flex-col items-start w-full lg:pl-6 xl:pl-10">
              <div className="w-full max-w-lg flex flex-col items-start">
                <h3 className="font-playfair text-xl sm:text-2xl lg:text-[28px] text-white font-normal mb-4 sm:mb-5 leading-tight">
                  Sign Up For Our Newsletter
                </h3>
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="w-full flex flex-row items-stretch shadow-sm"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email"
                    className="flex-1 min-w-0 bg-white text-neutral-900 placeholder:text-neutral-500 text-xs sm:text-sm md:text-[15px] px-3.5 sm:px-4 py-3 sm:py-3.5 outline-none rounded-none font-sans"
                    required
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    type="submit"
                    className="bg-[#181818] hover:bg-neutral-800 text-white text-xs sm:text-sm md:text-[15px] font-medium px-5 sm:px-8 py-3 sm:py-3.5 transition-colors border border-neutral-700 hover:border-neutral-500 whitespace-nowrap rounded-none shrink-0 cursor-pointer"
                  >
                    {isJoined ? "Joined!" : "Join"}
                  </motion.button>
                </form>
              </div>
            </div>
          </div>

          {/* Mobile Copyright Notice (at the very bottom) */}
          <p className="md:hidden font-sans text-xs text-neutral-400 font-light mt-12 text-left">
            &copy; 2026 Jenwey Tea Co. All Rights Reserved.
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
