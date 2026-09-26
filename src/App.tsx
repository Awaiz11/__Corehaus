import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SplashScreen } from './components/SplashScreen';
import { WelcomeModal } from './components/WelcomeModal';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MethodEditorial } from './components/MethodEditorial';
import { WeeklyFocus } from './components/WeeklyFocus';
import { InteractiveSchedule } from './components/InteractiveSchedule';
import { FluidPackages } from './components/FluidPackages';
import { StudioSanctuary } from './components/StudioSanctuary';
import { InstructorsEditorial } from './components/InstructorsEditorial';
import { FirstTimersFAQ } from './components/FirstTimersFAQ';
import { BookingModal } from './components/BookingModal';
import { LoginPortalModal } from './components/LoginPortalModal';
import { Footer } from './components/Footer';
import { ClassItem, PricingPackage } from './types';

export function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [welcomeModalOpen, setWelcomeModalOpen] = useState(false);
  const [selectedDayKey, setSelectedDayKey] = useState<string>('mon');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null);
  const [selectedDayName, setSelectedDayName] = useState<string>('Monday');
  const [selectedPackage, setSelectedPackage] = useState<PricingPackage | null>(null);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  // Welcome modal trigger after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if user has already dismissed it in this session
      const dismissed = sessionStorage.getItem('corehaus_welcome_dismissed');
      if (!dismissed) {
        setWelcomeModalOpen(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseWelcomeModal = () => {
    setWelcomeModalOpen(false);
    sessionStorage.setItem('corehaus_welcome_dismissed', 'true');
  };

  const handleOpenPromoModal = () => {
    setWelcomeModalOpen(true);
  };

  const handleBookFromHero = () => {
    const scheduleEl = document.getElementById('schedule');
    if (scheduleEl) {
      scheduleEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplorePackages = () => {
    const packEl = document.getElementById('packages');
    if (packEl) {
      packEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDayFromFocus = (dayKey: string) => {
    setSelectedDayKey(dayKey);
    const scheduleEl = document.getElementById('schedule');
    if (scheduleEl) {
      scheduleEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookClass = (classItem: ClassItem, dayName: string) => {
    setSelectedClass(classItem);
    setSelectedDayName(dayName);
    setSelectedPackage(null);
    setBookingModalOpen(true);
  };

  const handleSelectPackage = (pkg: PricingPackage) => {
    setSelectedPackage(pkg);
    setSelectedClass(null);
    setBookingModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#13090b] text-[#F4EBE2] font-sans-luxury selection:bg-[#461720] selection:text-[#FFF4EE]">
      {/* 1. Elegant Splash Screen (1.5s automatic fade out) */}
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      {/* 2. Welcome Glassmorphism Modal (Auto-triggers after 3s) */}
      <WelcomeModal
        isOpen={welcomeModalOpen}
        onClose={handleCloseWelcomeModal}
        onExplorePackages={handleExplorePackages}
      />

      {/* 3. Member Login Portal Modal */}
      <LoginPortalModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />

      {/* 4. Booking & Reservation Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedClass={selectedClass}
        selectedDayName={selectedDayName}
        selectedPackage={selectedPackage}
      />

      {/* Minimalist Floating / Fixed Navigation */}
      <Navbar
        onOpenPromo={handleOpenPromoModal}
        onBookClick={handleBookFromHero}
        onLoginClick={() => setLoginModalOpen(true)}
      />

      {/* Main Editorial Content Flow with Apple-Like Viewport Animations */}
      <main>
        {/* Cinematic Hero */}
        <Hero
          onBookClick={handleBookFromHero}
          onExplorePackages={handleExplorePackages}
          onOpenPromo={handleOpenPromoModal}
        />

        {/* Section 1: The Corehaus Method & 3 Pillars (Editorial Style, No Cards) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <MethodEditorial onBookClick={handleBookFromHero} />
        </motion.div>

        {/* Section 2: Weekly Muscle Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <WeeklyFocus onSelectDayForSchedule={handleSelectDayFromFocus} />
        </motion.div>

        {/* Section 3: Interactive Schedule (No Tables, 300ms Hover Tint) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <InteractiveSchedule
            selectedDayKey={selectedDayKey}
            onSelectDayKey={setSelectedDayKey}
            onBookClass={handleBookClass}
          />
        </motion.div>

        {/* Section 4: Fluid Packages (Seamless 1px Ultra-Light Dividers) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <FluidPackages
            onSelectPackage={handleSelectPackage}
            onOpenPromo={handleOpenPromoModal}
          />
        </motion.div>

        {/* Section 5: Studio Sanctuary & Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <StudioSanctuary onBookClick={handleBookFromHero} />
        </motion.div>

        {/* Section 6: Instructors & Coaching Editorial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <InstructorsEditorial />
        </motion.div>

        {/* Section 7: First-Timers & Studio FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <FirstTimersFAQ onBookClick={handleBookFromHero} />
        </motion.div>
      </main>

      {/* Refined Footer */}
      <Footer
        onOpenPromo={handleOpenPromoModal}
        onBookClick={handleBookFromHero}
      />
    </div>
  );
}

export default App;
