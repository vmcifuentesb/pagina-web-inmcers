import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Filter, Phone } from 'lucide-react';
import { img } from '../lib/images';
import gsap from 'gsap';

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
    title: 'Cerramiento de Máxima Seguridad - Embajada de Brasil',
    sector: 'Industrial',
    location: 'Ciudad de Guatemala',
    description: 'Instalación técnica de malla ciclón de alta resistencia reforzada con concertina superior tipo Razor Ribbon y accesorios pesados de sujeción para delegación diplomática.',
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
    title: 'Cerramiento Estructural - Embajada de Japón',
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
  },
  {
    id: '7',
    title: 'Refuerzo Superior con Concertina - Embajada de Brasil',
    sector: 'Industrial',
    location: 'Ciudad de Guatemala',
    description: 'Instalación de líneas superiores de Razor Ribbon de alta seguridad para blindaje y protección contra intrusos en muros perimetrales.',
    imageUrl: img('/images/fotos/Embajada de Brasil5.jpeg'),
  },
  {
    id: '8',
    title: 'Instalación de Postes Tensores - Embajada de Japón',
    sector: 'Industrial',
    location: 'Ciudad de Guatemala',
    description: 'Montaje y anclaje estructural de postes galvanizados reforzados de 2 pulgadas para soporte de malla ciclón de alto calibre.',
    imageUrl: img('/images/fotos/Embajada de japon (2).jpeg'),
  },
  {
    id: '9',
    title: 'Tendido Técnico de Malla - Embajada de Japón',
    sector: 'Industrial',
    location: 'Ciudad de Guatemala',
    description: 'Instalación y tensado de malla ciclón galvanizada por inmersión en caliente (HG) con soleras y accesorios de fijación industrial.',
    imageUrl: img('/images/fotos/Embajada de japon (3).jpeg'),
  },
  {
    id: '10',
    title: 'Cerramiento en Complejo Comercial',
    sector: 'Industrial',
    location: 'Escuintla',
    description: 'Instalación de sistema de seguridad perimetral continuo con malla ciclón, postes de soporte y concertina superior en predio comercial de gran extensión.',
    imageUrl: img('/images/fotos/Foto0050.jpg'),
  },
  {
    id: '11',
    title: 'Sistema de Seguridad Perimetral Razor Ribbon',
    sector: 'Industrial',
    location: 'Mixco, Guatemala',
    description: 'Instalación aérea de concertina Razor Ribbon galvanizada sobre muro perimetral para disuasión y protección física en zona industrial.',
    imageUrl: img('/images/fotos/IMG-20180711-WA0019.jpg'),
  },
  {
    id: '12',
    title: 'Cercado Deportivo en Complejo Recreativo',
    sector: 'Residencial',
    location: 'Sacatepéquez',
    description: 'Instalación de malla ciclón galvanizada con riel superior para cerramiento perimetral de canchas polideportivas y protección de áreas comunes.',
    imageUrl: img('/images/fotos/IMG-20210507-WA0023.jpg'),
  },
  {
    id: '13',
    title: 'Malla de PVC Verde para Seguridad de Finca',
    sector: 'Agrícola',
    location: 'Tecpán, Chimaltenango',
    description: 'Cercado de linderos en finca agrícola utilizando postes de concreto y malla ciclón con recubrimiento de PVC verde de alta durabilidad en climas fríos y húmedos.',
    imageUrl: img('/images/fotos/IMG-20220412-WA0002.jpg'),
  },
  {
    id: '14',
    title: 'Privacinta Verde en Cercado Residencial',
    sector: 'Residencial',
    location: 'Zona 16, Guatemala',
    description: 'Instalación de cinta plástica de privacidad verde en malla ciclón de patio trasero para bloqueo visual del 95% y mejor estética en condominio.',
    imageUrl: img('/images/fotos/IMG-20230510-WA0036.jpg'),
  },
  {
    id: '15',
    title: 'Cerramiento Agrícola con Alambre Espigado',
    sector: 'Agrícola',
    location: 'Chiquimulilla, Santa Rosa',
    description: 'Instalación de postes tensores y alambre de púas galvanizado calibre comercial para delimitación y control de ganado en finca rural.',
    imageUrl: img('/images/fotos/IMG-20230712-WA0023.jpg'),
  },
  {
    id: '16',
    title: 'Instalación Aérea de Concertina en Muro',
    sector: 'Industrial',
    location: 'Zona 12, Guatemala',
    description: 'Montaje de soportes metálicos y fijación de concertina de cuchillas en la parte superior de muro perimetral de bodega industrial.',
    imageUrl: img('/images/fotos/IMG-20230719-WA0003.jpg'),
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
    <div className="bg-slate-50 text-slate-800 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.01] z-0"></div>
      <Helmet>
        <title>Proyectos e Instalación de Mallas — Inmcers S.A</title>
        <meta 
          name="description" 
          content="Portafolio de proyectos de industria de mallas y cercas en Guatemala. Instalación de malla ciclón, razor ribbon y cerramientos residenciales, agrícolas e industriales." 
        />
      </Helmet>
      {/* Hero Section (Dark visual header) */}
      <section className="relative bg-secondary pt-36 pb-28 px-4 sm:px-6 lg:px-8 border-b border-[#152b47]/30 text-center overflow-hidden">
        {/* Glows de fondo */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-radial-glow rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-radial-glow-accent rounded-full blur-3xl opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold text-primary-light uppercase tracking-widest mb-3 block font-black">Portafolio Inmcers S.A.</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-title font-extrabold !text-white tracking-tight mb-4">
            Casos de Éxito
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-body max-w-2xl mx-auto leading-relaxed mb-6">
            Conozca la calidad de nuestro trabajo a través de instalaciones reales. Desde protección residencial hasta seguridad perimetral de alta exigencia industrial en toda Guatemala.
          </p>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-3 px-6 rounded-2xl shadow-lg">
            <span className="text-xs font-bold text-slate-200">Asesoría Técnica y Presupuesto de Obra:</span>
            <a 
              href="tel:+50258560315" 
              className="text-primary-light font-title font-black text-xs sm:text-sm hover:underline flex items-center gap-1.5 cursor-pointer"
            >
              <Phone className="w-4 h-4" /> Tel: 5856-0315
            </a>
            <span className="text-white/30 hidden sm:inline">|</span>
            <a 
              href="https://wa.me/50258560315?text=Hola,%20deseo%20solicitar%20asesoría%20sobre%20instalación%20de%20proyectos%20de%20malla." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-green-400 font-title font-black text-xs sm:text-sm hover:underline flex items-center gap-1.5 cursor-pointer"
            >
              <svg className="w-4 h-4 inline-block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.004 2c-5.522 0-10 4.478-10 10 0 1.77.46 3.48 1.34 5.01L2 22l5.13-1.34a9.922 9.922 0 0 0 4.87 1.28c5.523 0 10-4.478 10-10 0-5.522-4.477-10-10-10z" fill="#25D366" />
                <path d="M12.004 3.125c-4.9 0-8.875 3.975-8.875 8.875 0 1.57.41 3.09 1.19 4.45L3.75 19.95l3.58-.94a8.818 8.818 0 0 0 4.67 1.31c4.9 0 8.875-3.975 8.875-8.875S16.904 3.125 12.004 3.125z" fill="white" />
                <path d="M15.82 13.9c-.2-.1-1.2-.6-1.39-.67-.19-.07-.33-.1-.47.11-.14.21-.55.7-.68.84-.12.14-.25.16-.45.06-.2-.1-.85-.31-1.62-1a6.01 6.01 0 0 1-1.12-1.39c-.12-.2-.01-.3.09-.4.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.07-.14.03-.26-.02-.36s-.47-1.13-.64-1.54c-.17-.4-.36-.34-.49-.35h-.42c-.14 0-.38.05-.58.27-.2.22-.76.74-.76 1.8s.77 2.08.88 2.23c.11.15 1.52 2.32 3.68 3.25.52.22.92.36 1.24.46.52.16.99.14 1.36.08.41-.06 1.2-.49 1.37-.96.17-.47.17-.87.12-.96c-.05-.08-.19-.13-.39-.23z" fill="#25D366" />
              </svg> WhatsApp: 5856-0315
            </a>
          </div>
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
              <svg className="w-4 h-4 inline-block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.004 2c-5.522 0-10 4.478-10 10 0 1.77.46 3.48 1.34 5.01L2 22l5.13-1.34a9.922 9.922 0 0 0 4.87 1.28c5.523 0 10-4.478 10-10 0-5.522-4.477-10-10-10z" fill="white" />
                <path d="M12.004 3.125c-4.9 0-8.875 3.975-8.875 8.875 0 1.57.41 3.09 1.19 4.45L3.75 19.95l3.58-.94a8.818 8.818 0 0 0 4.67 1.31c4.9 0 8.875-3.975 8.875-8.875S16.904 3.125 12.004 3.125z" fill="#25D366" />
                <path d="M15.82 13.9c-.2-.1-1.2-.6-1.39-.67-.19-.07-.33-.1-.47.11-.14.21-.55.7-.68.84-.12.14-.25.16-.45.06-.2-.1-.85-.31-1.62-1a6.01 6.01 0 0 1-1.12-1.39c-.12-.2-.01-.3.09-.4.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.07-.14.03-.26-.02-.36s-.47-1.13-.64-1.54c-.17-.4-.36-.34-.49-.35h-.42c-.14 0-.38.05-.58.27-.2.22-.76.74-.76 1.8s.77 2.08.88 2.23c.11.15 1.52 2.32 3.68 3.25.52.22.92.36 1.24.46.52.16.99.14 1.36.08.41-.06 1.2-.49 1.37-.96.17-.47.17-.87.12-.96c-.05-.08-.19-.13-.39-.23z" fill="white" />
              </svg>
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
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
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
                    <span className="px-3 py-1 bg-secondary text-primary border border-[#152b47]/30 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
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
                    <p className="text-xs sm:text-sm font-body text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
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
