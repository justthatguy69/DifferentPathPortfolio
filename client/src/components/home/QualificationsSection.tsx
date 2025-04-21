import { motion } from "framer-motion";

export default function QualificationsSection() {
  return (
    <section id="qualifications" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-exo font-bold text-3xl sm:text-4xl mb-4">Qualifications & <span className="text-accent">Experience</span></h2>
          <p className="text-lg text-neutral-600">
            Professional training combined with hands-on experience and personal insight.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            {/* Timeline Section */}
            <div className="relative pl-10 space-y-8 before:absolute before:left-0 before:h-full before:w-0.5 before:bg-secondary/30">
              {/* Timeline Item 1 */}
              <motion.div 
                className="relative timeline-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <div className="timeline-line"></div>
                <h3 className="font-exo font-semibold text-xl mb-2 text-neutral-800">Education Support Certification</h3>
                <p className="text-neutral-600 mb-3">
                  Certificate III in Education Support, providing foundational knowledge in supporting diverse learning needs.
                </p>
                <div className="inline-block bg-secondary/10 text-secondary text-sm font-medium px-3 py-1 rounded-full">
                  Accredited Qualification
                </div>
              </motion.div>
              
              {/* Timeline Item 2 */}
              <motion.div 
                className="relative timeline-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="timeline-line"></div>
                <h3 className="font-exo font-semibold text-xl mb-2 text-neutral-800">Transition Center Experience</h3>
                <p className="text-neutral-600 mb-3">
                  Practical experience working with students in transition centers, focusing on bridging educational gaps.
                </p>
                <div className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  Specialized Experience
                </div>
              </motion.div>
              
              {/* Timeline Item 3 */}
              <motion.div 
                className="relative timeline-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div className="timeline-line"></div>
                <h3 className="font-exo font-semibold text-xl mb-2 text-neutral-800">Out of School Hours Care</h3>
                <p className="text-neutral-600 mb-3">
                  Experience in OSHC environments, developing engaging and supportive activities for students with diverse needs.
                </p>
                <div className="inline-block bg-accent/10 text-accent text-sm font-medium px-3 py-1 rounded-full">
                  Hands-on Experience
                </div>
              </motion.div>
              
              {/* Timeline Item 4 */}
              <motion.div 
                className="relative timeline-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <h3 className="font-exo font-semibold text-xl mb-2 text-neutral-800">Personal Insight</h3>
                <p className="text-neutral-600 mb-3">
                  Firsthand navigation of the special education system, providing deep understanding of challenges and effective strategies.
                </p>
                <div className="inline-block bg-neutral-700/10 text-neutral-700 text-sm font-medium px-3 py-1 rounded-full">
                  Lived Experience
                </div>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative max-w-md">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-accent/10 rounded-full"></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/10 rounded-full"></div>
              
              <div className="bg-white rounded-3xl shadow-lg border border-neutral-200 p-6 relative">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center text-white text-4xl">
                    <i className="fas fa-user-graduate"></i>
                  </div>
                </div>
                
                <h3 className="font-exo font-semibold text-2xl mb-4 text-center text-neutral-800">Why My Qualifications Matter</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <i className="fas fa-check"></i>
                    </div>
                    <p className="text-neutral-700">
                      <span className="font-semibold">Professional training</span> combined with practical experience in educational settings
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <i className="fas fa-check"></i>
                    </div>
                    <p className="text-neutral-700">
                      <span className="font-semibold">Deep understanding</span> of the unique challenges faced by students on the autism spectrum
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <i className="fas fa-check"></i>
                    </div>
                    <p className="text-neutral-700">
                      <span className="font-semibold">Practical strategies</span> developed through hands-on work in various educational environments
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <i className="fas fa-check"></i>
                    </div>
                    <p className="text-neutral-700">
                      <span className="font-semibold">Personal insight</span> that informs empathetic and effective teaching methodologies
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <div className="flex justify-between">
                    <div className="text-center">
                      <div className="text-3xl font-exo font-bold text-primary">3+</div>
                      <div className="text-sm text-neutral-600">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-exo font-bold text-secondary">100+</div>
                      <div className="text-sm text-neutral-600">Students Helped</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-exo font-bold text-accent">5★</div>
                      <div className="text-sm text-neutral-600">Parent Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
