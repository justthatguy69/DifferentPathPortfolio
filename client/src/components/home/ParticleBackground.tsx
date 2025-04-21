import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particles = useRef<Particle[]>([]);

  // Create particles with random properties
  useEffect(() => {
    if (!containerRef.current) return;

    const colors = ['#3A86FF', '#8338EC', '#FF006E'];
    const newParticles: Particle[] = [];
    
    // Create 20 particles
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100, // Random x position (0-100%)
        y: Math.random() * 100, // Random y position (0-100%)
        size: Math.random() * 15 + 5, // Random size between 5-20px
        color: colors[Math.floor(Math.random() * colors.length)], // Random color from our theme
        duration: Math.random() * 10 + 5, // Random animation duration 5-15s
        delay: Math.random() * 5 // Random delay 0-5s
      });
    }
    
    particles.current = newParticles;
  }, []);

  return (
    <div className="particle-background" ref={containerRef}>
      {particles.current.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color
          }}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
