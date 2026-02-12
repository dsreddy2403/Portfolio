"use client";

import { motion } from "framer-motion";

const techStack = [
    "Generative AI", "LLMs", "RAG", "Python", "AWS", "FastAPI", "Django",
    "Docker", "Kubernetes", "Terraform", "LangChain", "OpenAI",
    "PyTorch", "TensorFlow", "SQL", "NoSQL", "CI/CD", "Microservices"
];

const duplicatedStack = [...techStack, ...techStack];

export default function TechStack() {
    return (
        <section className="py-10 border-y border-white/5 bg-black/20 overflow-hidden">
            <div className="flex">
                <motion.div
                    className="flex gap-12 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                >
                    {duplicatedStack.map((tech, index) => (
                        <div key={index} className="flex items-center gap-2 text-xl font-bold text-zinc-500">
                            <span className="w-2 h-2 rounded-full bg-cyan-500/50"></span>
                            {tech}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
