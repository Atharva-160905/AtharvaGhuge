import React from 'react';

export default function Footer() {
    return (
        <footer className="py-8 bg-transparent border-t border-neutral-200 dark:border-neutral-800 text-center text-neutral-500 dark:text-neutral-400 text-sm">
            <p>© {new Date().getFullYear()} Atharva. Built with React, Tailwind & Spline.</p>
        </footer>
    );
}
