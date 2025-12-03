import React from 'react';
import { Scan, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
             <Scan className="h-6 w-6 text-neon-green" />
             <span className="font-display font-bold text-xl text-white">NUTRI<span className="text-neon-cyan">SCAN</span></span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5"/></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5"/></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5"/></a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; 2024 NutriScan AI Technologies. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Termos</a>
            <a href="#" className="hover:text-gray-400">Privacidade</a>
            <a href="#" className="hover:text-gray-400">Suporte</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;