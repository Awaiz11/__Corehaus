import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BRAND_COPY, WEEKLY_SCHEDULE } from '../data/content';
import { Calendar, ChevronRight } from 'lucide-react';

interface WeeklyFocusProps {
  onSelectDayForSchedule: (dayKey: string) => void;
}

export const WeeklyFocus: React.FC<WeeklyFocusProps> = ({ onSelectDayForSchedule }) => {
  const [hoveredDay, setHoveredDay] = useState<string | null>(null);

  return (
    <section className="relative py-24 sm:py-32 bg-[#170b0e] border-y border-white/[0.06] overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-radial-at-t from-[#36131b]/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E2C8B8] font-light mb-3"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Targeted Muscular Architecture</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extralight uppercase tracking-tight text-[#F4EBE2] mb-6 font-sans-luxury"
          >
            Daily Muscular Alternation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base font-light text-[#BDB0A8] leading-relaxed"
          >
            {BRAND_COPY.calendarPhilosophy}
          </motion.p>
        </div>

        {/* Seamless Horizontal Flow of Days (1px separators, no heavy cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 border-t border-b border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {WEEKLY_SCHEDULE.map((day, idx) => {
            const isHovered = hoveredDay === day.dateKey;
            return (
              <motion.div
                key={day.dateKey}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredDay(day.dateKey)}
                onMouseLeave={() => setHoveredDay(null)}
                onClick={() => onSelectDayForSchedule(day.dateKey)}
                className="group relative p-5 sm:p-6 cursor-pointer transition-colors duration-300 hover:bg-white/[0.03] flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-xs uppercase tracking-widest text-[#82726B] font-mono group-hover:text-[#E2C8B8] transition-colors">
                      {day.dayName}
                    </span>
                    <span className="text-xs font-light text-[#BDB0A8]">
                      {day.classes.length} classes
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-light text-[#F4EBE2] font-sans-luxury tracking-wide leading-snug mb-2 group-hover:text-white transition-colors">
                    {day.muscleFocus}
                  </h3>

                  <p className="text-xs text-[#82726B] group-hover:text-[#BDB0A8] font-light leading-relaxed transition-colors line-clamp-3">
                    {day.targetDescription}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between text-[11px] uppercase tracking-wider text-[#E2C8B8] font-light opacity-60 group-hover:opacity-100 transition-opacity">
                  <span>View Sessions</span>
                  <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Subtle active tint bar */}
                {isHovered && (
                  <motion.div
                    layoutId="dayHighlight"
                    className="absolute inset-x-0 bottom-0 h-[2px] bg-[#E2C8B8]"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
