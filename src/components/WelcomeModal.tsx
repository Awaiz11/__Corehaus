import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Sparkles, ArrowRight } from 'lucide-react';
import { BRAND_COPY } from '../data/content';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExplorePackages: () => void;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({
  isOpen,
  onClose,
  onExplorePackages,
}) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-[#1c0d10]/90 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 shadow-2xl text-[#F4EBE2] z-10"
          >
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#541a25]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 text-[#BDB0A8] hover:text-[#F4EBE2] hover:bg-white/[0.06] rounded-full transition-colors duration-200"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E2C8B8] font-medium mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E2C8B8]" />
              <span>{BRAND_COPY.summerPromo.title}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-light tracking-tight text-[#F4EBE2] font-editorial italic mb-2">
              Begin Your Corehaus Journey
            </h3>

            <p className="text-xs sm:text-sm text-[#BDB0A8] font-light leading-relaxed mb-6">
              {BRAND_COPY.summerPromo.message}
            </p>

            {/* Promo Code Cards */}
            <div className="space-y-3 mb-6">
              {/* Promo 1 */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-all">
                <div className="pr-2">
                  <div className="text-xs text-[#F4EBE2] font-medium">
                    {BRAND_COPY.summerPromo.packPromo}
                  </div>
                  <div className="text-[11px] font-mono text-[#E2C8B8] mt-0.5 tracking-wider">
                    {BRAND_COPY.summerPromo.packCode}
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(BRAND_COPY.summerPromo.packCode)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-xs font-light text-[#F4EBE2] transition-colors"
                >
                  {copiedCode === BRAND_COPY.summerPromo.packCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300 text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Promo 2 */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-all">
                <div className="pr-2">
                  <div className="text-xs text-[#F4EBE2] font-medium">
                    {BRAND_COPY.summerPromo.membershipPromo}
                  </div>
                  <div className="text-[11px] font-mono text-[#E2C8B8] mt-0.5 tracking-wider">
                    {BRAND_COPY.summerPromo.membershipCode}
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(BRAND_COPY.summerPromo.membershipCode)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-xs font-light text-[#F4EBE2] transition-colors"
                >
                  {copiedCode === BRAND_COPY.summerPromo.membershipCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300 text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={() => {
                  onClose();
                  onExplorePackages();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#F4EBE2] text-[#13090b] text-xs font-medium tracking-wider uppercase hover:bg-white transition-colors"
              >
                <span>Explore Packages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onClose}
                className="py-3 px-4 rounded-xl text-xs font-light tracking-wider text-[#BDB0A8] hover:text-[#F4EBE2] hover:bg-white/[0.04] transition-colors"
              >
                Dismiss
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
