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
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={status === 'loading'}
          className="flex-1 px-5 py-4 bg-[#0F1F17] border border-[#1a2f24] rounded-lg 
                     text-white placeholder-[#6B8F7A] 
                     focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]
                     transition-all duration-200 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-8 py-4 bg-[#22C55E] text-[#0B1A14] font-semibold rounded-lg
                     hover:bg-[#1ea550] active:scale-[0.98]
                     transition-all duration-200
                     shadow-[0_0_20px_rgba(34,197,94,0.3)]
                     hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]
                     disabled:opacity-50 disabled:cursor-not-allowed
                     whitespace-nowrap"
        >
          {status === 'loading' ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Joining...
            </span>
          ) : (
            'Join the Waitlist'
          )}
        </button>
      </div>
      
      {message && (
        <p className={`mt-4 text-sm ${status === 'success' ? 'text-[#22C55E]' : 'text-red-400'}`}>
          {message}
        </p>
      )}
      
      {status !== 'success' && (
        <p className="mt-4 text-sm text-[#6B8F7A]">
          Be early. Be disciplined.<br />
          We&apos;ll notify you when the doors open.
        </p>
      )}
    </form>
  );
}
