import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { BRAND_COPY } from '../data/content';

interface FooterProps {
  onOpenPromo: () => void;
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPromo, onBookClick }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="relative bg-[#0e0608] border-t border-white/[0.08] pt-20 pb-12 text-[#F4EBE2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/[0.08]">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E2C8B8]" />
              <span className="text-xl font-light tracking-[0.25em] uppercase font-sans-luxury">
                COREHAUS
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#BDB0A8] font-light max-w-sm leading-relaxed">
              A 50-minute high-intensity, low-impact resistance sanctuary. Redefining physical conditioning through precision time under tension.
            </p>

            <div className="text-xs text-[#82726B] font-light space-y-1">
              <div>{BRAND_COPY.studio.address}</div>
              <div>{BRAND_COPY.studio.phone} · {BRAND_COPY.studio.email}</div>
            </div>
          </div>

          {/* Quick Navigation Columns */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8 text-xs font-light">
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-widest text-[#E2C8B8] font-mono block">
                Explore
              </span>
              <a href="#about" className="block text-[#BDB0A8] hover:text-[#F4EBE2] transition-colors">
                The Method
              </a>
              <button
                onClick={onBookClick}
                className="block text-[#BDB0A8] hover:text-[#F4EBE2] transition-colors text-left"
              >
                Class Schedule
              </button>
              <a href="#packages" className="block text-[#BDB0A8] hover:text-[#F4EBE2] transition-colors">
                Packages
              </a>
              <a href="#studio" className="block text-[#BDB0A8] hover:text-[#F4EBE2] transition-colors">
                The Studio
              </a>
            </div>

            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-widest text-[#E2C8B8] font-mono block">
                Connect
              </span>
              <a
                href="https://instagram.com/corehaus_es"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#BDB0A8] hover:text-[#F4EBE2] transition-colors"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#BDB0A8] hover:text-[#F4EBE2] transition-colors"
              >
                <span>Spotify</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <button
                onClick={onOpenPromo}
                className="block text-[#E2C8B8] hover:underline text-left text-xs"
              >
                Promo Codes
              </button>
              <a
                href="/login-portal"
                className="block text-[#BDB0A8] hover:text-[#F4EBE2] transition-colors"
              >
                Member Log In
              </a>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[11px] uppercase tracking-widest text-[#E2C8B8] font-mono block">
              Editorial Journal & Schedule Drops
            </span>
            <p className="text-xs text-[#82726B] font-light">
              Receive weekly schedule releases, master instructor workshops, and private studio perks.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-[#F4EBE2] placeholder-[#82726B] focus:outline-none focus:border-[#E2C8B8]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-[#F4EBE2] text-[#13090b] text-xs uppercase tracking-wider font-medium hover:bg-white transition-colors"
                >
                  Join
                </button>
              </div>

              {subscribed && (
                <div className="text-[11px] text-emerald-300 flex items-center gap-1 pt-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Welcome to the Corehaus community.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#82726B] font-light gap-4">
          <div>
            © {new Date().getFullYear()} COREHAUS. All rights reserved. Carrer d'Alfons XII, 10, Barcelona.
          </div>

          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-[#BDB0A8] transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-[#BDB0A8] transition-colors">
              Terms & Studio Rules
            </a>
            <a href="#cookies" className="hover:text-[#BDB0A8] transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
