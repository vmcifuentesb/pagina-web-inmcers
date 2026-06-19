import React, { useState, useRef } from 'react';
import { HelpCircle } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) { // Left click held
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[320px] md:h-[450px] rounded-2xl overflow-hidden select-none cursor-ew-resize border-4 border-slate-200 shadow-premium"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Background: Unprotected property (Before) */}
      <div className="absolute inset-0 bg-slate-950">
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop" 
          alt="Antes: Terreno Vulnerable"
          className="w-full h-full object-cover pointer-events-none opacity-40 blur-[1px]"
        />
        <div className="absolute top-4 left-4 bg-red-600/90 backdrop-blur-sm text-white font-bold text-xs uppercase px-3 py-1.5 rounded shadow-md z-20">
          Antes: Propiedad Vulnerable
        </div>
      </div>

      {/* Foreground: Protected Perimeter (After) */}
      <div 
        className="absolute inset-0 bg-slate-900 border-r border-white/50 z-10"
        style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
      >
        <img 
          src="/images/fotos/Malla galvanizada (1).jpg" 
          onError={(e) => { 
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1508873696983-2df519f0397e?q=80&w=1200&auto=format&fit=crop"; 
          }}
          alt="Después: Perímetro Seguro"
          className="w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-sm text-white font-bold text-xs uppercase px-3 py-1.5 rounded shadow-md">
          Después: Protección Profesional Inmcers
        </div>
      </div>

      {/* Slider Line Divider and Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center z-30"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="h-10 w-10 rounded-full bg-accent text-secondary shadow-xl border-2 border-white flex items-center justify-center font-black hover:scale-110 active:scale-95 transition-transform duration-150">
          <i className="fa-solid fa-arrows-left-right text-sm"></i>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-md text-white font-semibold text-[11px] px-4 py-2 rounded-full hidden sm:flex items-center gap-2 z-20">
        <HelpCircle className="w-3.5 h-3.5 text-accent animate-pulse" />
        <span>Arrastra el control deslizante para comparar la seguridad perimetral</span>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
