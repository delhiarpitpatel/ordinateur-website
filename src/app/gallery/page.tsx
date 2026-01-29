"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/ui/Starfield";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { Search, Download, Heart, Share2 } from "lucide-react";

const galleryCategories = [
  {
    id: "events",
    name: "Events",
    label: "CELEBRATIONS",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    accent: "text-blue-400",
    accentBorder: "border-blue-400/30",
    count: 24
  },
  {
    id: "workshops",
    name: "Workshops",
    label: "LEARNING",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    accent: "text-purple-400",
    accentBorder: "border-purple-400/30",
    count: 18
  },
  {
    id: "hackathon",
    name: "Hackathon",
    label: "INNOVATION",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    accent: "text-green-400",
    accentBorder: "border-green-400/30",
    count: 32
  },
  {
    id: "team",
    name: "Team",
    label: "TOGETHER",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    accent: "text-orange-400",
    accentBorder: "border-orange-400/30",
    count: 28
  },
  {
    id: "projects",
    name: "Projects",
    label: "CREATION",
    color: "from-rose-500 to-red-500",
    bgColor: "bg-rose-500/10",
    accent: "text-rose-400",
    accentBorder: "border-rose-400/30",
    count: 20
  },
  {
    id: "competitions",
    name: "Competitions",
    label: "CHALLENGE",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-500/10",
    accent: "text-indigo-400",
    accentBorder: "border-indigo-400/30",
    count: 26
  }
];

const galleryImages = {
  events: [
    { id: 1, src: "https://images.unsplash.com/photo-1540575467063-178f50002c4b?w=500&h=500&fit=crop", title: "Tech Talk 2024", date: "Jan 15, 2024" },
    { id: 2, src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop", title: "Developer Meetup", date: "Jan 20, 2024" },
    { id: 3, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", title: "Conference 2024", date: "Feb 01, 2024" },
    { id: 4, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", title: "Panel Discussion", date: "Feb 10, 2024" },
    { id: 5, src: "https://images.unsplash.com/photo-1540575467063-178f50002c4b?w=500&h=500&fit=crop", title: "Networking Event", date: "Feb 15, 2024" },
    { id: 6, src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop", title: "Community Gathering", date: "Mar 01, 2024" },
  ],
  workshops: [
    { id: 1, src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop", title: "Web Dev Workshop", date: "Jan 22, 2024" },
    { id: 2, src: "https://images.unsplash.com/photo-1516534775068-bb57e39c1a9d?w=500&h=500&fit=crop", title: "React Masterclass", date: "Feb 05, 2024" },
    { id: 3, src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop", title: "Python Basics", date: "Feb 12, 2024" },
    { id: 4, src: "https://images.unsplash.com/photo-1516534775068-bb57e39c1a9d?w=500&h=500&fit=crop", title: "DevOps Training", date: "Feb 20, 2024" },
    { id: 5, src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop", title: "UI/UX Workshop", date: "Mar 05, 2024" },
    { id: 6, src: "https://images.unsplash.com/photo-1516534775068-bb57e39c1a9d?w=500&h=500&fit=crop", title: "Mobile Dev Session", date: "Mar 15, 2024" },
  ],
  hackathon: [
    { id: 1, src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop", title: "Hackathon Day 1", date: "Feb 24, 2024" },
    { id: 2, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", title: "Coding Challenge", date: "Feb 25, 2024" },
    { id: 3, src: "https://images.unsplash.com/photo-1540575467063-178f50002c4b?w=500&h=500&fit=crop", title: "Team Collaboration", date: "Feb 25, 2024" },
    { id: 4, src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop", title: "Final Presentations", date: "Feb 26, 2024" },
    { id: 5, src: "https://images.unsplash.com/photo-1516534775068-bb57e39c1a9d?w=500&h=500&fit=crop", title: "Winner Announcement", date: "Feb 26, 2024" },
    { id: 6, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", title: "Prize Distribution", date: "Feb 27, 2024" },
  ],
  team: [
    { id: 1, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", title: "Team Outing", date: "Jan 30, 2024" },
    { id: 2, src: "https://images.unsplash.com/photo-1540575467063-178f50002c4b?w=500&h=500&fit=crop", title: "Office Moments", date: "Feb 08, 2024" },
    { id: 3, src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop", title: "Team Building", date: "Feb 18, 2024" },
    { id: 4, src: "https://images.unsplash.com/photo-1516534775068-bb57e39c1a9d?w=500&h=500&fit=crop", title: "Department Vibes", date: "Mar 02, 2024" },
    { id: 5, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", title: "Casual Meetup", date: "Mar 10, 2024" },
    { id: 6, src: "https://images.unsplash.com/photo-1540575467063-178f50002c4b?w=500&h=500&fit=crop", title: "Team Celebration", date: "Mar 20, 2024" },
  ],
  projects: [
    { id: 1, src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop", title: "Website Redesign", date: "Jan 2024" },
    { id: 2, src: "https://images.unsplash.com/photo-1516534775068-bb57e39c1a9d?w=500&h=500&fit=crop", title: "Mobile App Launch", date: "Feb 2024" },
    { id: 3, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", title: "Platform Upgrade", date: "Feb 2024" },
    { id: 4, src: "https://images.unsplash.com/photo-1540575467063-178f50002c4b?w=500&h=500&fit=crop", title: "API Integration", date: "Mar 2024" },
    { id: 5, src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop", title: "Dashboard Development", date: "Mar 2024" },
    { id: 6, src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop", title: "Database Migration", date: "Apr 2024" },
  ],
  competitions: [
    { id: 1, src: "https://images.unsplash.com/photo-1540575467063-178f50002c4b?w=500&h=500&fit=crop", title: "CTF Competition", date: "Feb 10, 2024" },
    { id: 2, src: "https://images.unsplash.com/photo-1516534775068-bb57e39c1a9d?w=500&h=500&fit=crop", title: "Coding Contest", date: "Feb 17, 2024" },
    { id: 3, src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop", title: "Design Challenge", date: "Feb 24, 2024" },
    { id: 4, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", title: "Quiz Night", date: "Mar 08, 2024" },
    { id: 5, src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop", title: "Speed Coding", date: "Mar 15, 2024" },
    { id: 6, src: "https://images.unsplash.com/photo-1540575467063-178f50002c4b?w=500&h=500&fit=crop", title: "Bug Bounty Finale", date: "Mar 25, 2024" },
  ]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: { duration: 0.2 },
  },
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("events");
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages.events)[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const currentImages = useMemo(() => {
    const images = galleryImages[activeCategory as keyof typeof galleryImages] || [];
    if (!searchQuery) return images;
    return images.filter(
      (img) =>
        img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        img.date.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeCategory, searchQuery]);

  const activeData = galleryCategories.find((cat) => cat.id === activeCategory);

  return (
    <main className="min-h-screen bg-void text-starlight selection:bg-accretion selection:text-void-dark relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Starfield />
      </div>

      <Navbar />

      <div className="relative z-10">
        {/* Header Section */}
        <section className="min-h-[50vh] flex flex-col items-center justify-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-6 inline-block">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-starlight/60 text-xs font-medium tracking-wider uppercase">
                Visual Stories
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-starlight via-starlight to-starlight/40">
              Gallery
            </h1>
            <p className="text-starlight/60 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
              Explore moments from our events, workshops, hackathons, and community gatherings.
            </p>
          </motion.div>
        </section>

        {/* Search Bar */}
        <section className="px-4 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-starlight/40" />
              <input
                type="text"
                placeholder="Search by title or date..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-starlight/40 focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all duration-300"
              />
            </div>
          </motion.div>
        </section>

        {/* Category Filter */}
        <section className="px-4 pb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
              {galleryCategories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative p-4 rounded-xl border-2 transition-all duration-300 group overflow-hidden ${
                    activeCategory === category.id
                      ? `${category.bgColor} ${category.accentBorder} bg-opacity-30`
                      : "border-white/10 bg-white/[0.02] hover:bg-white/5"
                  }`}
                >
                  {/* Background gradient on active */}
                  {activeCategory === category.id && (
                    <motion.div
                      layoutId="activeCategory"
                      className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-5`}
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  <div className="relative z-10">
                    <p className={`text-xs font-bold tracking-wider uppercase mb-1 ${category.accent}`}>
                      {category.label}
                    </p>
                    <h3 className="text-sm md:text-base font-bold text-white">{category.name}</h3>
                    <p className="text-xs text-starlight/50 mt-1">{category.count} photos</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Gallery Grid */}
        <section className="px-4 pb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              key={activeCategory}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="wait">
                {currentImages.map((image) => (
                  <motion.div
                    key={image.id}
                    variants={itemVariants}
                    className="group relative cursor-pointer h-72 rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300"
                    onClick={() => setSelectedImage(image)}
                  >
                    {/* Image */}
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 p-6 text-white"
                    >
                      <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                      <p className="text-sm text-starlight/70 mb-4">{image.date}</p>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                        >
                          <Heart className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                        >
                          <Share2 className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors ml-auto"
                        >
                          <Download className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* No Results */}
            {currentImages.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-starlight/60 text-lg">No images found for "{searchQuery}"</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-void/80 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full"
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full rounded-2xl"
                />

                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-void/50 hover:bg-void/70 transition-colors backdrop-blur-sm"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>

                {/* Image Info */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 text-center"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                  <p className="text-starlight/60">{selectedImage.date}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Section */}
        <section className="px-4 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto bg-gradient-to-r from-white/5 to-white/0 border border-white/10 rounded-3xl p-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-accretion mb-2">156+</p>
                <p className="text-starlight/60">Total Photos</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accretion mb-2">6</p>
                <p className="text-starlight/60">Categories</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accretion mb-2">50+</p>
                <p className="text-starlight/60">Events Captured</p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
