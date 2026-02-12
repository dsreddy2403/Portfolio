"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/20 rounded-full blur-3xl opacity-20 -z-10" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-3xl opacity-20 -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-400 mb-6">
                        AWS Certified Solutions Architect – Associate
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Santhosh Reddy Dubbaka <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Senior Software Engineer</span>
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10">
                        Specializing in **Generative AI**, **RAG Architectures**, and **Cloud-Native Solutions**.
                        7+ years of experience building scalable backend platforms and data pipelines on AWS.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#projects"
                            className="group px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                        >
                            View Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-white/5 border border-white/10 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                        >
                            Download Resume
                            <Download size={18} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
