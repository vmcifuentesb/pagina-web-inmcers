import React, { useState } from 'react';
import { MapPin, Truck, ShieldCheck, Clock } from 'lucide-react';

type RegionInfo = {
  id: string;
  name: string;
  departments: string[];
  deliveryTime: string;
  coverage: string;
  color: string;
};

const regions: RegionInfo[] = [
  {
    id: 'central',
    name: 'Región Central',
    departments: ['Guatemala', 'Sacatepéquez', 'Chimaltenango'],
    deliveryTime: '24 - 48 horas',
    coverage: 'Instalación y Suministro',
    color: 'bg-primary',
  },
  {
    id: 'sur',
    name: 'Región Sur',
    departments: ['Escuintla', 'Santa Rosa', 'Suchitepéquez', 'Retalhuleu'],
    deliveryTime: '2 - 3 días hábiles',
    coverage: 'Instalación y Suministro',
    color: 'bg-accent',
  },
  {
    id: 'occidente',
    name: 'Región Occidente',
    departments: ['Quetzaltenango', 'San Marcos', 'Huehuetenango', 'Sololá', 'Totonicapán', 'Quiché'],
    deliveryTime: '3 - 5 días hábiles',
    coverage: 'Instalación (Proyectos > 100m) y Suministro',
    color: 'bg-secondary',
  },
  {
    id: 'oriente',
    name: 'Región Oriente',
    departments: ['Zacapa', 'Chiquimula', 'Jalapa', 'Jutiapa', 'El Progreso'],
    deliveryTime: '3 - 5 días hábiles',
    coverage: 'Suministro y Asesoría',
    color: 'bg-[#8E9B90]', // Tono sutil para diferenciar
  },
  {
    id: 'norte',
    name: 'Región Norte',
    departments: ['Alta Verapaz', 'Baja Verapaz', 'Petén', 'Izabal'],
    deliveryTime: '4 - 7 días hábiles',
    coverage: 'Suministro',
    color: 'bg-[#D4A373]', // Tono sutil
  }
];

export const CoverageMap: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<RegionInfo | null>(regions[0]);

  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-secondary/5 border border-secondary/10 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Lado Izquierdo: Lista Interactiva de Regiones */}
        <div className="lg:col-span-5 bg-bgLight/30 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-secondary/10">
          <h3 className="font-title font-bold text-2xl text-secondary mb-2">
            Nuestra Cobertura
          </h3>
          <p className="font-body text-sm text-secondary/70 mb-6">
            Seleccione una región para ver los tiempos de entrega y servicios disponibles.
          </p>

          <div className="space-y-3">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setActiveRegion(region)}
                className={`w-full text-left px-5 py-4 rounded-xl font-body transition-all duration-300 flex items-center justify-between group ${
                  activeRegion?.id === region.id
                    ? 'bg-white shadow-md border-transparent ring-2 ring-primary/20'
                    : 'bg-transparent border border-secondary/10 hover:bg-white hover:shadow-sm'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-3 ${region.color}`}></div>
                  <span className={`font-semibold ${activeRegion?.id === region.id ? 'text-primary' : 'text-secondary group-hover:text-primary'}`}>
                    {region.name}
                  </span>
                </div>
                <MapPin className={`w-4 h-4 ${activeRegion?.id === region.id ? 'text-primary' : 'text-secondary/40'}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Lado Derecho: Detalles de la Región Activa */}
        <div className="lg:col-span-7 p-6 sm:p-10 relative overflow-hidden flex flex-col justify-center min-h-[400px]">
          {/* Elemento de diseño de fondo abstracto */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full border-[30px] border-bgLight/50 opacity-50 z-0"></div>
          <div className="absolute top-10 right-10 w-32 h-32 rounded-full border-[15px] border-primary/5 opacity-50 z-0"></div>
          
          {activeRegion && (
            <div className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500" key={activeRegion.id}>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                Información Logística
              </div>
              <h4 className="text-3xl font-title font-extrabold text-secondary mb-6">
                {activeRegion.name}
              </h4>
              
              <div className="space-y-6">
                {/* Departamentos */}
                <div>
                  <h5 className="font-bold text-sm text-secondary/70 uppercase tracking-wider mb-3">
                    Departamentos Atendidos
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {activeRegion.departments.map((dep) => (
                      <span key={dep} className="px-3 py-1.5 bg-secondary/5 text-secondary rounded-lg font-body text-sm">
                        {dep}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-secondary/10">
                  {/* Tiempo de Entrega */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mr-4">
                      <Truck className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-secondary mb-1">Tiempo Estimado</h5>
                      <p className="font-body text-secondary/70 text-sm flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {activeRegion.deliveryTime}
                      </p>
                    </div>
                  </div>

                  {/* Nivel de Servicio */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-secondary mb-1">Nivel de Servicio</h5>
                      <p className="font-body text-secondary/70 text-sm">
                        {activeRegion.coverage}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default CoverageMap;
