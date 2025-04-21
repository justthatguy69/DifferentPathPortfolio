import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <span className="font-audiowide text-white text-xl">D</span>
              </div>
              <div>
                <span className="font-exo font-bold text-xl">Different <span className="text-primary">Path</span></span>
                <p className="text-xs text-neutral-400 -mt-1">to Learning</p>
              </div>
            </div>
            <p className="text-neutral-400 mb-6">
              Specialized tutoring and mentoring services for boys aged 12-20 on the autism spectrum and those facing challenging lifestyles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-exo font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-neutral-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#approach" className="text-neutral-400 hover:text-white transition-colors">Our Approach</a></li>
              <li><a href="#qualifications" className="text-neutral-400 hover:text-white transition-colors">Qualifications</a></li>
              <li><a href="#availability" className="text-neutral-400 hover:text-white transition-colors">Availability</a></li>
              <li><a href="#contact" className="text-neutral-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-exo font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#approach" className="text-neutral-400 hover:text-white transition-colors">Academic Tutoring</a></li>
              <li><a href="#approach" className="text-neutral-400 hover:text-white transition-colors">Life Skills Mentoring</a></li>
              <li><a href="#approach" className="text-neutral-400 hover:text-white transition-colors">Social Skills Development</a></li>
              <li><a href="#approach" className="text-neutral-400 hover:text-white transition-colors">Job Readiness Training</a></li>
              <li><a href="#approach" className="text-neutral-400 hover:text-white transition-colors">Interest-Based Learning</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-exo font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-envelope text-primary mt-1 mr-3"></i>
                <span className="text-neutral-400">contact@differentpathtolearning.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt text-primary mt-1 mr-3"></i>
                <span className="text-neutral-400">+61 XXX XXX XXX</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock text-primary mt-1 mr-3"></i>
                <div className="text-neutral-400">
                  <div>Weekdays: 2:00 PM - 8:00 PM</div>
                  <div>Weekends: 8:00 AM - 4:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-neutral-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Different Path to Learning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
