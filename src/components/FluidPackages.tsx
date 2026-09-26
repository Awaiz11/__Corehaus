import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRICING_PACKAGES, BRAND_COPY } from '../data/content';
import { PricingPackage } from '../types';
import { Check, Sparkles, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

interface FluidPackagesProps {
  onSelectPackage: (pkg: PricingPackage) => void;
  onOpenPromo: () => void;
}

export const FluidPackages: React.FC<FluidPackagesProps> = ({
  onSelectPackage,
  onOpenPromo,
}) => {
  const [activeCategory, setActiveCategory] = useState<'intro' | 'pack' | 'membership'>('intro');

  const filteredPackages = PRICING_PACKAGES.filter((p) => p.category === activeCategory);

  const calculateDiscount = (pkg: PricingPackage) => {
    if (!pkg.codeEligible) return null;
    const numericPrice = parseFloat(pkg.price.replace('€', ''));
    if (pkg.codeEligible === 'STRONGSEPTEMBER') {
      const discounted = (numericPrice * 0.85).toFixed(0);
      return `${discounted}€`;
    }
    if (pkg.codeEligible === 'STRONGSEPTEMBER10') {
      const discounted = (numericPrice * 0.9).toFixed(0);
      return `${discounted}€`;
    }
    return null;
  };

  return (
    <section id="packages" className="relative py-28 sm:py-36 bg-[#13090b] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-[#4a1923]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 sm:mb-18 gap-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E2C8B8] font-light mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Investment in Your Strength</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extralight tracking-tight text-[#F4EBE2] uppercase font-sans-luxury">
              Packages & Memberships
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#BDB0A8] font-light max-w-md leading-relaxed">
            Choose between flexible class packages or monthly memberships. Memberships include priority booking windows and exclusive studio perks.
          </p>
        </div>

        {/* Promo Code Quick Bar */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#3a151e]/80 text-[#E2C8B8]">
              <Tag className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm text-[#F4EBE2] font-light">
                Active Code: <span className="font-mono text-[#E2C8B8] font-normal">STRONGSEPTEMBER</span> (15% Off Packs) & <span className="font-mono text-[#E2C8B8] font-normal">STRONGSEPTEMBER10</span> (10% Off Memberships)
              </div>
              <div className="text-[11px] text-[#82726B]">
                {BRAND_COPY.summerPromo.message}
              </div>
            </div>
          </div>

          <button
            onClick={onOpenPromo}
            className="flex-shrink-0 text-xs uppercase tracking-wider text-[#E2C8B8] hover:text-white underline underline-offset-4 font-light"
          >
            Promo Details
          </button>
        </div>

        {/* Minimalist Category Switcher */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-8 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveCategory('intro')}
            className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.16em] font-light transition-all ${
              activeCategory === 'intro'
                ? 'bg-[#F4EBE2] text-[#13090b] font-medium shadow-md'
                : 'text-[#82726B] hover:text-[#F4EBE2] hover:bg-white/[0.04]'
            }`}
          >
            Intro Offers
          </button>
          <button
            onClick={() => setActiveCategory('pack')}
            className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.16em] font-light transition-all ${
              activeCategory === 'pack'
                ? 'bg-[#F4EBE2] text-[#13090b] font-medium shadow-md'
                : 'text-[#82726B] hover:text-[#F4EBE2] hover:bg-white/[0.04]'
            }`}
          >
            Class Packs
          </button>
          <button
            onClick={() => setActiveCategory('membership')}
            className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.16em] font-light transition-all ${
              activeCategory === 'membership'
                ? 'bg-[#F4EBE2] text-[#13090b] font-medium shadow-md'
                : 'text-[#82726B] hover:text-[#F4EBE2] hover:bg-white/[0.04]'
            }`}
          >
            Memberships
          </button>
        </div>

        {/* Seamless Flowing List (Separated by 1px ultra-light dividers border-white/10) */}
        <div className="border-t border-white/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="divide-y divide-white/10"
            >
              {filteredPackages.map((pkg) => {
                const discountedPrice = calculateDiscount(pkg);

                return (
                  <div
                    key={pkg.id}
                    className="group py-8 sm:py-10 transition-colors duration-300 hover:bg-white/[0.02] px-4 sm:px-6 rounded-lg"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      {/* Left: Package Name, Badges, Features */}
                      <div className="lg:max-w-xl">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl sm:text-2xl font-light tracking-wide text-[#F4EBE2] font-sans-luxury uppercase">
                            {pkg.title}
                          </h3>

                          {pkg.badge && (
                            <span className="px-2.5 py-0.5 rounded-full bg-[#E2C8B8]/15 border border-[#E2C8B8]/30 text-[#E2C8B8] text-[10px] uppercase tracking-wider font-light">
                              {pkg.badge}
                            </span>
                          )}

                          {pkg.popular && (
                            <span className="px-2.5 py-0.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-[10px] uppercase tracking-wider font-light">
                              Most Popular
                            </span>
                          )}
                        </div>

                        <p className="text-xs sm:text-sm text-[#BDB0A8] font-light mb-4">
                          {pkg.subtitle}
                        </p>

                        {/* Feature bullets */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#82726B] font-light">
                          {pkg.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2 group-hover:text-[#BDB0A8] transition-colors">
                              <span className="w-1 h-1 rounded-full bg-[#E2C8B8]" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: Modern Thin Pricing & Select Action */}
                      <div className="flex flex-col sm:flex-row sm:items-center lg:items-end justify-between lg:justify-end gap-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/[0.06]">
                        <div className="lg:text-right">
                          <div className="flex items-baseline lg:justify-end gap-2">
                            {discountedPrice ? (
                              <>
                                <span className="text-3xl sm:text-4xl font-extralight text-[#F4EBE2] font-editorial">
                                  {discountedPrice}
                                </span>
                                <span className="text-sm font-light text-[#82726B] line-through font-mono">
                                  {pkg.price}
                                </span>
                              </>
                            ) : (
                              <span className="text-3xl sm:text-4xl font-extralight text-[#F4EBE2] font-editorial">
                                {pkg.price}
                              </span>
                            )}
                          </div>

                          {pkg.unitPrice && (
                            <div className="text-[11px] font-mono text-[#82726B] mt-0.5">
                              {pkg.unitPrice}
                            </div>
                          )}

                          {pkg.codeEligible && (
                            <div className="text-[10px] text-[#E2C8B8] font-light mt-1">
                              Use code {pkg.codeEligible}
                            </div>
                          )}
                        </div>

                        {/* CTA button */}
                        <button
                          onClick={() => onSelectPackage(pkg)}
                          className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-[#F4EBE2] hover:text-[#13090b] text-[#F4EBE2] text-xs uppercase tracking-[0.18em] font-light transition-all duration-300 border border-white/10 hover:border-transparent group-hover:bg-[#F4EBE2] group-hover:text-[#13090b]"
                        >
                          <span>Select Plan</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Studio Membership Guarantees */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#82726B] font-light">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-[#E2C8B8] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-[#F4EBE2] block font-normal mb-0.5">Seamless Pause & Cancel</span>
              <span>Memberships have no long-term lock-in and can be paused for travel up to 30 days.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Check className="w-4 h-4 text-[#E2C8B8] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-[#F4EBE2] block font-normal mb-0.5">Complimentary Towels & Lockers</span>
              <span>All memberships and packages include full access to private showers and amenities.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-[#E2C8B8] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-[#F4EBE2] block font-normal mb-0.5">VIP Guest Invitations</span>
              <span>Monthly memberships include complimentary guest passes to bring friends.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
