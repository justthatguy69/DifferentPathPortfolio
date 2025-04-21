import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

// Form schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-exo font-bold text-3xl sm:text-4xl mb-4">Get in <span className="text-secondary">Touch</span></h2>
          <p className="text-lg text-neutral-600">
            Ready to start a different path to learning? Reach out to discuss how I can help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-neutral-200 h-full flex flex-col">
              <h3 className="font-exo font-semibold text-2xl mb-6 text-neutral-800">Contact Form</h3>
              
              {/* Contact Form */}
              <form className="space-y-6 flex-grow" onSubmit={form.handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    {...form.register("name")}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" 
                    placeholder="Full Name" 
                  />
                  {form.formState.errors.name && (
                    <p className="mt-1 text-sm text-red-500">{form.formState.errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    {...form.register("email")}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" 
                    placeholder="example@email.com" 
                  />
                  {form.formState.errors.email && (
                    <p className="mt-1 text-sm text-red-500">{form.formState.errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">Phone Number (Optional)</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    {...form.register("phone")}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" 
                    placeholder="+61 XXX XXX XXX" 
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1">Service Interested In</label>
                  <select 
                    id="service" 
                    {...form.register("service")}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" 
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="tutoring">Academic Tutoring</option>
                    <option value="mentoring">Personal Mentoring</option>
                    <option value="both">Both Tutoring & Mentoring</option>
                    <option value="consultation">Initial Consultation</option>
                  </select>
                  {form.formState.errors.service && (
                    <p className="mt-1 text-sm text-red-500">{form.formState.errors.service.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Your Message</label>
                  <textarea 
                    id="message" 
                    {...form.register("message")}
                    rows={4} 
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" 
                    placeholder="Tell me about your needs and how I can help..." 
                  ></textarea>
                  {form.formState.errors.message && (
                    <p className="mt-1 text-sm text-red-500">{form.formState.errors.message.message}</p>
                  )}
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors font-exo text-center disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl shadow-lg p-8 border border-neutral-200 h-full flex flex-col">
              <h3 className="font-exo font-semibold text-2xl mb-6 text-neutral-800">Connect With Me</h3>
              
              <div className="space-y-8 flex-grow">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <i className="fas fa-envelope text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-exo font-semibold text-lg mb-1 text-neutral-800">Email</h4>
                      <a href="mailto:contact@differentpathtolearning.com" className="text-primary hover:text-primary-dark transition-colors">
                        contact@differentpathtolearning.com
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
                      <a href="tel:+61xxxxxxxxx" className="text-secondary hover:text-secondary-dark transition-colors">
                        +61 XXX XXX XXX
                      </a>
                      <p className="text-sm text-neutral-600 mt-1">
                        Available during business hours
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h4 className="font-exo font-semibold text-lg mb-4 text-neutral-800">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-pink-600 text-white flex items-center justify-center hover:bg-pink-700 transition-colors">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="font-exo font-semibold text-lg mb-3 text-neutral-800">Parent Testimonial</h4>
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
