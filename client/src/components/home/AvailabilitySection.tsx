import { motion } from "framer-motion";

export default function AvailabilitySection() {
  return (
    <section id="availability" className="py-20 bg-gradient-to-b from-white to-neutral-100 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-neutral-100 to-white"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-exo font-bold text-3xl sm:text-4xl mb-4">Flexible <span className="text-primary">Availability</span></h2>
          <p className="text-lg text-neutral-600">
            Scheduling that works for you, with convenient hours to accommodate your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-neutral-200">
              <h3 className="font-exo font-semibold text-2xl mb-6 text-neutral-800">Weekly Schedule</h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="bg-neutral-100 rounded-2xl p-5 transition-all hover:bg-primary/5 availability-time"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <h4 className="font-exo font-semibold text-lg mb-2 text-neutral-800 flex items-center">
                    <i className="fas fa-calendar-week text-primary mr-3"></i>
                    Weekdays
                  </h4>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full">
                      <i className="far fa-clock mr-1"></i> 2:00 PM - 8:00 PM
                    </span>
                    <span className="text-sm text-neutral-600">After School Hours</span>
                  </div>
                  <p className="text-neutral-700 text-sm">
                    Perfect for after-school tutoring sessions, homework help, and focused skill-building activities.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-neutral-100 rounded-2xl p-5 transition-all hover:bg-secondary/5 availability-time"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <h4 className="font-exo font-semibold text-lg mb-2 text-neutral-800 flex items-center">
                    <i className="fas fa-calendar-day text-secondary mr-3"></i>
                    Weekends
                  </h4>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-secondary/20 text-secondary text-sm font-medium px-3 py-1 rounded-full">
                      <i className="far fa-clock mr-1"></i> 8:00 AM - 4:00 PM
                    </span>
                    <span className="text-sm text-neutral-600">Flexible Weekend Hours</span>
                  </div>
                  <p className="text-neutral-700 text-sm">
                    Extended sessions available for more comprehensive tutoring and mentoring, including project-based learning.
                  </p>
                </motion.div>
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-5 border border-primary/10">
                <h4 className="font-exo font-semibold text-lg mb-3 text-neutral-800 flex items-center">
                  <i className="fas fa-info-circle text-primary mr-2"></i>
                  Booking Information
                </h4>
                <p className="text-neutral-700 mb-4">
                  Sessions are typically 1-2 hours, with flexible options available to accommodate specific needs.
                </p>
                <a href="#contact" className="inline-block px-6 py-3 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors font-exo text-center">
                  Request a Session
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-neutral-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
              
              <h3 className="font-exo font-semibold text-2xl mb-6 text-neutral-800 relative z-10">Location Options</h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <i className="fas fa-home"></i>
                  </div>
                  <div>
                    <h4 className="font-exo font-semibold text-lg mb-1 text-neutral-800">In-Home Tutoring</h4>
                    <p className="text-neutral-700">
                      Sessions conducted in the comfort of your home, creating a familiar and comfortable learning environment.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                    <i className="fas fa-wifi"></i>
                  </div>
                  <div>
                    <h4 className="font-exo font-semibold text-lg mb-1 text-neutral-800">Online Sessions</h4>
                    <p className="text-neutral-700">
                      Virtual tutoring and mentoring available via secure video conferencing platforms for maximum convenience.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <i className="fas fa-book-reader"></i>
                  </div>
                  <div>
                    <h4 className="font-exo font-semibold text-lg mb-1 text-neutral-800">Public Spaces</h4>
                    <p className="text-neutral-700">
                      Sessions at libraries, community centers, or other quiet public spaces that offer a neutral learning environment.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-neutral-200 relative z-10">
                <h4 className="font-exo font-semibold text-lg mb-3 text-neutral-800">Service Areas</h4>
                <p className="text-neutral-700 mb-4">
                  Currently serving families within a 30-kilometre radius of central Adelaide, with online sessions available nationwide.
                </p>
                <div className="text-sm text-neutral-600 italic">
                  Extended travel options available for certain situations — please inquire for details.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
