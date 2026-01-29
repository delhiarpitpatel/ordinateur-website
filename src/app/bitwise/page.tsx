"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/ui/Starfield";
import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Download, Calendar, Users, ArrowRight, FileText } from "lucide-react";
import { useState } from "react";

const magazines = [
  {
    year: "2024",
    title: "Bitwise Magazine 2024",
    description: "Latest edition featuring cutting-edge tech trends, AI innovations, and developer insights.",
    month: "December 2024",
    issues: 4,
    articles: "45+",
    contributors: "50+",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    accent: "text-blue-400",
    accentBorder: "border-blue-400/30",
    cover: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=500&h=700&fit=crop",
    featured: true
  },
  {
    year: "2023",
    title: "Bitwise Magazine 2023",
    description: "Annual compilation of tech excellence, innovation stories, and community highlights.",
    month: "December 2023",
    issues: 4,
    articles: "42+",
    contributors: "48+",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    accent: "text-purple-400",
    accentBorder: "border-purple-400/30",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=700&fit=crop"
  },
  {
    year: "2022",
    title: "Bitwise Magazine 2022",
    description: "A year of revolutionary development, open-source contributions, and tech breakthroughs.",
    month: "December 2022",
    issues: 4,
    articles: "40+",
    contributors: "45+",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    accent: "text-green-400",
    accentBorder: "border-green-400/30",
    cover: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=700&fit=crop"
  },
  {
    year: "2021",
    title: "Bitwise Magazine 2021",
    description: "Chronicles of digital transformation, web3 emergence, and developer community growth.",
    month: "December 2021",
    issues: 4,
    articles: "38+",
    contributors: "42+",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    accent: "text-orange-400",
    accentBorder: "border-orange-400/30",
    cover: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=700&fit=crop"
  },
  {
    year: "2020",
    title: "Bitwise Magazine 2020",
    description: "The year of remote development, cloud computing, and community collaboration.",
    month: "December 2020",
    issues: 4,
    articles: "36+",
    contributors: "40+",
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-500/10",
    accent: "text-rose-400",
    accentBorder: "border-rose-400/30",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=700&fit=crop"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function MagazinePage() {
  const [hoveredYear, setHoveredYear] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-void text-starlight selection:bg-accretion selection:text-void-dark relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Starfield />
      </div>

      <Navbar />

      <div className="relative z-10">
        {/* Header Section */}
        <section className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-6 inline-block">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-starlight/60 text-xs font-medium tracking-wider uppercase">
                Our Publications
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-starlight via-starlight to-starlight/40">
              Bitwise Magazine
            </h1>
            <p className="text-starlight/60 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
              Explore our annual publications featuring the best in technology, innovation, and community stories from Ordinateur.
            </p>
          </motion.div>
        </section>

        {/* Featured Magazine */}
        <section className="px-4 py-20 relative">
          <div className="max-w-6xl mx-auto">
            {magazines.filter(mag => mag.featured).map((magazine) => (
              <motion.div
                key={magazine.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-20"
              >
                <p className="text-sm font-semibold tracking-widest uppercase text-accretion mb-8">
                  Latest Release
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Magazine Cover */}
                  <motion.div
                    whileHover={{ y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden group"
                  >
                    <img
                      src={magazine.cover}
                      alt={magazine.title}
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    {/* Featured Badge */}
                    <div className="absolute top-6 right-6">
                      <span className="px-4 py-2 rounded-full bg-accretion text-void-dark font-bold uppercase text-xs tracking-wider">
                        Featured
                      </span>
                    </div>

                    {/* Download Button Overlay */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100"
                    >
                      <button className="w-full px-6 py-3 bg-accretion text-void-dark font-bold rounded-lg hover:shadow-lg hover:shadow-accretion/50 transition-all duration-300 flex items-center justify-center gap-2">
                        <Download className="w-5 h-5" />
                        Download PDF
                      </button>
                    </motion.div>
                  </motion.div>

                  {/* Magazine Info */}
                  <div className="lg:col-span-2">
                    <div className="mb-6">
                      <span className={`text-xs uppercase tracking-widest font-bold border border-white/20 px-3 py-1.5 rounded-md bg-white/5 ${magazine.accent}`}>
                        Annual Edition
                      </span>
                    </div>
                    
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                      {magazine.title}
                    </h2>
                    
                    <p className="text-starlight/70 text-lg leading-relaxed mb-8">
                      {magazine.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      <div>
                        <p className={`text-sm font-semibold ${magazine.accent} mb-2 uppercase tracking-wider`}>Issues</p>
                        <p className="text-3xl font-bold text-white">{magazine.issues}</p>
                      </div>
                      <div>
                        <p className={`text-sm font-semibold ${magazine.accent} mb-2 uppercase tracking-wider`}>Articles</p>
                        <p className="text-3xl font-bold text-white">{magazine.articles}</p>
                      </div>
                      <div>
                        <p className={`text-sm font-semibold ${magazine.accent} mb-2 uppercase tracking-wider`}>Contributors</p>
                        <p className="text-3xl font-bold text-white">{magazine.contributors}</p>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href={`/bitwise/${magazine.year}`}
                        className="px-8 py-3 bg-gradient-to-r from-accretion to-orange-500 text-void-dark font-bold rounded-lg hover:shadow-lg hover:shadow-accretion/50 transition-all duration-300 flex items-center justify-center gap-2 group"
                      >
                        Read Now
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <button className="px-8 py-3 border-2 border-white/20 text-white font-bold rounded-lg hover:bg-white/5 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2">
                        <Download className="w-5 h-5" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* All Magazines Grid */}
        <section className="px-4 py-20 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold">Past Editions</h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {magazines.filter(mag => !mag.featured).map((magazine) => (
                <motion.div
                  key={magazine.year}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredYear(magazine.year)}
                  onMouseLeave={() => setHoveredYear(null)}
                  className="group cursor-pointer"
                >
                  <Link href={`/bitwise/${magazine.year}`} className="block">
                    {/* Magazine Cover */}
                    <motion.div
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="relative h-80 rounded-2xl overflow-hidden mb-4 border border-white/10 group-hover:border-white/30 transition-all duration-300"
                    >
                      <img
                        src={magazine.cover}
                        alt={magazine.title}
                        className="w-full h-full object-cover"
                      />
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${magazine.bgColor}`}
                      />
                      
                      {/* Year Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`text-sm font-bold px-3 py-1 rounded-lg bg-void/80 backdrop-blur-sm border border-white/20 ${magazine.accent}`}>
                          {magazine.year}
                        </span>
                      </div>
                    </motion.div>

                    {/* Magazine Info */}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accretion transition-colors">
                      {magazine.title}
                    </h3>
                    
                    <p className="text-starlight/70 text-sm mb-4 line-clamp-2">
                      {magazine.description}
                    </p>

                    {/* Quick Stats */}
                    <div className="flex items-center gap-4 text-xs text-starlight/60">
                      <span className="flex items-center gap-1">
                        <FileText className="w-3 h-3" />
                        {magazine.articles} Articles
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {magazine.contributors} Authors
                      </span>
                    </div>

                    {/* Hover CTA */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-4 flex items-center gap-2 text-white font-semibold group/btn hover:text-accretion transition-colors opacity-0 group-hover:opacity-100"
                    >
                      View Issue
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="px-4 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-white/5 to-white/0 border border-white/10 rounded-3xl p-12 text-center backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <BookOpen className="w-8 h-8 text-accretion" />
              Subscribe to Updates
            </h2>
            <p className="text-starlight/70 text-lg mb-8 max-w-2xl mx-auto">
              Get notified when new issues are released. Stay updated with the latest from Bitwise Magazine.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-accretion to-orange-500 text-void-dark font-bold rounded-lg hover:shadow-lg hover:shadow-accretion/50 transition-all duration-300"
            >
              Subscribe Now
            </motion.button>
          </motion.div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
