"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase, Server, Brain, Database, Shield } from "lucide-react";

const experiences = [
    {
        title: "Senior Python/AI Engineer",
        company: "Morgan Stanley",
        period: "Recent",
        description: "Architected an internal GenAI assistant using Python/FastAPI and RAG workflows with LangChain. Integrated Multi-LLM support (GPT-4, Claude, AWS Bedrock) and deployed on AWS EKS. Improved citation success rate by ~20% and reduced MTTR by ~25% implementation of observability controls (Prometheus, Grafana).",
        skills: ["GenAI", "RAG", "AWS Bedrock", "LangChain", "Kubernetes", "FastAPI"]
    },
    {
        title: "Senior Software Engineer (Python/GenAI)",
        company: "Medica",
        period: "Previous",
        description: "Designed data ingestion pipelines processing large volumes using Pandas/NumPy and optimized SQL. Spearheaded early GenAI adoption by integrating OpenAI APIs for automated summaries. Automated operational workflows on Linux/AWS, cutting routine ops time by ~20-30%.",
        skills: ["Python", "Pandas", "ET", "SQL Optimization", "OpenAI API", "AWS Lambda"]
    },
    {
        title: "Software Engineer",
        company: "First Interstate BancSystem",
        period: "Previous",
        description: "Built full-stack web applications using Python/Django and React.js. Manage CI pipelines with Jenkins/Git and deployed Splunk on AWS. Automated cross-browser UI testing and delivered dynamic JSON-based UI updates.",
        skills: ["Django", "React.js", "Jenkins", "Splunk", "JIRA", "Agile"]
    },
    {
        title: "Software Engineer (Python Developer)",
        company: "Ericsson",
        period: "Previous",
        description: "Developed scalable end-to-end web apps with Django and MySQL. Created real-time executive dashboards using the ELK stack (Elasticsearch, Logstash, Kibana) and Redis. Automating XML parsing and JIRA database migrations.",
        skills: ["Django", "ELK Stack", "Redis", "MySQL", "XML Parsing"]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-32 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        7+ years of building scalable platforms, from Enterprise Dashboards to cutting-edge GenAI Architectures.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl border-l-4 border-l-cyan-400 relative hover:bg-white/10 transition-colors group"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.title}</h3>
                                    <div className="flex items-center gap-2 text-zinc-300 mt-2 text-lg">
                                        <Briefcase size={18} className="text-cyan-400" />
                                        <span>{exp.company}</span>
                                    </div>
                                </div>
                                {/* 
                <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium bg-zinc-900/50 px-4 py-2 rounded-full whitespace-nowrap">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
                */}
                            </div>

                            <p className="text-zinc-400 leading-relaxed mb-6 text-lg">
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-zinc-400">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
