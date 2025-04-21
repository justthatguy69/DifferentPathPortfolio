import { motion } from "framer-motion";

export default function ApproachSection() {
  return (
    <section id="approach" className="py-20 bg-gradient-to-b from-white to-neutral-100 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-neutral-100 to-white"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-exo font-bold text-3xl sm:text-4xl mb-4">Teaching & Mentoring <span className="text-secondary">Philosophy</span></h2>
          <p className="text-lg text-neutral-600">
            Learning should be an enjoyable and relevant experience tailored to individual needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <motion.div 
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow p-6 border border-neutral-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <i className="fas fa-gamepad text-2xl"></i>
            </div>
            <h3 className="font-exo font-semibold text-xl mb-3 text-neutral-800">Interest-Based Learning</h3>
            <p className="text-neutral-700 mb-6">
              I integrate students' passions and interests into lessons to enhance engagement and motivation, using popular video games like Minecraft to teach mathematical concepts.
            </p>
            <div className="bg-neutral-100 rounded-xl p-4">
              <h4 className="font-exo font-medium text-neutral-800 mb-2 flex items-center text-sm">
                <i className="fas fa-star text-yellow-500 mr-2"></i>
                Example Approach
              </h4>
              <p className="text-neutral-600 text-sm">
                Using Minecraft to teach spatial reasoning, geometry, and basic programming concepts in an engaging environment.
              </p>
            </div>
          </motion.div>
          
          {/* Card 2 */}
          <motion.div 
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow p-6 border border-neutral-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
              <i className="fas fa-brain text-2xl"></i>
            </div>
            <h3 className="font-exo font-semibold text-xl mb-3 text-neutral-800">Personalised Strategies</h3>
            <p className="text-neutral-700 mb-6">
              Each student receives an individualised learning plan that addresses their specific needs, learning style, and goals for academic and personal development.
            </p>
            <div className="bg-neutral-100 rounded-xl p-4">
              <h4 className="font-exo font-medium text-neutral-800 mb-2 flex items-center text-sm">
                <i className="fas fa-star text-yellow-500 mr-2"></i>
                Example Approach
              </h4>
              <p className="text-neutral-600 text-sm">
                Creating visual learning aids for visual learners, or incorporating movement-based activities for kinesthetic learners.
              </p>
            </div>
          </motion.div>
          
          {/* Card 3 */}
          <motion.div 
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow p-6 border border-neutral-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
              <i className="fas fa-briefcase text-2xl"></i>
            </div>
            <h3 className="font-exo font-semibold text-xl mb-3 text-neutral-800">Real-World Skills</h3>
            <p className="text-neutral-700 mb-6">
              Mentoring focuses on developing practical life skills and fostering independence, including job readiness, social skills, and self-advocacy.
            </p>
            <div className="bg-neutral-100 rounded-xl p-4">
              <h4 className="font-exo font-medium text-neutral-800 mb-2 flex items-center text-sm">
                <i className="fas fa-star text-yellow-500 mr-2"></i>
                Example Approach
              </h4>
              <p className="text-neutral-600 text-sm">
                Practising job interview skills, teaching financial literacy, and developing effective communication strategies for various social situations.
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8 border border-neutral-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white">
                <i className="fas fa-quote-left text-3xl"></i>
              </div>
            </div>
            <div>
              <blockquote className="text-neutral-700 text-lg italic mb-4">
                "At Different Path to Learning, I believe that learning should be an enjoyable and relevant experience. The most effective education connects to a student's life in meaningful ways."
              </blockquote>
              <footer className="text-neutral-600 font-medium not-italic">— Founder, Different Path to Learning</footer>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
