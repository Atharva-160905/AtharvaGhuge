import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Terminal, User } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const skills = {
    Languages: ["C++", "JavaScript", "SQL"],
    "Web Dev": ["HTML", "CSS", "React", "Three.js", "WebRTC"],
    "Backend & DB": ["Supabase", "REST APIs", "MongoDB", "Auth"],
    "Tools": ["Git", "GitHub", "Vercel", "Figma", "Canva"]
};

const iconMap = {
    Languages: <Code2 className="w-6 h-6 text-primary-500" />,
    "Web Dev": <Globe className="w-6 h-6 text-primary-500" />,
    "Backend & DB": <Database className="w-6 h-6 text-primary-500" />,
    "Tools": <Terminal className="w-6 h-6 text-primary-500" />
};

export default function About() {
    return (
        <section className="relative flex flex-col justify-center overflow-hidden min-h-[calc(100vh-6rem)] lg:h-[calc(100vh-6rem)] bg-moxa-white dark:bg-dark-950 transition-colors duration-300 py-4 lg:py-0" id="about">
            <div className="container mx-auto px-6 relative z-10">
                <SectionWrapper className="mb-8 md:mb-12 flex flex-col items-start border-l-4 border-primary-500 pl-6">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-moxa-black dark:text-white mb-2">
                        Key <span className="text-primary-500">Skills.</span>
                    </h2>
                    <p className="text-neutral-500 text-xl font-medium tracking-wide flex items-center gap-2">
                        TECHNICAL EXPERTISE
                    </p>
                </SectionWrapper>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full items-stretch">
                    {/* Skills Matrix */}
                    {Object.entries(skills).map(([category, items], index) => (
                        <SectionWrapper key={category} delay={0.1 + index * 0.1}>
                            <div className="bg-white dark:bg-dark-900 p-4 md:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-primary-500/50 transition-all duration-500 group relative overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-primary-500/5">
                                {/* Hover gradient subtle background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/5 group-hover:from-primary-500/10 group-hover:to-transparent transition-all duration-500"></div>

                                <div className="flex flex-col xl:flex-row xl:items-center gap-2 xl:gap-4 mb-4 md:mb-8 relative z-10">
                                    <div className="p-2 md:p-3 w-fit bg-neutral-100 dark:bg-dark-800 group-hover:bg-primary-500/10 group-hover:text-primary-500 rounded-xl transition-colors duration-500 text-moxa-black dark:text-white flex items-center justify-center">
                                        {iconMap[category]}
                                    </div>
                                    <h3 className="text-sm md:text-2xl font-bold uppercase tracking-tight text-moxa-black dark:text-white transition-colors duration-300">
                                        {category}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-1 md:gap-2 relative z-10 mt-auto">
                                    {items.map(skill => (
                                        <span key={skill} className="px-2 py-1 md:px-4 md:py-2 bg-neutral-100 dark:bg-dark-950 text-neutral-600 dark:text-neutral-400 text-[10px] md:text-xs font-bold uppercase tracking-wider border border-neutral-200 dark:border-neutral-800 group-hover:border-primary-500/30 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </SectionWrapper>
                    ))}
                </div>
            </div>

            {/* Subtle Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[80%] h-[80%] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}
