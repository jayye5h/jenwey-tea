import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProudlyServed } from "@/components/proudly-served";
import { HospitalityPartner } from "@/components/hospitality-partner";
import { StickyShowcase } from "@/components/sections/StickyShowcase";
import { IndulgeLuxury } from "@/components/sections/IndulgeLuxury";
import { BoutiqueCollection } from "@/components/sections/BoutiqueCollection";
import { LisasJournal } from "@/components/sections/LisasJournal";
import { AboutUs } from "@/components/sections/AboutUs";
import { FooterSection } from "@/components/sections/FooterSection";
import { FloatingActionButtons } from "@/components/floating-action-buttons";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#131313] text-[#f5f5f5] flex flex-col selection:bg-amber-900/40 selection:text-amber-100">
      {/* 1. Header / Navigation Bar */}
      <Navbar />

      {/* 2. Main Page Content */}
      <main className="flex-1 flex flex-col">
        <Hero />
        <ProudlyServed />
        <HospitalityPartner />
        <StickyShowcase />
        <IndulgeLuxury />
        <BoutiqueCollection />
        <LisasJournal />
        <AboutUs />
        <FooterSection />
      </main>

      {/* 3. Sticky Floating Action Buttons (Search & Let's Chat!) */}
      <FloatingActionButtons />
    </div>
  );
}
