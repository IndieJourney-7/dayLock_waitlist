'use client';

import { useState } from 'react';
import Image from 'next/image';
import WaitlistForm from '@/components/WaitlistForm';
import { RefreshableWaitlistCount } from '@/components/WaitlistCount';

export default function Home() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleSuccess = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="relative min-h-screen bg-[#0B1A14] overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1A14] via-transparent to-[#0B1A14] pointer-events-none" />
      
      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-16">
        <div className="max-w-2xl w-full flex flex-col items-center text-center space-y-8">
          
          {/* Hero Image - Before Tagline */}
          <div className="py-4">
            <Image
              src="/Assets/hero.png"
              alt="Daylock - Shield with clock and locked door"
              width={280}
              height={280}
              className="mx-auto"
              priority
            />
          </div>

          {/* Hero Section */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight italic">
              Your Day. Locked.
              <br />
              One Room at a Time.
            </h1>
            
            <p className="text-lg sm:text-xl text-[#6B8F7A] max-w-lg mx-auto leading-relaxed">
              No to-do lists.<br />
              No motivation hacks.<br />
              Just structure, discipline, and proof.
            </p>
          </div>

          {/* Brand Name */}
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-wide">
            Daylock
          </h2>

          {/* Waitlist Form Section */}
          <div className="w-full flex flex-col items-center space-y-6 pt-4">
            <WaitlistForm onSuccess={handleSuccess} />
            
            {/* Social Proof */}
            <div className="pt-2">
              <RefreshableWaitlistCount refreshKey={refreshKey} />
            </div>
          </div>

          {/* Trust Line */}
          <div className="pt-6">
            <p className="text-sm text-[#6B8F7A] opacity-70">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </main>

      {/* Subtle vignette effect */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, #0B1A14 100%)',
          opacity: 0.4
        }}
      />
    </div>
  );
}

