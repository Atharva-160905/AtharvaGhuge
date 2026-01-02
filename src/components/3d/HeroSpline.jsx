import Spline from '@splinetool/react-spline';
import { useState, useEffect } from 'react';

export default function HeroSpline() {
    const [isMobile, setIsMobile] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if initial width is mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();

        // Resize listener
        const handleResize = () => {
            checkMobile();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isMobile) {
        return null; // Don't render on mobile for performance
    }

    return (
        <div className="w-full h-[500px] md:h-full flex items-center justify-center relative">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-sm animate-pulse">
                    Loading 3D Scene...
                </div>
            )}
            <Spline
                scene="https://prod.spline.design/6uOgkr86J8UZo22Q/scene.splinecode"
                onLoad={() => setLoading(false)}
                className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}
            />
        </div>
    );
}
