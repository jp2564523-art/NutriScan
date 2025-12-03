import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AIPreview from './components/AIPreview';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-neon-cyan selection:text-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <AIPreview />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;