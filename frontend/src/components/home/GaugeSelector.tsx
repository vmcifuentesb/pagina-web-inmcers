import React, { useState } from 'react';
import { Eye } from 'lucide-react';

interface GaugeConfig {
  name: string;
  thickness: string;
  strength: string;
  useCase: string;
  stroke: number;
}

export const GaugeSelector: React.FC = () => {
  const [selectedGauge, setSelectedGauge] = useState<string>("Calibre 9");

  const gauges: GaugeConfig[] = [
    { 
      name: "Calibre 9", 
      thickness: "3.76 mm", 
      strength: "Ultra Pesada (Máxima)", 
      useCase: "Cercados industriales, prisiones, bodegas de alto valor y predios de alta seguridad estatal.", 
      stroke: 10 
    },
    { 
      name: "Calibre 11", 
      thickness: "3.05 mm", 
      strength: "Estándar Reforzada", 
      useCase: "Cercado de condominios residenciales, colegios, canchas deportivas y perímetros comerciales.", 
      stroke: 7 
    },
    { 
      name: "Calibre 12.5", 
      thickness: "2.51 mm", 
      strength: "Económica / Agrícola", 
      useCase: "Divisiones internas en parcelas, delimitaciones de fincas agrícolas y residencias con bajo nivel de riesgo.", 
      stroke: 4 
    }
  ];

  const current = gauges.find(g => g.name === selectedGauge) || gauges[0];

  return (
    <div className="space-y-5 pt-2">
      <div className="flex gap-2">
        {gauges.map(g => (
          <button
            key={g.name}
            onClick={() => setSelectedGauge(g.name)}
            className={`w-full p-2.5 rounded-xl text-xs font-bold border-2 transition-all duration-200 ${
              selectedGauge === g.name 
                ? 'bg-primary border-primary text-white shadow-md' 
                : 'bg-slate-50 border-slate-200 text-slate-650 hover:border-primary/50'
            }`}
          >
            {g.name}
          </button>
        ))}
      </div>

      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-center space-x-6 shadow-inner">
        {/* Visual SVG representing wire thickness */}
        <div className="flex flex-col items-center justify-center bg-white h-24 w-24 rounded-2xl border border-slate-200 shrink-0 shadow-sm">
          <svg className="w-16 h-16" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3,3" />
            <line x1="50" y1="15" x2="50" y2="85" stroke="#475569" strokeWidth={current.stroke} strokeLinecap="round" />
            <circle cx="50" cy="50" r="12" fill="#0284c7" />
          </svg>
          <span className="text-[8px] font-bold text-slate-400 uppercase mt-1">Grosor Alambre</span>
        </div>

        <div className="space-y-3 text-xs flex-grow">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="block text-[10px] text-slate-400 uppercase font-black tracking-wider">Espesor Real:</span>
              <span className="font-extrabold text-slate-850">{current.thickness}</span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-400 uppercase font-black tracking-wider">Fuerza Estructural:</span>
              <span className="font-extrabold text-slate-850">{current.strength}</span>
            </div>
          </div>
          <div className="pt-2 border-t border-slate-200/50">
            <span className="block text-[10px] text-slate-400 uppercase font-black tracking-wider mb-0.5">Uso Recomendado:</span>
            <p className="text-xs text-slate-600 leading-normal flex items-start gap-1">
              <Eye className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span>{current.useCase}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaugeSelector;
