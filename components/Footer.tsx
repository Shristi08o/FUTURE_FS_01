
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="text-xl font-bold text-slate-900 mb-2">
              Shritsti<span className="text-blue-600">.</span>
            </div>
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Shritsti Prakash. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-blue-600 transition-colors">GitHub</a>
            <a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Twitter</a>
          </div>

          <div className="text-sm text-slate-500 flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> & Passion.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
