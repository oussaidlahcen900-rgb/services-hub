import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/home/Hero';
import { ServiceGrid } from '@/components/services/ServiceGrid';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] translate-y-1/3" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-1 flex flex-col">
          <Hero />
          <ServiceGrid />
        </div>
      </div>
    </main>
  );
}
