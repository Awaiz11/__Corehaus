import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND_COPY } from '../data/content';
import { ArrowRight } from 'lucide-react';

interface MethodEditorialProps {
  onBookClick: () => void;
}

export const MethodEditorial: React.FC<MethodEditorialProps> = ({ onBookClick }) => {
  const [activePillar, setActivePillar] = useState(0);

  const pillarImages = [
    '/images/method-tension.jpg',
    'https://images.pexels.com/photos/31509837/pexels-photo-31509837.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
    '/images/experience-sound.jpg',
  ];

  return (
    <section id="about" className="relative py-28 sm:py-36 bg-[#13090b] overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#4e1b26]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#3d131b]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Editorial Section Header */}
        <div id="method" className="mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#E2C8B8] font-light mb-4"
          >
            <span className="w-8 h-[1px] bg-[#E2C8B8]/60" />
            <span>The Corehaus Method</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-baseline">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 text-3xl sm:text-5xl lg:text-6xl font-extralight tracking-tight text-[#F4EBE2] uppercase leading-[1.08] font-sans-luxury"
            >
              {BRAND_COPY.methodTitle}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 text-base sm:text-lg font-light text-[#BDB0A8] leading-relaxed"
            >
              {BRAND_COPY.methodLead}
            </motion.p>
          </div>
        </div>

        {/* Editorial 3-Pillars Showcase (NO CARDS - Pure typography and editorial image interplay) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Interactive Pillar List with ultra-fine dividers */}
          <div className="lg:col-span-6 space-y-0">
            {BRAND_COPY.pillars.map((pillar, idx) => {
              const isActive = activePillar === idx;
              return (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setActivePillar(idx)}
                  className={`group relative py-8 sm:py-10 border-t border-white/[0.08] cursor-pointer transition-colors duration-300 ${
                    isActive ? 'border-white/30' : 'hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start justify-between gap-6 mb-3">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span
                        className={`text-xs font-mono tracking-widest transition-colors duration-300 ${
                          isActive ? 'text-[#E2C8B8]' : 'text-[#82726B] group-hover:text-[#BDB0A8]'
                        }`}
                      >
                        [{pillar.number}]
                      </span>
                      <h3
                        className={`text-xl sm:text-2xl font-light uppercase tracking-wider transition-colors duration-300 font-sans-luxury ${
                          isActive ? 'text-[#F4EBE2]' : 'text-[#BDB0A8] group-hover:text-[#F4EBE2]'
                        }`}
                      >
                        {pillar.title}
                      </h3>
                    </div>

                    <span className="hidden sm:inline-block text-[11px] uppercase tracking-[0.2em] font-light text-[#82726B]">
                      {pillar.tag}
                    </span>
                  </div>

                  <p
                    className={`text-sm sm:text-base font-light leading-relaxed pl-10 sm:pl-12 transition-all duration-300 ${
                      isActive
                        ? 'text-[#BDB0A8] max-h-32 opacity-100 mt-2'
                        : 'text-[#82726B]/80 max-h-32 opacity-70 group-hover:opacity-100 group-hover:text-[#BDB0A8]'
                    }`}
                  >
                    {pillar.description}
                  </p>

                  {/* Active subtle indicator bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activePillarLine"
                      className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#E2C8B8]"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </motion.div>
              );
            })}

            {/* Bottom divider */}
            <div className="border-t border-white/[0.08] pt-6 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-[#82726B] font-light">
                Custom Reformer Engineering
              </span>
              <button
                onClick={onBookClick}
                className="group flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#E2C8B8] hover:text-white transition-colors"
              >
                <span>Experience The Method</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Photography Frame with Gentle Transitions */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] overflow-hidden rounded-2xl bg-[#1c0d10] border border-white/10"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activePillar}
                  src={pillarImages[activePillar]}
                  alt="Corehaus Editorial movement"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.05]"
                />
              </AnimatePresence>

              {/* Editorial Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#13090b]/90 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8">
                <div className="flex items-center justify-between text-xs text-[#F4EBE2]/90">
                  <span className="tracking-[0.2em] uppercase font-light">
                    {BRAND_COPY.pillars[activePillar].title}
                  </span>
                  <span className="font-mono text-[#E2C8B8]">
                    0{activePillar + 1} / 03
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
