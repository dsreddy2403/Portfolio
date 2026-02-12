"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Open to opportunities in AI/ML, Cloud Architecture, and Backend Engineering.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                        <div className="space-y-6">
                            <a href="mailto:dsreddy2403@gmail.com" className="flex items-center gap-4 text-zinc-300 hover:text-cyan-400 transition-colors group">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-cyan-500/10 transition-colors">
                                    <Mail size={24} className="text-cyan-400" />
                                </div>
                                <span className="text-lg">dsreddy2403@gmail.com</span>
                            </a>

                            <div className="flex items-center gap-4 text-zinc-300">
                                <div className="p-3 bg-white/5 rounded-lg">
                                    <Phone size={24} className="text-purple-400" />
                                </div>
                                <span className="text-lg">+1 817-668-5116</span>
                            </div>

                            {/*  LinkedIn Placeholder since URL wasn't text-selectable but visible */}
                            <a href="https://www.linkedin.com" target="_blank" className="flex items-center gap-4 text-zinc-300 hover:text-blue-400 transition-colors group">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                                    <Linkedin size={24} className="text-blue-400" />
                                </div>
                                <span className="text-lg">Connect on LinkedIn</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-2xl"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-zinc-400 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                                    placeholder="Recruitment / Inquiry"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                                    placeholder="Hi Santhosh, I have an opportunity..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
