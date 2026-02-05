'use client';

import { useEffect, useState } from 'react';

export default function SuccessAnimation({ onComplete }: { onComplete?: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 0: Initial
    // Stage 1: Doors start opening
    // Stage 2: Light reveals
    // Stage 3: Message appears
    // Stage 4: Complete
    
    const timers = [
      setTimeout(() => setStage(1), 100),
      setTimeout(() => setStage(2), 600),
      setTimeout(() => setStage(3), 1200),
      setTimeout(() => setStage(4), 2000),
      setTimeout(() => onComplete?.(), 3500),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1A14]/95 backdrop-blur-sm">
      {/* Container */}
      <div className="relative w-full max-w-lg h-[400px] flex items-center justify-center">
        
        {/* Light burst behind doors */}
        <div 
          className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
            stage >= 2 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className={`w-32 h-64 bg-gradient-to-t from-[#22C55E]/0 via-[#22C55E]/40 to-[#22C55E]/0 blur-2xl transition-all duration-1000 ${
              stage >= 2 ? 'scale-150' : 'scale-50'
            }`}
          />
        </div>

        {/* Radial glow */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ${
            stage >= 2 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.2) 0%, transparent 60%)'
          }}
        />

        {/* Door Frame */}
        <div className="relative w-64 h-80">
          {/* Frame border */}
          <div className="absolute inset-0 border-4 border-[#22C55E]/60 rounded-t-lg" />
          
          {/* Left Door */}
          <div 
            className={`absolute left-0 top-0 w-1/2 h-full bg-[#0F1F17] border-r border-[#22C55E]/30 origin-left transition-transform duration-1000 ease-out ${
              stage >= 1 ? '-rotate-y-75' : 'rotate-y-0'
            }`}
            style={{
              transformStyle: 'preserve-3d',
              transform: stage >= 1 ? 'perspective(800px) rotateY(-75deg)' : 'perspective(800px) rotateY(0deg)',
            }}
          >
            {/* Left door panel details */}
            <div className="absolute inset-3 border border-[#22C55E]/20 rounded">
              <div className="absolute inset-2 border border-[#22C55E]/10" />
            </div>
            {/* Door handle */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-8 bg-[#22C55E]/40 rounded-full" />
          </div>

          {/* Right Door */}
          <div 
            className={`absolute right-0 top-0 w-1/2 h-full bg-[#0F1F17] border-l border-[#22C55E]/30 origin-right transition-transform duration-1000 ease-out`}
            style={{
              transformStyle: 'preserve-3d',
              transform: stage >= 1 ? 'perspective(800px) rotateY(75deg)' : 'perspective(800px) rotateY(0deg)',
            }}
          >
            {/* Right door panel details */}
            <div className="absolute inset-3 border border-[#22C55E]/20 rounded">
              <div className="absolute inset-2 border border-[#22C55E]/10" />
            </div>
            {/* Door handle */}
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-8 bg-[#22C55E]/40 rounded-full" />
          </div>

          {/* Lock breaking particles */}
          {stage >= 1 && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-[#22C55E] rounded-full animate-ping"
                  style={{
                    transform: `rotate(${i * 45}deg) translateX(${20 + Math.random() * 30}px)`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '0.8s',
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Success Message */}
        <div 
          className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
            stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Checkmark */}
          <div className={`mb-6 transition-all duration-500 ${stage >= 3 ? 'scale-100' : 'scale-0'}`}>
            <div className="relative w-20 h-20 rounded-full bg-[#22C55E]/20 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[#22C55E]/10 animate-ping" />
              <svg 
                className="w-10 h-10 text-[#22C55E]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={3} 
                  d="M5 13l4 4L19 7"
                  className={`transition-all duration-500 ${stage >= 3 ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    strokeDasharray: 24,
                    strokeDashoffset: stage >= 3 ? 0 : 24,
                    transition: 'stroke-dashoffset 0.5s ease-out 0.3s',
                  }}
                />
              </svg>
            </div>
          </div>

          {/* Text */}
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            You&apos;re In
          </h3>
          <p className="text-[#22C55E] font-medium text-lg mb-1">
            The doors are opening for you
          </p>
          <p className="text-[#6B8F7A] text-sm">
            We&apos;ll notify you when it&apos;s time to lock your day
          </p>
        </div>

        {/* Sparkles */}
        {stage >= 2 && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#22C55E] rounded-full"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animation: `sparkle 1.5s ease-out ${i * 0.1}s forwards`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes sparkle {
          0% {
            opacity: 1;
            transform: scale(0) translateY(0);
          }
          50% {
            opacity: 1;
            transform: scale(1.5) translateY(-20px);
          }
          100% {
            opacity: 0;
            transform: scale(0) translateY(-40px);
          }
        }
      `}</style>
    </div>
  );
}
