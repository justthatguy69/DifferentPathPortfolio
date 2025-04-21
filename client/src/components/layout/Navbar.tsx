import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full bg-white/90 backdrop-blur-sm shadow-md z-50 transition-all duration-300 ${
        scrollPosition > 50 ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
              <span className="font-audiowide text-white text-xl">D</span>
            </div>
            <div>
              <span className="font-exo font-bold text-xl">Different <span className="text-primary">Path</span></span>
              <p className="text-xs text-neutral-600 -mt-1">to Learning</p>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="font-exo text-neutral-700 hover:text-primary transition-colors">About</a>
            <a href="#approach" className="font-exo text-neutral-700 hover:text-primary transition-colors">Approach</a>
            <a href="#qualifications" className="font-exo text-neutral-700 hover:text-primary transition-colors">Qualifications</a>
            <a href="#availability" className="font-exo text-neutral-700 hover:text-primary transition-colors">Availability</a>
            <a href="#contact" className="px-4 py-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors font-exo">Contact Us</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-neutral-700 focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-lg absolute w-full ${isMobileMenuOpen ? "" : "hidden"}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a href="#about" className="font-exo text-neutral-700 py-2 hover:text-primary transition-colors" onClick={closeMobileMenu}>About</a>
          <a href="#approach" className="font-exo text-neutral-700 py-2 hover:text-primary transition-colors" onClick={closeMobileMenu}>Approach</a>
          <a href="#qualifications" className="font-exo text-neutral-700 py-2 hover:text-primary transition-colors" onClick={closeMobileMenu}>Qualifications</a>
          <a href="#availability" className="font-exo text-neutral-700 py-2 hover:text-primary transition-colors" onClick={closeMobileMenu}>Availability</a>
          <a href="#contact" className="px-4 py-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors font-exo text-center" onClick={closeMobileMenu}>Contact Us</a>
        </div>
      </div>
    </nav>
  );
}
