'use client';

import {
    Check,
    Star
} from 'lucide-react';
import {
    NetflixIcon,
    SpotifyIcon,
    ChatGPTIcon,
    CanvaIcon,
    GeminiIcon,
    WindowsIcon,
    CapCutIcon,
    IPTVIcon,
    PerplexityIcon,
    DiscordIcon,
    TikTokIcon,
    TruecallerIcon,
    WASenderIcon
} from '@/components/ui/BrandIcons';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useState, useMemo } from 'react';
import { CONTACT_LINK } from '@/lib/constants';

const productsList = [
    {
        name: 'ChatGPT Plus',
        category: 'AI Tools',
        icon: ChatGPTIcon,
        imageIcon: 'https://logo.clearbit.com/openai.com',
        color: 'text-teal-400',
        bg: 'from-teal-600/20 to-black/40',
        rating: '5.0',
        activeCount: '1.2k+'
    },
    {
        name: 'Gemini Pro',
        category: 'AI Tools',
        icon: GeminiIcon,
        imageIcon: 'https://img.icons8.com/color/512/google-gemini.png',
        color: 'text-blue-400',
        bg: 'from-blue-600/20 to-black/40',
        rating: '4.9',
        activeCount: '800+'
    },
    {
        name: 'Perplexity AI',
        category: 'AI Tools',
        icon: PerplexityIcon,
        imageIcon: 'https://logo.clearbit.com/perplexity.ai',
        color: 'text-cyan-400',
        bg: 'from-cyan-600/20 to-black/40',
        rating: '4.8',
        activeCount: '600+'
    },
    {
        name: 'Netflix Premium',
        category: 'Streaming',
        icon: NetflixIcon,
        imageIcon: 'https://logo.clearbit.com/netflix.com',
        color: 'text-red-500',
        bg: 'from-red-600/20 to-black/40',
        rating: '5.0',
        activeCount: '5k+'
    },
    {
        name: 'IPTV Ultimate',
        category: 'Streaming',
        icon: IPTVIcon,
        imageIcon: 'https://img.icons8.com/color/512/tv.png',
        color: 'text-orange-400',
        bg: 'from-orange-600/20 to-black/40',
        rating: '4.7',
        activeCount: '3.2k+'
    },
    {
        name: 'Spotify Premium',
        category: 'Music',
        icon: SpotifyIcon,
        imageIcon: 'https://logo.clearbit.com/spotify.com',
        color: 'text-green-500',
        bg: 'from-green-600/20 to-black/40',
        rating: '5.0',
        activeCount: '2.5k+'
    },
    {
        name: 'Windows 11 Pro',
        category: 'Productivity',
        icon: WindowsIcon,
        imageIcon: 'https://logo.clearbit.com/microsoft.com',
        color: 'text-blue-500',
        bg: 'from-blue-600/20 to-black/40',
        rating: '4.9',
        activeCount: '1.1k+'
    },
    {
        name: 'Canva Pro',
        category: 'Productivity',
        icon: CanvaIcon,
        imageIcon: 'https://logo.clearbit.com/canva.com',
        color: 'text-purple-400',
        bg: 'from-purple-600/20 to-black/40',
        rating: '4.9',
        activeCount: '950+'
    },
    {
        name: 'CapCut Pro',
        category: 'Productivity',
        icon: CapCutIcon,
        imageIcon: 'https://logo.clearbit.com/capcut.com',
        color: 'text-pink-400',
        bg: 'from-pink-600/20 to-black/40',
        rating: '4.8',
        activeCount: '700+'
    },
    {
        name: 'Discord Nitro',
        category: 'Social',
        icon: DiscordIcon,
        imageIcon: 'https://logo.clearbit.com/discord.com',
        color: 'text-indigo-400',
        bg: 'from-indigo-600/20 to-black/40',
        rating: '4.9',
        activeCount: '1.5k+'
    },
    {
        name: 'Truecaller Premium',
        category: 'Social',
        icon: TruecallerIcon,
        imageIcon: 'https://logo.clearbit.com/truecaller.com',
        color: 'text-blue-600',
        bg: 'from-blue-700/20 to-black/40',
        rating: '4.7',
        activeCount: '2k+'
    },
    {
        name: 'WASender Pro',
        category: 'Tools',
        icon: WASenderIcon,
        imageIcon: 'https://logo.clearbit.com/whatsapp.com',
        color: 'text-green-600',
        bg: 'from-green-700/20 to-black/40',
        rating: '4.8',
        activeCount: '400+'
    },
    {
        name: 'TikTok Beta',
        category: 'Social',
        icon: TikTokIcon,
        imageIcon: 'https://logo.clearbit.com/tiktok.com',
        color: 'text-white',
        bg: 'from-gray-600/20 to-black/40',
        rating: '4.6',
        activeCount: '2.1k+'
    },
];




export function ServiceGrid() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = useMemo(() => {
        const cats = ['All', ...Array.from(new Set(productsList.map(p => p.category)))];
        return cats;
    }, []);

    const filteredProducts = useMemo(() => {
        if (selectedCategory === 'All') return productsList;
        return productsList.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    const handleContact = () => {
        window.open(CONTACT_LINK, '_blank');
    };

    return (
        <section id="plans" className="px-4 md:px-8 max-w-[1400px] mx-auto pb-24 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Trending Subscriptions
                    </h2>
                    <p className="text-white/60">Upgrade your digital life for less.</p>
                </div>

                {/* Filter / Toggle */}
                <div className="flex flex-wrap justify-center bg-white/5 rounded-xl p-1 border border-white/10 backdrop-blur-md gap-1">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={cn(
                                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                                selectedCategory === cat
                                    ? "bg-white/10 text-white shadow-sm"
                                    : "text-white/50 hover:text-white"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8"
            >
                <AnimatePresence mode='popLayout'>
                    {filteredProducts.map((product, index) => (
                        <motion.div
                            key={product.name}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="group relative cursor-pointer"
                            onClick={handleContact}
                        >
                            {/* 3D Glass Card Container */}
                            <div className="absolute inset-x-2 inset-y-4 bg-white/5 rounded-[2.5rem] blur-2xl transition-all group-hover:bg-white/10 group-hover:inset-x-0 group-hover:inset-y-0 opacity-50" />

                            <div className="relative bg-[#0F172A]/40 backdrop-blur-2xl border border-white/5 rounded-[2rem] p-8 flex flex-col h-full hover:border-white/20 transition-all duration-500 hover:-translate-y-3 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">

                                {/* Background Gradient Spot */}
                                <div className={cn("absolute top-0 right-0 w-40 h-40 rounded-full blur-[80px] opacity-30 bg-gradient-to-br", product.bg)} />

                                {/* Icon Container with Glow */}
                                <div className="relative mb-8 group-hover:scale-110 transition-transform duration-500 self-center">
                                    {/* Icon Glow */}
                                    <div className={cn("absolute inset-0 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity", product.color.replace('text-', 'bg-'))} />

                                    <div className={cn(
                                        "relative w-24 h-24 rounded-3xl flex items-center justify-center shadow-2xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-500 group-hover:border-white/30",
                                        product.color
                                    )}>
                                        {product.imageIcon ? (
                                            /* eslint-disable-next-line @next/next/no-img-element */
                                            <img
                                                src={product.imageIcon}
                                                alt={product.name}
                                                className="w-12 h-12 object-contain drop-shadow-xl"
                                                loading="lazy"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                        ) : (
                                            <product.icon className="w-12 h-12 drop-shadow-[0_0_15px_currentColor]" strokeWidth={1.5} />
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 text-center">
                                    <h3 className="text-white font-bold text-xl mb-2 tracking-tight">{product.name}</h3>
                                    <div className="flex flex-col items-center gap-1">
                                        <p className="text-white/40 text-sm font-medium uppercase tracking-widest">{product.category}</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                                                <span className="text-white/80 text-xs font-bold">{product.rating}</span>
                                            </div>
                                            <span className="w-1 h-1 bg-white/20 rounded-full" />
                                            <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider">{product.activeCount} Active</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Action */}
                                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between group/btn">
                                    <span className="text-white/50 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">Contact to buy</span>
                                    <div className="bg-white/10 text-white p-3 rounded-2xl transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:rotate-[360deg] border border-white/5">
                                        <Check className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
