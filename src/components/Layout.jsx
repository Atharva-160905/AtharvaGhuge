import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from '../sections/Footer';
import { motion } from 'framer-motion';

const pageMetadata = {
    '/': {
        title: 'Atharva Ghuge | Full-Stack Developer & Software Engineer',
        description: 'Portfolio of Atharva Ghuge — Full-Stack Developer & Creative Engineer. Featured production deployments, Next.js SSR, and 300+ LeetCode DSA solved.'
    },
    '/projects': {
        title: 'Featured Projects | Atharva Ghuge - Full-Stack Deployments',
        description: 'Explore live web development projects engineered by Atharva Ghuge: MedLink AI Healthcare, SunDrip E-Commerce, AimersMedia, Dr. Kasliwal Joint Care, and WebRTC P2P.'
    },
    '/skills': {
        title: 'Technical Arsenal & Skills | Atharva Ghuge - Frontend, Backend & Core CS',
        description: 'Atharva Ghuge technical skills: React 19, Next.js, Node.js, MongoDB, Supabase, GSAP, C++, Data Structures & Algorithms with 300+ problems solved.'
    },
    '/experience': {
        title: 'Experience & Background | Atharva Ghuge - Software Developer',
        description: 'Professional experience of Atharva Ghuge: Full Stack Developer Intern at Dramsve, Frontend Intern at Mendygo (30+ screens), and E-Cell Tech Lead.'
    },
    '/contact': {
        title: 'Contact & Connect | Atharva Ghuge - Full-Stack Developer',
        description: 'Get in touch with Atharva Ghuge for full-time software engineering roles, full-stack internships, and web development collaborations.'
    }
};

export default function Layout() {
    const location = useLocation();

    // Dynamically update document title and meta description per route
    useEffect(() => {
        const meta = pageMetadata[location.pathname] || pageMetadata['/'];
        document.title = meta.title;

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', meta.description);
        }

        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            const canonicalUrl = `https://www.atharvaghuge.in${location.pathname === '/' ? '/' : location.pathname}`;
            canonical.setAttribute('href', canonicalUrl);
        }
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-moxa-white dark:bg-dark-950 text-moxa-black dark:text-neutral-300 font-sans flex flex-col relative overflow-x-hidden w-full selection:bg-primary-500/30">
            {/* Subtle Top Ambient Gradient */}
            <div className="fixed top-0 left-0 w-full h-[300px] bg-gradient-radial from-primary-500/5 to-transparent pointer-events-none -z-10" />
            
            <Navbar />

            <main className="flex-grow pt-20 relative z-10 flex flex-col justify-start w-full">
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="flex-grow w-full flex flex-col justify-start"
                >
                    <Outlet />
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
