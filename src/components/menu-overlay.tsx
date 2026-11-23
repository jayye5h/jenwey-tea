"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const PRIMARY_LINKS = [
  { label: "HOME", href: "/" },
  { label: "SHOP", href: "#shop" },
  { label: "ABOUT US", href: "#about-us" },
  { label: "LISA'S JOURNAL", href: "#journal" },
  { label: "TEA OF THE MONTH", href: "#tea-of-the-month" },
  { label: "HOSPITALITY", href: "#hospitality" },
  { label: "CONTACT US", href: "#contact" },
  { label: "COLLECTIONS", href: "#collections" },
  { label: "CORPORATE GIFTING", href: "#corporate-gifting" },
  { label: "GIFT CARD", href: "#gift-card" },
];

const TEA_LINKS = [
  { label: "Boutique Blends", href: "#boutique-blends" },
  { label: "Luxe", href: "#luxe" },
  { label: "Lifestyle", href: "#lifestyle" },
  { label: "Blessed Direct & Greens", href: "#blessed-direct-greens" },
  { label: "Hotel Collection", href: "#hotel-collection" },
];

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  // Lock body & html scroll and listen for Escape key when menu is open
  useEffect(() => {
    if (!isOpen) return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed inset-0 z-[100] w-screen h-screen h-[100dvh] bg-[#131313] text-white overflow-y-auto lg:overflow-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="w-full max-w-[1720px] mx-auto min-h-full lg:h-full px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-4 sm:py-6 lg:py-8 flex flex-col justify-start lg:justify-center"
      >
        {/* Mobile Sticky Close Header (< lg) */}
        <div className="sticky top-0 z-20 -mx-6 px-6 sm:-mx-12 sm:px-12 lg:hidden py-3 bg-[#131313]/95 backdrop-blur-md flex items-center justify-between border-b border-white/5 mb-4">
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="text-white hover:opacity-70 transition-opacity p-1 -ml-1 cursor-pointer focus:outline-none flex items-center gap-2"
          >
            <svg
              className="w-7 h-7 text-white stroke-[1.25]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="5" x2="5" y2="19" />
              <line x1="5" y1="5" x2="19" y2="19" />
            </svg>
            <span className="font-playfair text-xs tracking-[0.2em] uppercase text-white/70">
              Close
            </span>
          </button>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start w-full">
          
          {/* =========================================================
              COLUMN 1 (LEFT): Close Button 'X' (Desktop) + Primary Nav Links
             ========================================================= */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Desktop Close 'X' Button - positioned right above 'HOME' */}
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="hidden lg:flex text-white hover:opacity-70 transition-opacity p-1 -ml-1 mb-1.5 sm:mb-2.5 cursor-pointer group focus:outline-none"
            >
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[1.25] transition-transform duration-200 group-hover:scale-105"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="5" x2="5" y2="19" />
                <line x1="5" y1="5" x2="19" y2="19" />
              </svg>
            </button>

            {/* Main Links */}
            <nav className="flex flex-col space-y-2 sm:space-y-2 lg:space-y-2">
              {PRIMARY_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="font-playfair text-xl xs:text-2xl lg:text-[28px] xl:text-[32px] text-white font-normal uppercase tracking-[0.03em] hover:text-white/70 transition-colors leading-[1.2]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* =========================================================
              COLUMN 2 (CENTER): TEA Category Links
              (Vertically aligned around Hospitality/Contact Us level)
             ========================================================= */}
          <div className="lg:col-span-3 flex flex-col items-start pt-6 lg:pt-48 xl:pt-52 border-t border-white/10 lg:border-t-0">
            <p className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-white/90 mb-4 sm:mb-5">
              TEA
            </p>
            <nav className="flex flex-col space-y-2 sm:space-y-2.5">
              {TEA_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="font-playfair text-sm sm:text-[15px] text-neutral-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* =========================================================
              COLUMN 3 (RIGHT): HEAD OFFICE Information
              (Vertically aligned around About Us / Lisa's Journal level)
             ========================================================= */}
          <div className="lg:col-span-4 flex flex-col items-start pt-6 lg:pt-20 xl:pt-24 lg:pl-8 xl:pl-16 border-t border-white/10 lg:border-t-0 pb-16 lg:pb-0">
            <h3 className="font-playfair text-xl sm:text-2xl xl:text-[26px] text-white font-normal uppercase tracking-wide mb-5 sm:mb-6">
              HEAD OFFICE
            </h3>

            <div className="flex flex-col space-y-4 sm:space-y-5 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              <p className="text-neutral-400">Jenwey Tea Co. LLC</p>

              <div className="space-y-0.5">
                <p>Boston</p>
                <p>Las Vegas</p>
              </div>

              <p>Tel: 855 NE TEA CO</p>

              <div className="space-y-1">
                <p className="text-neutral-400">Email:</p>
                <p>
                  <a
                    href="mailto:info@jenweytea.com"
                    className="hover:text-white transition-colors"
                  >
                    info@jenweytea.com
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:orders@jenweytea.com"
                    className="hover:text-white transition-colors"
                  >
                    orders@jenweytea.com
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:wholesale@jenweytea.com"
                    className="hover:text-white transition-colors"
                  >
                    wholesale@jenweytea.com
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}
