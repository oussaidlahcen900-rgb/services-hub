'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { CONTACT_LINK } from '@/lib/constants';

export function Navbar() {
    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Contact', href: '#' },
    ];

    return (
        <nav className="flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-sm fixed top-0 w-full z-50">
            <div className="flex items-center gap-8">
                <div className="flex gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-white/80",
                                item.name === 'Home' ? "text-white border-b-2 border-white pb-1" : "text-white/70"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>

            <button
                onClick={() => window.open(CONTACT_LINK, '_blank')}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-semibold backdrop-blur-md border border-white/10 transition-all cursor-pointer"
            >
                Get in Touch
            </button>
        </nav>
    );
}
