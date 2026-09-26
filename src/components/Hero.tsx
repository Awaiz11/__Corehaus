import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onExplorePackages: () => void;
  onOpenPromo: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBookClick,
  onExplorePackages,
  onOpenPromo,
}) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-6 sm:px-12">
      {/* Dark Cinematic Background Image with rich burgundy tint & gradient vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-corehaus.jpg"
          alt="Corehaus Luxury Boutique Studio"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.42] contrast-[1.08]"
        />
        {/* Layered rich burgundy gradients for depth and negative space */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#13090b] via-[#13090b]/75 to-[#13090b]/55" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#13090b]/40 to-[#13090b]/90" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#581c29]/20 blur-[140px] pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Subtle Promo Tag */}
        <motion.button
          onClick={onOpenPromo}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 transition-all duration-300 mb-8 cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#E2C8B8]" />
          <span className="text-[11px] sm:text-xs font-light tracking-[0.2em] uppercase text-[#E2C8B8]">
            Summer Promo · 15% Off Packs With STRONGSEPTEMBER
          </span>
        </motion.button>

        {/* Headline: gently fades in and slightly drifts upward (no aggressive staggering) */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-[0.08em] sm:tracking-[0.12em] text-[#F4EBE2] uppercase leading-[1.12] font-sans-luxury mb-6 sm:mb-8 text-balance"
        >
          CREATE THE STRONGEST <br className="hidden sm:inline" />
          VERSION OF YOURSELF
        </motion.h1>

        {/* Subtitle / Real copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base md:text-lg font-light text-[#BDB0A8] max-w-2xl leading-relaxed mb-10 sm:mb-12 text-balance"
        >
          A 50‑minute, high‑intensity, low‑impact workout that will{' '}
          <strong className="font-normal text-[#F4EBE2]">
            sculpt, tone, and strengthen
          </strong>{' '}
          every muscle of your body. Get ready to sweat, shake, and keep coming
          back for more.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#F4EBE2] text-[#13090b] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-white hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#13090b]/50"
          >
            Book Your Class
          </button>
          <button
            onClick={onExplorePackages}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-[#F4EBE2] text-xs uppercase tracking-[0.2em] font-light border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            Explore Packages
          </button>
        </motion.div>

        {/* Studio Quick Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.2, delay: 0.95 }}
          className="mt-16 sm:mt-20 pt-8 border-t border-white/[0.08] w-full grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div>
            <div className="text-xl sm:text-2xl font-light text-[#F4EBE2] font-editorial">
              50 Min
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#82726B] mt-1">
              High Intensity
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-light text-[#F4EBE2] font-editorial">
              Zero Impact
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#82726B] mt-1">
              Joint Protected
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-light text-[#F4EBE2] font-editorial">
              12 Reformers
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#82726B] mt-1">
              Intimate Sessions
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-light text-[#F4EBE2] font-editorial">
              Barcelona
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#82726B] mt-1">
              Alfons XII, 10
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 p-2 text-[#BDB0A8] hover:text-[#F4EBE2] transition-colors"
        aria-label="Scroll to about"
      >
        <ArrowDown className="w-4 h-4 animate-bounce duration-1000" />
      </motion.a>
    </section>
  );
};
