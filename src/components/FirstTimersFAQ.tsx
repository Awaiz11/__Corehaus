import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../data/content';
import { HelpCircle, Plus, Minus, ArrowUpRight } from 'lucide-react';

interface FirstTimersFAQProps {
  onBookClick: () => void;
}

export const FirstTimersFAQ: React.FC<FirstTimersFAQProps> = ({ onBookClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-28 sm:py-36 bg-[#170b0e] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E2C8B8] font-light mb-3"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Essential Knowledge</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extralight tracking-tight text-[#F4EBE2] uppercase font-sans-luxury mb-4"
          >
            Frequently Asked
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-[#BDB0A8] font-light"
          >
            Everything you need to know before stepping onto the carriage for your first 50 minutes.
          </motion.p>
        </div>

        {/* Minimalist Accordion List */}
        <div className="border-t border-white/10 divide-y divide-white/10">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.06 }}
                className="py-6 sm:py-7 transition-colors duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left gap-6 group"
                >
                  <span className="text-base sm:text-lg font-light text-[#F4EBE2] group-hover:text-white transition-colors font-sans-luxury">
                    {faq.question}
                  </span>
                  <span className="p-2 rounded-full bg-white/[0.04] text-[#BDB0A8] group-hover:text-[#F4EBE2] flex-shrink-0 transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs sm:text-sm text-[#BDB0A8] font-light leading-relaxed pt-4 pr-12">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Help Contact Banner */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-light text-[#F4EBE2]">Have more questions?</div>
            <div className="text-xs text-[#82726B] font-light mt-0.5">
              Contact our concierge team at <span className="text-[#E2C8B8]">info@corehaus.es</span> or call <span className="text-[#E2C8B8]">+34 670 87 36 30</span>
            </div>
          </div>

          <button
            onClick={onBookClick}
            className="flex items-center gap-1.5 px-6 py-3 rounded-full bg-[#F4EBE2] text-[#13090b] text-xs uppercase tracking-wider font-medium hover:bg-white transition-colors"
          >
            <span>Book First Class</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
