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
        <section className="py-32 relative bg-moxa-white dark:bg-dark-950 transition-colors duration-300" id="about">
            <div className="container mx-auto px-6 relative z-10">
                <SectionWrapper className="mb-24 flex flex-col items-start border-l-4 border-primary-500 pl-6">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-moxa-black dark:text-white mb-2">
                        About <span className="text-primary-500">Me.</span>
                    </h2>
                    <p className="text-neutral-500 text-xl font-medium tracking-wide flex items-center gap-2">
                        WHO AM I
                    </p>
                </SectionWrapper>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Bio Section */}
                    <div className="lg:col-span-5">
                        <SectionWrapper delay={0.1}>
                            <div className="bg-white/50 dark:bg-dark-900/50 backdrop-blur-xl p-8 md:p-10 border border-neutral-200 dark:border-neutral-800 rounded-2xl relative overflow-hidden group hover:border-primary-500/50 transition-all duration-500">
                                {/* Decorative background shape */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-colors duration-500"></div>
                                
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-4 bg-primary-500/10 rounded-xl text-primary-500">
                                        <User className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-3xl font-black uppercase tracking-tight text-moxa-black dark:text-white group-hover:text-primary-500 transition-colors duration-500">
                                        Hello.
                                    </h3>
                                </div>
                                
                                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl font-medium mb-6">
                                    I'm a passionate software engineering student with a strong foundation in <span className="text-moxa-black dark:text-white font-bold">full-stack development</span>.
                                </p>
                                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl font-medium">
                                    I love building efficient, scalable, and user-friendly applications. When I'm not coding, I'm solving DSA problems or exploring new tech.
                                </p>
                            </div>
                        </SectionWrapper>
                    </div>

                    {/* Skills Matrix */}
                    <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                        {Object.entries(skills).map(([category, items], index) => (
                            <SectionWrapper key={category} delay={0.2 + index * 0.1}>
                                <div className="bg-white dark:bg-dark-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-primary-500/50 transition-all duration-500 group relative overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-primary-500/5">
                                    {/* Hover gradient subtle background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/5 group-hover:from-primary-500/10 group-hover:to-transparent transition-all duration-500"></div>

                                    <div className="flex items-center gap-4 mb-8 relative z-10">
                                        <div className="p-3 bg-neutral-100 dark:bg-dark-800 group-hover:bg-primary-500/10 group-hover:text-primary-500 rounded-xl transition-colors duration-500 text-moxa-black dark:text-white flex items-center justify-center">
                                            {iconMap[category]}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-moxa-black dark:text-white transition-colors duration-300">
                                            {category}
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                                        {items.map(skill => (
                                            <span key={skill} className="px-4 py-2 bg-neutral-100 dark:bg-dark-950 text-neutral-600 dark:text-neutral-400 text-xs font-bold uppercase tracking-wider border border-neutral-200 dark:border-neutral-800 group-hover:border-primary-500/30 transition-colors">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </SectionWrapper>
                        ))}
                    </div>
                </div>
            </div>

            {/* Subtle Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[80%] h-[80%] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}
