
import React from 'react';
import { ServiceItem } from '../types';
import { View } from '../App';

interface ServicesProps {
  summaryMode?: boolean;
  setView?: (view: View) => void;
}

const coreServices: ServiceItem[] = [
  {
    id: 'custom-dev',
    title: 'Custom Software Development',
    description: 'Bespoke end-to-end solutions designed for enterprise scalability and high-load environments.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: 'staff-aug',
    title: 'Staff Augmentation',
    description: 'Elite technical talent for your internal teams. Vetted developers specialized in modern stacks.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const igamingProducts: ServiceItem[] = [
  {
    id: 'pms-gms',
    title: 'PMS & GMS Platforms',
    description: 'Advanced Player Management Systems and Game Management Systems for seamless operator control.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: 'rummy-tg',
    title: 'Social & Telegram Apps',
    description: 'High-engagement Rummy games and innovative Telegram-based betting apps for mobile reach.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const Services: React.FC<ServicesProps> = ({ summaryMode = false, setView }) => {
  const handleNav = (v: View) => {
    if (setView) setView(v);
  };

  return (
    <div className="bg-slate-50">
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Core Expertise</h2>
            <p className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Technical Strategy & Talent</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coreServices.map((service) => (
              <ServiceCard key={service.id} service={service} onClick={() => handleNav('services')} />
            ))}
          </div>
        </div>
      </section>

      <section id="igaming" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Product Suite</h2>
            <p className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">iGaming Software Solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {igamingProducts.map((service) => (
              <ServiceCard key={service.id} service={service} onClick={() => handleNav('igaming')} />
            ))}
          </div>
          {summaryMode && (
            <div className="text-center mt-12">
              <button 
                onClick={() => handleNav('igaming')}
                className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors"
              >
                View all iGaming products
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ service, onClick }: { service: ServiceItem, onClick?: () => void }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all group">
    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
      {service.icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed mb-6">
      {service.description}
    </p>
    <button onClick={onClick} className="text-blue-600 font-semibold text-sm flex items-center hover:text-blue-800">
      Learn more
      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </button>
  </div>
);

export default Services;
