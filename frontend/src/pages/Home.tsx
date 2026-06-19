import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Shield, Award, Clock, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
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
    btnText: "Estructurar Presupuesto de Materiales",
    img: img("/images/fotos/_MG_3133.JPG"),
    fallback: "https://images.unsplash.com/photo-1508873696983-2df519f0397e?q=80&w=1200"
  },
  {
    title: "Sistemas de Alta Seguridad Razor Ribbon",
    subtitle: "Protección física de alto impacto con concertinas de cuchilla galvanizada o acero inoxidable. Resistencia y disuasión definitiva.",
    badge: "Seguridad Perimetral Certificada",
    btnText: "Ver Catálogo Técnico de Seguridad",
    img: img("/images/fotos/Alambre espigado (1).jpg"),
    fallback: "https://images.unsplash.com/photo-1558521958-f121d8570296?q=80&w=1200"
  },
  {
    title: "Alambre Espigado y Privacinta",
    subtitle: "Fabricamos soluciones integrales de cercado. Privacinta de alta densidad para máxima discreción y elegancia en tu propiedad.",
    badge: "Estética y Funcionalidad",
    btnText: "Escribirnos a WhatsApp",
    img: img("/images/fotos/Privacinta verde2.JPG"),
    fallback: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200"
  }
];

const portfolioProjects = [
  {
    title: "Complejo Logístico Industrial",
    category: "Industrial",
    desc: "Cercado perimetral de alta seguridad utilizando malla ciclón reforzada de 2.4 metros de altura con postes galvanizados y sistemas de Razor Ribbon superior.",
    image: img("/images/fotos/_MG_3133.JPG"),
    fallback: "https://images.unsplash.com/photo-1508873696983-2df519f0397e?q=80&w=600"
  },
  {
    title: "Canchas Deportivas y Recreativas",
    category: "Deportivo",
    desc: "Instalación de malla de PVC Verde Bosque de 3 metros, combinando perfectamente con el entorno ecológico y postes reforzados de alta durabilidad.",
    image: img("/images/fotos/Privacinta verde2.JPG"),
    fallback: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600"
  },
  {
    title: "Protección Residencial con Privacinta",
    category: "Residencial",
    desc: "Instalación de cercado perimetral con inserción de Privacinta para brindar un 95% de privacidad visual y una estética moderna a la propiedad.",
    image: img("/images/fotos/Privacinta verde3.jpg"),
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
      
      {/* 1. SECCIÓN HERO CON SLIDER AUTOMÁTICO + PRE-COTIZADOR EXPRESS (Dark background) */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-300 min-h-[600px] flex items-center border-b border-secondary-light/20 bg-secondary text-white">
        {/* Slide Image Background under layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroSlides[currentSlide].img} 
            onError={(e) => { 
              (e.target as HTMLImageElement).src = heroSlides[currentSlide].fallback; 
            }}
            alt={heroSlides[currentSlide].title} 
            className="w-full h-full object-cover opacity-20 filter brightness-[0.4]"
          />
        </div>

        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-mesh-pattern opacity-15 mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          {/* Contenido Izquierdo: Slides dinámicos */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary-light text-xs font-bold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5 text-primary" />
              <span>{heroSlides[currentSlide].badge}</span>
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white transition-all duration-500 min-h-[100px]">
              {heroSlides[currentSlide].title}
            </h1>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed transition-all duration-500 max-w-xl">
              {heroSlides[currentSlide].subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button 
                onClick={() => triggerWhatsApp(heroSlides[currentSlide].btnText)}
                className="bg-primary hover:bg-primary-hover text-white font-bold px-6 py-3.5 rounded-xl text-center shadow-lg hover:scale-[1.02] active:scale-[0.98] transition duration-200 text-xs flex items-center justify-center space-x-2 cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-sm text-green-400"></i>
                <span>{heroSlides[currentSlide].btnText}</span>
              </button>
              <Link 
                to="/productos"
                className="bg-secondary-hover/80 hover:bg-secondary text-white border border-secondary-light font-semibold px-6 py-3.5 rounded-xl text-center transition duration-200 text-xs flex items-center justify-center cursor-pointer"
              >
                Ver Catálogo de Productos
              </Link>
            </div>

            {/* Slider Dots */}
            <div className="flex space-x-2 pt-6">
              {heroSlides.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentSlide ? 'bg-primary w-7' : 'bg-secondary-light/60'}`}
                  aria-label={`Ir al slide ${idx + 1}`}
                ></button>
              ))}
            </div>
          </div>

          {/* Contenido Derecho: Pre-Cotizador Express Card */}
          <div className="lg:col-span-5 bg-secondary-hover/90 text-white rounded-3xl shadow-premium p-6 border border-secondary-light/45 relative backdrop-blur-md">
            <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-3 bg-primary text-white font-black text-[10px] px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
              ¡Respuesta Rápida!
            </div>
            <h3 className="text-lg font-black tracking-tight text-white flex items-center space-x-2 mb-1">
              <Clock className="w-5 h-5 text-primary" />
              <span>Cotizador Express</span>
            </h3>
            <p className="text-[11px] text-slate-400 mb-6">
              Calcula y solicita tu cotización de materiales vía WhatsApp en solo 3 pasos.
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
            <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
              Arrastra el control central para comparar visualmente la diferencia en seguridad y privacidad que logras instalando los sistemas de cerramiento perimetral de Inmcers S.A.
            </p>
          </div>
          
          <BeforeAfterSlider />
        </div>
      </section>

      {/* 4. CLIMATE EVALUATOR & GAUGE GUIDE (Dark/Blue Section) */}
      <section ref={interactivesRef} className="w-full bg-secondary py-16 text-white border-b border-secondary-light/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Climate Evaluator */}
          <div className={`bg-secondary-hover/80 rounded-3xl border border-secondary-light/40 p-6 sm:p-8 shadow-premium flex flex-col justify-between transition-all duration-700 transform ${interactivesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-4 text-left">
              <span className="inline-flex items-center space-x-1.5 text-xs font-black text-primary uppercase tracking-wider">
                <i className="fa-solid fa-cloud-sun-rain text-primary-light"></i>
                <span>Evaluador de Clima y Corrosión</span>
              </span>
              <h3 className="text-xl font-extrabold text-white">
                ¿Qué material resiste mejor tu departamento?
              </h3>
              <p className="text-xs text-slate-350 leading-relaxed">
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
              <p className="text-xs text-slate-355 leading-relaxed">
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
      <section ref={simulatorRef} className="w-full bg-secondary py-16 text-white border-b border-secondary-light/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-secondary-hover/80 rounded-3xl border border-secondary-light/40 p-6 sm:p-10 shadow-premium transition-all duration-700 transform ${simulatorVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
                <ul className="space-y-4 text-xs leading-relaxed text-slate-350">
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
            <h2 className="text-xs uppercase tracking-widest font-black text-primary">Fabricación Directa</h2>
            <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Sistemas de Cerramiento Destacados</p>
            <p className="text-slate-600 text-xs sm:text-sm">Controlamos cada etapa del proceso de manufacturación para garantizar la máxima resistencia y calidad en obra.</p>
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
      <section ref={portfolioRef} className="w-full bg-secondary py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-secondary-light/30 text-white">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 transition-all duration-700 transform ${portfolioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-left">
              <h2 className="text-xs uppercase tracking-widest font-black text-primary">Garantía en Acción</h2>
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">Obras e Instalaciones Entregadas</p>
            </div>
          </div>

          <div className={`relative bg-secondary-hover/80 rounded-3xl overflow-hidden shadow-premium border border-secondary-light/45 grid grid-cols-1 md:grid-cols-2 transition-all duration-700 transform ${
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
                <p className="text-xs sm:text-sm text-slate-355 leading-relaxed">
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
            <p className="text-sm sm:text-base text-slate-350 leading-relaxed max-w-xl mx-auto font-medium">
              Suministramos materiales directos de fábrica a toda Guatemala o realizamos la instalación profesional llave en mano con total garantía de Inmcers S.A.
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
