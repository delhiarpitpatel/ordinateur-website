"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/ui/Starfield";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin, Users, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { events } from "@/config/eventConfigs/list";

const events = [
  {
    id: "devfest-2024",
    title: "DevFest 2024",
    description: "Join us for an exciting festival of technology, innovation, and learning.",
    date: "March 15, 2024",
    location: "Hansraj College",
    attendees: "500+",
    category: "Festival",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    accent: "text-blue-400",
    accentBorder: "border-blue-400/30",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    fullDescription: "DevFest is our flagship event where developers, designers, and innovators come together. Features keynote speeches, workshops, hackathons, and networking sessions."
  },
  {
    id: "ctf-championship",
    title: "CTF Championship",
    description: "Capture The Flag competition showcasing cybersecurity skills.",
    date: "February 10, 2024",
    location: "Online",
    attendees: "200+",
    category: "Competition",
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-500/10",
    accent: "text-red-400",
    accentBorder: "border-red-400/30",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    fullDescription: "A competitive cybersecurity event where teams solve challenges, find vulnerabilities, and demonstrate their hacking skills in a legal and ethical environment."
  },
  {
    id: "web-bootcamp",
    title: "Web Development Bootcamp",
    description: "Intensive workshop on modern web technologies and best practices.",
    date: "January 20, 2024",
    location: "Hansraj College",
    attendees: "150+",
    category: "Workshop",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    accent: "text-purple-400",
    accentBorder: "border-purple-400/30",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    fullDescription: "A comprehensive bootcamp covering frontend frameworks, backend development, APIs, databases, and deployment strategies."
  },
  {
    id: "design-workshop",
    title: "UI/UX Design Workshop",
    description: "Learn to create stunning user interfaces and experiences.",
    date: "February 25, 2024",
    location: "Hansraj College",
    attendees: "100+",
    category: "Workshop",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    accent: "text-pink-400",
    accentBorder: "border-pink-400/30",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
    fullDescription: "Master the principles of user interface and user experience design. Learn prototyping, wireframing, and design tools."
  },
  {
    id: "innovation-summit",
    title: "Innovation Summit",
    description: "Connecting innovators, entrepreneurs, and tech enthusiasts.",
    date: "March 30, 2024",
    location: "Hansraj College",
    attendees: "300+",
    category: "Conference",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    accent: "text-green-400",
    accentBorder: "border-green-400/30",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    fullDescription: "A platform for sharing innovative ideas, pitching projects, and networking with like-minded individuals in the tech community."
  },
  {
    id: "coding-challenge",
    title: "Monthly Coding Challenge",
    description: "Solve algorithmic problems and showcase your coding prowess.",
    date: "Every Month",
    location: "Online",
    attendees: "250+",
    category: "Competition",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
    accent: "text-yellow-400",
    accentBorder: "border-yellow-400/30",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    fullDescription: "A recurring monthly competition where programmers tackle challenging problems, compete for prizes, and improve their algorithmic thinking."
  }
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function EventsPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

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
                What's Happening
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-starlight via-starlight to-starlight/40">
              Events
            </h1>
            <p className="text-starlight/60 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
              Discover workshops, competitions, and conferences that bring our community together.
            </p>
          </motion.div>
        </section>

        {/* Events Grid */}
        <section className="px-4 py-20 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {events.map((event: any) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredId(event.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative h-96 cursor-pointer"
                >
                  {/* Animated background orb */}
                  <motion.div
                    className="absolute -inset-0.5 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 bg-accretion/20"
                  />

                  {/* Card Container */}
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-full bg-white/[0.05] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm group-hover:border-white/30 transition-all duration-300"
                  >
                    {/* Image Section */}
                    <div className="relative w-full h-48 overflow-hidden bg-white/5">
                      <motion.img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void/80" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="text-xs uppercase tracking-widest font-bold border border-accretion/40 px-2.5 py-1.5 rounded-md bg-white/5 group-hover:border-accretion/80 text-accretion transition-all duration-300">
                          {event.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="relative p-6 h-48 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2">
                          {event.title}
                        </h3>
                        <p className="text-starlight/70 text-sm line-clamp-2">
                          {event.description}
                        </p>
                      </div>

                      {/* Event Info */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-starlight/60 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-starlight/60 text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-starlight/60 text-sm">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees}</span>
                        </div>
                      </div>

                      {/* CTA Link */}
                      <Link
                        href={`/events/${event.id}`}
                        className="inline-flex items-center gap-2 text-white font-semibold tracking-wide group/btn hover:text-accretion transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Gradient accent line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accretion to-orange-500 origin-left"
                    />

                    {/* Full card link overlay */}
                    <Link href={`/events/${event.id}`} className="absolute inset-0" />
                  </motion.div>

                  {/* Decorative corner accent */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full blur-3xl opacity-0 group-hover:opacity-30 bg-accretion/20 transition-opacity duration-300"
                  />
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
              <Sparkles className="w-8 h-8 text-accretion" />
              Stay Updated
            </h2>
            <p className="text-starlight/70 text-lg mb-8 max-w-2xl mx-auto">
              Follow our social channels to stay informed about upcoming events, registrations, and announcements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-accretion to-orange-500 text-void-dark font-bold rounded-lg hover:shadow-lg hover:shadow-accretion/50 transition-all duration-300"
            >
              Join Our Community
            </motion.button>
          </motion.div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
