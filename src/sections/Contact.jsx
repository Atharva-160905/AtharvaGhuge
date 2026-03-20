import React, { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

export default function Contact() {
    return (
        <section className="py-10 md:py-20 relative" id="contact">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    {/* Left: Contact Info */}
                    <SectionWrapper>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-moxa-black dark:text-white mb-6">
                            Let's <span className="text-neutral-500">Talk</span><span className="text-primary-500">.</span>
                        </h2>

                        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed max-w-md font-medium">
                            Have a project in mind or just want to chat? I'm currently open for new opportunities.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-white dark:bg-dark-900 border border-neutral-200 dark:border-neutral-800 group-hover:border-primary-500 transition-colors duration-300">
                                    <Mail className="w-5 h-5 text-moxa-black dark:text-white group-hover:text-primary-500 transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">Email Me</h4>
                                    <a href="mailto:atharvaghuge16@gmail.com" className="text-lg font-bold text-moxa-black dark:text-white hover:text-primary-500 transition-colors">
                                        atharvaghuge16@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-white dark:bg-dark-900 border border-neutral-200 dark:border-neutral-800 group-hover:border-primary-500 transition-colors duration-300">
                                    <MapPin className="w-5 h-5 text-moxa-black dark:text-white group-hover:text-primary-500 transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">Location</h4>
                                    <p className="text-lg font-bold text-moxa-black dark:text-white">
                                        Pune
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SectionWrapper>

                    {/* Right: Form */}
                    <SectionWrapper delay={0.2}>
                        <form className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-neutral-50 dark:bg-dark-900 border border-neutral-200 dark:border-neutral-800 text-moxa-black dark:text-white px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors placeholder:text-neutral-400 dark:placeholder:text-neutral-600 font-medium rounded-none text-sm"
                                        placeholder="JOHN DOE"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-neutral-50 dark:bg-dark-900 border border-neutral-200 dark:border-neutral-800 text-moxa-black dark:text-white px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors placeholder:text-neutral-400 dark:placeholder:text-neutral-600 font-medium rounded-none text-sm"
                                        placeholder="JOHN@EXAMPLE.COM"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Subject</label>
                                <input
                                    type="text"
                                    className="w-full bg-neutral-50 dark:bg-dark-900 border border-neutral-200 dark:border-neutral-800 text-moxa-black dark:text-white px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors placeholder:text-neutral-400 dark:placeholder:text-neutral-600 font-medium rounded-none text-sm"
                                    placeholder="PROJECT INQUIRY"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-neutral-50 dark:bg-dark-900 border border-neutral-200 dark:border-neutral-800 text-moxa-black dark:text-white px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors placeholder:text-neutral-400 dark:placeholder:text-neutral-600 font-medium resize-none rounded-none text-sm"
                                    placeholder="TELL ME ABOUT YOUR PROJECT..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-primary w-full md:w-auto flex items-center justify-center gap-2 group py-3 text-sm">
                                Send Message
                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </SectionWrapper>
                </div>
            </div>
        </section>
    );
}
