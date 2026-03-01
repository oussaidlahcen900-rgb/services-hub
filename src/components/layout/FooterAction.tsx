'use client';

import { ShoppingCart, MessageCircle, Briefcase, Headset } from 'lucide-react';
import { motion } from 'framer-motion';
import { CONTACT_LINK } from '@/lib/constants';

const actions = [
    {
        title: 'Start Your Project',
        subtitle: 'Get Started Today',
        icon: ShoppingCart,
        gradient: 'from-blue-600/20 to-blue-800/20 hover:from-blue-600/40 hover:to-blue-800/40'
    },
    {
        title: 'Contact Us',
        subtitle: "We're Here to Help",
        icon: MessageCircle,
        gradient: 'from-purple-600/20 to-purple-800/20 hover:from-purple-600/40 hover:to-purple-800/40'
    },
    {
        title: 'View Our Portfolio',
        subtitle: 'See Our Work',
        icon: Briefcase,
        gradient: 'from-indigo-600/20 to-indigo-800/20 hover:from-indigo-600/40 hover:to-indigo-800/40'
    },
    {
        title: 'Customer Support',
        subtitle: '24/7 Assistance',
        icon: Headset,
        gradient: 'from-pink-600/20 to-pink-800/20 hover:from-pink-600/40 hover:to-pink-800/40'
    },
];

export function FooterAction() {
    return (
        <section className="px-4 pb-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {actions.map((action, index) => (
                    <motion.button
                        key={action.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        onClick={() => window.open(CONTACT_LINK, '_blank')}
                        className={`
              relative group flex items-center gap-4 p-6 rounded-xl 
              bg-gradient-to-br ${action.gradient}
              border border-white/10 backdrop-blur-md
              text-left transition-all hover:-translate-y-1 hover:border-white/30 cursor-pointer
            `}
                    >
                        <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                            <action.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold">{action.title}</h4>
                            <p className="text-white/60 text-sm">{action.subtitle}</p>
                        </div>
                    </motion.button>
                ))}
            </div>
        </section>
    );
}
