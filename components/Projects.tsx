"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Bot, Database, LayoutDashboard } from "lucide-react";

const projects = [
    {
        title: "Enterprise GenAI Assistant",
        description: "Developed an internal RAG-based assistant using Python/FastAPI and LangChain. Integrated AWS Bedrock/GPT-4/Claude for multi-model logic, FAISS/Pinecone for vector search, and deployed on EKS with 99.9% availability.",
        tech: ["FastAPI", "LangChain", "AWS Bedrock", "Docker", "K8s", "Redis"],
        icon: <Bot size={40} className="text-cyan-400" />,
        color: "from-cyan-500 to-blue-500"
    },
    {
        title: "High-Volume Data Pipeline",
        description: "Engineered robust ETL pipelines processing large datasets using Pandas and NumPy. Implemented asyncio for batch processing and optimized SQL queries, improving pipeline reliability to ~99%.",
        tech: ["Python", "Pandas", "SQL", "AsyncIO", "AWS Glue", "Step Functions"],
        icon: <Database size={40} className="text-purple-400" />,
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Real-Time Observability Dashboard",
        description: "Created comprehensive executive dashboards using the ELK Stack (Elasticsearch, Logstash, Kibana) and Redis. Enabled real-time monitoring of system metrics and operational integrations.",
        tech: ["Elasticsearch", "Kibana", "Redis", "Python", "Linux"],
        icon: <LayoutDashboard size={40} className="text-green-400" />,
        color: "from-green-500 to-emerald-500"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Key architectural implementations and solutions delivered.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r opacity-50 group-hover:opacity-100 transition duration-500 rounded-2xl blur opacity-25 group-hover:opacity-75"
                                style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                            ></div>
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>

                            <div className="relative glass h-full rounded-2xl p-8 flex flex-col hover:bg-zinc-900/80 transition-colors">
                                <div className="mb-6 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                    {project.icon}
                                </div>

                                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                                <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-zinc-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* 
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                  <a href="#" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                    <Github size={16} /> Code
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
                */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
