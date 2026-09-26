import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenPromo: () => void;
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPromo,
  onBookClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'The Method', href: '#method' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Packages', href: '#packages' },
    { label: 'Studio', href: '#studio' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#13090b]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-[#F4EBE2] focus:outline-none"
          >
            <span className="w-2 h-2 rounded-full bg-[#E2C8B8] transition-transform duration-300 group-hover:scale-125" />
            <span className="text-lg sm:text-xl font-light tracking-[0.25em] uppercase font-sans-luxury text-[#F4EBE2]">
              COREHAUS
            </span>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-[0.18em] font-light text-[#BDB0A8]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#F4EBE2] transition-colors duration-200 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Promo Pill Trigger */}
            <button
              onClick={onOpenPromo}
              className="group hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#35151c]/80 border border-[#823344]/40 hover:border-[#a84459] text-[11px] text-[#E2C8B8] font-light transition-all"
            >
              <Sparkles className="w-3 h-3 text-[#E2C8B8] group-hover:rotate-12 transition-transform" />
              <span>Promo Codes Active</span>
            </button>

            {/* Login Link */}
            <a
              href="https://momence.com/sign-in?hostId=47062"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.16em] font-light text-[#BDB0A8] hover:text-[#F4EBE2] px-3 py-2 transition-colors duration-200"
            >
              Log In
            </a>

            {/* Primary Action */}
            <button
              onClick={onBookClick}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-[#F4EBE2] text-[#13090b] text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-[#F4EBE2]/10"
            >
              <span className="relative z-10 flex items-center gap-1">
                Book Your Class
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-3">
            <button
              onClick={onBookClick}
              className="px-3 py-1.5 rounded-full bg-[#F4EBE2] text-[#13090b] text-[11px] uppercase tracking-wider font-medium"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F4EBE2] hover:bg-white/[0.05] rounded-lg transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-[60px] z-30 bg-[#13090b]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-8 flex flex-col justify-between sm:hidden"
          >
            <div className="space-y-5">
              <div className="border-b border-white/[0.08] pb-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPromo();
                  }}
                  className="flex items-center gap-2 w-full p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs text-[#E2C8B8]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Summer Promo: 15% OFF (STRONGSEPTEMBER)</span>
                </button>
              </div>

              <div className="flex flex-col space-y-4 text-base font-light tracking-[0.1em] uppercase text-[#F4EBE2]">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1 hover:text-[#E2C8B8] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/[0.08]">
              <a
                href="https://momence.com/sign-in?hostId=47062"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 rounded-xl border border-white/15 text-xs font-light tracking-wider uppercase text-[#F4EBE2]"
              >
                Log In
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3.5 rounded-xl bg-[#F4EBE2] text-[#13090b] text-xs font-medium tracking-wider uppercase text-center"
              >
                Book Your Class
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
