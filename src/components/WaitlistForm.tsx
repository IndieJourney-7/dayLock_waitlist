'use client';

import { useState } from 'react';

export default function WaitlistForm({ onSuccess }: { onSuccess?: () => void }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus('error');
        setMessage(data.error || 'Something went wrong');
        return;
      }

      setStatus('success');
      setMessage('You\'re in. We\'ll be watching.');
      setEmail('');
      onSuccess?.();
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Form Container with subtle border glow */}
      <div className="relative p-1 rounded-2xl bg-gradient-to-r from-[#1a2f24] via-[#22C55E]/20 to-[#1a2f24]">
        <div className="flex flex-col sm:flex-row gap-3 p-4 bg-[#0B1A14] rounded-xl">
          <div className="relative flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              required
              disabled={status === 'loading'}
              className="w-full px-5 py-4 bg-[#0F1F17]/80 border border-[#1a2f24] rounded-xl 
                       text-white placeholder-[#5a7a69] text-base
                       focus:outline-none focus:border-[#22C55E]/50 focus:bg-[#0F1F17]
                       transition-all duration-300 disabled:opacity-50"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="relative px-8 py-4 bg-[#22C55E] text-[#0B1A14] font-bold rounded-xl
                       text-base tracking-wide uppercase
                       transition-all duration-300
                       hover:bg-[#2dd468] active:scale-[0.98]
                       shadow-[0_0_30px_rgba(34,197,94,0.4)]
                       hover:shadow-[0_0_50px_rgba(34,197,94,0.6)]
                       disabled:opacity-50 disabled:cursor-not-allowed
                       whitespace-nowrap overflow-hidden group"
          >
            {/* Button shine effect */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"/>
            
            {status === 'loading' ? (
              <span className="relative flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Joining...
              </span>
            ) : (
              <span className="relative">Join Waitlist</span>
            )}
          </button>
        </div>
      </div>
      
      {/* Message */}
      {message && (
        <div className={`mt-4 text-center animate-fade-in ${status === 'success' ? 'text-[#22C55E]' : 'text-red-400'}`}>
          <p className="text-sm font-medium">{message}</p>
        </div>
      )}
      
      {/* Helper text */}
      {status !== 'success' && (
        <p className="mt-5 text-center text-sm text-[#5a7a69]">
          Be early. Be disciplined. We&apos;ll notify you when the doors open.
        </p>
      )}
    </form>
  );
}
