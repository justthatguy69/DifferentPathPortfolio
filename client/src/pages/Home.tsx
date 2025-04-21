import { useEffect, useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ApproachSection from "@/components/home/ApproachSection";
import QualificationsSection from "@/components/home/QualificationsSection";
import AvailabilitySection from "@/components/home/AvailabilitySection";
import ContactSection from "@/components/home/ContactSection";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const scrollPosition = useScrollPosition();
  
  useEffect(() => {
    setShowBackToTop(scrollPosition > 300);
  }, [scrollPosition]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ApproachSection />
      <QualificationsSection />
      <AvailabilitySection />
      <ContactSection />
      
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center transform transition-transform hover:scale-110"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <i className="fas fa-arrow-up"></i>
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
