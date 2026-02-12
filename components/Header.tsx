"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-center pointer-events-none">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass rounded-full px-6 py-3 flex items-center gap-8 pointer-events-auto shadow-lg shadow-black/20"
      >
        <Link href="/" className="text-xl font-bold tracking-tighter hover:text-cyan-400 transition-colors">
          SRD
        </Link>
        <nav className="hidden md:flex gap-6">
          {["About", "Experience", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <div className="flex gap-4 items-center pl-6 border-l border-white/10">
          <a href="https://github.com/dsreddy2403" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/santhosh-dubbaka-0ba6bb3ab/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:dsreddy2403@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </motion.div>
    </header>
  );
}
