
import React from 'react';
import { View } from '../App';

interface IGamingPageProps {
  setView: (view: View) => void;
}

const IGamingPage: React.FC<IGamingPageProps> = ({ setView }) => {
  const products = [
    { title: 'Player Management System (PMS)', description: 'Real-time player monitoring, wallet management, and comprehensive loyalty program engines.' },
    { title: 'Game Management System (GMS)', description: 'Unified API integration for multiple game providers with automated reporting and risk management.' },
    { title: 'Rummy Game Solutions', description: 'Certified RNG engines, multiple variant supports (Pool, Points, Deals), and fraud protection.' },
    { title: 'Telegram Betting Apps', description: 'Lightweight, high-conversion mini-apps that allow betting directly within the Telegram interface.' },
    { title: 'Casino Web/Mobile', description: 'Fully customizable casino lobbies with live dealer support and instant-play mobile capabilities.' }
  ];

  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      <div className="bg-blue-700 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">iGaming Solutions</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Market-leading software for operators who demand performance, security, and scalability.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {products.map((p, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM5.884 6.68a1 1 0 10-1.404-1.427l-.707.696a1 1 0 001.404 1.427l.707-.696zM14.116 6.68l.707-.696a1 1 0 10-1.404-1.427l-.707.696a1 1 0 101.404 1.427zM5 11a1 1 0 01-1-1H2a1 1 0 110 2h2a1 1 0 011-1zM19 10a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM6.744 13.191l-.707.706a1 1 0 11-1.414-1.414l.707-.707a1 1 0 111.414 1.414zM16.191 14.887l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414zM11 17a1 1 0 10-2 0v1a1 1 0 102 0v-1z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{p.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 text-white rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Launch Your Platform Faster</h2>
            <p className="text-slate-400">Our iGaming products are designed for rapid deployment. Get from concept to live-ops in weeks, not months.</p>
          </div>
          <button onClick={() => setView('get-started')} className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors whitespace-nowrap">
            Request Product Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default IGamingPage;
