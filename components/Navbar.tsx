
import React, { useState, useEffect } from 'react';
import { View } from '../App';

interface NavbarProps {
  currentView: View;
  setView: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On home page, we use transparent style until scroll. 
  // On sub-pages, we always use the solid/dark style because they have light backgrounds at the top.
  const forceSolid = isScrolled || currentView !== 'home';

  const navClass = (view: View) => {
    const active = currentView === view;
    const base = "text-sm font-medium transition-colors hover:text-blue-500 cursor-pointer outline-none focus:outline-none";
    
    let colorClass = "";
    if (forceSolid) {
      colorClass = active ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-slate-700';
    } else {
      colorClass = active ? 'text-white border-b-2 border-white pb-1' : 'text-white/90';
    }
    
    return `${base} ${colorClass}`;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${forceSolid ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer group" onClick={() => setView('home')}>
            <span className={`text-2xl font-bold tracking-tight transition-colors ${forceSolid ? 'text-blue-700' : 'text-white'}`}>
              Arniti<span className={`transition-colors ${forceSolid ? 'text-slate-900' : 'text-blue-200'}`}>Software</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => setView('home')} className={navClass('home')}>Home</button>
            <button onClick={() => setView('services')} className={navClass('services')}>Services</button>
            <button onClick={() => setView('igaming')} className={navClass('igaming')}>iGaming</button>
            <button 
              onClick={() => setView('get-started')} 
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm transform active:scale-95 ${
                forceSolid 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white text-blue-700 hover:bg-blue-50'
              }`}
            >
              Get Started
            </button>
          </div>
          
          <div className="md:hidden">
            <button className={`${forceSolid ? 'text-slate-900' : 'text-white'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
