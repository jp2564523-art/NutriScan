import React from 'react';
import { ArrowRight, Zap, Cpu, Activity } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black">
      <style>{`
        @keyframes glitch {
          0% { transform: translate(0) }
          20% { transform: translate(-2px, 2px) }
          40% { transform: translate(-2px, -2px) }
          60% { transform: translate(2px, 2px) }
          80% { transform: translate(2px, -2px) }
          100% { transform: translate(0) }
        }
        .glitch-text:hover {
          animation: glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite;
          color: #00f3ff;
        }
        .grid-background {
          background-image: linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 243, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          transform: perspective(500px) rotateX(60deg);
          animation: grid-move 20s linear infinite;
        }
        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 0 1000px; }
        }
      `}</style>

      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 grid-background origin-top h-[200%] -mt-[50%]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </div>

      {/* Spotlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-neon-cyan/20 blur-[150px] rounded-full opacity-30 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-neon-green/30 rounded-full px-6 py-2 mb-10 backdrop-blur-md shadow-[0_0_20px_rgba(57,255,20,0.1)]">
          <Cpu className="w-4 h-4 text-neon-green animate-pulse" />
          <span className="text-sm font-mono text-neon-green tracking-[0.2em] uppercase font-bold">Sistema v2.0 Online</span>
        </div>

        {/* Main Title with Glitch/Glow */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter text-white mb-8 leading-[0.9] select-none">
          <span className="block glitch-text transition-colors duration-300">BIO</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 relative">
            HACKING
            <span className="absolute -inset-1 blur-2xl bg-white/10 -z-10"></span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-400 mb-12 font-light leading-relaxed">
          O único app que <span className="text-neon-cyan font-bold">escaneia sua comida</span> e <span className="text-neon-purple font-bold">gera seu treino</span> instantaneamente.
        </p>

        {/* Massive CTA */}
        <div className="w-full max-w-md mx-auto relative group">
          {/* Outer Glow */}
          <div className="absolute -inset-1 bg-neon-green opacity-40 blur-xl group-hover:opacity-80 group-hover:blur-2xl transition duration-200 animate-pulse-slow"></div>
          
          <a href="#pricing" className="relative flex items-center justify-center w-full bg-neon-green border-2 border-neon-green text-black font-display font-black text-2xl uppercase py-6 tracking-widest hover:bg-white hover:border-white transition-all duration-300 clip-path-polygon transform group-hover:-translate-y-1 shadow-[0_0_30px_rgba(57,255,20,0.4)]">
            <span className="mr-3">LIBERAR ACESSO VITALÍCIO</span>
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
        
        <p className="mt-6 text-gray-400 text-sm font-mono tracking-widest uppercase flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          Últimas vagas por R$ 29,90
        </p>

        {/* Features Preview (Metrics) */}
        <div className="mt-24 grid grid-cols-3 gap-4 md:gap-12 w-full max-w-4xl border-t border-white/10 pt-10">
            <div className="flex flex-col items-center group">
                <Activity className="w-8 h-8 text-neon-green mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-2xl font-display font-bold text-white">0.5s</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">Tempo de Scan</span>
            </div>
            <div className="flex flex-col items-center group">
                <Zap className="w-8 h-8 text-neon-cyan mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-2xl font-display font-bold text-white">AI</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">Visão Computacional</span>
            </div>
            <div className="flex flex-col items-center group">
                 <div className="w-8 h-8 rounded-full border-2 border-neon-purple flex items-center justify-center mb-2 group-hover:bg-neon-purple group-hover:text-black transition-colors text-neon-purple font-bold text-xs">OK</div>
                <span className="text-2xl font-display font-bold text-white">100%</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">Precisão</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;