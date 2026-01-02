import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Terminal } from 'lucide-react';

const skills = {
    Languages: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "C++"],
    Frontend: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Redux"],
    Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase"],
    Tools: ["Git & GitHub", "Docker", "VS Code", "Postman", "Vercel"]
};

// Icon mapping for categories without specific colors (using globals or theme)
const iconMap = {
    Languages: <Code2 className="w-5 h-5 text-amber-500" />,
    Frontend: <Globe className="w-5 h-5 text-amber-500" />,
    Backend: <Database className="w-5 h-5 text-amber-500" />,
    Tools: <Terminal className="w-5 h-5 text-amber-500" />
};

export default function About() {
    return (
        <section className="py-8 md:py-12 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        About <span className="text-amber-500">Me</span>
                    </h2>

                    <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 text-center max-w-2xl mx-auto">
                        I'm a passionate software engineering student with a strong foundation in <span className="text-moxa-black dark:text-white font-medium">full-stack development</span>.
                        I love building efficient, scalable, and user-friendly applications. When I'm not coding, I'm solving DSA problems or exploring new tech.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {Object.entries(skills).map(([category, items], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-white dark:bg-dark-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-primary-500/40 transition-all hover:bg-neutral-50 hover:shadow-lg hover:shadow-primary-500/5"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-primary-500/10 rounded-lg">
                                        {iconMap[category]}
                                    </div>
                                    <h3 className="text-xl font-bold text-moxa-black dark:text-white">{category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {items.map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-sm rounded-full border border-neutral-200 hover:border-primary-500/30 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Subtle Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[60%] h-[60%] bg-amber-600/5 blur-[100px] rounded-full pointer-events-none" />
        </section>
    );
}
