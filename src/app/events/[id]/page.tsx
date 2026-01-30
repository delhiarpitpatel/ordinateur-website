"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/ui/Starfield";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Users, Share2, Bell, Clock, Target } from "lucide-react";
import { useParams } from "next/navigation";

import { useMemo, useState } from "react";
import devfest2024 from "@/config/eventConfigs/devfest-2024";
import ctfChampionship from "@/config/eventConfigs/ctf-championship";
import webBootcamp from "@/config/eventConfigs/web-bootcamp";
import designWorkshop from "@/config/eventConfigs/design-workshop";
import innovationSummit from "@/config/eventConfigs/innovation-summit";
import codingChallenge from "@/config/eventConfigs/coding-challenge";

const eventsData = {
  "devfest-2024": devfest2024,
  "ctf-championship": ctfChampionship,
  "web-bootcamp": webBootcamp,
  "design-workshop": designWorkshop,
  "innovation-summit": innovationSummit,
  "coding-challenge": codingChallenge
};

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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function EventDetailPage() {
  const params = useParams();
  const eventId = params.id as string;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const event = useMemo(() => {
    return eventsData[eventId as keyof typeof eventsData];
  }, [eventId]);

  if (!event) {
    return (
      <main className="min-h-screen bg-void text-starlight flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
          <Link href="/events" className="text-blue-400 hover:text-blue-300">
            ← Back to Events
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-void text-starlight selection:bg-accretion selection:text-void-dark relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Starfield />
      </div>

      <Navbar />

      <div className="relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-4 pt-8"
        >
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-starlight/60 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Events
          </Link>
        </motion.div>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
          <div className="max-w-5xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="mb-6 inline-block">
                <span className="text-xs uppercase tracking-widest font-bold border border-accretion/40 px-3 py-1.5 rounded-md bg-white/5 text-accretion">
                  {event.category}
                </span>
              </div>
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold font-sans tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-starlight/40">
                {event.title}
              </h1>
              <p className="text-xl md:text-2xl text-starlight/80 max-w-3xl font-light">
                {event.fullDescription}
              </p>
            </motion.div>

            {/* Event Details Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            >
              <motion.div
                variants={itemVariants}
                className="p-6 border-2 border-accretion/40 bg-white/10 rounded-2xl backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-accretion flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-starlight/60 text-sm mb-1">Date</p>
                    <p className="font-bold text-white">{event.date}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="p-6 border-2 border-accretion/40 bg-white/10 rounded-2xl backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-accretion flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-starlight/60 text-sm mb-1">Time</p>
                    <p className="font-bold text-white">{event.time}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="p-6 border-2 border-accretion/40 bg-white/10 rounded-2xl backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accretion flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-starlight/60 text-sm mb-1">Location</p>
                    <p className="font-bold text-white">{event.location}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="p-6 border-2 border-accretion/40 bg-white/10 rounded-2xl backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-accretion flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-starlight/60 text-sm mb-1">Expected</p>
                    <p className="font-bold text-white">{event.attendees}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Register Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-accretion to-orange-500 text-void-dark font-bold rounded-lg hover:shadow-lg hover:shadow-accretion/50 transition-all duration-300 flex items-center gap-2"
              >
                <Bell className="w-5 h-5" />
                Register for Event
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Event Banner Image */}
        <section className="px-4 py-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-white/10"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-96 object-cover"
            />
          </motion.div>
        </section>

        {/* Highlights Section */}
        <section className="px-4 py-20 relative">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-12"
            >
              What to Expect
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {event.highlights.map((highlight: string, idx: number) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-6 border-2 border-accretion/40 bg-white/10 rounded-2xl backdrop-blur-sm group hover:border-white/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accretion/10 border-2 border-accretion/40 flex items-center justify-center flex-shrink-0 text-accretion font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-starlight/80 group-hover:text-white transition-colors text-lg">{highlight}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="px-4 py-20 relative">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-12"
            >
              Event Schedule
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {event.schedule.map((item: { time: string; event: string }, idx: number) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center gap-6 p-6 border-l-4 border-accretion/80 bg-white/[0.02] rounded-r-2xl hover:bg-white/5 transition-all duration-300"
                >
                  <div className="text-lg font-bold text-accretion min-w-32">{item.time}</div>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                  <div className="text-starlight/80">{item.event}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="px-4 py-20 relative">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-12"
            >
              Event Gallery
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {event.gallery.map((image: string, idx: number) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  onClick={() => setSelectedImage(image)}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group cursor-pointer relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 h-64"
                >
                  <motion.img
                    src={image}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/50"
                    >
                      <Share2 className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <img
                src={selectedImage}
                alt="Gallery"
                className="w-full rounded-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 rounded-full transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* CTA Section */}
        <section className="px-4 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-white/5 to-white/0 border border-white/10 rounded-3xl p-12 text-center backdrop-blur-sm"
          >
            <h2 className="text-4xl font-bold mb-4">Don't Miss Out!</h2>
            <p className="text-starlight/70 text-lg mb-8 max-w-2xl mx-auto">
              Register now to secure your spot at this incredible event. Limited seats available!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-accretion to-orange-500 text-void-dark font-bold rounded-lg hover:shadow-lg hover:shadow-accretion/50 transition-all duration-300"
            >
              Secure Your Spot
            </motion.button>
          </motion.div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
