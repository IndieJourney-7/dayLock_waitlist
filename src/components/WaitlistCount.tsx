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
    // Refresh count every 30 seconds
    const interval = setInterval(fetchCount, 30000);
    return () => clearInterval(interval);
  }, []);

  if (count === null) {
    return (
      <div className="flex items-center gap-3 text-[#6B8F7A]">
        <div className="w-3 h-3 rounded-full bg-[#22C55E] animate-pulse" />
        <span className="text-sm">Loading...</span>
      </div>
    );
  }

  // Display with a base count for social proof
  const displayCount = count + 1284;

  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
        <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#22C55E] animate-ping opacity-50" />
      </div>
      <span className="text-[#6B8F7A]">
        <span className="text-white font-semibold tabular-nums">
          {displayCount.toLocaleString()}
        </span>
        {' '}people are preparing to win their day
      </span>
    </div>
  );
}

export function RefreshableWaitlistCount({ refreshKey }: { refreshKey: number }) {
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
  }, [refreshKey]);

  useEffect(() => {
    const interval = setInterval(fetchCount, 30000);
    return () => clearInterval(interval);
  }, []);

  if (count === null) {
    return (
      <div className="flex items-center gap-3 text-[#6B8F7A]">
        <div className="w-3 h-3 rounded-full bg-[#22C55E] animate-pulse" />
        <span className="text-sm">Loading...</span>
      </div>
    );
  }

  const displayCount = count + 1284;

  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
        <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#22C55E] animate-ping opacity-50" />
      </div>
      <span className="text-[#6B8F7A]">
        <span className="text-white font-semibold tabular-nums">
          {displayCount.toLocaleString()}
        </span>
        {' '}people are preparing to win their day
      </span>
    </div>
  );
}
