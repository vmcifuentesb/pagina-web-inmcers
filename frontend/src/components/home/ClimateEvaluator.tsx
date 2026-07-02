import React, { useState } from 'react';
import { CloudRain, Compass, ShieldCheck } from 'lucide-react';

interface DeptConfig {
  name: string;
  zone: string;
  moisture: string;
  recommended: string;
  desc: string;
}

export const ClimateEvaluator: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>("Guatemala");

  const depts: DeptConfig[] = [
    { 
      name: "Guatemala", 
      zone: "Templada", 
      moisture: "Moderada", 
      recommended: "Malla Galvanizada HG (Acabado clásico de alta resistencia estructural)", 
      desc: "Humedad promedio. El galvanizado estándar por inmersión ofrece décadas de vida útil sin óxido en el altiplano central." 
    },
    { 
      name: "Escuintla", 
      zone: "Costera / Salina", 
      moisture: "Muy Alta", 
      recommended: "Malla Recubierta en PVC Verde", 
      desc: "La cercanía al mar y la alta temperatura aceleran la oxidación. El recubrimiento de PVC Verde es ideal para blindar el acero contra la brisa salina." 
    },
    { 
      name: "Izabal", 
      zone: "Cálida / Marítima", 
      moisture: "Extrema", 
      recommended: "Malla Recubierta en PVC Verde + Razor Inoxidable", 
      desc: "Clima tropical lluvioso constante con sales marinas. La combinación de malla recubierta de PVC Verde y concertina de acero inoxidable es el estándar industrial definitivo." 
    },
    { 
      name: "Quetzaltenango", 
      zone: "Fría / Montaña", 
      moisture: "Baja a Moderada", 
      recommended: "Malla Galvanizada HG (opcional con Privacinta Gris)", 
      desc: "Baja salinidad ambiental. La Malla Galvanizada HG tiene un comportamiento excelente. Se puede entrelazar Privacinta Gris para mejorar la privacidad." 
    },
    { 
      name: "Petén", 
      zone: "Tropical Húmeda", 
      moisture: "Alta", 
      recommended: "Malla Recubierta en PVC Verde", 
      desc: "Alta humedad selvática. La malla verde de PVC se mimetiza con la vegetación boscosa nativa y previene eficazmente la corrosión biológica y moho." 
    }
  ];

  const current = depts.find(d => d.name === selectedDept) || depts[0];

  return (
    <div className="space-y-5 pt-2">
      <div className="flex flex-wrap gap-2">
        {depts.map(d => (
          <button
            key={d.name}
            onClick={() => setSelectedDept(d.name)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold border-2 transition-all duration-250 cursor-pointer ${
              selectedDept === d.name 
                ? 'bg-primary border-primary text-white shadow-md font-black' 
                : 'bg-secondary border-secondary-light/50 text-slate-350 hover:border-primary/50 hover:bg-secondary-hover/50'
            }`}
          >
            {d.name}
          </button>
        ))}
      </div>
 
      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-4 shadow-inner text-left">
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <span className="block text-xs text-slate-500 uppercase font-black tracking-wider mb-1">Zona Climática:</span>
            <span className="font-extrabold text-slate-800 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-primary" />
              {current.zone}
            </span>
          </div>
          <div>
            <span className="block text-xs text-slate-500 uppercase font-black tracking-wider mb-1">Nivel de Humedad:</span>
            <span className="font-extrabold text-slate-800 flex items-center gap-1.5">
              <CloudRain className="w-3.5 h-3.5 text-primary animate-bounce" />
              {current.moisture}
            </span>
          </div>
        </div>
 
        <div className="pt-4 border-t border-slate-200/50 space-y-1.5">
          <span className="block text-xs text-accent uppercase font-black tracking-wider flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            Especificación Recomendada:
          </span>
          <span className="text-xs font-black text-secondary block">{current.recommended}</span>
          <p className="text-xs text-slate-500 leading-relaxed">{current.desc}</p>
        </div>
      </div>

      {/* Fuente de la información de clima y corrosión */}
      <p className="text-[10px] text-slate-400 font-medium italic mt-2 text-center leading-normal">
        * Fuente de datos: Basado en las clasificaciones climáticas del INSIVUMEH y las tasas de corrosión de recubrimientos de zinc (Normas ISO 9223) para regiones de Guatemala.
      </p>
    </div>
  );
};

export default ClimateEvaluator;
