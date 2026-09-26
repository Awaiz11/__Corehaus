import React from 'react';
import { motion } from 'framer-motion';
import { AMENITIES, BRAND_COPY } from '../data/content';
import { MapPin, Phone, Clock, Volume2 } from 'lucide-react';

interface StudioSanctuaryProps {
  onBookClick?: () => void;
}

export const StudioSanctuary: React.FC<StudioSanctuaryProps> = ({ onBookClick }) => {
  return (
    <section id="studio" className="relative py-28 sm:py-36 bg-[#170b0e] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#3a131a]/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E2C8B8] font-light mb-3"
          >
            <span className="w-8 h-[1px] bg-[#E2C8B8]/60" />
            <span>The Sanctuary & Space</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extralight tracking-tight text-[#F4EBE2] uppercase font-sans-luxury"
          >
            An Architecture of Focus
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base font-light text-[#BDB0A8] leading-relaxed mt-4"
          >
            Every detail at Corehaus—from the acoustics and lighting to the custom resistance tension—is calibrated to disconnect you from the noise outside and bring you entirely into the present moment.
          </motion.p>
        </div>

        {/* Large Curated Visual Gallery Interplay */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 items-center">
          {/* Main Large Visual */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10"
          >
            <img
              src="/images/studio-interior.jpg"
              alt="Corehaus Barcelona Interior Sanctuary"
              className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#13090b]/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
              <span className="text-xs uppercase tracking-[0.2em] text-[#E2C8B8] font-light">
                Barcelona Flagship · Carrer d'Alfons XII, 10
              </span>
            </div>
          </motion.div>

          {/* Side Editorial Details (NO CARDS - Fine flowing text with ultra-light lines) */}
          <div className="lg:col-span-5 space-y-8">
            {AMENITIES.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="border-b border-white/[0.08] pb-6"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-xs font-mono text-[#E2C8B8]">0{idx + 1}</span>
                  <h4 className="text-base sm:text-lg font-light text-[#F4EBE2] font-sans-luxury tracking-wide">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#82726B] font-light leading-relaxed pl-7">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sensory Sound Experience Feature */}
        <div className="p-8 sm:p-12 rounded-2xl bg-white/[0.02] border border-white/[0.08] grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20">
          <div className="md:col-span-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E2C8B8] font-light mb-3">
              <Volume2 className="w-4 h-4 text-[#E2C8B8]" />
              <span>Sensory Soundscapes</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-light text-[#F4EBE2] font-editorial mb-3">
              Music as Fuel: Curated Deep House & Cinematic Electronica
            </h3>
            <p className="text-xs sm:text-sm text-[#BDB0A8] font-light leading-relaxed">
              Every class is synchronized to an evolving musical arc designed to match the acceleration of your heart rate and the depth of muscular tension. Listen to our latest studio session sounds on Spotify.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col sm:flex-row md:justify-end gap-3">
            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-[#F4EBE2] text-xs uppercase tracking-[0.18em] font-light border border-white/10 transition-colors"
            >
              <span>Spotify Playlist</span>
            </a>
            {onBookClick && (
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#F4EBE2] text-[#13090b] text-xs uppercase tracking-[0.18em] font-medium hover:bg-white transition-colors"
              >
                <span>Visit Studio</span>
              </button>
            )}
          </div>
        </div>

        {/* Studio Location & Details Strip */}
        <div className="border-t border-white/10 pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E2C8B8] font-mono mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Location</span>
            </div>
            <p className="text-xs sm:text-sm text-[#F4EBE2] font-light">
              {BRAND_COPY.studio.address}
            </p>
            <p className="text-xs text-[#82726B] font-light mt-0.5">
              {BRAND_COPY.studio.metro}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E2C8B8] font-mono mb-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Studio Hours</span>
            </div>
            <p className="text-xs sm:text-sm text-[#F4EBE2] font-light">
              {BRAND_COPY.studio.hours}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E2C8B8] font-mono mb-2">
              <Phone className="w-3.5 h-3.5" />
              <span>Direct Inquiries</span>
            </div>
            <p className="text-xs sm:text-sm text-[#F4EBE2] font-light">
              {BRAND_COPY.studio.phone}
            </p>
            <p className="text-xs text-[#82726B] font-light mt-0.5">
              {BRAND_COPY.studio.email}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E2C8B8] font-mono mb-2">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Community</span>
            </div>
            <a
              href="https://instagram.com/corehaus_es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-[#F4EBE2] hover:text-[#E2C8B8] font-light transition-colors block"
            >
              {BRAND_COPY.studio.instagram}
            </a>
            <p className="text-xs text-[#82726B] font-light mt-0.5">
              Tag #CorehausBarcelona
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
