"use client";

import { motion } from "framer-motion";
import { Code, Cloud, Brain, Database } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-32 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Architecting intelligent solutions at the intersection of Data, Cloud, and AI.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Main Bio Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-2 glass p-8 rounded-2xl"
                    >
                        <h3 className="text-2xl font-bold mb-4">Professional Profile</h3>
                        <p className="text-zinc-400 leading-relaxed mb-6">
                            I am a Senior Software Engineer with over 7 years of experience building robust backend and data platforms. Recently, my focus has shifted towards **Generative AI solutions**, implementing **RAG architectures** using LangChain, FAISS, and Hugging Face Transformers.
                        </p>
                        <p className="text-zinc-400 leading-relaxed">
                            My expertise spans the full software lifecycle—from designing Python microservices (FastAPI/Django) and ETL pipelines to deploying cloud-native applications on **AWS** using Docker and Kubernetes. I advocate for Agile methodologies and rigorous CI/CD practices to deliver high-quality software.
                        </p>
                    </motion.div>

                    {/* Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass p-8 rounded-2xl flex flex-col justify-center gap-6"
                    >
                        <div>
                            <h4 className="text-5xl font-bold text-cyan-400">7+</h4>
                            <p className="text-zinc-500 uppercase text-sm tracking-wider font-semibold">Years Experience</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white">AWS Certified</h4>
                            <p className="text-zinc-500 uppercase text-sm tracking-wider font-semibold">Solutions Architect</p>
                        </div>
                    </motion.div>

                    {/* Skills/Interests Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="glass p-6 rounded-2xl flex items-center gap-4"
                    >
                        <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                            <Brain size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold">Generative AI</h4>
                            <p className="text-sm text-zinc-400">LLMs, RAG, LangChain</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="glass p-6 rounded-2xl flex items-center gap-4"
                    >
                        <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                            <Cloud size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold">Cloud Native</h4>
                            <p className="text-sm text-zinc-400">AWS, Docker, K8s</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="glass p-6 rounded-2xl flex items-center gap-4"
                    >
                        <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                            <Code size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold">Backend Eng</h4>
                            <p className="text-sm text-zinc-400">Python, FastAPI, SQL</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
