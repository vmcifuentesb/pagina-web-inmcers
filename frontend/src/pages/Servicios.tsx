import React, { useEffect, useState, useRef } from 'react';
import { Package, Shield, FileText, CheckCircle, MapPin, Phone } from 'lucide-react';
import { SEOHead } from '../components/ui/SEOHead';

import { getServices } from '../lib/sanity';
import type { Service } from '../lib/sanity';
import gsap from 'gsap';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Servicios: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  // Hooks de Revelado al Scroll
  const [servicesHeaderRef, servicesHeaderVisible] = useScrollReveal();
  const [servicesRef, servicesVisible] = useScrollReveal();
  const [bannerRef, bannerVisible] = useScrollReveal();

  useEffect(() => {
    getServices().then(data => setServices(data));
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation (Immediate)
      gsap.from(titleRef.current, { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' });
      gsap.from(subtitleRef.current, { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Package':
        return <Package className="w-8 h-8 text-current" />;
      case 'Shield':
        return <Shield className="w-8 h-8 text-current" />;
      case 'FileText':
        return <FileText className="w-8 h-8 text-current" />;
      default:
        return <CheckCircle className="w-8 h-8 text-current" />;
    }
  };

  return (
    <div ref={containerRef} className="pt-20 bg-slate-50 text-slate-800 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.01] z-0"></div>
      <SEOHead
        title="Instalación de Malla Perimetral y Cerramientos"
        description="Industria de mallas y cercas en Guatemala. Ofrecemos servicios profesionales de instalación de malla ciclón, razor ribbon, privacinta y herrería a medida."
      />
      {/* Encabezado (Dark Theme Hero for High Impact) */}
      <section className="relative bg-secondary py-20 px-4 sm:px-6 lg:px-8 border-b border-secondary-light/30 text-center overflow-hidden">
        {/* Glows de fondo */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-radial-glow rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-radial-glow-accent rounded-full blur-3xl opacity-40"></div>

        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Servicios Profesionales</span>
          <h1 
            ref={titleRef}
            className="text-4xl font-title font-extrabold !text-white tracking-tight sm:text-5xl"
          >
            Servicios de Cerramientos e Instalación de Mallas
          </h1>
          <p 
            ref={subtitleRef}
            className="text-lg text-slate-300 font-body max-w-2xl mx-auto leading-relaxed"
          >
            Ofrecemos flexibilidad industrial y comercial adaptada a las especificaciones técnicas y al presupuesto de su proyecto de cerramiento en Guatemala.
          </p>
        </div>
      </section>

      {/* Grid de Servicios (Light Section for Fresh Look) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto">
          
          <div ref={servicesHeaderRef} className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-700 ease-out ${servicesHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Nuestra Oferta Comercial</span>
            <h2 className="text-3xl font-title font-extrabold text-slate-900 mt-3">
              ¿Cómo le apoyamos en su obra?
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>

          <div ref={servicesRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 services-grid">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`service-card bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-300 ease-out transform ${
                  servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } flex flex-col justify-between overflow-hidden group`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Cabecera Tarjeta */}
                <div className="p-8 space-y-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {getServiceIcon(service.icon)}
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-title font-extrabold text-xl text-slate-900 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-body text-xs text-slate-650 leading-relaxed">
                      {service.detailedDescription}
                    </p>
                  </div>
                </div>

                {/* Qué incluye */}
                <div className="px-8 pb-8 pt-4 border-t border-slate-100 bg-slate-50/55 flex-grow flex flex-col justify-between">
                  <div className="space-y-4 mb-8">
                    <h4 className="font-title font-bold text-xs text-primary uppercase tracking-widest">Especificaciones:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="font-body text-xs text-slate-700 leading-normal">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Botón */}
                  <a
                    href={`https://wa.me/50242120707?text=Hola%20Inmcers%20S.A,%20me%20interesa%20obtener%20asesoría%20sobre%20el%20servicio%20de:%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-body font-bold text-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
                  >
                    Consultar Servicio
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BANNER PREMIUM: LEVANTAMIENTO DE MEDIDAS GRATIS (Dark Container for high contrast call to action) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-transparent max-w-7xl mx-auto">
        <div ref={bannerRef} className={`measurement-banner bg-secondary text-white rounded-3xl p-8 sm:p-12 shadow-premium relative overflow-hidden border border-secondary-light/40 transition-all duration-700 ease-out transform ${
          bannerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Círculos de iluminación */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-accent/20 text-white border border-accent/30 uppercase tracking-widest">
                <MapPin className="w-3.5 h-3.5 mr-1.5 text-primary" />
                Servicio a Domicilio en Guatemala
              </span>
              <h2 className="text-2xl sm:text-3xl font-title font-extrabold !text-white">
                Levantamiento de Medidas y Visita Técnica
              </h2>
              <p className="font-body text-xs sm:text-sm !text-white/80 leading-relaxed max-w-2xl">
                ¿Tiene dudas sobre los metros exactos de su perímetro o la inclinación de su terreno? Nuestros técnicos supervisores viajan a su propiedad o industria para realizar la medición física y planificación del cercado (para áreas o departamentos lejanos aplicará cargo por viáticos de visita técnica).
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="https://wa.me/50242120707?text=Hola%20Inmcers%20S.A,%20quiero%20coordinar%20una%20visita%20técnica%20para%20medir%20mi%20terreno."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-body font-bold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                Coordinar Visita Técnica
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Servicios;
