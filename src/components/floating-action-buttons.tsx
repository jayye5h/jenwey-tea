"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

export function FloatingActionButtons() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setIsChatOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* =========================================================
          BOTTOM-LEFT: Floating Search Icon Button (Sticky)
         ========================================================= */}
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 select-none">
        <motion.button
          type="button"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.2 }}
          onClick={() => {
            setIsSearchOpen(true);
            setIsChatOpen(false);
          }}
          aria-label="Search"
          className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white text-neutral-900 shadow-2xl flex items-center justify-center cursor-pointer group"
        >
          <svg
            className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 text-neutral-900 transition-transform group-hover:scale-110"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.2" y2="16.2" />
          </svg>
        </motion.button>
      </div>

      {/* =========================================================
          BOTTOM-RIGHT: Floating "Let's Chat!" Button (Sticky)
         ========================================================= */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 select-none">
        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={() => {
            setIsChatOpen(!isChatOpen);
            setIsSearchOpen(false);
          }}
          aria-label="Let's Chat"
          className="bg-[#181818] hover:bg-[#222222] text-white px-3.5 py-2 sm:px-5 sm:py-3 rounded-xl border border-white/10 shadow-2xl flex items-center gap-2 sm:gap-2.5 cursor-pointer"
        >
          {/* Chat Bubble Icon with Lines */}
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[1.8]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <line x1="8" y1="9" x2="16" y2="9" />
            <line x1="8" y1="13" x2="14" y2="13" />
          </svg>
          <span className="font-sans text-xs sm:text-sm font-medium tracking-wide">
            Let&apos;s Chat!
          </span>
        </motion.button>
      </div>

      {/* =========================================================
          SEARCH MODAL / DRAWER (AnimatePresence enter & exit)
         ========================================================= */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-32 px-3 sm:px-4"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="w-full max-w-2xl bg-[#181818] border border-white/10 rounded-2xl p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
                  Search Jenwey Tea
                </span>
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="text-neutral-400 hover:text-white transition-colors p-1"
                  aria-label="Close search"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <div className="mt-4 flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <svg className="w-5 h-5 text-neutral-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.2" y2="16.2" />
                </svg>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search loose leaf teas, boutique blends, gifts..."
                  className="bg-transparent text-white placeholder:text-neutral-500 text-sm sm:text-base outline-none flex-1 font-sans"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-400">
                <span className="text-neutral-500">Popular:</span>
                <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setSearchQuery("Blooming Tea")}>Blooming Tea</span>
                <span>•</span>
                <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setSearchQuery("Luxe Fall Teas")}>Luxe Fall Teas</span>
                <span>•</span>
                <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setSearchQuery("Four Seasons Blend")}>Four Seasons Blend</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          CHAT BOX POPUP (AnimatePresence enter & exit)
         ========================================================= */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="fixed bottom-16 right-3 xs:bottom-20 xs:right-5 sm:bottom-22 sm:right-6 z-50 w-[calc(100vw-24px)] xs:w-[320px] sm:w-[360px] bg-[#181818] border border-white/15 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#121212] px-5 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <p className="text-sm font-medium text-white">Jenwey Tea Concierge</p>
                  <p className="text-[11px] text-neutral-400">Online 24 / 7</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsChatOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors p-1"
                aria-label="Close chat"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="p-5 space-y-3 max-h-[300px] overflow-y-auto text-xs text-neutral-300">
              <div className="bg-white/5 border border-white/5 rounded-xl p-3.5 leading-relaxed">
                Hello! Welcome to Jenwey Tea Co. How can our tea concierge assist you today?
              </div>
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10 bg-[#121212] flex items-center gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-white/5 text-white placeholder:text-neutral-500 text-xs px-3.5 py-2.5 rounded-lg outline-none border border-white/10 focus:border-white/30"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                className="bg-white text-black text-xs font-semibold px-3 py-2.5 rounded-lg hover:bg-neutral-200 transition-colors"
              >
                Send
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
