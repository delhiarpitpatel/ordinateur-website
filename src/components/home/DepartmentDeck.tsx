"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { departmentsList, DepartmentId } from "@/config/departments";

export function DepartmentDeck() {
  // Initialize with the new full-name ID
  const [active, setActive] = useState<DepartmentId>("technical");
  const runwayRef = useRef<HTMLDivElement>(null);

  const scrollToDept = (index: number) => {
    if (!runwayRef.current) return;

    const rect = runwayRef.current.getBoundingClientRect();
    const totalHeight = rect.height - window.innerHeight;
    const absoluteTop = window.scrollY + rect.top;
    
    // Calculate position based on the index of the departmentsList
    const targetScroll = absoluteTop + (index / departmentsList.length) * totalHeight + 50;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!runwayRef.current) return;

      const rect = runwayRef.current.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;
      
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / totalHeight));
      const departmentIndex = Math.floor(scrollProgress * departmentsList.length);
      const safeIndex = Math.min(departmentIndex, departmentsList.length - 1);
      
      setActive(departmentsList[safeIndex].id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[400vh] bg-void" ref={runwayRef}>
      <div className="sticky top-0 h-screen w-full flex items-center px-4 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="flex flex-col md:flex-row items-end justify-between mb-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-starlight/60 text-xs font-medium tracking-wider uppercase">
                  Team structure
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold font-sans tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-starlight to-starlight/40">
                Departments
              </h2>
            </div>
            <p className="text-starlight/60 text-lg font-light tracking-wide max-w-md md:text-right">
              The five specialized pillars that drive Ordinateur's vision.
            </p>
          </div>

          <div className="flex flex-col md:flex-row h-[500px] border border-white/10 mb-4 rounded-3xl overflow-hidden bg-white/[0.02]">
            {departmentsList.map((dept, index) => (
              <motion.div 
                key={dept.id}
                layout
                onClick={() => scrollToDept(index)}
                className={cn(
                  "relative overflow-hidden cursor-pointer bg-transparent border-b md:border-b-0 md:border-r border-white/10 last:border-0 transition-all duration-700 ease-in-out",
                  active === dept.id 
                    ? "flex-[3] bg-white/[0.07] shadow-[inset_0_0_50px_rgba(255,255,255,0.02)]" 
                    : "flex-[0.5] hover:bg-white/[0.02]"
                )}
              >
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
                  {active !== dept.id && (
                    <div className="h-full flex items-center justify-center">
                      <div className="md:-rotate-90 whitespace-nowrap text-xl font-bold text-white/20 tracking-widest uppercase transition-colors hover:text-white/40">
                        {dept.name}
                      </div>
                    </div>
                  )}

                  {active === dept.id && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="h-full flex flex-col"
                    >
                      <div className="flex items-start justify-between mb-auto">
                        <div className="w-12 h-12 rounded-xl border border-accretion/30 bg-accretion/10 flex items-center justify-center text-accretion">
                          {dept.icon}
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-accretion font-bold border border-accretion/30 px-2 py-1 rounded">
                          {dept.label}
                        </span>
                      </div>
                      
                      <div>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{dept.name}</h3>
                        <p className="text-starlight/60 text-lg leading-relaxed mb-8 max-w-lg">{dept.description}</p>
                        
                        <div className="flex gap-2 mb-8">
                          {dept.tags.map(tag => (
                            <span key={tag} className="text-xs font-mono text-white/50 bg-white/5 px-2 py-1 rounded border border-white/5">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Link href={`/departments/${dept.id}`} className="flex items-center gap-2 text-white font-bold tracking-wide hover:text-accretion transition-colors group">
                          Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </div>

                {active === dept.id && (
                  <motion.div 
                    layoutId="activeBorder" 
                    className="absolute top-0 left-0 w-full h-[2px] bg-accretion shadow-[0_0_15px_rgba(var(--accretion-rgb),0.5)]" 
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}