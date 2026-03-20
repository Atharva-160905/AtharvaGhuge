import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowRight, FileText, Asterisk } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative flex items-start justify-center overflow-hidden pt-4 md:pt-12 pb-20 bg-moxa-white dark:bg-dark-950 transition-colors duration-300">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start relative z-10">
                {/* Left Content - Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="order-2 lg:order-1 flex flex-col justify-center"
                >
                    <div className="mb-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.9] text-moxa-black dark:text-white mb-6"
                        >
                            HI, I'M <br />
                            <span className="text-neutral-500">ATHARVA.</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap items-center gap-x-6 text-2xl md:text-4xl font-bold uppercase tracking-tight text-moxa-black/90 dark:text-white/90"
                        >
                            <span>Creative</span>
                            <Asterisk className="w-8 h-8 md:w-10 md:h-10 text-primary-500 animate-spin-slow" />
                            <span>Developer</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg md:text-xl font-bold uppercase tracking-widest text-neutral-400 mt-4 border-t border-neutral-200 dark:border-neutral-800 pt-4 w-max"
                        >
                            Design <span className="text-primary-500 mx-2">*</span> Development <span className="text-primary-500 mx-2">*</span> Innovation
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-0 w-max"
                    >
                        <Link to="/projects" className="px-8 py-4 bg-moxa-black dark:bg-white text-white dark:text-moxa-black font-bold uppercase tracking-wider text-sm hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white transition-colors duration-300">
                            Got a project?
                        </Link>
                        <Link to="/contact" className="px-8 py-4 border border-moxa-black dark:border-white text-moxa-black dark:text-white font-bold uppercase tracking-wider text-sm hover:bg-moxa-black dark:hover:bg-white hover:text-white dark:hover:text-moxa-black transition-colors duration-300">
                            Let's Talk
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-8 flex items-center gap-8 text-neutral-500"
                    >
                        {[
                            { icon: Github, href: "https://github.com/Atharva-160905" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/atharvaghuge/" },
                            { icon: FileText, href: "#", label: "Resume" }
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                target={item.label ? "_self" : "_blank"}
                                rel="noopener noreferrer"
                                className="hover:text-primary-500 transition-colors duration-300 transform hover:scale-110 flex items-center gap-2"
                            >
                                <item.icon className="w-6 h-6" />
                                {item.label && <span className="text-sm font-bold uppercase tracking-wider">{item.label}</span>}
                            </a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Content - Static Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="order-1 lg:order-2 flex items-center justify-center relative"
                >
                    <div className="relative w-full max-w-sm lg:max-w-md aspect-[4/5] mx-auto -mt-12 lg:-mt-20">
                        {/* Decorative Background Elements */}
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>

                        {/* Bold Star/Spark Decoration */}
                        <svg className="absolute -top-8 -right-8 w-24 h-24 md:w-32 md:h-32 text-primary-500 animate-spin-slow opacity-90" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                        </svg>

                        {/* Main Image Container */}
                        <div className="relative w-full h-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 ease-in-out">
                            <img
                                src="/images/Atharva.png"
                                alt="Atharva"
                                className="w-full h-full object-contain object-bottom drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
