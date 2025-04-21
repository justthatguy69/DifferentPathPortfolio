import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-exo font-bold text-3xl sm:text-4xl mb-4">About <span className="text-primary">Different Path</span> to Learning</h2>
          <p className="text-lg text-neutral-600">
            Providing specialized support backed by firsthand experience and deep understanding.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-neutral-100 p-6 rounded-3xl border border-neutral-200 shadow-sm">
              <h3 className="font-exo font-semibold text-2xl mb-6 text-neutral-800">Our Unique Approach</h3>
              <p className="text-neutral-700 mb-6">
                What distinguishes Different Path to Learning is my firsthand experience and deep understanding of the challenges faced by young men in this demographic. As the sole mentor, I have navigated the special education system and possess personal insights into the struggles and successes of individuals with autism.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
                    <i className="fas fa-user-shield text-xl"></i>
                  </div>
                  <h4 className="font-exo font-semibold text-lg mb-2 text-neutral-800">Specialised Support</h4>
                  <p className="text-neutral-600 text-sm">
                    Tailored for boys aged 12-20 on the autism spectrum and those with challenging lifestyles.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-3">
                    <i className="fas fa-hand-holding-heart text-xl"></i>
                  </div>
                  <h4 className="font-exo font-semibold text-lg mb-2 text-neutral-800">Empathetic Approach</h4>
                  <p className="text-neutral-600 text-sm">
                    Grounded in personal experience and genuine understanding of unique challenges.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-4 rounded-xl border border-primary/10">
                <blockquote className="text-neutral-700 italic">
                  "This lived experience informs my empathetic, practical, and effective teaching and mentoring methodologies at Different Path to Learning."
                  <footer className="text-right mt-2 text-neutral-600 font-medium not-italic">— Founder, Different Path to Learning</footer>
                </blockquote>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -left-3 -top-3 w-20 h-20 bg-primary/10 rounded-full"></div>
              <div className="absolute -right-3 -bottom-3 w-20 h-20 bg-secondary/10 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" 
                alt="Tutoring and mentoring environment" 
                className="rounded-3xl shadow-lg object-cover w-full h-96 lg:h-auto"
              />
              <motion.div 
                className="absolute -bottom-6 right-8 bg-white rounded-xl shadow-lg p-4 max-w-xs"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <i className="fas fa-lightbulb text-sm"></i>
                  </div>
                  <h4 className="font-exo font-semibold text-neutral-800">Mission-Driven</h4>
                </div>
                <p className="text-neutral-600 text-sm">
                  Committed to delivering supportive, engaging, and personalised educational experiences.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
