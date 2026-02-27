"use client";

import React, { useRef, useState, MouseEvent } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import SearchBar  from "./global_search_bar/searchbar"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Departments", href: "/departments" },
  { name: "Events", href: "/events" },
  { name: "Hackathon", href: "/hans-innoverse" },
  { name: "Bitwise", href: "/bitwise" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-200%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-6 inset-x-0 mx-auto max-w-5xl z-50",
        "border border-white/10 rounded-full",
        "bg-void/50 backdrop-blur-md supports-[backdrop-filter]:bg-void/20",
        "shadow-[0_0_20px_-10px_rgba(255,255,255,0.1)]",
        "px-6 py-3 flex items-center justify-between"
      )}
    >
      {/* Logo Section */}
      <Link href="/" className="group relative flex items-center gap-2">
        <div className="relative w-8 h-8 bg-gradient-to-tr from-void to-void-light border border-white/20 rounded-lg overflow-hidden flex items-center justify-center">
            {/* Shimmer Effect */}
            <div className="absolute inset-0 translate-x-[-100%] animate-shimmer-slide bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <span className="font-bold text-lg text-starlight">O</span>
        </div>
        <span className="text-starlight font-bold tracking-wide relative overflow-hidden">
            Ordinateur
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-200%] group-hover:animate-shimmer-slide duration-1000" />
        </span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-1">
        {navLinks.map((link) => (
          <MagneticLink key={link.name} href={link.href}>
            {link.name}
          </MagneticLink>
        ))}
      </div>
      <div>
        <SearchBar/>
      </div>

      {/* Mobile Menu Button (Placeholder) */}
      <div className="md:hidden">
          <button className="text-starlight">Menu</button>
      </div>
    </motion.nav>
  );
}

function MagneticLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.15, y: y * 0.15 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      style={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <Link
        ref={ref}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative px-4 py-2 text-sm text-starlight/80 hover:text-white transition-colors duration-300",
          "hover:bg-white/5 rounded-full"
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}
