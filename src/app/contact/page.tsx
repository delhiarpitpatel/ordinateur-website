"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/ui/Starfield";
import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { contactInfo as contactInfoConfig, socialLinks as socialLinksConfig, quickLinks, businessHours } from "@/config/contact";

// Add icons to contactInfo
const contactInfo = contactInfoConfig.map((info) => {
  let icon = null;
  if (info.title === "Email") icon = <Mail className="w-6 h-6" />;
  else if (info.title === "Phone") icon = <Phone className="w-6 h-6" />;
  else if (info.title === "Location") icon = <MapPin className="w-6 h-6" />;
  return { ...info, icon };
});

// Add icons to socialLinks
const socialLinks = socialLinksConfig.map((link) => {
  let icon = null;
  if (link.name === "Instagram") icon = <Instagram className="w-5 h-5" />;
  else if (link.name === "LinkedIn") icon = <Linkedin className="w-5 h-5" />;
  return { ...link, icon };
});

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
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

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
            className="max-w-3xl mx-auto text-center"
          >
            <div className="mb-6 inline-block">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-starlight/60 text-xs font-medium tracking-wider uppercase">
                Get In Touch
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-starlight via-starlight to-starlight/40">
              Contact Us
            </h1>
            <p className="text-starlight/60 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
              Have a question or want to collaborate? We'd love to hear from you. Get in touch with us and let's build something amazing together.
            </p>
          </motion.div>
        </section>

        {/* Contact Info Cards */}
        <section className="px-4 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-8 border-2 border-white/10 rounded-2xl backdrop-blur-sm hover:border-white/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-accretion mb-6 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{info.title}</h3>
                <p className="font-semibold mb-1 text-accretion">{info.value}</p>
                <p className="text-starlight/60 text-sm">{info.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Contact Form and Info */}
        <section className="px-4 py-20">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
                <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 border border-green-400/50 mb-6"
                    >
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-starlight/60">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <label className="block text-sm font-semibold text-white mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-starlight/40 focus:outline-none focus:border-accretion/50 focus:bg-white/[0.08] transition-all duration-300"
                        />
                      </motion.div>

                      {/* Email */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15 }}
                      >
                        <label className="block text-sm font-semibold text-white mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-starlight/40 focus:outline-none focus:border-accretion/50 focus:bg-white/[0.08] transition-all duration-300"
                        />
                      </motion.div>
                    </div>

                    {/* Subject */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-semibold text-white mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-starlight/40 focus:outline-none focus:border-accretion/50 focus:bg-white/[0.08] transition-all duration-300"
                      />
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.25 }}
                    >
                      <label className="block text-sm font-semibold text-white mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-starlight/40 focus:outline-none focus:border-accretion/50 focus:bg-white/[0.08] transition-all duration-300 resize-none"
                      />
                    </motion.div>

                    {/* Error Message */}
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-lg bg-red-500/20 border border-red-400/50 text-red-200 text-sm"
                      >
                        {error}
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={loading}
                      type="submit"
                      className="w-full px-8 py-3 bg-gradient-to-r from-accretion to-orange-500 text-void-dark font-bold rounded-lg hover:shadow-lg hover:shadow-accretion/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-void-dark border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Sidebar Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Quick Links */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
                <div className="space-y-3">
                  {quickLinks.map((link, idx) => (
                    <motion.a
                      key={idx}
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-starlight/70 hover:text-white transition-colors group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accretion" />
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.url}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 rounded-lg bg-white/5 border border-white/10 text-starlight/70 ${social.color} transition-all hover:border-white/30 transition-all`}
                      title={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-12 p-6 border border-white/10 rounded-2xl bg-white/[0.02]"
              >
                <h4 className="font-bold text-white mb-4">Business Hours</h4>
                <div className="space-y-2 text-sm text-starlight/60">
                  {businessHours.map((item, idx) => (
                    <div className="flex justify-between" key={idx}>
                      <span>{item.day}</span>
                      <span className="text-white">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-white/5 to-white/0 border border-white/10 rounded-3xl p-12 text-center backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Other Ways to Reach Us</h2>
            <p className="text-starlight/70 text-lg mb-8 max-w-2xl mx-auto">
              Whether you prefer email, phone, or social media, we're here to help. Choose the method that works best for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${contactInfo.find(info => info.title === "Email")?.value}`}
                className="px-8 py-3 bg-gradient-to-r from-accretion to-orange-500 text-void-dark font-bold rounded-lg hover:shadow-lg hover:shadow-accretion/50 transition-all duration-300"
              >
                Send Email
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`tel:${contactInfo.find(info => info.title === "Phone")?.value}`}
                className="px-8 py-3 border-2 border-white/20 text-white font-bold rounded-lg hover:bg-white/5 hover:border-white/50 transition-all duration-300"
              >
                Call Us
              </motion.a>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
