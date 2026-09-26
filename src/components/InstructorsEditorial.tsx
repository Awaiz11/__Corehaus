import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INSTRUCTORS } from '../data/content';
import { Sparkles, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

export const InstructorsEditorial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTrainer = () => {
    setCurrentIndex((prev) => (prev + 1) % INSTRUCTORS.length);
  };

  const prevTrainer = () => {
    setCurrentIndex((prev) => (prev - 1 + INSTRUCTORS.length) % INSTRUCTORS.length);
  };

  const current = INSTRUCTORS[currentIndex];

  return (
    <section className="relative py-28 sm:py-36 bg-[#13090b] overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#471922]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E2C8B8] font-light mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Movement Masters</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight text-[#F4EBE2] uppercase font-sans-luxury">
              Instruction With Purpose
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevTrainer}
              aria-label="Previous instructor"
              className="p-3 rounded-full border border-white/10 hover:border-white/30 text-[#BDB0A8] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-[#82726B]">
              0{currentIndex + 1} / 0{INSTRUCTORS.length}
            </span>
            <button
              onClick={nextTrainer}
              aria-label="Next instructor"
              className="p-3 rounded-full border border-white/10 hover:border-white/30 text-[#BDB0A8] hover:text-white transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Editorial Feature (No cards - Large typography and portrait interplay) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-[#1c0d10]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id}
                  src={current.image}
                  alt={current.name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.05]"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-[#13090b]/90 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-[0.2em] text-[#E2C8B8] font-mono">
                  {current.role}
                </span>
              </div>
            </div>
          </div>

          {/* Instructor Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#82726B] font-light mb-1">
                    Specialty: {current.specialty}
                  </div>
                  <h3 className="text-3xl sm:text-5xl font-light text-[#F4EBE2] font-sans-luxury tracking-wide">
                    {current.name}
                  </h3>
                </div>

                {/* Quote */}
                <div className="relative pl-6 border-l-2 border-[#E2C8B8]">
                  <Quote className="w-5 h-5 text-[#E2C8B8]/40 mb-2" />
                  <p className="text-lg sm:text-2xl font-light text-[#F4EBE2] font-editorial italic leading-snug">
                    "{current.quote}"
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#BDB0A8] font-light leading-relaxed">
                  {current.bio}
                </p>

                {/* Mini Trainer selector tabs */}
                <div className="pt-6 border-t border-white/[0.08] flex items-center gap-4 overflow-x-auto no-scrollbar">
                  {INSTRUCTORS.map((inst, idx) => (
                    <button
                      key={inst.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`text-xs uppercase tracking-wider py-1 border-b-2 transition-all ${
                        currentIndex === idx
                          ? 'border-[#E2C8B8] text-[#F4EBE2]'
                          : 'border-transparent text-[#82726B] hover:text-[#BDB0A8]'
                      }`}
                    >
                      {inst.name.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
