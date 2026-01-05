
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    type: 'iGaming Solutions (PMS/GMS)',
    details: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const { name, email, company, phone, details, type } = formData;
    const fullDescription = `[${type}] ${details}`;
    const url = "https://cs.fabbuilder.com/api/tenant/67122c84a15d036c690f45a5/lead";
    const payload = {
      data: {
        companyName: company,
        description: fullDescription,
        email: email,
        firstName: name,
        phone: phone,
        source: 'website'
      }
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          type: 'iGaming Solutions (PMS/GMS)',
          details: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500 opacity-20 transform translate-x-1/2 -skew-x-12"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
            <div className="p-8 md:p-16 text-white">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">Scale your <span className="text-blue-200">iGaming Venture.</span></h2>
              <p className="text-xl text-blue-100 mb-8 max-w-md">
                Talk to our experts about PMS/GMS integration, custom Rummy games, or casino software solutions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-blue-200">Inquiries</p>
                    <p className="text-lg font-bold">contact@arniti.software</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 md:p-16">
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                  <p className="text-slate-600 mb-8">An Arniti consultant will follow up shortly.</p>
                  <button onClick={() => setStatus('idle')} className="text-blue-600 font-bold hover:underline">Send another request</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-slate-700">Name</label>
                      <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-slate-700">Email</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="john@company.com" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-slate-700">Company</label>
                      <input required type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Acme Inc" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-slate-700">Phone</label>
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="+1..." />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700">Solution Required</label>
                    <select name="type" value={formData.type} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                      <option>iGaming Solutions (PMS/GMS)</option>
                      <option>Custom Rummy/Telegram App</option>
                      <option>Casino Software (Mobile/Web)</option>
                      <option>Custom Software Development</option>
                      <option>Staff Augmentation</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700">Requirements</label>
                    <textarea required name="details" value={formData.details} onChange={handleChange} rows={4} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none" placeholder="Briefly describe your goals..."></textarea>
                  </div>
                  
                  {status === 'error' && <p className="text-red-500 text-sm font-medium">Failed to send. Please try again.</p>}

                  <button type="submit" disabled={status === 'loading'} className={`w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 transform active:scale-95 transition-all flex items-center justify-center ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'}`}>
                    {status === 'loading' ? 'Processing...' : 'Submit Request'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
