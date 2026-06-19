import React, { useState } from 'react';
import { Shield, Sparkles, Palette, ShieldAlert } from 'lucide-react';

export const FenceSimulator: React.FC = () => {
  const [coat, setCoat] = useState<string>('galvanized'); 
  const [hasSlats, setHasSlats] = useState<boolean>(false);
  const [slatColor, setSlatColor] = useState<string>('Verde');
  const [hasRazor, setHasRazor] = useState<boolean>(false);

  const getMeshColor = () => {
    if (coat === 'green') return '#15803d'; 
    if (coat === 'blue') return '#1d4ed8'; 
    if (coat === 'gray') return '#4b5563'; 
    return '#94a3b8'; 
  };

  const getSlatStrokeColor = () => {
    if (slatColor === 'Verde') return '#166534';
    if (slatColor === 'Gris') return '#374151';
    if (slatColor === 'Azul') return '#1e40af';
    return '#090d16'; // Negro
  };

  return (
    <div className="space-y-6">
      {/* Dynamic Visual SVG Canvas */}
      <div className="relative w-full h-56 bg-slate-200 rounded-2xl border border-slate-350 flex items-center justify-center overflow-hidden shadow-inner">
        <svg className="w-full h-full max-w-[480px]" viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="150" fill="transparent" />
          <rect y="150" width="500" height="50" fill="#cbd5e1" />
          
          {/* Posts */}
          <line x1="40" y1="30" x2="40" y2="180" stroke="#64748b" strokeWidth="12" />
          <line x1="250" y1="30" x2="250" y2="180" stroke="#64748b" strokeWidth="8" />
          <line x1="460" y1="30" x2="460" y2="180" stroke="#64748b" strokeWidth="12" />
          <line x1="40" y1="40" x2="460" y2="40" stroke="#64748b" strokeWidth="6" />
          <line x1="40" y1="140" x2="460" y2="140" stroke="#64748b" strokeWidth="6" />

          {/* Privacinta Slats */}
          {hasSlats && (
            <g opacity="0.85">
              {Array.from({ length: 20 }).map((_, i) => {
                const xPos = 60 + i * 19.5;
                return (
                  <rect 
                    key={i}
                    x={xPos} 
                    y="42" 
                    width="11" 
                    height="96" 
                    fill={getSlatStrokeColor()} 
                  />
                );
              })}
            </g>
          )}

          {/* Cyclone Mesh wire weaving */}
          <g opacity="0.9">
            {Array.from({ length: 23 }).map((_, row) => {
              return Array.from({ length: 10 }).map((_, col) => {
                const x = 50 + row * 18;
                const y = 45 + col * 9.5;
                return (
                  <g key={`${row}-${col}`}>
                    <line x1={x} y1={y} x2={x+10} y2={y+10} stroke={getMeshColor()} strokeWidth="2" />
                    <line x1={x+10} y1={y} x2={x} y2={y+10} stroke={getMeshColor()} strokeWidth="2" />
                  </g>
                );
              });
            })}
          </g>

          {/* Razor Ribbon (Concertina) */}
          {hasRazor && (
            <g>
              {Array.from({ length: 12 }).map((_, i) => {
                const xCenter = 60 + i * 35;
                return (
                  <g key={i}>
                    <circle 
                      cx={xCenter} 
                      cy="28" 
                      r="16" 
                      fill="none" 
                      stroke="#cbd5e1" 
                      strokeWidth="2" 
                      strokeDasharray="4,2" 
                    />
                    <path d={`M${xCenter-14} 18 l4 4 M${xCenter+14} 38 l-4 -4 M${xCenter} 10 l2 4`} stroke="#ef4444" strokeWidth="2" />
                  </g>
                );
              })}
              <line x1="30" y1="28" x2="470" y2="28" stroke="#94a3b8" strokeWidth="2" />
            </g>
          )}

          {/* Caps for post tops */}
          <rect x="32" y="22" width="16" height="8" rx="2" fill="#475569" />
          <rect x="452" y="22" width="16" height="8" rx="2" fill="#475569" />
        </svg>

        {/* Selected Config Tag */}
        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur text-[10px] text-white px-2.5 py-1.5 rounded-lg font-extrabold uppercase tracking-wider shadow-md">
          Malla {coat === 'galvanized' ? 'HG' : `PVC ${coat.toUpperCase()}`} 
          {hasRazor ? ' + Concertina' : ''}
          {hasSlats ? ` + Cinta ${slatColor}` : ''}
        </div>
      </div>

      {/* Simulator Controls Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
        
        {/* Mesh coating selection */}
        <div className="space-y-2">
          <label className="block font-extrabold text-slate-700 flex items-center gap-1.5">
            <Palette className="w-4 h-4 text-primary" />
            <span>Acabado de Malla Ciclón:</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'galvanized', label: 'Galvanizado HG', color: 'bg-slate-350 border-slate-400' },
              { id: 'green', label: 'PVC Verde', color: 'bg-green-600 text-white' },
              { id: 'blue', label: 'PVC Azul', color: 'bg-blue-600 text-white' },
              { id: 'gray', label: 'PVC Gris', color: 'bg-gray-500 text-white' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setCoat(item.id)}
                className={`px-3 py-2 rounded-xl font-bold border-2 transition-all duration-200 cursor-pointer ${
                  coat === item.id 
                    ? 'border-primary bg-primary/10 text-primary font-black scale-102 shadow-sm' 
                    : 'border-slate-200 bg-white text-slate-600'
                }`}
              >
                <span className="flex items-center space-x-1.5">
                  <span className={`inline-block h-2.5 w-2.5 rounded-full ${item.color} border border-black/10`}></span>
                  <span>{item.label}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Razor Ribbon toggle */}
        <div className="space-y-2">
          <label className="block font-extrabold text-slate-700 flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-primary" />
            <span>Seguridad Superior:</span>
          </label>
          <button
            onClick={() => setHasRazor(!hasRazor)}
            className={`w-full p-2.5 rounded-xl font-bold border-2 text-center transition-all duration-250 cursor-pointer flex items-center justify-center gap-2 ${
              hasRazor 
                ? 'bg-red-500/10 border-red-500 text-red-600 font-extrabold shadow-sm' 
                : 'border-slate-200 bg-white text-slate-600'
            }`}
          >
            <ShieldAlert className={`w-4 h-4 ${hasRazor ? 'text-red-500 animate-pulse' : 'text-slate-400'}`} />
            {hasRazor ? 'Quitar Concertina Razor' : 'Agregar Concertina Razor'}
          </button>
        </div>

        {/* Privacinta Slats controls */}
        <div className="col-span-1 sm:col-span-2 space-y-3 pt-4 border-t border-slate-200/50">
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2.5 cursor-pointer select-none">
              <input 
                type="checkbox" 
                checked={hasSlats}
                onChange={(e) => setHasSlats(e.target.checked)}
                className="h-4.5 w-4.5 text-primary border-slate-350 focus:ring-primary rounded cursor-pointer"
              />
              <span className="font-extrabold text-slate-700 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Insertar Privacinta Decorativa (95% Privacidad)</span>
              </span>
            </label>
          </div>
          
          {hasSlats && (
            <div className="flex items-center space-x-2.5 pl-7 animate-fade-in">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Color de Cinta:</span>
              {['Verde', 'Gris', 'Azul', 'Negro'].map((color) => (
                <button
                  key={color}
                  onClick={() => setSlatColor(color)}
                  className={`px-3 py-1.5 rounded-xl font-bold border-2 text-xs transition-all duration-150 cursor-pointer ${
                    slatColor === color 
                      ? 'bg-primary border-primary text-white font-black shadow-md' 
                      : 'border-slate-200 bg-white text-slate-650'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default FenceSimulator;
