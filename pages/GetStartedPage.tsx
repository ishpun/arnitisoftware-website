
import React from 'react';
import ContactSection from '../components/ContactSection';

const GetStartedPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Let's Build the Future</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Whether you need a full engineering team or a standalone iGaming platform, we have the expertise to make it happen.
        </p>
      </div>
      
      <div className="flex-grow">
        <ContactSection />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-blue-600 text-2xl font-bold mb-2">01</div>
            <h4 className="font-bold text-slate-900 mb-2">Initial Audit</h4>
            <p className="text-sm text-slate-500">We analyze your requirements and current tech landscape.</p>
          </div>
          <div className="text-center">
            <div className="text-blue-600 text-2xl font-bold mb-2">02</div>
            <h4 className="font-bold text-slate-900 mb-2">Strategy Plan</h4>
            <p className="text-sm text-slate-500">We propose a custom-tailored solution and timeline.</p>
          </div>
          <div className="text-center">
            <div className="text-blue-600 text-2xl font-bold mb-2">03</div>
            <h4 className="font-bold text-slate-900 mb-2">Execution</h4>
            <p className="text-sm text-slate-500">Our elite engineers and product leads deliver excellence.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;
