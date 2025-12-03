import React from 'react';
import { Check, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-black relative">
       {/* Decorative Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">MATE AS MENSALIDADES</h2>
          <p className="text-gray-400 text-lg">Pare de alugar seu progresso. Pague uma vez, use para sempre.</p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="glass-panel p-1 rounded-2xl relative group hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute -inset-1 bg-gradient-to-b from-neon-green via-neon-cyan to-neon-purple opacity-75 blur-md group-hover:opacity-100 group-hover:blur-lg transition duration-500 rounded-2xl"></div>
            
            <div className="relative bg-zinc-950 p-8 rounded-xl h-full flex flex-col items-center text-center">
              <div className="absolute top-0 right-0 bg-neon-green text-black text-xs font-bold px-3 py-1 rounded-bl-lg font-display uppercase shadow-[0_0_10px_rgba(57,255,20,0.5)]">
                50% OFF HOJE
              </div>

              <h3 className="text-2xl font-display font-bold text-white mt-4">PACOTE VITALÍCIO</h3>
              
              <div className="my-8">
                <span className="text-5xl font-bold text-white tracking-tighter">R$ 29,90</span>
                <span className="text-gray-500 text-sm block mt-2 font-bold text-neon-cyan uppercase tracking-widest">Pagamento Único</span>
              </div>

              <ul className="space-y-4 text-left w-full mb-8">
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-neon-green mr-3 flex-shrink-0" />
                  <span>Scanner de Alimentos Ilimitado</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-neon-green mr-3 flex-shrink-0" />
                  <span>Análise de Macros via IA</span>
                </li>
                <li className="flex items-center text-white font-bold bg-white/5 p-2 rounded -mx-2 border border-neon-purple/30">
                  <Check className="w-5 h-5 text-neon-purple mr-3 flex-shrink-0" />
                  <span>BÔNUS: Gerador de Fichas de Treino</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-neon-green mr-3 flex-shrink-0" />
                  <span>Acesso a Updates Futuros</span>
                </li>
              </ul>

              <button className="w-full relative overflow-hidden bg-gradient-to-r from-neon-green to-neon-cyan text-black font-display font-black text-lg py-5 hover:from-white hover:to-white transition-all duration-300 uppercase tracking-wider group-btn">
                <span className="relative z-10 flex items-center justify-center">
                   QUERO PAGAR SÓ R$ 29,90
                   <Zap className="w-5 h-5 ml-2 fill-black" />
                </span>
                <div className="absolute inset-0 bg-white/30 transform -skew-x-12 -translate-x-full group-btn-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              
              <p className="mt-4 text-xs text-gray-500 font-mono">
                🔒 Risco Zero: 7 dias de garantia incondicional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;