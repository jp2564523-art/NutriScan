import React, { useState, useRef } from 'react';
import { analyzeFoodImage } from '../services/geminiService';
import { FoodAnalysisResponse, LoadingState } from '../types';
import { Loader2, Upload, ScanLine, Camera, Zap, CheckCircle2, Crosshair } from 'lucide-react';

const AIPreview: React.FC = () => {
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [result, setResult] = useState<FoodAnalysisResponse | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = async () => {
        const base64String = reader.result as string;
        setPreviewUrl(base64String);
        setStatus(LoadingState.LOADING);
        
        // Simulate scanning delay for effect, then call API
        setTimeout(async () => {
            try {
                const data = await analyzeFoodImage(base64String);
                setResult(data);
                setStatus(LoadingState.SUCCESS);
            } catch (error) {
                console.error(error);
                setStatus(LoadingState.ERROR);
            }
        }, 1500); 
      };

      reader.readAsDataURL(file);
    }
  };

  const triggerInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <section id="demo" className="py-24 relative overflow-hidden bg-black/50">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5 pointer-events-none"></div>
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-neon-green/5 blur-[128px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-neon-cyan/10 border border-neon-cyan/20 rounded-full px-4 py-1.5 mb-6">
              <ScanLine className="w-4 h-4 text-neon-cyan animate-pulse" />
              <span className="text-xs font-mono text-neon-cyan tracking-widest uppercase">Tecnologia Proprietária</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              SCANNER <span className="text-white">VISUAL</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Aponte a câmera para qualquer alimento. A IA desconstrói a composição molecular em 0.5 segundos. 
              <span className="text-neon-green font-bold block mt-2">Teste agora com uma foto da sua galeria.</span>
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Upload/Scanner Area */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-neon-green to-neon-cyan opacity-20 blur group-hover:opacity-40 transition duration-500 rounded-2xl"></div>
            
            <div 
                className="relative bg-zinc-900 border border-white/10 rounded-xl overflow-hidden aspect-square flex flex-col items-center justify-center cursor-pointer hover:border-neon-cyan/50 transition-colors"
                onClick={triggerInput}
            >
                <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileSelect} 
                    accept="image/*" 
                    className="hidden" 
                />

                {previewUrl ? (
                    <>
                        <img src={previewUrl} alt="Scan Target" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                        
                        {/* Scanning Animation Overlay */}
                        {status === LoadingState.LOADING && (
                            <div className="absolute inset-0 z-20">
                                <div className="w-full h-1 bg-neon-green shadow-[0_0_15px_rgba(57,255,20,0.8)] absolute top-0 animate-[scan_2s_linear_infinite]"></div>
                                <div className="absolute inset-0 bg-neon-green/10 animate-pulse"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-neon-green font-mono font-bold text-xl bg-black/80 px-4 py-2 rounded border border-neon-green">
                                    ANALISANDO...
                                </div>
                            </div>
                        )}

                        {/* Success Overlay on Image */}
                        {status === LoadingState.SUCCESS && (
                             <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                                <div className="border-2 border-neon-green w-[80%] h-[80%] relative rounded-lg">
                                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-neon-green"></div>
                                    <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-neon-green"></div>
                                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-neon-green"></div>
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-neon-green"></div>
                                    <div className="absolute bottom-4 right-4 bg-neon-green text-black text-xs font-bold px-2 py-1">SCANNED</div>
                                </div>
                             </div>
                        )}
                    </>
                ) : (
                    <div className="text-center p-8 transition-transform group-hover:scale-105">
                        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10 group-hover:border-neon-green/50 group-hover:text-neon-green transition-all relative">
                            <Camera className="w-10 h-10 text-gray-400 group-hover:text-neon-green" />
                            <div className="absolute -bottom-2 -right-2 bg-neon-green text-black rounded-full p-1">
                                <Zap className="w-4 h-4" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Carregar Foto</h3>
                        <p className="text-gray-500 text-sm mb-6 max-w-xs mx-auto">
                            Clique aqui para enviar uma foto de comida e ver a mágica.
                        </p>
                        <button className="bg-white/10 text-white hover:bg-neon-cyan hover:text-black hover:border-transparent border border-white/20 px-8 py-3 rounded-full font-mono text-sm transition-all duration-300 flex items-center mx-auto font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]">
                            <Crosshair className="w-4 h-4 mr-2" />
                            ATIVAR SENSOR ÓPTICO
                        </button>
                    </div>
                )}
            </div>
            
            <style>{`
                @keyframes scan {
                    0% { top: 0%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
            `}</style>
          </div>

          {/* Right: Analysis Results (HUD) */}
          <div className="flex flex-col justify-center h-full">
            {status === LoadingState.SUCCESS && result ? (
                 <div className="animate-fadeIn space-y-6">
                    <div>
                        <h3 className="text-neon-cyan font-mono text-sm tracking-widest mb-1">ALIMENTO IDENTIFICADO</h3>
                        <h4 className="text-4xl font-display font-bold text-white uppercase">{result.foodName}</h4>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 border border-white/10 p-4 rounded-lg relative overflow-hidden group hover:border-neon-green/30 transition-colors">
                            <div className="text-gray-500 text-xs uppercase font-bold mb-1">Energia</div>
                            <div className="text-3xl font-display font-bold text-white">{result.calories}</div>
                            <div className="text-xs text-neon-green mt-1">KCAL</div>
                            <Zap className="absolute top-4 right-4 text-white/5 w-8 h-8 group-hover:text-neon-green/20" />
                        </div>
                        <div className="bg-white/5 border border-white/10 p-4 rounded-lg relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                            <div className="text-gray-500 text-xs uppercase font-bold mb-1">Proteína</div>
                            <div className="text-3xl font-display font-bold text-white">{result.protein}</div>
                            <div className="text-xs text-blue-400 mt-1">CONSTRUÇÃO</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-4 rounded-lg relative overflow-hidden group hover:border-yellow-500/30 transition-colors">
                            <div className="text-gray-500 text-xs uppercase font-bold mb-1">Carboidratos</div>
                            <div className="text-3xl font-display font-bold text-white">{result.carbs}</div>
                            <div className="text-xs text-yellow-400 mt-1">COMBUSTÍVEL</div>
                        </div>
                         <div className="bg-white/5 border border-white/10 p-4 rounded-lg relative overflow-hidden group hover:border-pink-500/30 transition-colors">
                            <div className="text-gray-500 text-xs uppercase font-bold mb-1">Gorduras</div>
                            <div className="text-3xl font-display font-bold text-white">{result.fats}</div>
                            <div className="text-xs text-pink-400 mt-1">HORMONAL</div>
                        </div>
                    </div>

                    <div className="bg-neon-green/10 border border-neon-green/20 p-4 rounded-lg flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                        <div>
                            <h5 className="text-neon-green font-bold text-sm mb-1">REGISTRO AUTOMÁTICO</h5>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                Este alimento foi processado e adicionado à sua dieta. O treino de amanhã será ajustado automaticamente baseada nessa ingestão calórica.
                            </p>
                        </div>
                    </div>
                 </div>
            ) : (
                // Empty State / Placeholder
                <div className="h-full flex flex-col justify-center items-center text-center opacity-30 border-2 border-dashed border-white/10 rounded-xl p-8">
                     <ScanLine className="w-16 h-16 text-white mb-4" />
                     <h4 className="text-xl font-bold text-white mb-2">AGUARDANDO DADOS</h4>
                     <p className="text-sm">Envie uma foto para o sistema processar a matriz nutricional.</p>
                     
                     <div className="mt-8 w-full max-w-xs space-y-3">
                        <div className="h-2 bg-white/20 rounded w-full"></div>
                        <div className="h-2 bg-white/20 rounded w-2/3"></div>
                        <div className="h-2 bg-white/20 rounded w-1/2"></div>
                     </div>
                </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIPreview;