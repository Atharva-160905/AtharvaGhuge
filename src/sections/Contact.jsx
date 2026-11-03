import React from 'react';
import { Send, Mail, MapPin, Linkedin } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name') || '';
        const email = formData.get('email') || '';
        const subject = formData.get('subject') || 'New message from portfolio';
        const message = formData.get('message') || '';
        
        // Open directly in Gmail web interface
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=atharvaghuge16@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        window.open(gmailLink, '_blank');
    };

    return (
        <section className="relative flex flex-col justify-center min-h-[calc(100vh-5rem)] bg-moxa-white dark:bg-dark-950 transition-colors duration-300 py-8 lg:py-0" id="contact">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
                    
                    {/* Left: Contact Info Card (5 columns) */}
                    <div className="lg:col-span-5 flex flex-col justify-between bg-white dark:bg-dark-900 border border-neutral-300 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-xl">
                        <div>
                            <div className="flex flex-col items-start border-l-4 border-primary-500 pl-4 mb-5">
                                <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-moxa-black dark:text-white mb-1 font-display">
                                    Let's <span className="text-neutral-500">Connect</span><span className="text-primary-500">.</span>
                                </h1>
                                <p className="text-neutral-600 dark:text-neutral-400 text-xs font-bold uppercase tracking-wider">
                                    Engineering Roles & Inquiries
                                </p>
                            </div>

                            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed font-medium">
                                Have an exciting project, full-time engineering opportunity, or internship in mind? Reach out directly or drop a message.
                            </p>
                        </div>

                        {/* Direct Contact Cards */}
                        <div className="space-y-3">
                            <a 
                                href="mailto:atharvaghuge16@gmail.com" 
                                className="flex items-center gap-3.5 p-3.5 bg-neutral-50 dark:bg-dark-950 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-primary-500 transition-colors group"
                            >
                                <div className="p-2.5 bg-white dark:bg-dark-800 border border-neutral-200 dark:border-neutral-700 rounded-xl text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Email</h4>
                                    <span className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white group-hover:text-primary-500 transition-colors break-all sm:break-normal">
                                        atharvaghuge16@gmail.com
                                    </span>
                                </div>
                            </a>

                            <div className="flex items-center gap-3.5 p-3.5 bg-neutral-50 dark:bg-dark-950 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                                <div className="p-2.5 bg-white dark:bg-dark-800 border border-neutral-200 dark:border-neutral-700 rounded-xl text-primary-500">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Location</h4>
                                    <span className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                                        Pune, Maharashtra, India
                                    </span>
                                </div>
                            </div>

                            <a 
                                href="https://www.linkedin.com/in/atharvaghuge/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-center gap-3.5 p-3.5 bg-neutral-50 dark:bg-dark-950 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-primary-500 transition-colors group"
                            >
                                <div className="p-2.5 bg-white dark:bg-dark-800 border border-neutral-200 dark:border-neutral-700 rounded-xl text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                                    <Linkedin className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">LinkedIn</h4>
                                    <span className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white group-hover:text-primary-500 transition-colors break-all sm:break-normal">
                                        linkedin.com/in/atharvaghuge
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right: Modern Form Card (7 columns) */}
                    <div className="lg:col-span-7 bg-white dark:bg-dark-900 border border-neutral-300 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-neutral-50 dark:bg-dark-950 border border-neutral-300 dark:border-neutral-800 rounded-xl text-neutral-900 dark:text-white px-3.5 py-2.5 focus:outline-none focus:border-primary-500 focus:bg-white text-xs sm:text-sm font-medium transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">Your Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-neutral-50 dark:bg-dark-950 border border-neutral-300 dark:border-neutral-800 rounded-xl text-neutral-900 dark:text-white px-3.5 py-2.5 focus:outline-none focus:border-primary-500 focus:bg-white text-xs sm:text-sm font-medium transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    className="w-full bg-neutral-50 dark:bg-dark-950 border border-neutral-300 dark:border-neutral-800 rounded-xl text-neutral-900 dark:text-white px-3.5 py-2.5 focus:outline-none focus:border-primary-500 focus:bg-white text-xs sm:text-sm font-medium transition-all"
                                    placeholder="Project Collaboration / Internship Opportunity"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full bg-neutral-50 dark:bg-dark-950 border border-neutral-300 dark:border-neutral-800 rounded-xl text-neutral-900 dark:text-white px-3.5 py-2.5 focus:outline-none focus:border-primary-500 focus:bg-white text-xs sm:text-sm font-medium resize-none transition-all"
                                    placeholder="Tell me about what you're building..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className="w-full py-3 px-6 bg-moxa-black dark:bg-white text-white dark:text-moxa-black font-bold uppercase tracking-wider text-xs hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white dark:hover:text-white transition-all duration-300 rounded-xl flex items-center justify-center gap-2 group shadow-md"
                            >
                                <span>Send via Gmail</span>
                                <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
