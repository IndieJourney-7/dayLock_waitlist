'use client';

import { useEffect, useState } from 'react';

export default function WaitlistCount() {
  const [count, setCount] = useState<number | null>(null);

  const fetchCount = async () => {
    try {
      const response = await fetch('/api/waitlist/count');
      const data = await response.json();
      setCount(data.count);
    } catch (error) {
      console.error('Failed to fetch count:', error);
    }
  };

  useEffect(() => {
    fetchCount();
    const interval = setInterval(fetchCount, 30000);
    return () => clearInterval(interval);
  }, []);

  if (count === null) {
    return (
      <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#0F1F17]/50 border border-[#1a2f24]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse" />
        <span className="text-sm text-[#6B8F7A]">Loading...</span>
      </div>
    );
  }

  const displayCount = count + 1284;

  return (
    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0F1F17]/60 border border-[#1a2f24] backdrop-blur-sm">
      {/* Animated indicator */}
      <div className="relative flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
        <div className="absolute w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-ping opacity-40" />
        <div className="absolute w-5 h-5 rounded-full bg-[#22C55E]/10 animate-pulse" />
      </div>
      
      {/* Count badge */}
      <div className="flex items-center gap-2">
        <span className="px-2.5 py-0.5 rounded-md bg-[#22C55E]/10 border border-[#22C55E]/20">
          <span className="text-[#22C55E] font-bold tabular-nums text-sm">
            {displayCount.toLocaleString()}
          </span>
        </span>
        <span className="text-sm text-[#8BA898]">
          have joined the waitlist
        </span>
      </div>
    </div>
  );
}

export function RefreshableWaitlistCount({ refreshKey }: { refreshKey: number }) {
  const [count, setCount] = useState<number | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const fetchCount = async () => {
    try {
      const response = await fetch('/api/waitlist/count');
      const data = await response.json();
      setCount(data.count);
    } catch (error) {
      console.error('Failed to fetch count:', error);
    }
  };

  useEffect(() => {
    setIsUpdating(true);
    fetchCount().finally(() => {
      setTimeout(() => setIsUpdating(false), 300);
    });
  }, [refreshKey]);

  useEffect(() => {
    const interval = setInterval(fetchCount, 30000);
    return () => clearInterval(interval);
  }, []);

  if (count === null) {
    return (
      <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#0F1F17]/50 border border-[#1a2f24]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse" />
        <span className="text-sm text-[#6B8F7A]">Loading...</span>
      </div>
    );
  }

  const displayCount = count + 1284;

  return (
    <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0F1F17]/60 border border-[#1a2f24] backdrop-blur-sm transition-all duration-300 ${isUpdating ? 'scale-105 border-[#22C55E]/50' : ''}`}>
      {/* Animated indicator */}
      <div className="relative flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
        <div className="absolute w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-ping opacity-40" />
        <div className="absolute w-5 h-5 rounded-full bg-[#22C55E]/10 animate-pulse" />
      </div>
      
      {/* Count badge */}
      <div className="flex items-center gap-2">
        <span className={`px-2.5 py-0.5 rounded-md bg-[#22C55E]/10 border border-[#22C55E]/20 transition-all duration-300 ${isUpdating ? 'bg-[#22C55E]/20' : ''}`}>
          <span className="text-[#22C55E] font-bold tabular-nums text-sm">
            {displayCount.toLocaleString()}
          </span>
        </span>
        <span className="text-sm text-[#8BA898]">
          have joined the waitlist
        </span>
      </div>
    </div>
  );
}
