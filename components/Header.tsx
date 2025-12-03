import React, { useState, useEffect } from 'react';
import { Scan } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-24">
          <div className="flex items-center space-x-3 group cursor-default">
            <div className="relative">
              <div className="absolute inset-0 bg-neon-green blur-lg opacity-20 group-hover:opacity-50 transition-opacity duration-500"></div>
              <Scan className="h-10 w-10 text-neon-green relative z-10" />
            </div>
            <span className="font-display font-black text-3xl tracking-[0.2em] text-white group-hover:text-neon-cyan transition-colors duration-300">
              NUTRI<span className="text-neon-cyan group-hover:text-white transition-colors duration-300">SCAN</span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;