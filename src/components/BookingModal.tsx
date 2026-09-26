import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClassItem, PricingPackage } from '../types';
import { X, Check, Calendar, Sparkles, ArrowRight } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedClass: ClassItem | null;
  selectedDayName: string;
  selectedPackage: PricingPackage | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedClass,
  selectedDayName,
  selectedPackage,
}) => {
  const [selectedSpot, setSelectedSpot] = useState<number>(3);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [promoInput, setPromoInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasGripSocks, setHasGripSocks] = useState(true);

  if (!isOpen) return null;

  const handleApplyPromo = () => {
    const code = promoInput.trim().toUpperCase();
    if (code === 'STRONGSEPTEMBER' || code === 'STRONGSEPTEMBER10') {
      setAppliedPromo(code);
    } else {
      alert('Invalid promo code. Try STRONGSEPTEMBER or STRONGSEPTEMBER10');
    }
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) {
      alert('Please provide your name and email to reserve.');
      return;
    }
    setIsSuccess(true);
  };

  const resetModal = () => {
    setIsSuccess(false);
    onClose();
  };

  const spots = Array.from({ length: 12 }, (_, i) => ({
    number: i + 1,
    isTaken: [1, 4, 8, 11].includes(i + 1),
  }));

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetModal}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-[#190c0f]/95 border border-white/15 rounded-2xl p-6 sm:p-8 text-[#F4EBE2] shadow-2xl z-10 my-8 overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#5e1e2c]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={resetModal}
            aria-label="Close booking modal"
            className="absolute top-4 right-4 p-2 rounded-full text-[#BDB0A8] hover:text-[#F4EBE2] hover:bg-white/[0.06] transition-colors"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>

          {!isSuccess ? (
            <div>
              {/* Header */}
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E2C8B8] font-medium mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#E2C8B8]" />
                <span>
                  {selectedPackage ? 'Package Checkout' : 'Reserve Reformer Carriage'}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-light text-[#F4EBE2] font-editorial mb-4">
                {selectedPackage
                  ? selectedPackage.title
                  : selectedClass
                  ? selectedClass.name
                  : 'Corehaus Signature Session'}
              </h3>

              {/* Class summary if selecting a class */}
              {selectedClass && (
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-6 space-y-2 text-xs text-[#BDB0A8]">
                  <div className="flex items-center justify-between text-[#F4EBE2] font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#E2C8B8]" />
                      {selectedDayName} · {selectedClass.time}
                    </span>
                    <span className="font-mono text-[#E2C8B8]">{selectedClass.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Instructor: <strong className="text-[#F4EBE2] font-normal">{selectedClass.instructor}</strong></span>
                    <span>Focus: {selectedClass.focus}</span>
                  </div>
                </div>
              )}

              {/* Machine Spot Selector (Reformers 1 to 12) if class booking */}
              {selectedClass && (
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs text-[#BDB0A8] mb-2.5">
                    <span>Select Carriage / Reformer Machine:</span>
                    <span className="font-mono text-[#E2C8B8]">Reformer #{selectedSpot}</span>
                  </div>

                  <div className="grid grid-cols-6 gap-2">
                    {spots.map((spot) => (
                      <button
                        key={spot.number}
                        type="button"
                        disabled={spot.isTaken}
                        onClick={() => setSelectedSpot(spot.number)}
                        className={`py-2 rounded-lg text-xs font-mono transition-all ${
                          spot.isTaken
                            ? 'bg-white/[0.02] text-[#82726B]/40 cursor-not-allowed border border-transparent'
                            : selectedSpot === spot.number
                            ? 'bg-[#E2C8B8] text-[#13090b] font-medium shadow-md'
                            : 'bg-white/[0.05] text-[#F4EBE2] hover:bg-white/10 border border-white/10'
                        }`}
                      >
                        {spot.number < 10 ? `0${spot.number}` : spot.number}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-[10px] text-[#82726B] mt-2 justify-center">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded bg-[#E2C8B8]" /> Selected
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded bg-white/[0.08]" /> Available
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded bg-white/[0.02]" /> Reserved
                    </span>
                  </div>
                </div>
              )}

              {/* Reservation Form */}
              <form onSubmit={handleConfirm} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#BDB0A8] font-light mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Elena Navarro"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-[#F4EBE2] placeholder-[#82726B] focus:outline-none focus:border-[#E2C8B8] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#BDB0A8] font-light mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="elena@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-[#F4EBE2] placeholder-[#82726B] focus:outline-none focus:border-[#E2C8B8] transition-colors"
                  />
                </div>

                {/* Promo Code Input */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#BDB0A8] font-light mb-1.5">
                    Promo Code (Optional)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      placeholder="e.g. STRONGSEPTEMBER"
                      className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono uppercase text-[#F4EBE2] placeholder-[#82726B] focus:outline-none focus:border-[#E2C8B8]"
                    />
                    <button
                      type="button"
                      onClick={handleApplyPromo}
                      className="px-4 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/15 text-xs font-light text-[#F4EBE2] transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {appliedPromo && (
                    <div className="text-[11px] text-emerald-300 mt-1 flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      <span>Promo code {appliedPromo} successfully applied!</span>
                    </div>
                  )}
                </div>

                {/* Grip Socks Reminder */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="socks"
                    checked={hasGripSocks}
                    onChange={(e) => setHasGripSocks(e.target.checked)}
                    className="w-4 h-4 rounded border-white/20 bg-white/5 accent-[#E2C8B8] cursor-pointer"
                  />
                  <label htmlFor="socks" className="text-xs text-[#BDB0A8] font-light cursor-pointer">
                    I acknowledge that grip socks are mandatory on Corehaus carriages
                  </label>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full mt-4 py-3.5 px-6 rounded-xl bg-[#F4EBE2] hover:bg-white text-[#13090b] text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Complete Reservation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          ) : (
            /* Confirmation State */
            <div className="text-center py-6 sm:py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                <Check className="w-7 h-7 stroke-[2]" />
              </div>

              <h3 className="text-2xl font-light text-[#F4EBE2] font-editorial">
                Reservation Confirmed
              </h3>

              <p className="text-xs sm:text-sm text-[#BDB0A8] font-light max-w-sm mx-auto leading-relaxed">
                We have emailed your confirmation to <strong className="text-[#F4EBE2] font-normal">{email}</strong>. Carriage Reformer #{selectedSpot} is reserved for you.
              </p>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-[#BDB0A8] text-left space-y-1.5 max-w-sm mx-auto">
                <div className="flex justify-between">
                  <span>Guest:</span>
                  <span className="text-[#F4EBE2]">{fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Studio:</span>
                  <span className="text-[#F4EBE2]">Carrer d'Alfons XII, 10, Barcelona</span>
                </div>
                <div className="flex justify-between">
                  <span>Carriage:</span>
                  <span className="text-[#E2C8B8] font-mono">Reformer 0{selectedSpot}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  onClick={resetModal}
                  className="py-3 px-6 rounded-xl bg-[#F4EBE2] text-[#13090b] text-xs uppercase tracking-wider font-medium hover:bg-white transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
