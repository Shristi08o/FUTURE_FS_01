
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
              <Terminal size={14} />
              Full Stack Engineer
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Engineering <span className="gradient-text">Future-Ready</span> Digital Solutions.
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
              I'm Shritsti Prakash. I build scalable, high-performance web applications 
              with a focus on clean code, seamless user experience, and modern architecture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:translate-y-[-2px] transition-all"
              >
                View Portfolio <ArrowRight size={20} />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all"
              >
                Resume <Download size={20} />
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 grayscale opacity-60">
              <span className="text-xs font-bold uppercase text-slate-400 tracking-widest">Tech Stack</span>
              <div className="flex gap-4">
                <img src="https://cdn.simpleicons.org/react/61DAFB" className="h-6" alt="React" />
                <img src="https://cdn.simpleicons.org/nodedotjs/339933" className="h-6" alt="Node" />
                <img src="https://cdn.simpleicons.org/mongodb/47A048" className="h-6" alt="MongoDB" />
                <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" className="h-6" alt="Tailwind" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://picsum.photos/seed/shritsti/800/800" 
                alt="Shritsti Prakash" 
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400/20 rounded-full -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-600/10 rounded-full -z-10" />
            
            {/* Stats Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 z-20"
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                  <div className="font-bold text-2xl">25+</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Projects Completed</div>
                  <div className="text-xs text-slate-500">Industry-standard quality</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
