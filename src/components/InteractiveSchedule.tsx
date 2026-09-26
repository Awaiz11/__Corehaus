import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WEEKLY_SCHEDULE } from '../data/content';
import { ClassItem } from '../types';
import { Calendar, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface InteractiveScheduleProps {
  selectedDayKey: string;
  onSelectDayKey: (key: string) => void;
  onBookClass: (classItem: ClassItem, dayName: string) => void;
}

export const InteractiveSchedule: React.FC<InteractiveScheduleProps> = ({
  selectedDayKey,
  onSelectDayKey,
  onBookClass,
}) => {
  const [filterIntensity, setFilterIntensity] = useState<string>('all');

  const currentDay =
    WEEKLY_SCHEDULE.find((d) => d.dateKey === selectedDayKey) || WEEKLY_SCHEDULE[0];

  const filteredClasses = currentDay.classes.filter((c) => {
    if (filterIntensity === 'all') return true;
    if (filterIntensity === 'popular') return c.isPopular;
    return c.intensity.toLowerCase().includes(filterIntensity.toLowerCase());
  });

  return (
    <section id="schedule" className="relative py-28 sm:py-36 bg-[#13090b] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#421720]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E2C8B8] font-light mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>Real-Time Studio Booking</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight text-[#F4EBE2] uppercase font-sans-luxury">
              Schedule & Availability
            </h2>
          </div>

          <div className="text-xs sm:text-sm text-[#BDB0A8] font-light max-w-sm">
            50-minute intimate resistance sessions. Maximum 12 reformers per class.
          </div>
        </div>

        {/* Minimalist Horizontal Date Scroller (Horizontal date selector) */}
        <div className="relative mb-10">
          <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto no-scrollbar pb-3 border-b border-white/[0.08]">
            {WEEKLY_SCHEDULE.map((day) => {
              const isSelected = day.dateKey === currentDay.dateKey;
              return (
                <button
                  key={day.dateKey}
                  onClick={() => onSelectDayKey(day.dateKey)}
                  className={`group relative flex-shrink-0 flex flex-col items-center justify-center min-w-[76px] sm:min-w-[100px] py-4 px-3 rounded-xl transition-all duration-300 ${
                    isSelected
                      ? 'bg-white/[0.08] border border-white/25 text-[#F4EBE2]'
                      : 'bg-transparent hover:bg-white/[0.03] border border-transparent text-[#82726B] hover:text-[#BDB0A8]'
                  }`}
                >
                  <span className="text-[11px] uppercase tracking-widest font-mono">
                    {day.dayName}
                  </span>
                  <span className="text-xl sm:text-2xl font-light font-editorial my-0.5 text-[#F4EBE2]">
                    {day.dayNumber}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#82726B]">
                    {day.monthName}
                  </span>

                  {/* Active Indicator dot */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeScheduleDay"
                      className="absolute -bottom-[13px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#E2C8B8]"
                      transition={{ duration: 0.25 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Day Muscle Focus Info Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-8 gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#E2C8B8] px-2.5 py-1 rounded-md bg-[#3a151e]/60 border border-[#6b2535]/40 uppercase">
              {currentDay.fullDayName} Focus
            </span>
            <span className="text-sm sm:text-base font-light text-[#F4EBE2]">
              {currentDay.muscleFocus}
            </span>
          </div>

          {/* Quick filter pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setFilterIntensity('all')}
              className={`px-3 py-1 rounded-full text-xs font-light transition-colors ${
                filterIntensity === 'all'
                  ? 'bg-white/15 text-white'
                  : 'text-[#82726B] hover:text-[#BDB0A8]'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterIntensity('signature')}
              className={`px-3 py-1 rounded-full text-xs font-light transition-colors ${
                filterIntensity === 'signature'
                  ? 'bg-white/15 text-white'
                  : 'text-[#82726B] hover:text-[#BDB0A8]'
              }`}
            >
              Signature
            </button>
            <button
              onClick={() => setFilterIntensity('high')}
              className={`px-3 py-1 rounded-full text-xs font-light transition-colors ${
                filterIntensity === 'high'
                  ? 'bg-white/15 text-white'
                  : 'text-[#82726B] hover:text-[#BDB0A8]'
              }`}
            >
              High Intensity
            </button>
            <button
              onClick={() => setFilterIntensity('popular')}
              className={`px-3 py-1 rounded-full text-xs font-light transition-colors ${
                filterIntensity === 'popular'
                  ? 'bg-white/15 text-white'
                  : 'text-[#82726B] hover:text-[#BDB0A8]'
              }`}
            >
              Filling Fast
            </button>
          </div>
        </div>

        {/* Minimalist Class Rows (NO TABLES! Ultra-clean list with 300ms hover tint) */}
        <div className="border-t border-white/[0.08]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentDay.dateKey}-${filterIntensity}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="divide-y divide-white/[0.08]"
            >
              {filteredClasses.length === 0 ? (
                <div className="py-16 text-center text-[#82726B] font-light text-sm">
                  No classes match this filter for {currentDay.fullDayName}.
                </div>
              ) : (
                filteredClasses.map((item) => {
                  const isSoldOut = item.spotsAvailable === 0;
                  const isLowSpots = item.spotsAvailable <= 2 && item.spotsAvailable > 0;

                  return (
                    <div
                      key={item.id}
                      className="group flex flex-col md:flex-row md:items-center justify-between py-6 px-4 sm:px-6 transition-colors duration-300 hover:bg-white/[0.035] rounded-lg gap-4"
                    >
                      {/* Left: Time & Name */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 min-w-[320px]">
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl sm:text-2xl font-light text-[#F4EBE2] font-sans-luxury tracking-tight">
                            {item.time}
                          </span>
                          <span className="text-[11px] font-mono text-[#82726B] tracking-wider">
                            {item.duration}
                          </span>
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm sm:text-base font-medium tracking-wider text-[#F4EBE2] uppercase">
                              {item.name}
                            </h4>
                            {item.isPopular && (
                              <span className="px-2 py-0.5 rounded-full bg-[#E2C8B8]/10 text-[#E2C8B8] text-[10px] font-light uppercase tracking-wider">
                                Popular
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-[#82726B] font-light mt-0.5">
                            {item.focus} · {item.room}
                          </div>
                        </div>
                      </div>

                      {/* Center: Instructor */}
                      <div className="flex items-center gap-3">
                        <img
                          src={item.instructorImage}
                          alt={item.instructor}
                          className="w-9 h-9 rounded-full object-cover border border-white/10"
                        />
                        <div>
                          <div className="text-xs sm:text-sm font-light text-[#F4EBE2]">
                            {item.instructor}
                          </div>
                          <div className="text-[11px] text-[#82726B] font-light">
                            {item.instructorRole}
                          </div>
                        </div>
                      </div>

                      {/* Right: Availability & Action */}
                      <div className="flex items-center justify-between md:justify-end gap-5 pt-2 md:pt-0">
                        {/* Spot indicator */}
                        <div className="text-right">
                          <div
                            className={`text-xs font-light ${
                              isSoldOut
                                ? 'text-rose-400'
                                : isLowSpots
                                ? 'text-amber-300'
                                : 'text-[#82726B]'
                            }`}
                          >
                            {isSoldOut
                              ? 'Waitlist Only'
                              : isLowSpots
                              ? `Only ${item.spotsAvailable} left`
                              : `${item.spotsAvailable} spots open`}
                          </div>
                          <div className="text-[10px] text-[#82726B] font-mono">
                            of {item.totalSpots} max
                          </div>
                        </div>

                        {/* Reserve Button */}
                        <button
                          onClick={() => onBookClass(item, currentDay.fullDayName)}
                          className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                            isSoldOut
                              ? 'bg-white/[0.06] text-[#BDB0A8] hover:bg-white/[0.1]'
                              : 'bg-[#F4EBE2] text-[#13090b] hover:bg-white hover:shadow-md'
                          }`}
                        >
                          <span>{isSoldOut ? 'Join Waitlist' : 'Reserve'}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Schedule Footer Note */}
        <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#82726B] font-light gap-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#E2C8B8]" />
            <span>12-hour flexible cancellation policy applies to all booked sessions</span>
          </div>
          <span className="font-mono">Timezone: Madrid / Barcelona (CET)</span>
        </div>
      </div>
    </section>
  );
};
