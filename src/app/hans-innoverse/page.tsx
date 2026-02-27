"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/ui/Starfield";
import { motion, Variants } from "framer-motion";
import {
  Calendar,
  MapPin,
  Trophy,
  Users,
  Lightbulb,
  CheckCircle2,
  AlertCircle,
  Code2,
  Globe2,
  Shield,
  Heart,
  TrendingUp,
  Brain,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const themes = [
  {
    title: "From Waste to Worth",
    subtitle: "The Circular Economy",
    desc: "Projects leveraging blockchain for supply chain transparency, plastic credit, and tech-enabled e-waste management systems.",
    icon: <Globe2 className="w-8 h-8" />,
    color: "from-accretion/80 via-accretion to-accretion/80",
    border: "group-hover:border-accretion/40"
  },
  {
    title: "Harvest Horizons",
    subtitle: "Where Innovation Feeds the Future",
    desc: "Projects using precision agriculture, IoT sensors, and smart supply chain management to optimize crop production and reduce waste.",
    icon: <Lightbulb className="w-8 h-8" />,
    color: "from-accretion/80 via-accretion to-accretion/80",
    border: "group-hover:border-accretion/40"
  },
  {
    title: "Guarding Paths",
    subtitle: "Sustainable Transport & Security",
    desc: "AI-powered surveillance, smart traffic systems, and IoT-based monitoring to enhance passenger safety and protect infrastructure.",
    icon: <Shield className="w-8 h-8" />,
    color: "from-accretion/80 via-accretion to-accretion/80",
    border: "group-hover:border-accretion/40"
  },
  {
    title: "Designing Dignity",
    subtitle: "Where Inclusion Becomes Innovation",
    desc: "AI assistive technologies, accessible UX/UI, and secure digital systems enabling safety, independence, and dignity.",
    icon: <Heart className="w-8 h-8" />,
    color: "from-accretion/80 via-accretion to-accretion/80",
    border: "group-hover:border-accretion/40"
  },
  {
    title: "Empowered Finance",
    subtitle: "Knowledge that Builds Futures",
    desc: "Financial education tools, fintech systems, and fraud detection to help individuals manage and grow their finances responsibly.",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "from-accretion/80 via-accretion to-accretion/80",
    border: "group-hover:border-accretion/40"
  },
  {
    title: "Healing Minds",
    subtitle: "Where Awareness Meets Action",
    desc: "Personalized well-being platforms, digital therapeutics, and conversational agents to enable accessible mental health care.",
    icon: <Brain className="w-8 h-8" />,
    color: "from-accretion/80 via-accretion to-accretion/80",
    border: "group-hover:border-accretion/40"
  },
];

const timeline = [
  {
    stage: "PPT Submission",
    dates: "22 Feb '26 - 10 Mar '26",
    desc: "Submit a detailed PPT outlining the problem statement, proposed solution, innovation, approach, and technologies to be used.",
  },
  {
    stage: "Online Presentation",
    dates: "16 Mar '26 - 21 Mar '26",
    desc: "Present your ideas virtually to a panel of experts. Judges will assess technical feasibility and implementation strategy.",
  },
  {
    stage: "Offline Hackathon",
    dates: "23 Mar '26 - 31 Mar '26",
    desc: "Finalists will participate in an on-campus hackathon, developing a functional prototype. Evaluates execution, teamwork, and applicability.",
  },
];

const prizes = [
  { title: "Winner", amount: "₹5,000", subtitle: "Cash + Certificate", icon: <Trophy className="w-10 h-10 text-accretion" /> },
  { title: "1st Runner-up", amount: "₹3,000", subtitle: "Cash + Certificate", icon: <Trophy className="w-8 h-8 text-starlight" /> },
  { title: "2nd Runner-up", amount: "₹2,000", subtitle: "Cash + Certificate", icon: <Trophy className="w-8 h-8 text-starlight/60" /> },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HackathonPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-void text-starlight selection:bg-accretion selection:text-void-dark relative overflow-x-hidden">
      {/* Background Texture & Particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Starfield />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <Navbar />

      <div className="relative z-10 pt-32 pb-20">
        
        {/* =========================================
            1. HERO SECTION (Centered Layout)
        ========================================= */}
        <section className="w-full px-4 mb-32 relative">
          <div className="max-w-5xl mx-auto min-h-[70vh] flex flex-col items-center justify-center text-center relative z-20">
             
             {/* Background glow for hero centered */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-accretion/20 via-transparent to-cyan-500/10 rounded-full blur-[120px] opacity-50 pointer-events-none z-0" />

             <motion.div
               initial="hidden"
               animate="visible"
               variants={containerVariants}
               className="relative z-10 flex flex-col items-center"
             >
               {/* Prize Pool Highlight Badge */}
               <motion.div variants={itemVariants} className="mb-10 group cursor-default">
                  <div className="relative p-[1px] rounded-full overflow-hidden inline-block shadow-[0_0_40px_rgba(234,179,8,0.2)] group-hover:shadow-[0_0_60px_rgba(234,179,8,0.4)] transition-shadow duration-500">
                     <span className="absolute inset-0 bg-gradient-to-r from-accretion via-accretion-glow to-accretion opacity-80 group-hover:opacity-100 animate-[spin_4s_linear_infinite]" />
                     <div className="relative bg-void/90 backdrop-blur-xl px-8 py-3 rounded-full flex items-center gap-4">
                        <Trophy className="w-6 h-6 text-accretion" />
                        <div className="flex flex-col text-left">
                           <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-starlight/60 leading-none mb-1">Total Prize Pool</span>
                           <span className="text-2xl font-black text-white leading-none tracking-tight">₹10,000+</span>
                        </div>
                     </div>
                  </div>
               </motion.div>

               {/* <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
                 <span className="px-5 py-2 rounded-full border border-accretion/20 bg-accretion/5 text-accretion text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md shadow-[0_0_20px_rgba(234,179,8,0.1)] flex items-center gap-2">
                   <Sparkles className="w-3.5 h-3.5" /> Innovation Hackathon
                 </span>
               </motion.div> */}
               
               <motion.h1 variants={itemVariants} className="flex flex-col items-center text-6xl md:text-7xl lg:text-[6.5rem] font-sans font-black tracking-tighter leading-[0.9] text-white mb-8">
                 <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-sm text-center pb-2">Hans</span>
                 <div className="flex items-start justify-center">
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-accretion via-accretion-glow to-accretion-amber filter drop-shadow-[0_0_40px_rgba(234,179,8,0.3)] pb-2">
                      Innoverse 2.0
                   </span>
                   {/* <span className="text-3xl md:text-5xl lg:text-[5rem] font-mono font-bold text-white/20 ml-2 md:ml-4 mt-1 md:mt-3 lg:mt-5 select-none tracking-normal">
                      2.0
                   </span> */}
                 </div>
               </motion.h1>
               
               <motion.p variants={itemVariants} className="text-xl md:text-2xl text-starlight/70 font-light leading-relaxed mb-12 max-w-3xl text-center">
                 &ldquo;Innovating Today for a Sustainable Tomorrow.&rdquo;<br/>Build impactful, tech-driven solutions for global challenges.
               </motion.p>
               
               {/* Event Meta Details Grid */}
               <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 border-t border-b border-white/10 py-6 max-w-4xl w-full">
                  <div className="text-center">
                     <span className="block text-xs uppercase tracking-[0.2em] text-starlight/40 font-semibold mb-2">Registration</span>
                     <span className="block text-lg font-bold text-white">Closes Mar 10</span>
                  </div>
                  <div className="w-px bg-white/10 hidden sm:block" />
                  <div className="text-center">
                     <span className="block text-xs uppercase tracking-[0.2em] text-starlight/40 font-semibold mb-2">Venue</span>
                     <span className="block text-lg font-bold text-white">Hansraj College</span>
                  </div>
                  <div className="w-px bg-white/10 hidden sm:block" />
                  <div className="text-center">
                     <span className="block text-xs uppercase tracking-[0.2em] text-starlight/40 font-semibold mb-2">Team Size</span>
                     <span className="block text-lg font-bold text-white">2 - 4 Members</span>
                  </div>
               </motion.div>

               <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6">
                  <a href="https://unstop.com/p/hans-innoverse-20-hansraj-collegeuniversity-of-delhi-1646585" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-accretion text-void text-lg font-bold rounded-full hover:bg-accretion-glow hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(234,179,8,0.4)] flex items-center gap-2 group cursor-pointer w-full sm:w-auto justify-center">
                     Register on Unstop <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#themes" className="px-10 py-5 bg-white/5 border border-white/10 text-white text-lg font-bold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-md w-full sm:w-auto text-center">
                     Explore Themes
                  </a>
               </motion.div>
             </motion.div>

          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

        {/* =========================================
            2. ABOUT & ELIGIBILITY (Architectural Cards)
        ========================================= */}
        <section className="px-6 mb-32 relative">
           <div className="absolute -left-40 top-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none opacity-50" />
           <div className="max-w-[1400px] mx-auto">
             
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Vision Text */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-12"
                >
                   <div className="flex items-center gap-4 mb-6">
                      <div className="h-px w-12 bg-accretion" />
                      <span className="text-sm font-mono tracking-widest text-accretion uppercase">Hackathon Overview</span>
                   </div>
                   <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold font-sans tracking-tight text-white mb-8 leading-[1.1]">
                      Empowering builders to solve the unsolvable.
                   </h2>
                   <p className="text-starlight/60 text-lg md:text-xl font-light leading-relaxed mb-8">
                     <strong className="text-white font-medium">हंसInnoverse 2.0</strong> is a multi-stage innovation hackathon designed to encourage students to ideate, design, and develop impactful technology-driven solutions addressing pressing global and societal challenges with a focus on sustainability, inclusivity, security, and future readiness.
                   </p>
                </motion.div>

                {/* Eligibility Bento Grid */}
                <div className="lg:col-span-5 grid gap-4 grid-cols-2">
                   {/* Main criteria block */}
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: 0.1 }}
                     className="col-span-2 p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.04] transition-colors relative overflow-hidden group"
                   >
                     <div className="absolute top-0 right-0 p-6 pointer-events-none">
                       <CheckCircle2 className="w-16 h-16 text-white/[0.03] group-hover:text-white/[0.06] transition-colors" />
                     </div>
                     <h3 className="text-xl font-bold text-white mb-6">Eligibility Tracks</h3>
                     <div className="flex flex-wrap gap-2">
                       {["Undergraduate", "Postgraduate", "Engineering", "Arts & Comm.", "Sciences", "Medical", "Law"].map(track => (
                         <span key={track} className="px-3 py-1.5 rounded-lg border border-white/10 bg-void/50 text-[11px] uppercase tracking-wider text-starlight/70">
                           {track}
                         </span>
                       ))}
                     </div>
                   </motion.div>

                   {/* Small stats blocks */}
                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                     className="p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent flex flex-col justify-between h-[160px]"
                   >
                     <Users className="w-6 h-6 text-starlight/40 mb-2" />
                     <div>
                       <span className="block text-2xl font-bold text-white mb-1">2-4</span>
                       <span className="block text-xs uppercase tracking-widest text-starlight/50 font-medium">Members/Team</span>
                     </div>
                   </motion.div>
                   
                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: 0.3 }}
                     className="p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-accretion/10 to-transparent flex flex-col justify-between h-[160px]"
                   >
                     <Globe2 className="w-6 h-6 text-accretion/80 mb-2" />
                     <div>
                       <span className="block text-xl font-bold text-white mb-1 leading-tight">Inter-college</span>
                       <span className="block text-xs uppercase tracking-widest text-accretion/60 font-medium">Teams Allowed</span>
                     </div>
                   </motion.div>
                </div>
             </div>

           </div>
        </section>

        {/* =========================================
            3. HACKATHON THEMES (Masonry/Responsive Grid)
        ========================================= */}
        <section id="themes" className="px-6 mb-32 relative">
           <div className="max-w-[1400px] mx-auto">
             
             <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 px-2">
               <div>
                 <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-starlight/40 uppercase">Problem Statements</span>
                 </div>
                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tighter text-white">
                    Core Sub-Themes
                 </h2>
               </div>
               <p className="text-starlight/60 max-w-md md:text-right font-light text-lg">
                 Choose a domain and build innovative solutions using modern tech stacks.
               </p>
             </div>

             <motion.div 
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
             >
                {themes.map((theme, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className={cn(
                      "group relative rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col p-8 cursor-default hover:shadow-[0_20px_40px_-15px_rgba(234,179,8,0.1)]",
                      theme.border
                    )}
                  >
                    {/* Background Noise & Overlay Effects */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />
                    
                    {/* Top Glow Edge (Like Departments) */}
                    <div className={cn("absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r opacity-20 group-hover:opacity-100 transition-opacity", theme.color)} />
                    
                    {/* Glowing Orbs in Corners */}
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-accretion/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-accretion/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    {/* Watermark Number */}
                    <div className="absolute -right-2 -bottom-6 text-[120px] font-bold text-white/[0.02] group-hover:text-white/[0.04] transition-colors select-none font-sans tracking-tighter z-0 pointer-events-none leading-none">
                       0{idx + 1}
                    </div>

                    <div className="relative z-10 flex flex-col h-full bg-transparent">
                       <div className="w-14 h-14 rounded-2xl border border-white/10 bg-void/40 flex items-center justify-center text-starlight/80 group-hover:text-void group-hover:bg-accretion group-hover:border-accretion group-hover:scale-110 transition-all duration-300 mb-8 shadow-xl relative overflow-hidden backdrop-blur-md">
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          {theme.icon}
                       </div>
                       
                       <div className="mb-4">
                          <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-accretion/60 mb-2 truncate bg-transparent">
                             {theme.title}
                          </h4>
                          <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-accretion transition-colors bg-transparent">
                             {theme.subtitle}
                          </h3>
                       </div>

                       <p className="text-starlight/60 text-sm leading-relaxed font-light mt-auto transition-colors bg-transparent">
                          {theme.desc}
                       </p>
                    </div>
                  </motion.div>
                ))}
             </motion.div>

           </div>
        </section>

        {/* =========================================
            4. TIMELINE & REWARDS (Advanced Custom Layout)
        ========================================= */}
        <section className="px-6 mb-20 relative">
          <div className="absolute right-0 bottom-0 w-[800px] h-[800px] bg-gradient-to-tl from-accretion/5 via-transparent to-transparent rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
             
             {/* LEFT: TIMELINE */}
             <div>
                <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4 border-b border-white/10 pb-6">
                  <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-starlight/60">
                    <Calendar className="w-4 h-4" />
                  </span>
                  Execution Stages
                </h2>
                
                <div className="space-y-0 relative before:absolute before:inset-y-0 before:left-[19px] before:w-px before:bg-white/10">
                  {timeline.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 }}
                      className="relative pl-14 pb-12 last:pb-0 group"
                    >
                      {/* Timeline Node */}
                      <div className="absolute left-3 top-1 w-3.5 h-3.5 rounded-full border-2 border-void bg-white/20 group-hover:bg-accretion group-hover:border-accretion group-hover:scale-150 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.5)] transition-all duration-500 z-10" />
                      
                      <div className="group-hover:-translate-y-1 transition-transform duration-500">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                           <h4 className="text-xl font-bold text-white">{item.stage}</h4>
                           <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-accretion font-semibold flex items-center gap-1.5 leading-none">
                              {item.dates}
                           </span>
                        </div>
                        <p className="text-starlight/60 text-sm leading-relaxed max-w-md">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
             </div>

             {/* RIGHT: PRIZES & RULES */}
             <div className="space-y-10">
                <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4 border-b border-white/10 pb-6">
                  <span className="w-8 h-8 rounded-lg bg-accretion/10 border border-accretion/20 flex items-center justify-center text-accretion">
                    <Trophy className="w-4 h-4" />
                  </span>
                  Rewards & Guidelines
                </h2>

                {/* Prize Stack */}
                <div className="relative">
                  {prizes.map((prize, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className={cn(
                        "relative p-6 rounded-3xl border backdrop-blur-md flex items-center justify-between group overflow-hidden hover:-translate-y-1 transition-all duration-300",
                        idx === 0 
                          ? "bg-gradient-to-r from-accretion/10 to-transparent border-accretion/30 shadow-[0_10px_40px_-10px_rgba(234,179,8,0.15)] mb-4" 
                          : "bg-white/[0.02] border-white/10 mb-3"
                      )}
                    >
                      {idx === 0 && <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />}
                      <div className="flex items-center gap-5 relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-void/50 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-inner">
                          {prize.icon}
                        </div>
                        <div>
                          <h4 className={cn("text-lg font-bold mb-1", idx === 0 ? "text-accretion" : "text-white")}>{prize.title}</h4>
                          <p className="text-xs text-starlight/50 uppercase tracking-wider">{prize.subtitle}</p>
                        </div>
                      </div>
                      <div className={cn("text-2xl md:text-3xl font-black relative z-10", idx === 0 ? "text-white drop-shadow-md" : "text-white/80")}>
                        {prize.amount}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Guidelines Notice */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] text-sm text-starlight/60 flex items-start gap-4 hover:border-white/10 transition-colors"
                >
                  <AlertCircle className="w-5 h-5 text-starlight/40 mt-0.5 shrink-0" />
                  <p className="font-light leading-relaxed">
                    Solutions must be original and developed exclusively during the hackathon timeline. Open-source libraries are permitted with proper attribution. Full evaluation criteria focuses on theme alignment, technical implementation, and innovation.
                  </p>
                </motion.div>
             </div>

          </div>
        </section>

        {/* =========================================
            5. FINAL CTA
        ========================================= */}
        <section className="px-6 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-[1400px] mx-auto relative rounded-[3rem] overflow-hidden border border-white/10 bg-void"
          >
            {/* CTA Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-accretion/10 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-[80px]" />
            
            <div className="relative z-10 p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12">
               <div>
                  <h2 className="text-4xl md:text-6xl font-black text-white font-sans tracking-tight mb-4 leading-tight max-w-2xl">
                    Ready to build the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accretion to-accretion-amber">next big thing?</span>
                  </h2>
                  <p className="text-starlight/60 text-lg md:text-xl font-light max-w-xl">
                    Registrations are closing soon. Gather your team and join the Innoverse.
                  </p>
               </div>
               
               <div className="shrink-0 flex flex-col items-center">
                 <a href="https://unstop.com/p/hans-innoverse-20-hansraj-collegeuniversity-of-delhi-1646585" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden rounded-full p-[1px] inline-block mb-3">
                    <span className="absolute inset-0 bg-gradient-to-r from-accretion via-accretion-glow to-accretion opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_3s_linear_infinite]" />
                    <div className="relative px-12 py-5 bg-void rounded-full flex items-center justify-center gap-3">
                       <span className="text-white font-bold text-lg group-hover:text-accretion transition-colors duration-300">
                         Register Now
                       </span>
                       <ArrowRight className="w-5 h-5 text-accretion group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                 </a>
                 <div className="text-[10px] text-starlight/40 uppercase tracking-widest font-mono">Via Unstop Platform</div>
               </div>
            </div>
          </motion.div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
