import { motion } from "framer-motion";

export default function ContactSection() {

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-exo font-bold text-3xl sm:text-4xl mb-4">Get in <span className="text-secondary">Touch</span></h2>
          <p className="text-lg text-neutral-600">
            Ready to start a different path to learning? Reach out to discuss how I can help.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl shadow-lg p-8 border border-neutral-200 flex flex-col">
              <h3 className="font-exo font-semibold text-2xl mb-6 text-neutral-800 text-center">Connect With Me</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <i className="fas fa-envelope text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-exo font-semibold text-lg mb-1 text-neutral-800">Email</h4>
                      <a href="mailto:adifferentpathtolearing@gmail.com" className="text-primary hover:text-primary-dark transition-colors">
                        adifferentpathtolearing@gmail.com
                      </a>
                      <p className="text-sm text-neutral-600 mt-1">
                        Response within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <i className="fas fa-phone-alt text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-exo font-semibold text-lg mb-1 text-neutral-800">Phone</h4>
                      <a href="tel:+61432678007" className="text-secondary hover:text-secondary-dark transition-colors">
                        0432 678 007
                      </a>
                      <p className="text-sm text-neutral-600 mt-1">
                        Available during business hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="font-exo font-semibold text-lg mb-4 text-neutral-800 text-center">Follow Me</h4>
                <div className="flex justify-center">
                  <a href="https://www.instagram.com/adifferentpathtolearing/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-pink-600 text-white flex items-center justify-center hover:bg-pink-700 transition-colors">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              
              <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="font-exo font-semibold text-lg mb-3 text-neutral-800 text-center">Parent Testimonial</h4>
                <blockquote className="text-neutral-700 italic mb-4">
                  "The personalised approach has made all the difference for my son. He's not only improving academically but also gaining confidence and independence."
                </blockquote>
                <footer className="text-right text-neutral-600 font-medium not-italic">— Parent of a 15-year-old student</footer>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
