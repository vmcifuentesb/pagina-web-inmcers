import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Shield, Award, Clock, ChevronLeft, ChevronRight, MessageSquare, Phone, MapPin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import BeforeAfterSlider from '../components/home/BeforeAfterSlider';
import ClimateEvaluator from '../components/home/ClimateEvaluator';
import GaugeSelector from '../components/home/GaugeSelector';
import FenceSimulator from '../components/home/FenceSimulator';
import CotizadorRapido from '../components/ui/CotizadorRapido';
import FAQAccordion from '../components/ui/FAQAccordion';
import { productos } from '../data/productos';
import { img } from '../lib/images';

gsap.registerPlugin(ScrollTrigger);

const heroSlides = [
  {
    title: "30 Años Fabricando Calidad Perimetral",
    subtitle: "Suministro e instalación de malla ciclón galvanizada (HG) y recubierta en PVC con puntualidad y altos estándares de durabilidad.",
    badge: "Orgullosamente Guatemaltecos",
    img: img("/images/fotos/_MG_3133.JPG"),
    fallback: "https://images.unsplash.com/photo-1508873696983-2df519f0397e?q=80&w=1200"
  },
  {
    title: "Sistemas de Alta Seguridad Razor Ribbon",
    subtitle: "Protección física de alto impacto con concertinas de cuchilla galvanizada o acero inoxidable. Resistencia y disuasión definitiva.",
    badge: "Seguridad Perimetral Certificada",
    img: img("/images/fotos/Alambre espigado (1).jpg"),
    fallback: "https://images.unsplash.com/photo-1558521958-f121d8570296?q=80&w=1200"
  },
  {
    title: "Alambre Espigado y Privacinta",
    subtitle: "Fabricamos soluciones integrales de cercado. Privacinta de alta densidad para máxima discreción y elegancia en tu propiedad.",
    badge: "Estética y Funcionalidad",
    img: img("/images/fotos/Privacinta verde2.JPG"),
    fallback: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200"
  }
];

const portfolioProjects = [
  {
    title: "Complejo Logístico Industrial",
    category: "Industrial",
    desc: "Instalación de cercado industrial de alta resistencia con Malla HG (galvanizada) en cuadro de 2\", calibre 12 y una altura de 2.0 metros, soportada por tubería galvanizada estructural y reforzada con sistemas de Razor Ribbon superior y líneas de alambre de púas. Esta solución integral ofrece la máxima seguridad física para perímetros comerciales, logísticos e industriales, garantizando una protección impenetrable y de larga durabilidad contra condiciones climáticas extremas.",
    image: img("/images/fotos/Cuadro de 2 calibre 12 de 2 alto.jpg"),
    fallback: "https://images.unsplash.com/photo-1508873696983-2df519f0397e?q=80&w=600"
  },
  {
    title: "Canchas Deportivas y Recreativas",
    category: "Deportivo",
    desc: "Instalación de malla de PVC Verde Bosque de 3 metros, combinando perfectamente con el entorno ecológico y postes reforzados de alta durabilidad. Descripción de la imagen: Malla hg (galvanizada) cuadro de 2 calibre 12 de 2 alto con tubo galvanizado de 1½” razor ribbon y alambre espigado.",
    image: img("/images/fotos/cuadro de 2, calibre 13 de 2 mts.jpg"),
    fallback: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600"
  },
  {
    title: "Protección Residencial con Privacinta",
    category: "Residencial",
    desc: "Malla Hg, cuadro de 2, calibre 13 de 2 mts alto, con privacinta verde con tubo galvanizado de 1½”.",
    image: img("/images/fotos/IMG-20220512-WA0006.jpg"),
    fallback: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600"
  }
];

export const Home: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [portfolioIndex, setPortfolioIndex] = useState(0);

  // Hooks de Revelado al Scroll
  const [statsRef, statsVisible] = useScrollReveal();
  const [interactivesRef, interactivesVisible] = useScrollReveal();
  const [valuesRef, valuesVisible] = useScrollReveal();
  const [simulatorRef, simulatorVisible] = useScrollReveal();
  const [productsRef, productsVisible] = useScrollReveal();
  const [portfolioRef, portfolioVisible] = useScrollReveal();
  const [faqRef, faqVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  // Slide transition interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  const handlePrevProject = () => {
    setPortfolioIndex((prev) => (prev === 0 ? portfolioProjects.length - 1 : prev - 1));
  };

  const handleNextProject = () => {
    setPortfolioIndex((prev) => (prev === portfolioProjects.length - 1 ? 0 : prev + 1));
  };

  const triggerWhatsApp = (message = "Hola Inmcers S.A, necesito consultarle a un asesor de ventas sobre un cercado perimetral.") => {
    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/50242120707?text=${encodedMsg}`, '_blank');
  };

  // Bento featured products (show first 3)
  const featuredProducts = productos.slice(0, 3);

  return (
    <div ref={pageRef} className="pt-24 overflow-hidden bg-slate-50 text-slate-800 bg-noise">
      <Helmet>
        <title>Inmcers S.A — Industria de mallas y cercas en Guatemala</title>
        <meta 
          name="description" 
          content="Industria de mallas y cercas en Guatemala. Fabricación, suministro e instalación de malla ciclón, razor ribbon, privacinta y tubería galvanizada. Más de 30 años de experiencia." 
        />
      </Helmet>
      
      {/* 1. SECCIÓN HERO DE CONTACTO DIRECTO Y BIENVENIDA (Tema Claro y Amigable) */}
      <section className="relative py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-100 to-white border-b border-slate-200 overflow-hidden">
        {/* Patrón de Malla de fondo sutil */}
        <div className="absolute inset-0 bg-mesh-pattern opacity-[0.03] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Contenido Izquierdo: Información de Contacto Inmediato y Legible */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-black text-xs uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span>Atención Directa al Altiplano y Todo el País</span>
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5.5xl font-black tracking-tight leading-tight text-slate-900">
              Fabricación de Mallas <span className="text-primary font-extrabold">INMCERS S.A.</span>
            </h1>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-medium">
              Somos fabricantes directos. Le asesoramos gratis en su proyecto de cercado para fincas, residencias y empresas. Contáctenos inmediatamente a través de nuestros canales oficiales:
            </p>

            {/* Imagen de la Malla (Solo en Móviles, justo después de la descripción y antes del contacto/botones) */}
            <div className="block lg:hidden my-6 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl blur-xl opacity-50"></div>
              <div className="relative border border-slate-200 rounded-2xl overflow-hidden shadow-lg bg-white p-2">
                <img 
                  src={img("/images/fotos/Malla galvanizada (1).jpg")}
                  alt="Malla Galvanizada INMCERS" 
                  className="w-full h-64 sm:h-80 object-cover rounded-xl"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 text-white p-3 rounded-lg border border-slate-800/50 text-left">
                  <span className="text-[9px] font-bold text-primary uppercase tracking-widest block font-black">Fabricación en Planta</span>
                  <h4 className="font-title font-black text-xs">Malla Galvanizada de Alta Resistencia</h4>
                </div>
              </div>
            </div>

            {/* Panel de Contacto Rápido y Visible */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* PBX Teléfono */}
              <a 
                href="tel:+50222182800"
                className="flex items-center space-x-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-200 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-all">
                  <Phone className="w-5 h-5 text-slate-700 group-hover:text-primary" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Llamada Directa</span>
                  <span className="font-title font-black text-slate-900 group-hover:text-primary transition-colors">PBX: 2218-2800</span>
                </div>
              </a>

              {/* WhatsApp Ventas */}
              <button 
                onClick={() => triggerWhatsApp("Hola, me comunico desde la página web de Inmcers y deseo solicitar una cotización de ventas.")}
                className="flex items-center space-x-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-green-500/50 hover:shadow-md transition-all duration-200 group text-left cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200 group-hover:bg-green-50 group-hover:text-green-600 group-hover:border-green-200 transition-all">
                  <i className="fa-brands fa-whatsapp text-xl text-slate-700 group-hover:text-green-500"></i>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">WhatsApp Directo</span>
                  <span className="font-title font-black text-slate-900 group-hover:text-green-600 transition-colors">Ventas: 4212-0707</span>
                </div>
              </button>

              {/* WhatsApp Proyectos */}
              <button 
                onClick={() => triggerWhatsApp("Hola, me comunico desde la página web de Inmcers y deseo solicitar asesoría técnica para un proyecto.")}
                className="flex items-center space-x-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-green-500/50 hover:shadow-md transition-all duration-200 group text-left cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200 group-hover:bg-green-50 group-hover:text-green-600 group-hover:border-green-200 transition-all">
                  <i className="fa-brands fa-whatsapp text-xl text-slate-700 group-hover:text-green-500"></i>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Proyectos Especiales</span>
                  <span className="font-title font-black text-slate-900 group-hover:text-green-600 transition-colors">Proyectos: 5856-0315</span>
                </div>
              </button>

              {/* Ubicación Física */}
              <div className="flex items-center space-x-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
                  <MapPin className="w-5 h-5 text-slate-700" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Dirección y Planta</span>
                  <span className="font-title font-black text-slate-800 text-xs line-clamp-1" title="Colonia Guajitos, Zona 21, Guatemala">Zona 21, Ciudad de Guatemala</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link 
                to="/productos"
                className="bg-primary hover:bg-primary-hover text-white font-black px-6 py-4 rounded-xl text-center shadow-md hover:scale-[1.02] active:scale-[0.98] transition duration-200 text-xs cursor-pointer"
              >
                Ver Catálogo de Mallas y Tubería
              </Link>
              <Link 
                to="/contacto"
                className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold px-6 py-4 rounded-xl text-center transition duration-200 text-xs cursor-pointer"
              >
                Ver Ubicación e indicaciones
              </Link>
            </div>
          </div>

          {/* Contenido Derecho: Foto de Malla Galvanizada (Solo en Desktop) */}
          <div className="lg:col-span-5 relative group hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative border border-slate-200 rounded-3xl overflow-hidden shadow-2xl bg-white p-3">
              <img 
                src={img("/images/fotos/Malla galvanizada (1).jpg")}
                alt="Malla Galvanizada INMCERS" 
                className="w-full h-80 lg:h-[480px] object-cover rounded-2xl group-hover:scale-[1.01] transition-transform duration-350"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 text-white p-4 rounded-xl backdrop-blur-sm border border-slate-800/50 text-left">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block font-black">Fabricación en Planta</span>
                <h4 className="font-title font-black text-sm">Malla Galvanizada de Alta Resistencia</h4>
                <p className="text-[11px] text-slate-300 mt-1">Nuestra especialidad con acabados en triple galvanizado.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.1 COTIZADOR EXPRESS Y CARRUSEL DE PRODUCTOS (Reubicado en sección dedicada) */}
      <section className="py-12 bg-slate-50 border-b border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Carrusel Izquierdo */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-left space-y-1">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Línea de Productos</span>
              <h3 className="text-2xl font-black text-slate-900 font-title">Soluciones de Cercado Perimetral</h3>
            </div>
            
            {/* Carrusel de Productos */}
            <div className="relative rounded-2xl overflow-hidden h-72 shadow-md bg-secondary text-white">
              <div className="absolute inset-0">
                <img 
                  src={heroSlides[currentSlide].img} 
                  onError={(e) => { 
                    (e.target as HTMLImageElement).src = heroSlides[currentSlide].fallback; 
                  }}
                  alt={heroSlides[currentSlide].title} 
                  className="w-full h-full object-cover opacity-20 filter brightness-[0.4]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-left space-y-2">
                <span className="text-[9px] font-bold bg-primary px-2.5 py-1 rounded text-white uppercase tracking-widest">
                  {heroSlides[currentSlide].badge}
                </span>
                <h4 className="font-title font-black text-lg text-white">{heroSlides[currentSlide].title}</h4>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">{heroSlides[currentSlide].subtitle}</p>
                <div className="flex space-x-1.5 pt-2">
                  {heroSlides.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentSlide ? 'bg-primary w-5' : 'bg-slate-600 w-1.5'}`}
                      aria-label={`Slide ${idx + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Cotizador Express Derecho */}
          <div className="lg:col-span-5 bg-white text-slate-800 rounded-3xl shadow-lg p-6 border border-slate-200 relative text-left">
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-primary text-white font-black text-[9px] px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider">
              Express
            </div>
            <h3 className="text-base font-black tracking-tight text-slate-900 flex items-center space-x-2 mb-1">
              <Clock className="w-5 h-5 text-primary" />
              <span>Cotizador Express</span>
            </h3>
            <p className="text-[11px] text-slate-505 mb-4 font-medium">
              Obtenga una estimación preliminar de materiales directamente en su WhatsApp.
            </p>
            <CotizadorRapido />
          </div>
        </div>
      </section>

      {/* 2. STATS BAR (Dark overlay bridging Hero, Stats use WHITE TEXT as requested) */}
      <section ref={statsRef} className="relative z-20 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto -mt-10">
        <div className="bg-secondary-hover/90 backdrop-blur-md rounded-2xl border border-secondary-light/40 p-5 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 shadow-premium text-white">
          <div className={`stat-item flex flex-col items-center justify-center text-center space-y-1 transition-all duration-700 ease-out transform ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-title font-black text-white">+30</span>
            <span className="text-[9px] font-bold text-white uppercase tracking-widest mt-1">Años de Liderazgo</span>
          </div>

          <div className={`stat-item flex flex-col items-center justify-center text-center space-y-1 lg:border-l border-secondary-light/30 transition-all duration-700 ease-out transform ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-title font-black text-white">100%</span>
            <span className="text-[9px] font-bold text-white uppercase tracking-widest mt-1">Acero Certificado</span>
          </div>

          <div className={`stat-item flex flex-col items-center justify-center text-center space-y-1 lg:border-l border-secondary-light/30 transition-all duration-700 ease-out transform ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-title font-black text-white">22</span>
            <span className="text-[9px] font-bold text-white uppercase tracking-widest mt-1">Deptos Cobertura</span>
          </div>

          <div className={`stat-item flex flex-col items-center justify-center text-center space-y-1 lg:border-l border-secondary-light/30 transition-all duration-700 ease-out transform ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-title font-black text-white">3</span>
            <span className="text-[9px] font-bold text-white uppercase tracking-widest mt-1">Líneas de Producción</span>
          </div>
        </div>
      </section>

      {/* 3. BEFORE/AFTER SLIDER (Light Section) */}
      <section className="w-full bg-slate-100/60 py-16 px-4 border-t border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-wider">
              <i className="fa-solid fa-circle-half-stroke"></i>
              <span>Transformación Visual</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Terreno Vulnerable vs. Perímetro Protegido
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Arrastra el control central para comparar visualmente la diferencia en seguridad y privacidad que logras instalando los sistemas de cerramiento perimetral de Inmcers S.A.
            </p>
          </div>
          
          <BeforeAfterSlider />
        </div>
      </section>

      {/* 4. CLIMATE EVALUATOR & GAUGE GUIDE (Dark/Blue Section) */}
      <section ref={interactivesRef} className="w-full bg-secondary py-16 text-white border-b border-[#152b47]/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Climate Evaluator */}
          <div className={`bg-secondary-hover/80 rounded-3xl border border-[#152b47]/40 p-6 sm:p-8 shadow-premium flex flex-col justify-between transition-all duration-700 transform ${interactivesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-4 text-left">
              <span className="inline-flex items-center space-x-1.5 text-xs font-black text-primary uppercase tracking-wider">
                <i className="fa-solid fa-cloud-sun-rain text-primary-light"></i>
                <span>Evaluador de Clima y Corrosión</span>
              </span>
              <h3 className="text-xl font-extrabold text-white">
                ¿Qué material resiste mejor tu departamento?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Selecciona tu departamento en Guatemala para conocer el nivel de humedad ambiental y el material de recubrimiento óptimo que garantizará la máxima vida útil de tu malla perimetral.
              </p>
              
              <ClimateEvaluator />
            </div>
          </div>

          {/* Gauge Guide */}
          <div className={`bg-secondary-hover/80 rounded-3xl border border-secondary-light/40 p-6 sm:p-8 shadow-premium flex flex-col justify-between transition-all duration-700 transform ${interactivesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '150ms' }}>
            <div className="space-y-4 text-left">
              <span className="inline-flex items-center space-x-1.5 text-xs font-black text-primary uppercase tracking-wider">
                <i className="fa-solid fa-compass-drafting text-primary-light"></i>
                <span>Guía de Calibres y Espesores</span>
              </span>
              <h3 className="text-xl font-extrabold text-white">
                Comparador Técnico de Grosor (Gauge)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                En la fabricación de mallas, el calibre define la fuerza del tejido. Explora los espesores estándar que producimos directamente en planta para adaptarnos a tus requerimientos.
              </p>
              
              <GaugeSelector />
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US (VALUES) - (Light Section) */}
      <section ref={valuesRef} className="bg-slate-100/50 py-16 border-t border-b border-slate-200/50 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className={`text-center space-y-2 transition-all duration-700 transform ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-xs uppercase tracking-widest font-black text-primary">¿Por qué Elegirnos?</h2>
            <p className="text-2xl sm:text-3xl font-black text-slate-900">Sólido Compromiso en Cada Metro Instalado</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Puntualidad Absoluta", desc: "En cada entrega e instalación, cumpliendo estrictamente los tiempos acordados de manera eficiente.", icon: Clock },
              { title: "Alta Calidad", desc: "Materiales de gran durabilidad que garantizan resistencia, funcionalidad y una larga vida útil.", icon: Shield },
              { title: "Servicio Experto", desc: "Atención personalizada y asesoría técnica especializada en cada etapa del proceso.", icon: Award },
              { title: "Altos Estándares", desc: "Procesos de fabricación propios que respaldan cada trabajo con eficiencia, seguridad y confianza.", icon: Check }
            ].map((value, idx) => (
              <div 
                key={idx} 
                className={`bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-3 transition-all duration-700 transform ${
                  valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary border border-primary/20">
                  <value.icon className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-sm text-slate-900">{value.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE SIMULATOR (Dark/Blue Section) */}
      <section ref={simulatorRef} className="w-full bg-secondary py-16 text-white border-b border-[#152b47]/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-secondary-hover/80 rounded-3xl border border-[#152b47]/40 p-6 sm:p-10 shadow-premium transition-all duration-700 transform ${simulatorVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6 text-left">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-xs font-black uppercase tracking-wider">
                  <i className="fa-solid fa-wand-magic-sparkles text-primary"></i>
                  <span>Exclusivo: Configurador Interactivo</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Simulador de Acabados Perimetrales
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Visualiza de manera interactiva cómo lucen los diferentes acabados que fabricamos directamente en planta. Configura el tipo de malla, inserta cintas de Privacinta o agrega concertina superior para simular tu cerramiento ideal.
                </p>

                <FenceSimulator />
              </div>

              <div className="lg:col-span-5 bg-secondary p-6 rounded-2xl border border-secondary-light/45 space-y-4 shadow-inner text-left">
                <h3 className="text-xs font-black text-white uppercase tracking-wider flex items-center">
                  <Shield className="w-4 h-4 text-primary mr-2" />
                  <span>Beneficios Técnicos</span>
                </h3>
                <ul className="space-y-4 text-xs leading-relaxed text-slate-300">
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span><strong>Galvanizado por Inmersión:</strong> Ofrece protección galvánica total contra los ambientes húmedos de la Costa Sur y del Altiplano.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span><strong>Recubrimiento de PVC Certificado:</strong> Capa de polímero de alta densidad que absorbe los rayos UV sin quebrarse ni decolorarse.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span><strong>Privacinta de Alta Densidad:</strong> Brinda un 95% de bloqueo de visibilidad externa con una excelente estabilidad al viento.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. FEATURED PRODUCTS GRID (Light Section) */}
      <section ref={productsRef} className="w-full bg-white py-16 border-b border-slate-200 text-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className={`text-center max-w-3xl mx-auto space-y-3 transition-all duration-700 transform ${productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-xs uppercase tracking-widest font-black text-primary">Sistemas de Cerramiento</h2>
            <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Productos Destacados</p>
            <p className="text-slate-600 text-xs sm:text-sm">Ofrecemos soluciones completas de cerramiento con malla de fabricación propia y accesorios de alta calidad.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((feat, idx) => (
              <div 
                key={feat.id} 
                className={`bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:shadow-md transition duration-250 transform ${
                  productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img 
                    src={feat.imagen}
                    onError={(e) => { 
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1508873696983-2df519f0397e?q=80&w=400"; 
                    }}
                    alt={feat.nombre} 
                    className="w-full h-full object-cover transition duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 h-8 w-8 rounded-lg bg-secondary/80 text-white flex items-center justify-center backdrop-blur">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-2 text-left">
                    <h3 className="text-base font-extrabold text-slate-900">{feat.nombre}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{feat.descripcion}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-200 mt-4 flex justify-between items-center text-xs">
                    <Link 
                      to="/cotizar"
                      className="text-primary font-bold hover:underline cursor-pointer"
                    >
                      Cotizar Proyecto
                    </Link>
                    <button 
                      onClick={() => triggerWhatsApp(`Hola, deseo cotizar el producto "${feat.nombre}" fabricado por ustedes.`)}
                      className="text-green-600 hover:underline flex items-center font-bold gap-1 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SLIDING PORTFOLIO (Proyectos Entregados - Dark/Blue Section) */}
      <section ref={portfolioRef} className="w-full bg-secondary py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-[#152b47]/30 text-white">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 transition-all duration-700 transform ${portfolioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-left">
              <h2 className="text-xs uppercase tracking-widest font-black text-primary">Garantía en Acción</h2>
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">Obras e Instalaciones Entregadas</p>
            </div>
          </div>

          <div className={`relative bg-secondary-hover/80 rounded-3xl overflow-hidden shadow-premium border border-[#152b47]/45 grid grid-cols-1 md:grid-cols-2 transition-all duration-700 transform ${
            portfolioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="relative h-64 md:h-full min-h-[300px] bg-slate-950">
              <img 
                src={portfolioProjects[portfolioIndex].image} 
                onError={(e) => { 
                  (e.target as HTMLImageElement).src = portfolioProjects[portfolioIndex].fallback; 
                }}
                alt={portfolioProjects[portfolioIndex].title} 
                className="w-full h-full object-cover opacity-80"
              />
              <span className="absolute top-4 left-4 bg-secondary text-primary font-black uppercase text-[9px] px-2.5 py-1.5 rounded-lg tracking-widest shadow-md">
                {portfolioProjects[portfolioIndex].category}
              </span>
            </div>
            
            <div className="p-6 sm:p-10 flex flex-col justify-between space-y-6 text-left">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white leading-tight">
                  {portfolioProjects[portfolioIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {portfolioProjects[portfolioIndex].desc}
                </p>
              </div>

              <div className="pt-4 border-t border-secondary-light/20 flex justify-between items-center">
                <div className="flex space-x-2">
                  <button 
                    onClick={handlePrevProject}
                    className="h-10 w-10 rounded-full border border-secondary-light text-slate-300 flex items-center justify-center hover:bg-secondary-light transition cursor-pointer"
                    aria-label="Proyecto anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={handleNextProject}
                    className="h-10 w-10 rounded-full border border-secondary-light text-slate-300 flex items-center justify-center hover:bg-secondary-light transition cursor-pointer"
                    aria-label="Proyecto siguiente"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                
                <button 
                  onClick={() => triggerWhatsApp(`Hola, estuve observando su proyecto de "${portfolioProjects[portfolioIndex].title}" en su web y me gustaría recibir asesoría similar.`)}
                  className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition shadow-md shadow-primary/10 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Asesoría de Obra</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECCIÓN INTEGRADA: PREGUNTAS FRECUENTES (FAQ) - (Light Section) */}
      <section ref={faqRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 relative z-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ease-out ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Preguntas y Respuestas</span>
            <h2 className="text-3xl font-title font-extrabold text-slate-900 mt-3">Preguntas Frecuentes</h2>
            <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-600 text-xs mt-4">
              Consulte las respuestas a las dudas más comunes sobre la fabricación e instalación de mallas en Guatemala.
            </p>
          </div>
          
          <FAQAccordion />
        </div>
      </section>

      {/* 10. CINEMATIC CTA BANNER (Dark Banner over Light Page Background) */}
      <section ref={ctaRef} className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-transparent relative z-10">
        <div className={`max-w-6xl mx-auto bg-gradient-to-br from-secondary-hover to-secondary rounded-[2.5rem] p-8 sm:p-16 text-center text-white relative overflow-hidden border border-secondary-light/40 shadow-2xl transition-all duration-750 transform ${
          ctaVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
        }`}>
          <div className="absolute top-0 right-0 w-full h-full bg-noise opacity-5"></div>
          <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-primary/10 blur-[80px]"></div>
          
          <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4.5xl font-black leading-tight text-white">
              ¿Listo para asegurar su proyecto o propiedad?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto font-medium">
              Suministramos materiales directos de fábrica a toda Guatemala o realizamos la instalación profesional con total garantía de Inmcers S.A.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link
                to="/cotizar"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white font-black text-xs hover:bg-primary-hover transition-all duration-300 shadow-xl cursor-pointer"
              >
                Solicitar Cotización Formal
              </Link>
              <button
                onClick={() => triggerWhatsApp("Hola, deseo solicitar una asesoría técnica perimetral.")}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-secondary-hover hover:bg-secondary-light border border-secondary-light/60 text-white font-bold text-xs transition-all duration-300 cursor-pointer"
              >
                Hablar con Asesor
              </button>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
