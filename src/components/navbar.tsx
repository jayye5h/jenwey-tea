"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { HamburgerIcon, CartIcon, Logo } from "@/components/icons";
import { MenuOverlay } from "@/components/menu-overlay";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "SHOP", href: "#shop" },
    { label: "COLLECTIONS", href: "#collections" },
    { label: "TEA OF THE MONTH", href: "#tea-of-the-month" },
    { label: "HOSPITALITY", href: "#hospitality" },
    { label: "FOOD ATELIER", href: "#food-atelier" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#131313] text-[#f5f5f5] transition-all">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Top-aligned navbar items: shifted higher up together with comfortable top padding */}
          <div className="relative flex items-start justify-between h-[88px] pt-2.5 sm:pt-3">

            {/* =========================================================
                LEFT SECTION: Hamburger Menu + Nav Items
                (Locked together on the same centerline, positioned upward)
               ========================================================= */}
            <div className="flex items-center gap-2 sm:gap-3.5 xl:gap-4 max-w-[calc(50%-75px)] sm:max-w-[calc(50%-100px)] flex-1 min-w-0">
              {/* Hamburger Button (Opens Navigation Overlay) */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className="group p-0 bg-transparent hover:bg-transparent border-0 outline-none flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 shrink-0 cursor-pointer transition-transform hover:scale-105"
                aria-label="Open menu"
              >
                <HamburgerIcon className="size-6 sm:size-7 md:size-8 text-white group-hover:text-neutral-400 transition-colors duration-200" />
              </button>

              {/* Desktop Navigation Links */}
              <nav className="hidden lg:flex items-center  gap-2.5 xl:gap-3 flex-shrink">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-heading text-[11px] xl:text-[11.5px] font-medium tracking-[0.04em] uppercase whitespace-nowrap text-[#ffffff] hover:opacity-80 transition-opacity duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* =========================================================
                CENTER SECTION: The Signature Arch Logo Crest
                - Responsive width on mobile: 140px -> 180px -> 195px
                - Upward-aligned logo
                - Visible bottom roundness
               ========================================================= */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[38%] z-30 pointer-events-auto">
              <Link
                href="/"
                className="group flex flex-col items-center justify-center bg-[#131313] w-[150px] xs:w-[165px] sm:w-[180px] md:w-[195px] pt-1 pb-7 sm:pb-9 md:pb-7 shadow-2xl transition-all duration-300 hover:scale-[1.01]"
                style={{
                  borderBottomLeftRadius: "50% 100%",
                  borderBottomRightRadius: "50% 100%",
                }}
                aria-label="Jenwey Tea Co. Home"
              >
                <Logo className="h-[38px] xs:h-[42px] sm:h-[46px] md:h-[48px] w-auto text-white -translate-y-2.5 sm:-translate-y-3.5 md:-translate-y-4 transition-opacity" />
              </Link>
            </div>

            {/* =========================================================
                RIGHT SECTION: Login & Shopping Bag with Item Counter
               ========================================================= */}
            <div className="flex items-start justify-end gap-2.5 sm:gap-5 md:gap-7 flex-1">
              {/* Login Button */}
              <Button
                variant="ghost"
                className="font-heading text-[10px] sm:text-[11px] xl:text-[12px] font-medium tracking-[0.06em] text-[#ffffff] hover:text-white hover:bg-white/5 px-2 sm:px-2.5 py-1 sm:py-1.5 h-auto uppercase mt-1.5 sm:mt-2"
              >
                LOG IN
              </Button>

              {/* Cart / Shopping Bag Button (Using official SVG with built-in count) */}
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-white hover:bg-white/10 rounded-full h-10 w-10 sm:h-12 sm:w-12 shrink-0 p-0 flex items-center justify-center transition-transform hover:scale-105"
                aria-label="Shopping Cart"
              >
                <CartIcon count={0} className="size-6 sm:size-7 md:size-8 text-white" />
              </Button>
            </div>

          </div>
        </div>
      </header>

      {/* Fullscreen Navigation Menu Overlay with AnimatePresence */}
      <AnimatePresence>
        {isMenuOpen && (
          <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
