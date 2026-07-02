import React, { useEffect, useRef, useState } from 'react';
import { Shield, Users, Globe, HardHat } from 'lucide-react';
import { SEOHead } from '../components/ui/SEOHead';

import { CoverageMap } from '../components/CoverageMap';
import gsap from 'gsap';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { img } from '../lib/images';

export const Nosotros: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [activeMilestone, setActiveMilestone] = useState(0);

  // Hooks de Revelado al Scroll
  const [identityRef, identityVisible] = useScrollReveal();
  const [timelineRef, timelineVisible] = useScrollReveal();
  const [capacityRef, capacityVisible] = useScrollReveal();
  const [coverageRef, coverageVisible] = useScrollReveal();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(titleRef.current, { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' });
      gsap.from(subtitleRef.current, { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: 'Equipo Experto y Calificado',
      desc: 'Contamos con un equipo de soldadores, herreros, operadores, instaladores, personal especializado en proyectos, asesores de ventas que brindan asesoría gratuita y supervisores comprometidos con la calidad.'
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: 'Garantía de Nuestro Trabajo',
      desc: 'Brindamos garantía en cada uno de los proyectos realizados, asegurando resistencia y un servicio confiable.'
    },
    {
      icon: <HardHat className="w-6 h-6 text-primary" />,
      title: 'Cumplimiento de Estándares',
      desc: 'Usamos alambre galvanizado certificado con gramaje pesado de zinc y recubrimientos de PVC resistentes a la corrosión.'
    }
  ];

  const timelineMilestones = [
    {
      year: '1994',
      title: 'Fundación e Inicios',
      desc: 'Iniciamos operaciones en Guatemala, especializándonos desde el primer día en la fabricación de malla ciclón con estándares de alta calidad para los sectores residencial, comercial e industrial.'
    },
    {
      year: '2003',
      title: 'Un nuevo espacio para seguir creciendo',
      desc: 'Ampliamos nuestras instalaciones para aumentar nuestra capacidad de producción y almacenamiento, reafirmando nuestro compromiso con la calidad, la disponibilidad y el servicio.'
    },
    {
      year: '2005',
      title: 'Ampliación de planta',
      desc: 'Adquirimos tejedoras automáticas de última generación para aumentar la velocidad de producción y ofrecer malla ciclón PVC y galvanizada a medida.'
    },
    {
      year: '2010',
      title: 'Expansión para servir mejor',
      desc: 'Continuamos creciendo con la ampliación de nuestro equipo de trabajo y del área de taller, fortaleciendo nuestra infraestructura para ofrecer un servicio más eficiente y atender las necesidades de nuestros clientes con mayor capacidad.'
    },
    {
      year: '2024',
      title: 'Automatización para seguir creciendo',
      desc: 'Dimos inicio al proceso de automatización de nuestra fabricación de malla galvanizada, modernizando nuestros procesos para aumentar la capacidad y velocidad de producción, manteniendo los más altos estándares de calidad y reforzando nuestro compromiso con el cumplimiento oportuno de cada entrega.'
    },
    {
      year: '2026',
      title: 'Mirando hacia el futuro',
      desc: 'Hoy seguimos creciendo con una visión de mejora continua, invirtiendo en tecnología, optimizando nuestros procesos y fortaleciendo a nuestro equipo humano para ofrecer productos de la más alta calidad, cumplir con los tiempos de entrega y brindar un servicio que inspire confianza y satisfacción en cada cliente.'
    }
  ];

  return (
    <div ref={containerRef} className="bg-slate-50 text-slate-800 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.01] z-0"></div>
      <SEOHead
        title="Más de 30 Años de Experiencia en Cerramientos Perimetrales"
        description="Conozca a Inmcers S.A, empresa líder en la fabricación de malla ciclón y cerramientos perimetrales en Guatemala. Más de 30 años de experiencia, garantía escrita y cobertura nacional."
      />
      
      {/* Encabezado Principal (Dark style for premium identity transition) */}
      <section className="relative bg-secondary pt-36 pb-28 px-4 sm:px-6 lg:px-8 border-b border-[#152b47]/30 overflow-hidden z-10 text-center">
        {/* Luces radiales de fondo */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-radial-glow rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-radial-glow-accent rounded-full blur-3xl opacity-40"></div>
        
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-bold text-primary-light uppercase tracking-widest block font-black">Nuestra Trayectoria</span>
          <h1 
            ref={titleRef} 
            className="text-4xl font-title font-extrabold !text-white tracking-tight sm:text-5xl"
          >
            Sobre <span className="bg-gradient-to-r from-primary-light to-emerald-400 bg-clip-text text-transparent font-black">Inmcers S.A</span>
          </h1>
          <p 
            ref={subtitleRef} 
            className="text-base sm:text-lg text-slate-300 font-body max-w-2xl mx-auto leading-relaxed"
          >
            Con <strong className="text-white font-extrabold">más de 30 años de experiencia</strong> en el mercado, somos una empresa líder especializada en la <strong className="text-white font-extrabold">fabricación de malla ciclón</strong>, comercialización de materiales de alta calidad y la ejecución de <strong className="text-white font-extrabold">cerramientos perimetrales y sistemas de seguridad</strong> a nivel nacional.
          </p>
        </div>
      </section>

      {/* Identidad y Lema de Servicio (Light Section) */}
      <section ref={identityRef} className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-transparent">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className={`space-y-6 transition-all duration-700 ease-out transform ${identityVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-title font-extrabold text-slate-900 leading-tight">
              Control total en la fabricación de malla ciclón
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full"></div>
            
            <p className="font-body text-slate-600 text-base leading-relaxed">
              En <strong>Inmcers S.A</strong> entendemos que la seguridad perimetral no admite fallas. Por ello, controlamos minuciosamente cada etapa de la producción en nuestra planta. Tejemos nuestra propia <strong>malla ciclón galvanizada y PVC</strong> en múltiples aberturas y calibres, adaptándola perfectamente a cada proyecto.
            </p>
            <p className="font-body text-slate-600 text-base leading-relaxed">
              Ofrecemos soluciones avanzadas e <strong>instalación de malla</strong> diseñadas a la medida para sectores clave: <strong>Residencial, Comercial e Industrial</strong>. Brindamos asesoría experta y entregas puntuales en todo tipo de terrenos, lo que nos ha permitido mantener la preferencia del mercado durante más de 20 años en los 22 departamentos de Guatemala.
            </p>

            <div className="border-l-4 border-primary bg-white p-6 rounded-r-2xl border-t border-b border-r border-slate-200 shadow-sm">
              <p className="font-body italic text-slate-800 text-sm leading-relaxed">
                "Nuestra prioridad es la entrega oportuna, la asesoría experta y un cerramiento firme con durabilidad certificada por escrito."
              </p>
              <p className="font-title font-bold text-xs text-primary mt-3 text-right uppercase tracking-wider">— Filosofía Corporativa</p>
            </div>
          </div>

          <div className={`relative flex justify-center transition-all duration-700 ease-out transform ${identityVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            <div className="relative bg-white p-4 rounded-3xl max-w-lg w-full shadow-md border border-slate-200/80">
              <img
                src={img("/images/nosotros_fabrica.jpg")}
                alt="Maquinaria y Proceso de fabricación Inmcers S.A"
                className="rounded-2xl object-cover w-full h-[380px] shadow-sm"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Línea de Tiempo (Milestones Timeline) - (Light Gray Section) */}
      <section ref={timelineRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/50 border-t border-b border-slate-200/60 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ease-out ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Nuestra Historia</span>
            <h2 className="text-3xl font-title font-extrabold text-slate-900 mt-3">Hitos del Crecimiento</h2>
            <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Selector de Años Interactivo */}
          <div className={`relative max-w-3xl mx-auto mb-10 overflow-x-auto scrollbar-none flex justify-start md:justify-center gap-3 px-4 py-2 transition-all duration-700 ease-out ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {timelineMilestones.map((m, idx) => (
              <button
                key={m.year}
                onClick={() => setActiveMilestone(idx)}
                className={`cursor-pointer px-5 py-3 rounded-2xl font-title font-extrabold text-sm sm:text-base border-2 transition-all shrink-0 ${
                  activeMilestone === idx
                    ? 'bg-primary border-primary text-white shadow-md scale-105'
                    : 'bg-white border-slate-200 text-slate-500 hover:border-primary/50 hover:text-slate-900'
                }`}
              >
                {m.year}
              </button>
            ))}
          </div>

          {/* Hito Activo - Detalle */}
          <div className={`relative max-w-2xl mx-auto transition-all duration-500 ease-out transform ${timelineVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md relative overflow-hidden text-center min-h-[220px] flex flex-col justify-center items-center">
              {/* Accent de fondo */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
              
              <span className="text-5xl sm:text-6xl font-title font-black text-primary/10 tracking-widest block mb-1">
                {timelineMilestones[activeMilestone].year}
              </span>
              <h3 className="font-title font-extrabold text-xl text-slate-900 mb-4">
                {timelineMilestones[activeMilestone].title}
              </h3>
              <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed max-w-md">
                {timelineMilestones[activeMilestone].desc}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Capacidad Técnica y Operativa (Light Section) */}
      <section ref={capacityRef} className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-transparent">
        <div className="max-w-7xl mx-auto">
          
          <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ease-out ${capacityVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Valores de Operación</span>
            <h2 className="text-3xl font-title font-extrabold text-slate-900 mt-3">
              Capacidad Técnica e Industrial
            </h2>
            <p className="font-body text-slate-600 text-sm mt-3 leading-relaxed">
              Disponemos de infraestructura física, transporte y personal calificado para garantizar el éxito, seguridad y cumplimiento en cada obra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 values-grid">
            {values.map((val, idx) => (
              <div 
                key={idx} 
                className={`bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-primary/40 transition-all duration-700 ease-out transform ${
                  capacityVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } value-card relative overflow-hidden group`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center relative z-10 border border-primary/20">
                  {val.icon}
                </div>
                <h3 className="font-title font-bold text-lg text-slate-900 leading-tight relative z-10">{val.title}</h3>
                <p className="font-body text-xs text-slate-600 leading-relaxed relative z-10">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa de Cobertura Geográfica (Light Gray Section) */}
      <section ref={coverageRef} className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200 relative z-10 bg-slate-100/50">
        <div className="max-w-7xl mx-auto">
          
          <div className={`text-center max-w-3xl mx-auto mb-16 space-y-4 transition-all duration-700 ease-out ${coverageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-bold bg-primary/10 border border-primary/20 text-primary uppercase tracking-widest">
              <Globe className="w-3.5 h-3.5 mr-2 text-primary" />
              Presencia en toda Guatemala
            </span>
            <h2 className="text-3xl font-title font-extrabold text-slate-900 sm:text-4xl">
              Logística y Envío Nacional
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="font-body text-slate-600 text-base leading-relaxed">
              Llegamos a cualquier punto de los 22 departamentos de la República. Contamos con transporte propio de fábrica para despachar mallas y estructuras hacia el <strong>Occidente, Región Sur y Suroccidente, Área Central, Norte y Costa Oriente</strong>, asegurando entregas eficientes sin importar la ubicación de su proyecto.
            </p>
          </div>

          <div className={`mt-10 transition-all duration-750 ease-out transform ${coverageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <CoverageMap />
          </div>

        </div>
      </section>

    </div>
  );
};

export default Nosotros;
