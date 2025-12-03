import React from 'react';
import { ScanLine, Dumbbell, Brain, BarChart3, Trophy, Zap } from 'lucide-react';

const features = [
  {
    icon: <ScanLine className="w-8 h-8 text-neon-cyan" />,
    title: "Scanner Instantâneo",
    description: "Aponte a câmera e saiba exatamente o que está comendo. Calorias e macros em 0.5s."
  },
  {
    icon: <Dumbbell className="w-8 h-8 text-neon-green" />,
    title: "Treino Inteligente (Bônus)",
    description: "Sua dieta define seu treino. O app cria fichas personalizadas baseadas na sua energia.",
    highlight: true
  },
  {
    icon: <Brain className="w-8 h-8 text-neon-purple" />,
    title: "Cérebro Digital",
    description: "Um Coach de bolso que aprende seu metabolismo e ajusta sua rota em tempo real."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
    title: "Dados de Verdade",
    description: "Gráficos brutais de evolução. Veja sua gordura cair e sua massa subir."
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "Velocidade Sônica",
    description: "Sem loadings eternos. Planejamento semanal gerado na velocidade do pensamento."
  },
  {
    icon: <Trophy className="w-8 h-8 text-pink-500" />,
    title: "Gamificação Viciante",
    description: "Transforme sua dieta em um jogo. Ganhe XP, suba de nível e desbloqueie conquistas por consistência."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative bg-black">
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent"></div>
       
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-neon-cyan font-mono text-sm tracking-[0.2em] mb-4 uppercase">Features</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            TECNOLOGIA <span className="text-gray-600">DE PONTA</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Não é só um app. É o sistema operacional do seu shape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group glass-panel p-8 hover:bg-white/5 transition-all duration-300 relative overflow-hidden ${feature.highlight ? 'border-neon-green/30' : 'border-white/5'}`}
            >
              {feature.highlight && (
                <div className="absolute top-0 right-0 bg-neon-green text-black text-xs font-bold px-3 py-1 font-display">
                  BÔNUS EXCLUSIVO
                </div>
              )}
              <div className="mb-6 p-4 bg-white/5 rounded-full w-fit group-hover:scale-110 transition-transform duration-300 border border-white/10">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 font-display">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan to-neon-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
       </div>
    </section>
  );
};

export default Features;