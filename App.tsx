
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/ServicesPage';
import IGamingPage from './pages/IGamingPage';
import GetStartedPage from './pages/GetStartedPage';

export type View = 'home' | 'services' | 'igaming' | 'get-started';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'services':
        return <ServicesPage setView={setCurrentView} />;
      case 'igaming':
        return <IGamingPage setView={setCurrentView} />;
      case 'get-started':
        return <GetStartedPage />;
      default:
        return <LandingPage setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <Navbar currentView={currentView} setView={setCurrentView} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer setView={setCurrentView} />
    </div>
  );
};

export default App;
