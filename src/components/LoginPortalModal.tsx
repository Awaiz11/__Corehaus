import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, ArrowRight, Check } from 'lucide-react';

interface LoginPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginPortalModal: React.FC<LoginPortalModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setIsLogged(true);
    setTimeout(() => {
      setIsLogged(false);
      onClose();
    }, 1800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md bg-[#1a0c0f]/95 border border-white/15 rounded-2xl p-6 sm:p-8 text-[#F4EBE2] shadow-2xl z-10 overflow-hidden"
        >
          {/* Ambient light */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#571924]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close login modal"
            className="absolute top-4 right-4 p-2 rounded-full text-[#BDB0A8] hover:text-[#F4EBE2] hover:bg-white/[0.06] transition-colors"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>

          {!isLogged ? (
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E2C8B8] font-light mb-1">
                <Lock className="w-3.5 h-3.5" />
                <span>Member Portal</span>
              </div>

              <h3 className="text-2xl font-light text-[#F4EBE2] font-editorial mb-2">
                Welcome Back to Corehaus
              </h3>

              <p className="text-xs text-[#BDB0A8] font-light mb-6">
                Manage your memberships, track attended sessions, and reserve priority reformer spots.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#BDB0A8] font-light mb-1.5">
                    Account Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="member@corehaus.es"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-[#F4EBE2] placeholder-[#82726B] focus:outline-none focus:border-[#E2C8B8]"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs uppercase tracking-wider text-[#BDB0A8] font-light">
                      Password
                    </label>
                    <a
                      href="#forgot"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Password reset link sent to your registered email.');
                      }}
                      className="text-[11px] text-[#E2C8B8] hover:underline"
                    >
                      Forgot?
                    </a>
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-[#F4EBE2] placeholder-[#82726B] focus:outline-none focus:border-[#E2C8B8]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 rounded-xl bg-[#F4EBE2] text-[#13090b] text-xs uppercase tracking-[0.2em] font-medium hover:bg-white transition-all flex items-center justify-center gap-2"
                >
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-white/[0.08] text-center text-xs text-[#82726B] font-light">
                <span>New to Corehaus? </span>
                <button
                  onClick={onClose}
                  className="text-[#E2C8B8] hover:underline uppercase tracking-wider text-[11px]"
                >
                  Explore Intro Passes
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                <Check className="w-6 h-6 stroke-[2]" />
              </div>
              <h4 className="text-xl font-light text-[#F4EBE2]">Welcome back</h4>
              <p className="text-xs text-[#BDB0A8]">Accessing your member profile...</p>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
