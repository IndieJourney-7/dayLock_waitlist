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
      {/* Animated Background Gradient */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34, 197, 94, 0.15), transparent)',
        }}
      />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322C55E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Left Door Silhouette */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-20 hidden lg:block">
        <svg width="200" height="400" viewBox="0 0 200 400" fill="none">
          <rect x="20" y="20" width="160" height="360" rx="4" stroke="#22C55E" strokeWidth="2" fill="#0F1F17"/>
          <rect x="40" y="50" width="120" height="140" rx="2" stroke="#22C55E" strokeWidth="1" fill="none"/>
          <rect x="40" y="210" width="120" height="150" rx="2" stroke="#22C55E" strokeWidth="1" fill="none"/>
          <circle cx="150" cy="200" r="8" stroke="#22C55E" strokeWidth="1.5" fill="#0F1F17"/>
        </svg>
      </div>

      {/* Right Door Silhouette */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 opacity-20 hidden lg:block">
        <svg width="200" height="400" viewBox="0 0 200 400" fill="none">
          <rect x="20" y="20" width="160" height="360" rx="4" stroke="#22C55E" strokeWidth="2" fill="#0F1F17"/>
          <rect x="40" y="50" width="120" height="140" rx="2" stroke="#22C55E" strokeWidth="1" fill="none"/>
          <rect x="40" y="210" width="120" height="150" rx="2" stroke="#22C55E" strokeWidth="1" fill="none"/>
          <circle cx="50" cy="200" r="8" stroke="#22C55E" strokeWidth="1.5" fill="#0F1F17"/>
          {/* Lock icon */}
          <g transform="translate(42, 215)">
            <rect x="0" y="6" width="16" height="12" rx="2" stroke="#22C55E" strokeWidth="1" fill="none"/>
            <path d="M3 6 V4 C3 1.5 5.5 0 8 0 C10.5 0 13 1.5 13 4 V6" stroke="#22C55E" strokeWidth="1" fill="none"/>
          </g>
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#22C55E] rounded-full opacity-30 animate-pulse" style={{animationDelay: '0s', animationDuration: '3s'}}/>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#22C55E] rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}/>
        <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-[#22C55E] rounded-full opacity-25 animate-pulse" style={{animationDelay: '2s', animationDuration: '3.5s'}}/>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-[#22C55E] rounded-full opacity-15 animate-pulse" style={{animationDelay: '0.5s', animationDuration: '5s'}}/>
        <div className="absolute top-1/2 left-[10%] w-1 h-1 bg-[#22C55E] rounded-full opacity-20 animate-pulse" style={{animationDelay: '1.5s', animationDuration: '4s'}}/>
        <div className="absolute top-[15%] right-[15%] w-1.5 h-1.5 bg-[#22C55E] rounded-full opacity-25 animate-pulse" style={{animationDelay: '2.5s', animationDuration: '3s'}}/>
      </div>
      
      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-6 sm:py-8">
        <div className="max-w-2xl w-full flex flex-col items-center text-center">
          
          {/* Headline - Above Image */}
          <div className="mb-3 sm:mb-4 animate-fade-in">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-[1.15]">
              <span className="text-white italic">Discipline Beats Motivation.</span>
              <br />
              <span className="text-[#22C55E]">One Room at a Time.</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-[#8BA898] mb-4 sm:mb-5 max-w-sm animate-fade-in-delay">
            Ready to lock your day? Join the waitlist for early access.
          </p>

          {/* Hero Image with Glow */}
          <div className="relative mb-4 sm:mb-5 group">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-[#22C55E] opacity-20 blur-3xl scale-75 group-hover:opacity-30 transition-opacity duration-500"/>
            <Image
              src="/Assets/heroimg.png"
              alt="Daylock - Shield with clock and locked door"
              width={200}
              height={200}
              className="relative mx-auto drop-shadow-2xl transition-transform duration-500 hover:scale-105 sm:w-[240px] sm:h-[240px]"
              priority
            />
          </div>

          {/* Waitlist Form Section */}
          <div className="w-full max-w-md flex flex-col items-center space-y-4 sm:space-y-5 mb-4">
            <WaitlistForm onSuccess={handleSuccess} />
            
            {/* Social Proof */}
            <RefreshableWaitlistCount refreshKey={refreshKey} />
          </div>

          {/* Trust Line */}
          <p className="text-xs sm:text-sm text-[#6B8F7A] opacity-60">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </main>

      {/* Bottom Vignette */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at 50% 100%, rgba(11, 26, 20, 0.8) 0%, transparent 50%)',
        }}
      />

      {/* Top Vignette */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 50% at 50% 0%, rgba(11, 26, 20, 0.6) 0%, transparent 50%)',
        }}
      />
    </div>
  );
}

