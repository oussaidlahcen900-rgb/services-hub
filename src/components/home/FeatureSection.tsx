'use client';

import { ShieldCheck, Zap, Headset } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'Secure Payments',
        description: 'We use encrypted payment gateways to ensure your data is always safe.',
        icon: ShieldCheck,
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10'
    },
    {
        title: 'Instant Activation',
        description: 'Get your subscription credentials delivered to your email instantly after purchase.',
        icon: Zap,
        color: 'text-amber-400',
        bg: 'bg-amber-500/10'
    },
    {
        title: '24/7 Support',
        description: 'Our dedicated support team is available round the clock to assist you.',
        icon: Headset,
        color: 'text-purple-400',
        bg: 'bg-purple-500/10'
    }
];

export function FeatureSection() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors text-center group"
                    >
                        <div className={`mx-auto w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            <feature.icon className={`w-8 h-8 ${feature.color}`} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                        <p className="text-white/50 leading-relaxed">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
