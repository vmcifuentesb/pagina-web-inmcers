import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Filter, ChevronRight } from 'lucide-react';
import { img } from '../lib/images';

type Sector = 'Todos' | 'Industrial' | 'Residencial' | 'Agrícola';

interface Project {
  id: string;
  title: string;
  sector: Sector;
  location: string;
  description: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Cercado Perimetral Comercial - Panadería Panadeli',
    sector: 'Industrial',
    location: 'Antigua Guatemala',
    description: 'Instalación de malla ciclón galvanizada (HG) con postes tensores de soporte reforzados para garantizar seguridad en áreas de carga y descarga de mercadería.',
    imageUrl: img('/images/fotos/AntiguaGuat-Panadeli6.jpeg'),
  },
  {
    id: '2',
    title: 'Cercado de Seguridad en Embajada de Brasil',
    sector: 'Industrial',
    location: 'Ciudad de Guatemala',
    description: 'Instalación técnica de malla ciclón reforzada con concertina superior tipo Razor Ribbon de alta seguridad para delegación diplomática.',
    imageUrl: img('/images/fotos/Embajada de Brasil.jpeg'),
  },
  {
    id: '3',
    title: 'Malla con Privacinta Residencial',
    sector: 'Residencial',
    location: 'Chimaltenango',
    description: 'Delimitación perimetral de jardines y áreas verdes utilizando malla ciclón con inserción de Privacinta verde de alta densidad para máxima discreción visual.',
    imageUrl: img('/images/fotos/Privacinta verde 8.jpg'),
  },
  {
    id: '4',
    title: 'Cerramiento Estructural en Embajada de Japón',
    sector: 'Industrial',
    location: 'Ciudad de Guatemala',
    description: 'Instalación de postes tensores pesados, marcos de tubería galvanizada y malla ciclón de alta resistencia para el perímetro exterior.',
    imageUrl: img('/images/fotos/Embajada de japon (1).jpeg'),
  },
  {
    id: '5',
    title: 'Cerramiento de Finca Rural',
    sector: 'Agrícola',
    location: 'Chimaltenango',
    description: 'Delimitación de linderos agrícolas y de cultivo utilizando postes de concreto estructurales y malla galvanizada pesada contra la intemperie.',
    imageUrl: img('/images/fotos/Chimaltenango10.jpeg'),
  },
  {
    id: '6',
    title: 'Residencia Campestre con Malla PVC',
    sector: 'Residencial',
    location: 'San Lucas Sacatepéquez',
    description: 'Cercado perimetral de lote residencial campestre utilizando malla ciclón con recubrimiento polimérico de PVC color verde para integración paisajística.',
    imageUrl: img('/images/fotos/Malla PVC (1).jpg'),
  }
];

export const Proyectos: React.FC = () => {
  const [filter, setFilter] = useState<Sector>('Todos');
  const galleryRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter(
    (p) => filter === 'Todos' || p.sector === filter
  );

  useEffect(() => {
    // Animación de entrada al cambiar el filtro
    if (galleryRef.current) {
      const cards = galleryRef.current.querySelectorAll('.project-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
        }
      );
    }
  }, [filter]);

  return (
    <div className="pt-20 bg-slate-50 text-slate-800 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.01] z-0"></div>
      <Helmet>
        <title>Proyectos e Instalación de Mallas — Inmcers S.A</title>
        <meta 
          name="description" 
          content="Portafolio de proyectos de industria de mallas y cercas en Guatemala. Instalación de malla ciclón, razor ribbon y cerramientos residenciales, agrícolas e industriales." 
        />
      </Helmet>
      {/* Hero Section (Dark visual header) */}
      <section className="relative bg-secondary py-20 px-4 sm:px-6 lg:px-8 border-b border-secondary-light/30 text-center overflow-hidden">
        {/* Glows de fondo */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-radial-glow rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-radial-glow-accent rounded-full blur-3xl opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Portafolio</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-title font-extrabold !text-white tracking-tight mb-6">
            Casos de Éxito
          </h1>
          <p className="text-lg text-slate-350 font-body max-w-2xl mx-auto leading-relaxed">
            Conozca la calidad de nuestro trabajo a través de instalaciones reales. Desde protección residencial hasta seguridad perimetral de alta exigencia industrial en toda Guatemala.
          </p>
        </div>
      </section>

      {/* Galería Section (Light background) */}
      <section className="relative z-10 py-16 md:py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Banner de Asesoría en Proyectos */}
          <div className="bg-white border border-primary/30 rounded-2xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div className="text-left space-y-1">
              <span className="text-[10px] font-black text-primary uppercase tracking-widest block">Línea de Proyectos</span>
              <h3 className="text-base font-extrabold text-slate-900">¿Desea coordinar la instalación de malla perimetral?</h3>
              <p className="text-xs text-slate-600">Comuníquese directo con nuestro departamento técnico para recibir asesoría formal inmediata.</p>
            </div>
            <a 
              href="https://wa.me/50258560315?text=Hola,%20deseo%20solicitar%20asesoría%20sobre%20instalación%20de%20proyectos%20de%20malla."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-title font-black text-xs shadow-md hover:scale-[1.02] transition-all shrink-0 cursor-pointer gap-2"
            >
              <i className="fa-brands fa-whatsapp text-sm"></i>
              <span>WhatsApp Proyectos: 5856 0315</span>
            </a>
          </div>
          
          {/* Filtros */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center text-slate-500 font-body text-sm font-semibold uppercase tracking-wider">
              <Filter className="w-4 h-4 mr-2 text-primary" />
              Filtrar por sector:
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {['Todos', 'Industrial', 'Residencial', 'Agrícola'].map((sector) => (
                <button
                  key={sector}
                  onClick={() => setFilter(sector as Sector)}
                  className={`cursor-pointer px-4 py-2 rounded-lg font-body font-semibold text-xs sm:text-sm transition-all duration-200 ${
                    filter === sector
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-slate-100 text-slate-650 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {sector}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Proyectos */}
          <div 
            ref={galleryRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="project-card cursor-pointer group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-primary/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col relative"
              >
                {/* Imagen con efecto hover */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-secondary text-primary border border-secondary-light/30 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                      {project.sector}
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6 flex-grow flex flex-col justify-between relative z-10">
                  <div>
                    <div className="text-xs font-body text-slate-400 font-semibold mb-2 uppercase tracking-wide flex items-center">
                      <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                      {project.location}
                    </div>
                    <h3 className="text-lg font-title font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-body text-slate-600 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Footer de la tarjeta */}
                  <div className="pt-4 border-t border-slate-100 flex items-center text-primary font-body font-bold text-sm group-hover:translate-x-1.5 transition-transform">
                    Ver detalles del proyecto
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-white rounded-xl border border-slate-200 max-w-xl mx-auto shadow-sm">
              <p className="text-slate-500 font-body text-sm">No se encontraron proyectos para este sector.</p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default Proyectos;
