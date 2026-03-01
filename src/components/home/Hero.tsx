'use client';
import { motion } from 'framer-motion';
import { NetflixIcon, SpotifyIcon, ChatGPTIcon } from '@/components/ui/BrandIcons';
import { CONTACT_LINK } from '@/lib/constants';
import { useState, useEffect } from 'react';

export function Hero() {
    const [visitorCount, setVisitorCount] = useState(42);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisitorCount(prev => {
                const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
                const next = prev + change;
                return next < 35 ? 35 : next > 55 ? 55 : next;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const avatars = [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop"
    ];
    return (
        <section className="relative text-center pt-32 pb-20 px-4 overflow-hidden">
            {/* Floating Background Icons */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-[10%] opacity-20 text-red-600"
                >
                    <NetflixIcon className="w-24 h-24" />
                </motion.div>
                <motion.div
                    animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-32 right-[15%] opacity-20 text-green-500"
                >
                    <SpotifyIcon className="w-20 h-20" />
                </motion.div>
                <motion.div
                    animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-10 left-[20%] opacity-10 text-teal-400"
                >
                    <ChatGPTIcon className="w-32 h-32" />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10"
            >
                <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium tracking-wider mb-6 backdrop-blur-md">
                    PREMIUM MARKETPLACE
                </span>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl max-w-4xl mx-auto leading-tight">
                    Premium Digital Subscriptions. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Simplified.</span>
                </h1>

                <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                    Streaming, AI Tools, Productivity & Creative Software — All in One Place.
                    Instant delivery, secure access, and unbeatable prices.
                </p>

                {/* Social Proof Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center gap-4 mb-10"
                >
                    <div className="flex -space-x-4">
                        {avatars.map((url, i) => (
                            <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0F172A] overflow-hidden shadow-2xl relative group">
                                <img src={url} alt={`Client ${i}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                        <div className="w-12 h-12 rounded-full border-2 border-[#0F172A] bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white shadow-xl z-10 uppercase tracking-tighter cursor-default">
                            +1k
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1.5 mb-1">
                            <span className="flex text-amber-400">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </span>
                            <span className="text-white font-bold text-lg tracking-tight">4.9/5</span>
                        </div>
                        <p className="text-white/40 text-sm font-medium tracking-wide">
                            Trusted by <span className="text-white font-bold tracking-tight">1,240+ Global Clients</span>
                        </p>
                    </div>

                    {/* Live Indicator */}
                    <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-1.5 rounded-full backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-green-400 text-[11px] font-bold uppercase tracking-wider">{visitorCount} users currently browsing</span>
                    </div>
                </motion.div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer"
                    >
                        Browse Plans
                    </button>
                    <button
                        onClick={() => window.open(CONTACT_LINK, '_blank')}
                        className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-colors backdrop-blur-md cursor-pointer"
                    >
                        Get Started
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
