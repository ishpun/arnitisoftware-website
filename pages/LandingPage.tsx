
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ContactSection from '../components/ContactSection';
import { View } from '../App';

interface LandingPageProps {
  setView: (view: View) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ setView }) => {
  return (
    <>
      <Hero setView={setView} />
      <Services summaryMode={true} setView={setView} />
      <ContactSection />
    </>
  );
};

export default LandingPage;
