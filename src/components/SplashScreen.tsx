import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  onFinish?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onFinish) {
        setTimeout(onFinish, 600);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#13090b] select-none"
        >
          {/* Subtle ambient burgundy glow */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-[#461720]/25 blur-[120px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center relative z-10"
          >
            {/* Minimalist Monogram / Logo */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2C8B8]" />
              <h1 className="text-2xl md:text-3xl font-light tracking-[0.35em] text-[#F4EBE2] uppercase font-sans-luxury">
                COREHAUS
              </h1>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2C8B8]" />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-[11px] tracking-[0.25em] text-[#BDB0A8] uppercase font-light"
            >
              BARCELONA · 50 MIN RESISTANCE
            </motion.p>
          </motion.div>

          {/* Minimalist fine progress line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 80, opacity: 0.4 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="h-[1px] bg-[#E2C8B8] mt-8"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
