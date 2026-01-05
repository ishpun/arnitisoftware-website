
import React from 'react';
import { View } from '../App';

interface ServicesPageProps {
  setView: (view: View) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ setView }) => {
  return (
    <div className="pt-24 bg-white min-h-screen">
      <div className="bg-slate-900 py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Expert IT Services</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            From architecture to deployment, we provide end-to-end technical leadership for modern enterprises.
          </p>
        </div>
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Custom Software Development</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We don't just write code; we build strategic assets. Our development process is anchored in Agile methodologies, ensuring rapid delivery and maximum flexibility.
            </p>
            <ul className="space-y-4 mb-8">
              {['Enterprise Platform Architecture', 'Legacy System Modernization', 'Cloud-Native App Development', 'Microservices & API Strategy'].map(item => (
                <li key={item} className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  {item}
                </li>
              ))}
            </ul>
            <button onClick={() => setView('get-started')} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">Start Your Project</button>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Coding" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse">
          <div className="lg:order-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Staff Augmentation</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Scale your team with elite developers who match your culture and tech stack perfectly. We handle the vetting so you can focus on building.
            </p>
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-4">Our Talent Guarantee</h3>
              <p className="text-blue-800 text-sm">
                Every developer we place undergoes a rigorous 4-step technical and psychological assessment. We only provide the top 3% of engineering talent.
              </p>
            </div>
          </div>
          <div className="lg:order-1 rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Team" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
