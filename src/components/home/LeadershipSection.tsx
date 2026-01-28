"use client";

import { motion } from "framer-motion";
import { executiveBoard } from "@/config/departments";
import { Linkedin, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export function LeadershipSection() {
  // Combine all executive roles into one array for a single grid display
  const allLeads = [...executiveBoard.convenors, ...executiveBoard.core];

  return (
    <section className="w-full py-24 px-4 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold font-sans tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-starlight to-starlight/40">
              Leadership
            </h2>
            <p className="text-starlight/60 text-lg font-light mt-4 max-w-xl">
              The visionaries and mentors steering Team Ordinateur 2025-26 towards technical excellence.
            </p>
          </motion.div>
          
          <Link href="/departments" className="group flex items-center gap-2 text-accretion font-bold tracking-widest uppercase text-xs">
            Meet Full Team <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Unified Grid for Convenors and Core Team */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {allLeads.map((member, idx) => {
            const isConvenor = member.role.includes("CONVENOR");
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative"
              >
                {/* Visual Glow for Leadership */}
                <div className="absolute -inset-0.5 bg-gradient-to-b from-accretion/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 group-hover:border-white/20">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent opacity-90" />
                  </div>
                  
                  <div className="p-5 relative">
                    <h4 className="text-white font-bold text-lg leading-tight truncate">
                      {member.name}
                    </h4>
                    <p className={`text-[10px] font-black ${isConvenor ? 'text-blue-400' : 'text-accretion'} uppercase tracking-[0.2em] mt-1`}>
                      {member.role}
                    </p>
                    
                    {/* Interaction Socials - Rendered by default, filtered by '-' values */}
                    <div className="flex gap-3 mt-4">
                    {member.linkedin !== "-" && (
                        <a 
                        href={member.linkedin === "#" ? "#" : `https://linkedin.com/in/${member.linkedin}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-starlight/60 hover:text-blue-400 transition-colors"
                        >
                        <Linkedin className="w-4 h-4" />
                        </a>
                    )}
                    
                    {member.email !== "-" && (
                        <a 
                        href={`mailto:${member.email}`} 
                        className="text-starlight/60 hover:text-white transition-colors"
                        >
                        <Mail className="w-4 h-4" />
                        </a>
                    )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}