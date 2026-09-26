export interface ClassItem {
  id: string;
  time: string;
  duration: string;
  name: string;
  instructor: string;
  instructorRole: string;
  instructorImage: string;
  focus: string;
  intensity: 'High' | 'Signature' | 'Foundational' | 'Deep Sculpt';
  spotsAvailable: number;
  totalSpots: number;
  room: string;
  isPopular?: boolean;
}

export interface DaySchedule {
  dateKey: string; // e.g. "2025-09-15"
  dayName: string; // e.g. "Mon"
  fullDayName: string; // e.g. "Monday"
  dayNumber: number; // e.g. 15
  monthName: string; // e.g. "Sep"
  muscleFocus: string;
  targetDescription: string;
  classes: ClassItem[];
}

export interface PricingPackage {
  id: string;
  title: string;
  category: 'intro' | 'pack' | 'membership';
  price: string;
  unitPrice?: string;
  subtitle: string;
  features: string[];
  badge?: string;
  popular?: boolean;
  codeEligible?: string;
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
  quote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'first-timers' | 'booking' | 'method';
}
