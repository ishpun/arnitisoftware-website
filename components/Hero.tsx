
import React from 'react';
import { View } from '../App';

interface HeroProps {
  setView: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_rgba(59,130,246,0.5)_0%,_transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,_rgba(29,78,216,0.3)_0%,_transparent_40%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
                IT & iGaming Excellence
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Software & Gaming</span> Solutions.
              </h1>
              <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
                Arniti Software delivers high-performance custom development, staff augmentation, and industry-leading iGaming products including PMS, GMS, and Casino platforms.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setView('services')}
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-center hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-500/20"
              >
                Explore Services
              </button>
              <button 
                onClick={() => setView('igaming')}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-center hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                iGaming Products
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">100+</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">iGaming Deployments</span>
              </div>
              <div className="w-px h-10 bg-slate-700"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">24/7</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">Expert Support</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="High Tech Gaming Interface" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
