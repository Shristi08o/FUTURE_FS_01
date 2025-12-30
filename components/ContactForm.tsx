
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Mail, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { submitContactForm } from '../services/api';
import { ContactFormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }
    
    setIsSubmitting(true);
    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info Side */}
            <div className="p-10 md:p-16 lg:p-20 bg-blue-600 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-extrabold mb-6">Let's work together.</h2>
                <p className="text-blue-100 text-lg mb-12 max-w-md">
                  Have a challenging project in mind? I'm currently open to freelance opportunities 
                  and full-time engineering roles.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500/30 p-3 rounded-xl backdrop-blur-sm">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="text-xs text-blue-200 font-bold uppercase tracking-widest">Email Me</div>
                      <div className="font-medium">shritsti.prakash@tech.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500/30 p-3 rounded-xl backdrop-blur-sm">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div className="text-xs text-blue-200 font-bold uppercase tracking-widest">Location</div>
                      <div className="font-medium">Bangalore, India / Remote</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="text-xs text-blue-200 font-bold uppercase tracking-widest mb-4">Follow Me</div>
                <div className="flex gap-4">
                  {[Linkedin, Twitter, Github].map((Icon, idx) => (
                    <a key={idx} href="#" className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-10 md:p-16 lg:p-20 bg-white">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="bg-green-100 text-green-600 p-4 rounded-full mb-6">
                      <CheckCircle size={48} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-600 mb-8">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Shritsti Prakash"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="shritsti@example.com"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Collaboration"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell me about your project..."
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      ></textarea>
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm font-medium">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>Send Message <Send size={20} /></>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
