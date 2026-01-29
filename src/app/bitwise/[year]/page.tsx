"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/ui/Starfield";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Download, Calendar, FileText, Users, ExternalLink } from "lucide-react";
import { useParams } from "next/navigation";
import { useMemo } from "react";

const magazineDetails = {
  "2024": {
    title: "Bitwise Magazine 2024",
    subtitle: "The Year of AI Innovation & Cloud Evolution",
    description: "Our most comprehensive edition yet, featuring groundbreaking innovations in artificial intelligence, cloud computing, and sustainable tech.",
    year: "2024",
    month: "December 2024",
    issues: 4,
    articles: "45+",
    contributors: "50+",
    pages: "320",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    accent: "text-blue-400",
    accentBorder: "border-blue-400/30",
    cover: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=800&h=1000&fit=crop",
    featured: [
      {
        title: "The Future of AI Ethics",
        author: "Dr. Sarah Chen",
        preview: "Exploring the intersection of artificial intelligence and ethical responsibility in modern development.",
        pages: "12-28"
      },
      {
        title: "Cloud Native Applications",
        author: "Rahul Patel",
        preview: "A deep dive into microservices architecture and Kubernetes in production environments.",
        pages: "30-45"
      },
      {
        title: "Web3 Revolution: One Year Later",
        author: "Ananya Sharma",
        preview: "Reflecting on the progress and challenges of decentralized applications.",
        pages: "48-65"
      },
      {
        title: "DevOps Best Practices 2024",
        author: "Marcus Johnson",
        preview: "Modern approaches to continuous integration, deployment, and monitoring.",
        pages: "68-82"
      }
    ],
    sections: [
      { title: "Feature Articles", count: "12", description: "In-depth explorations of tech trends" },
      { title: "Tutorials & Guides", count: "18", description: "Hands-on learning resources" },
      { title: "Community Stories", count: "15", description: "Inspiring narratives from developers" },
      { title: "Industry Insights", count: "8", description: "Expert analysis and predictions" }
    ],
    aboutSection: "Bitwise Magazine 2024 captures the pulse of the technology world during a transformative year. From the explosive growth of generative AI to the maturation of cloud-native architectures, this edition covers the stories that matter to developers, innovators, and tech enthusiasts. Featuring contributions from industry leaders, emerging voices, and the vibrant Ordinateur community, this magazine is a must-read for anyone passionate about technology.",
    downloadUrl: "#",
    issuesList: [
      { issue: "Issue 1", month: "March 2024", theme: "Spring Innovation" },
      { issue: "Issue 2", month: "June 2024", theme: "Summer Dev Trends" },
      { issue: "Issue 3", month: "September 2024", theme: "Fall Tech Breakthroughs" },
      { issue: "Issue 4", month: "December 2024", theme: "Annual Review" }
    ],
    contributors: [
      { name: "Dr. Sarah Chen", role: "Chief Editor", articles: 4 },
      { name: "Rahul Patel", role: "Tech Writer", articles: 5 },
      { name: "Ananya Sharma", role: "Contributing Editor", articles: 3 },
      { name: "Marcus Johnson", role: "DevOps Expert", articles: 2 },
      { name: "Lisa Wang", role: "Designer", articles: 3 },
      { name: "Aditya Sharma", role: "Managing Editor", articles: 2 }
    ]
  },
  "2023": {
    title: "Bitwise Magazine 2023",
    subtitle: "Building Tomorrow's Technology Today",
    description: "A showcase of innovation, growth, and community excellence throughout 2023.",
    year: "2023",
    month: "December 2023",
    issues: 4,
    articles: "42+",
    contributors: "48+",
    pages: "300",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    accent: "text-purple-400",
    accentBorder: "border-purple-400/30",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=1000&fit=crop",
    featured: [
      {
        title: "React 18: New Paradigms",
        author: "Frontend Team",
        preview: "Understanding the latest features and best practices in modern React development.",
        pages: "10-24"
      },
      {
        title: "GraphQL vs REST: The Real Comparison",
        author: "API Architects",
        preview: "A comprehensive analysis of both approaches in real-world scenarios.",
        pages: "26-40"
      },
      {
        title: "Cybersecurity Essentials",
        author: "Security Team",
        preview: "Critical practices every developer should know about security.",
        pages: "42-58"
      },
      {
        title: "Open Source Contributions",
        author: "Community Spotlight",
        preview: "Stories of developers making an impact through open source.",
        pages: "60-74"
      }
    ],
    sections: [
      { title: "Feature Articles", count: "10", description: "In-depth explorations of tech trends" },
      { title: "Tutorials & Guides", count: "16", description: "Hands-on learning resources" },
      { title: "Community Stories", count: "14", description: "Inspiring narratives from developers" },
      { title: "Industry Insights", count: "7", description: "Expert analysis and predictions" }
    ],
    aboutSection: "The 2023 edition of Bitwise Magazine celebrates a year of remarkable technological progress. Featuring breakthroughs in cloud infrastructure, the evolution of frontend frameworks, and the growing importance of cybersecurity, this magazine documents the journey of modern development. With contributions from industry veterans and emerging talents, it represents the diverse voices shaping our digital future.",
    downloadUrl: "#",
    issuesList: [
      { issue: "Issue 1", month: "March 2023", theme: "Web Innovation" },
      { issue: "Issue 2", month: "June 2023", theme: "Summer Development" },
      { issue: "Issue 3", month: "September 2023", theme: "Backend Evolution" },
      { issue: "Issue 4", month: "December 2023", theme: "Year in Review" }
    ],
    contributors: [
      { name: "Frontend Team", role: "Lead Writers", articles: 5 },
      { name: "API Architects", role: "Technical Authors", articles: 4 },
      { name: "Security Team", role: "Security Experts", articles: 3 },
      { name: "Community Manager", role: "Editor", articles: 2 },
      { name: "Design Team", role: "Creative Directors", articles: 3 },
      { name: "Contributing Writers", role: "Guest Authors", articles: 25 }
    ]
  },
  "2022": {
    title: "Bitwise Magazine 2022",
    subtitle: "Innovation in a Changing World",
    description: "Capturing the essence of 2022's technological advancements and community milestones.",
    year: "2022",
    month: "December 2022",
    issues: 4,
    articles: "40+",
    contributors: "45+",
    pages: "280",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    accent: "text-green-400",
    accentBorder: "border-green-400/30",
    cover: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=1000&fit=crop",
    featured: [
      {
        title: "The Metaverse Explained",
        author: "Future Tech Team",
        preview: "Understanding the next frontier of digital interaction.",
        pages: "8-22"
      },
      {
        title: "Sustainable Coding Practices",
        author: "Green Tech Initiative",
        preview: "How developers can reduce their environmental footprint.",
        pages: "24-38"
      },
      {
        title: "TypeScript: A Complete Guide",
        author: "Language Experts",
        preview: "From basics to advanced patterns in modern TypeScript.",
        pages: "40-54"
      },
      {
        title: "Community Spotlights",
        author: "Social Impact Team",
        preview: "Celebrating remarkable contributions from our community.",
        pages: "56-70"
      }
    ],
    sections: [
      { title: "Feature Articles", count: "9", description: "In-depth explorations of tech trends" },
      { title: "Tutorials & Guides", count: "15", description: "Hands-on learning resources" },
      { title: "Community Stories", count: "12", description: "Inspiring narratives from developers" },
      { title: "Industry Insights", count: "6", description: "Expert analysis and predictions" }
    ],
    aboutSection: "2022 was a year of transformation in the tech industry. Bitwise Magazine 2022 chronicles this journey, exploring emerging technologies like the metaverse, the critical importance of sustainability, and the continued evolution of programming languages. With voices from across our global community, this edition reflects the diverse interests and talents of the development world.",
    downloadUrl: "#",
    issuesList: [
      { issue: "Issue 1", month: "March 2022", theme: "Spring Technologies" },
      { issue: "Issue 2", month: "June 2022", theme: "DevOps Focus" },
      { issue: "Issue 3", month: "September 2022", theme: "Design Systems" },
      { issue: "Issue 4", month: "December 2022", theme: "Annual Roundup" }
    ],
    contributors: [
      { name: "Future Tech Team", role: "Lead Writers", articles: 4 },
      { name: "Green Tech Initiative", role: "Sustainability Focus", articles: 3 },
      { name: "Language Experts", role: "Technical Authors", articles: 4 },
      { name: "Editorial Board", role: "Editors", articles: 2 },
      { name: "Designer Squad", role: "Creative Team", articles: 2 },
      { name: "Community Writers", role: "Contributors", articles: 25 }
    ]
  },
  "2021": {
    title: "Bitwise Magazine 2021",
    subtitle: "Remote Development & Digital Innovation",
    description: "A reflective look at the global shift to remote development and digital transformation.",
    year: "2021",
    month: "December 2021",
    issues: 4,
    articles: "38+",
    contributors: "42+",
    pages: "260",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    accent: "text-orange-400",
    accentBorder: "border-orange-400/30",
    cover: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=1000&fit=crop",
    featured: [
      {
        title: "Remote Development Best Practices",
        author: "Remote Work Experts",
        preview: "Thriving in a distributed development environment.",
        pages: "6-20"
      },
      {
        title: "Web3 & Blockchain Basics",
        author: "Crypto Technology Team",
        preview: "Understanding decentralized applications and smart contracts.",
        pages: "22-36"
      },
      {
        title: "Performance Optimization",
        author: "Speed Engineering Team",
        preview: "Making applications faster and more efficient.",
        pages: "38-52"
      },
      {
        title: "2021 Tech Trends",
        author: "Industry Analysts",
        preview: "Looking back at the year's biggest technological developments.",
        pages: "54-68"
      }
    ],
    sections: [
      { title: "Feature Articles", count: "8", description: "In-depth explorations of tech trends" },
      { title: "Tutorials & Guides", count: "14", description: "Hands-on learning resources" },
      { title: "Community Stories", count: "11", description: "Inspiring narratives from developers" },
      { title: "Industry Insights", count: "5", description: "Expert analysis and predictions" }
    ],
    aboutSection: "The 2021 edition of Bitwise Magazine documents a transformative year for the development community. With remote work becoming the norm, new technologies gaining prominence, and the community adapting to global challenges, this magazine captures stories of resilience, innovation, and collaboration from developers worldwide.",
    downloadUrl: "#",
    issuesList: [
      { issue: "Issue 1", month: "March 2021", theme: "Remote First" },
      { issue: "Issue 2", month: "June 2021", theme: "Innovation Focus" },
      { issue: "Issue 3", month: "September 2021", theme: "Web3 Rise" },
      { issue: "Issue 4", month: "December 2021", theme: "Year Review" }
    ],
    contributors: [
      { name: "Remote Work Experts", role: "Lead Writers", articles: 4 },
      { name: "Crypto Technology Team", role: "Blockchain Focus", articles: 3 },
      { name: "Speed Engineering Team", role: "Performance Experts", articles: 3 },
      { name: "Editorial Team", role: "Editors", articles: 2 },
      { name: "Design Team", role: "Creatives", articles: 2 },
      { name: "Community Contributors", role: "Guest Writers", articles: 24 }
    ]
  },
  "2020": {
    title: "Bitwise Magazine 2020",
    subtitle: "The Year of Digital Transformation",
    description: "Inaugural year capturing the essential shift to digital-first development and innovation.",
    year: "2020",
    month: "December 2020",
    issues: 4,
    articles: "36+",
    contributors: "40+",
    pages: "240",
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-500/10",
    accent: "text-rose-400",
    accentBorder: "border-rose-400/30",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1000&fit=crop",
    featured: [
      {
        title: "Going Digital: A Developer's Guide",
        author: "Digital Transformation Team",
        preview: "Essential insights for navigating the new digital landscape.",
        pages: "4-18"
      },
      {
        title: "Serverless Architecture",
        author: "Cloud Experts",
        preview: "Understanding and implementing serverless applications.",
        pages: "20-34"
      },
      {
        title: "COVID-19 & Development",
        author: "Community Voices",
        preview: "How developers adapted to unprecedented global challenges.",
        pages: "36-50"
      },
      {
        title: "The Future of Work",
        author: "Industry Forecasters",
        preview: "Predictions for the next decade of software development.",
        pages: "52-66"
      }
    ],
    sections: [
      { title: "Feature Articles", count: "8", description: "In-depth explorations of tech trends" },
      { title: "Tutorials & Guides", count: "12", description: "Hands-on learning resources" },
      { title: "Community Stories", count: "10", description: "Inspiring narratives from developers" },
      { title: "Industry Insights", count: "5", description: "Expert analysis and predictions" }
    ],
    aboutSection: "Bitwise Magazine 2020 marks our inaugural year, launched during a transformative period for global technology. This edition captures the essence of rapid digital transformation, the rise of serverless architecture, and the remarkable resilience of the development community in unprecedented times.",
    downloadUrl: "#",
    issuesList: [
      { issue: "Issue 1", month: "March 2020", theme: "Digital Foundations" },
      { issue: "Issue 2", month: "June 2020", theme: "Cloud Evolution" },
      { issue: "Issue 3", month: "September 2020", theme: "Adaptation & Growth" },
      { issue: "Issue 4", month: "December 2020", theme: "Inaugural Review" }
    ],
    contributors: [
      { name: "Digital Transformation Team", role: "Founders", articles: 4 },
      { name: "Cloud Experts", role: "Technical Leaders", articles: 3 },
      { name: "Community Voices", role: "Community Editors", articles: 3 },
      { name: "Founding Editors", role: "Editorial Board", articles: 2 },
      { name: "Creative Directors", role: "Design", articles: 2 },
      { name: "Launch Contributors", role: "Guest Writers", articles: 22 }
    ]
  }
};

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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function MagazineDetailPage() {
  const params = useParams();
  const year = params.year as string;

  const magazine = useMemo(() => {
    return magazineDetails[year as keyof typeof magazineDetails];
  }, [year]);

  if (!magazine) {
    return (
      <main className="min-h-screen bg-void text-starlight flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Magazine Not Found</h1>
          <Link href="/bitwise" className="text-blue-400 hover:text-blue-300">
            ← Back to Bitwise
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
            href="/bitwise"
            className="inline-flex items-center gap-2 text-starlight/60 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Bitwise
          </Link>
        </motion.div>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Magazine Cover */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-96 lg:h-[600px] rounded-3xl overflow-hidden order-2 lg:order-1"
            >
              <img
                src={magazine.cover}
                alt={magazine.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
            </motion.div>

            {/* Magazine Info */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 order-1 lg:order-2"
            >
              <div className="mb-6 inline-block">
                <span className={`text-xs uppercase tracking-widest font-bold border border-white/20 px-3 py-1.5 rounded-md bg-white/5 ${magazine.accent}`}>
                  {magazine.year}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-sans tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-starlight/40">
                {magazine.title}
              </h1>

              <p className={`text-2xl ${magazine.accent} mb-6 font-light`}>
                {magazine.subtitle}
              </p>

              <p className="text-starlight/80 text-lg leading-relaxed mb-8 max-w-2xl">
                {magazine.description}
              </p>

              {/* Magazine Stats */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
              >
                <motion.div variants={itemVariants} className={`p-4 border-2 ${magazine.accentBorder} rounded-lg bg-white/[0.02]`}>
                  <p className="text-starlight/60 text-sm mb-2">Issues</p>
                  <p className="text-2xl font-bold text-white">{magazine.issues}</p>
                </motion.div>
                <motion.div variants={itemVariants} className={`p-4 border-2 ${magazine.accentBorder} rounded-lg bg-white/[0.02]`}>
                  <p className="text-starlight/60 text-sm mb-2">Articles</p>
                  <p className="text-2xl font-bold text-white">{magazine.articles}</p>
                </motion.div>
                <motion.div variants={itemVariants} className={`p-4 border-2 ${magazine.accentBorder} rounded-lg bg-white/[0.02]`}>
                  <p className="text-starlight/60 text-sm mb-2">Pages</p>
                  <p className="text-2xl font-bold text-white">{magazine.pages}</p>
                </motion.div>
                <motion.div variants={itemVariants} className={`p-4 border-2 ${magazine.accentBorder} rounded-lg bg-white/[0.02]`}>
                  <p className="text-starlight/60 text-sm mb-2">Contributors</p>
                  <p className="text-2xl font-bold text-white">{magazine.contributors.length}</p>
                </motion.div>
              </motion.div>

              {/* Download & Read Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-accretion to-orange-500 text-void-dark font-bold rounded-lg hover:shadow-lg hover:shadow-accretion/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-white/20 text-white font-bold rounded-lg hover:bg-white/5 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Read Online
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="px-4 py-20 relative">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-12"
            >
              Featured Articles
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {magazine.featured.map((article, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`p-8 border-2 ${magazine.accentBorder} ${magazine.bgColor} rounded-2xl backdrop-blur-sm group hover:border-white/50 transition-all duration-300`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className={`text-xs uppercase tracking-widest font-bold ${magazine.accent}`}>
                      Pages {article.pages}
                    </span>
                    <FileText className={`w-5 h-5 ${magazine.accent}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accretion transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-starlight/60 text-sm mb-4">{article.author}</p>

                  <p className="text-starlight/80 leading-relaxed">
                    {article.preview}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Magazine Sections */}
        <section className="px-4 py-20 relative">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-12"
            >
              Magazine Sections
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {magazine.sections.map((section, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`p-6 border-2 ${magazine.accentBorder} rounded-2xl bg-white/[0.02] hover:bg-white/5 transition-all duration-300`}
                >
                  <div className={`text-4xl font-bold ${magazine.accent} mb-2`}>
                    {section.count}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{section.title}</h3>
                  <p className="text-starlight/60 text-sm">{section.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="px-4 py-20 relative">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-12 border-2 ${magazine.accentBorder} ${magazine.bgColor} rounded-3xl backdrop-blur-sm`}
            >
              <h2 className="text-3xl font-bold mb-6">About This Edition</h2>
              <p className="text-starlight/80 text-lg leading-relaxed">
                {magazine.aboutSection}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Issues Grid */}
        <section className="px-4 py-20 relative">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-12"
            >
              All Issues
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {magazine.issuesList.map((issue, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`p-6 border-2 ${magazine.accentBorder} rounded-2xl bg-white/[0.02] hover:bg-white/5 transition-all duration-300 group cursor-pointer`}
                >
                  <div className={`text-sm font-bold ${magazine.accent} mb-2 uppercase tracking-wider`}>
                    {issue.issue}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accretion transition-colors">
                    {issue.theme}
                  </h3>
                  <p className="text-starlight/60 text-sm flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {issue.month}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contributors */}
        <section className="px-4 py-20 relative">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-12"
            >
              Contributors
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {magazine.contributors.map((contributor, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`p-6 border-2 ${magazine.accentBorder} rounded-2xl bg-white/[0.02] hover:bg-white/5 transition-all duration-300`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">{contributor.name}</h3>
                      <p className={`text-sm ${magazine.accent}`}>{contributor.role}</p>
                    </div>
                    <Users className={`w-8 h-8 ${magazine.accent} opacity-50`} />
                  </div>
                  <p className="text-starlight/60 text-sm">
                    {contributor.articles} article{contributor.articles !== 1 ? 's' : ''}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-white/5 to-white/0 border border-white/10 rounded-3xl p-12 text-center backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enjoy This Issue?</h2>
            <p className="text-starlight/70 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to Bitwise Magazine to get notified about new releases and exclusive content.
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
