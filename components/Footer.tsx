
import React from 'react';
import { View } from '../App';

interface FooterProps {
  setView: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <span 
              className="text-2xl font-bold tracking-tight text-blue-500 cursor-pointer"
              onClick={() => setView('home')}
            >
              Arniti<span className="text-white">Software</span>
            </span>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              Global leaders in iGaming platforms and custom enterprise software development.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">iGaming</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><button onClick={() => setView('igaming')} className="hover:text-blue-400 transition-colors">PMS & GMS</button></li>
              <li><button onClick={() => setView('igaming')} className="hover:text-blue-400 transition-colors">Rummy Games</button></li>
              <li><button onClick={() => setView('igaming')} className="hover:text-blue-400 transition-colors">Telegram Apps</button></li>
              <li><button onClick={() => setView('igaming')} className="hover:text-blue-400 transition-colors">Casino Solutions</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><button onClick={() => setView('services')} className="hover:text-blue-400 transition-colors">Custom Development</button></li>
              <li><button onClick={() => setView('services')} className="hover:text-blue-400 transition-colors">Staff Augmentation</button></li>
              <li><button onClick={() => setView('get-started')} className="hover:text-blue-400 transition-colors">Get Started</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <p className="text-slate-400 text-xs mb-4">Expert solutions for digital pioneers.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
          <p>© 2024 Arniti Software. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={() => setView('privacy-policy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => setView('terms-of-service')} className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
