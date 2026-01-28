"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { CoreModules } from "@/components/home/CoreModules";
import { PartnersMarquee } from "@/components/home/PartnersMarquee";
import { EventSlider } from "@/components/home/EventSlider";
import { DepartmentDeck } from "@/components/home/DepartmentDeck";
import { LeadershipSection } from "@/components/home/LeadershipSection"; // NEW IMPORT
import { Starfield } from "@/components/ui/Starfield";

export default function Home() {
  return (
    <main className="min-h-screen bg-void text-starlight selection:bg-accretion selection:text-void-dark relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Starfield />
      </div>

      <Navbar />
      
      <div className="relative z-10">
         <div className="snap-start min-h-screen flex items-center justify-center w-full">
            <Hero />
         </div>

         <div className="snap-start min-h-screen flex items-center justify-center w-full">
            <AboutSection />
         </div>

         <div className="snap-start min-h-screen flex items-center justify-center w-full">
            <CoreModules />
         </div>

         <div className="snap-start min-h-screen flex items-center justify-center w-full">
            <EventSlider />
         </div>

         {/* Departments Snap */}
         <div className="snap-start min-h-screen flex items-center justify-center w-full">
            <DepartmentDeck />
         </div>
         
         {/* Leadership Snap */}
         <div className="snap-start min-h-screen flex items-center justify-center w-full">
            <LeadershipSection />
         </div>

         <div className="snap-start w-full">
            <PartnersMarquee />
            <Footer />
         </div>
      </div>
    </main>
  );
}