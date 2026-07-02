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
  const [selectedGauge, setSelectedGauge] = useState<string>("Calibre 12");

  const gauges: GaugeConfig[] = [
    { 
      name: "Calibre 13.5", 
      thickness: "2.03 mm", 
      strength: "Ligera / Residencial", 
      useCase: "Cercados residenciales, áreas escolares y cerramientos domésticos que requieren economía y funcionalidad.", 
      stroke: 3.5 
    },
    { 
      name: "Calibre 13", 
      thickness: "2.18 mm", 
      strength: "Económica", 
      useCase: "Divisiones internas de parcelas, delimitaciones domésticas y proyectos de cercado urbano.", 
      stroke: 4.5 
    },
    { 
      name: "Calibre 12", 
      thickness: "2.68 mm", 
      strength: "Estándar / Comercial", 
      useCase: "Canchas deportivas, perímetros comerciales, colegios e instalaciones de mediana seguridad.", 
      stroke: 6.5 
    },
    { 
      name: "Calibre 10", 
      thickness: "3.40 mm", 
      strength: "Pesada / Industrial", 
      useCase: "Cercados industriales, bodegas de almacenamiento, zonas aduaneras y predios de alta seguridad.", 
      stroke: 9.0 
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
                : 'bg-white border-slate-200 text-slate-700 hover:border-primary/50'
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
              <span className="block text-[11px] text-slate-400 uppercase font-black tracking-wider">Espesor Real:</span>
              <span className="font-extrabold text-slate-800">{current.thickness}</span>
            </div>
            <div>
              <span className="block text-[11px] text-slate-400 uppercase font-black tracking-wider">Fuerza Estructural:</span>
              <span className="font-extrabold text-slate-800">{current.strength}</span>
            </div>
          </div>
          <div className="pt-2 border-t border-slate-200/50">
            <span className="block text-[11px] text-slate-400 uppercase font-black tracking-wider mb-0.5">Uso Recomendado:</span>
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
