"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/ui/Starfield";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { departmentsList, executiveBoard } from "@/config/departments";

export default function DepartmentsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-void text-starlight relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Starfield />
      </div>

      <Navbar />

      <div className="relative z-10">
        {/* 1. HERO & DEPARTMENTS SECTION (NOW FIRST) */}
        <section className="px-4 pt-32 pb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="text-center mb-20"
            >
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-starlight to-starlight/40">
                Departments
              </h1>
              <p className="text-starlight/60 text-lg max-w-2xl mx-auto">
                Explore the five specialized wings that drive our technical and creative initiatives. 
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departmentsList.map((dept) => (
                <motion.div
                  key={dept.id}
                  whileHover={{ y: -10 }}
                  className="group relative h-96 cursor-pointer"
                >
                  <Link href={`/departments/${dept.id}`} className="absolute inset-0 z-20" />
                  <div className={`absolute -inset-0.5 rounded-2xl blur-2xl opacity-10 group-hover:opacity-30 transition-opacity ${dept.bgColor}`} />
                  
                  <div className="relative h-full bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md overflow-hidden transition-all duration-300 group-hover:border-white/30">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${dept.color}`} />
                    <div className={`w-14 h-14 rounded-xl border border-white/10 ${dept.bgColor} flex items-center justify-center ${dept.accent} mb-6`}>
                      {dept.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">{dept.name}</h3>
                    <p className="text-starlight/60 text-sm leading-relaxed mb-6">{dept.description}</p>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-starlight/40 group-hover:text-white transition-colors">
                      View Department <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. LEADERSHIP SECTION (FOLLOWING DEPARTMENTS) */}
        <section className="px-4 py-24 border-t border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white/90">
                Leadership
              </h2>
              <div className="h-1 w-24 bg-accretion mx-auto mt-4 rounded-full" />
              <p className="text-starlight/60 text-lg mt-6">
                The Executive Board and faculty mentors guiding Team Ordinateur.
              </p>
            </motion.div>

            {/* Convenors */}
            <div className="flex flex-wrap justify-center gap-8 mb-24">
              {executiveBoard.convenors.map((member, idx) => (
                <ExecCard key={idx} member={member} isConvenor />
              ))}
            </div>

            {/* Core & Joint Executive Team */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {executiveBoard.core.map((member, idx) => (
                <ExecCard key={idx} member={member} />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

function ExecCard({ member, isConvenor = false }: { member: any; isConvenor?: boolean }) {
  return (
    <motion.div whileHover={{ y: -8 }} className={`text-center group ${isConvenor ? 'w-64' : 'w-full'}`}>
      <div className={`relative ${isConvenor ? 'h-72' : 'h-40'} mb-4 rounded-xl overflow-hidden border border-white/10 bg-white/5`}>
        <img 
          src={member.photo} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80" />
      </div>
      <h4 className={`${isConvenor ? 'text-xl' : 'text-sm'} font-bold text-white truncate`}>
        {member.name}
      </h4>
      <p className="text-[10px] font-black text-accretion uppercase tracking-widest mt-1">
        {member.role} 
      </p>
    </motion.div>
  );
}