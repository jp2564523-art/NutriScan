import React from 'react';
import { Star, Quote, TrendingUp, Zap, Trophy } from 'lucide-react';

const reviews = [
  {
    name: "Alessandro Silva",
    role: "Analista de Sistemas",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150&h=150",
    content: "A precisão do scanner é assustadora. Calibrei com balança de precisão e a margem de erro foi quase zero. O design dark mode é perfeito para não cansar a vista.",
    stats: "Gordura: -8%",
    rating: 5
  },
  {
    name: "Mariana Costa",
    role: "Triatleta Profissional",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    content: "Eu comprei pelo controle de macros, mas o **Bônus de Treino** mudou meu jogo. A IA adaptou minha ficha quando eu estava estagnada. Vale 10x o preço.",
    stats: "VO2 Max: +15%",
    rating: 5,
    highlight: true
  },
  {
    name: "Marcos Oliveira",
    role: "Engenheiro de Dados",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150&h=150",
    content: "Interface responsiva e absurdamente rápida. Gera o plano semanal em segundos. A integração do treino com a dieta é o que faltava no mercado.",
    stats: "Massa Magra: +4kg",
    rating: 5
  },
  {
    name: "Lucas Mendes",
    role: "Empreendedor Digital",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=150&h=150",
    content: "A velocidade de reconhecimento é absurda. O scanner identifica o prato e calcula tudo antes mesmo de eu pegar o garfo. Eficiência pura.",
    stats: "Energia: +20%",
    rating: 5
  },
  {
    name: "Helena Vaz",
    role: "Personal Trainer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
    content: "Eu era cética sobre IA prescrevendo treinos, mas a periodização que o NutriScan criou baseada na ingestão de carboidratos dos meus alunos foi perfeita.",
    stats: "Cargas: +12%",
    rating: 5
  },
  {
    name: "Dr. André Wei",
    role: "Nutrólogo Esportivo",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150&h=150",
    content: "Recomendo aos pacientes. A gamificação e a facilidade de uso mantêm a adesão alta. É o primeiro app de nutrição que meus pacientes usam por mais de 3 meses.",
    stats: "Adesão: 98%",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative bg-zinc-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neon-green/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-cyan/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
            <Trophy className="w-4 h-4 text-neon-yellow" />
            <span className="text-xs font-mono text-neon-yellow tracking-widest uppercase">Resultados Comprovados</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            FEEDBACK <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-cyan">REAL</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Junte-se a milhares de usuários que otimizaram sua biologia com o algoritmo do NutriScan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className={`relative glass-panel p-8 rounded-2xl group transition-all duration-300 hover:-translate-y-2 ${review.highlight ? 'border-neon-green/50 bg-white/5' : 'border-white/5'}`}
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                <Quote className="w-8 h-8 text-white" />
              </div>

              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-neon-cyan blur opacity-50 rounded-full group-hover:opacity-100 transition-opacity"></div>
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="relative w-14 h-14 rounded-full border-2 border-white/20 object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-black rounded-full p-0.5 border border-white/20">
                    <Zap className="w-3 h-3 text-neon-yellow" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold font-display">{review.name}</h4>
                  <p className="text-neon-cyan text-xs uppercase tracking-wider">{review.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-neon-green fill-neon-green" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                "{review.content}"
              </p>

              {/* Stats / Case Study Data */}
              <div className="border-t border-white/10 pt-4 mt-auto">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs font-mono uppercase">Evolução Detectada</span>
                  <div className="flex items-center text-neon-green font-bold text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {review.stats}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;