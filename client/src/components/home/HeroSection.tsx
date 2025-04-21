import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-b from-white to-neutral-100">
      <ParticleBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-exo font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              A <span className="gradient-text">Different Path</span> to Learning Success
            </h1>
            <p className="text-lg sm:text-xl text-neutral-700 mb-8">
              Specialized tutoring and mentoring services designed for boys aged 12-20 on the autism spectrum and those facing challenging lifestyles.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#about" 
                className="px-8 py-3 rounded-full bg-primary text-white hover:bg-primary-dark transition-all transform hover:-translate-y-1 font-exo text-center text-lg shadow-lg shadow-primary/30"
              >
                Learn More
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 rounded-full bg-white text-primary border-2 border-primary hover:bg-primary/10 transition-all transform hover:-translate-y-1 font-exo text-center text-lg"
              >
                Get in Touch
              </a>
            </div>
            <div className="mt-12 flex items-center space-x-2">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 flex items-center justify-center text-neutral-600">
                  <i className="fas fa-user"></i>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 flex items-center justify-center text-neutral-600">
                  <i className="fas fa-user"></i>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 flex items-center justify-center text-neutral-600">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <p className="text-neutral-600">
                Trusted by <span className="font-semibold text-primary">dozens</span> of families
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="hidden lg:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="relative">
              <div className="absolute -left-5 -top-5 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1456081101716-74e616ab23d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Student learning with digital technology" 
                  className="rounded-2xl w-full h-auto shadow-md"
                />
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 transform -rotate-6 hover:rotate-0 transition-transform"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <i className="fas fa-brain text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-exo font-bold text-neutral-800">Personalized</h3>
                      <p className="text-sm text-neutral-600">Learning experience</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-lg p-4 transform rotate-6 hover:rotate-0 transition-transform"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                      <i className="fas fa-gamepad text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-exo font-bold text-neutral-800">Interest-Based</h3>
                      <p className="text-sm text-neutral-600">Learning methods</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div 
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <a href="#about" className="text-primary opacity-80 hover:opacity-100">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </motion.div>
    </section>
  );
}
