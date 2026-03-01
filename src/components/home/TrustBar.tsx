'use client';

import {
    NetflixIcon,
    MicrosoftIcon,
    AdobeIcon,
    SpotifyIcon,
    DisneyPlusIcon
} from '@/components/ui/BrandIcons';

export function TrustBar() {
    return (
        <section className="py-10 border-y border-white/5 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-6 overflow-hidden">
                <p className="text-center text-white/40 text-sm mb-8 uppercase tracking-widest font-medium">Trusted by thousands of customers</p>

                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <NetflixIcon className="h-8 w-auto hover:text-red-600 transition-colors" />
                    <MicrosoftIcon className="h-8 w-auto hover:text-blue-500 transition-colors" />
                    <AdobeIcon className="h-8 w-auto hover:text-red-500 transition-colors" />
                    <SpotifyIcon className="h-8 w-auto hover:text-green-500 transition-colors" />
                    <DisneyPlusIcon className="h-10 w-auto hover:text-blue-400 transition-colors" />
                </div>
            </div>
        </section>
    );
}
