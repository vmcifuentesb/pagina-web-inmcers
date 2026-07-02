import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { StructuredData } from './components/ui/StructuredData';
import { BackToTop } from './components/ui/BackToTop';
import ScrollToTop from './components/ui/ScrollToTop';

const BASENAME = import.meta.env.BASE_URL.replace(/\/+$/, '');

// Carga perezosa (Lazy Loading) de las páginas para optimizar WPO
const Home = lazy(() => import('./pages/Home'));
const Nosotros = lazy(() => import('./pages/Nosotros'));
const Servicios = lazy(() => import('./pages/Servicios'));
const Mayorista = lazy(() => import('./pages/Mayorista').then(module => ({ default: module.Mayorista })));
const Productos = lazy(() => import('./pages/Productos'));
const Proyectos = lazy(() => import('./pages/Proyectos'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogArticulo = lazy(() => import('./pages/BlogArticulo'));
const Contacto = lazy(() => import('./pages/Contacto'));
const Cotizar = lazy(() => import('./pages/Cotizar'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Componente Spinner para carga perezosa
const PageSpinner: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 bg-slate-50">
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 border-4 border-slate-200 rounded-full"></div>
      <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
    <span className="font-body text-xs text-slate-500 font-bold tracking-wider uppercase">
      Cargando sección...
    </span>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename={BASENAME}>
        <ScrollToTop />
        <Helmet>
          <title>Inmcers S.A — Industria de mallas y cercas</title>
          <meta 
            name="description" 
            content="Industria de mallas y cercas en Guatemala. Fabricación e instalación de malla ciclón, razor ribbon, privacinta y tubería galvanizada. Cobertura nacional." 
          />
          <meta property="og:title" content="Inmcers S.A — Industria de mallas y cercas en Guatemala" />
          <meta 
            property="og:description" 
            content="Industria de mallas y cercas en Guatemala. Fabricamos e instalamos malla ciclón, razor ribbon, privacinta y tuberías con cobertura en todo el país." 
          />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="es_GT" />
        </Helmet>
        
        {/* Inyectores de Datos Estructurados e Iconos */}
        <StructuredData />

        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 transition-colors duration-300">
          {/* Navegación Principal */}
          <Navbar />

          {/* Área de Contenido */}
          <main className="flex-grow">
            <Suspense fallback={<PageSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/mayorista" element={<Mayorista />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/proyectos" element={<Proyectos />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogArticulo />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/cotizar" element={<Cotizar />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>

          {/* Pie de Página */}
          <Footer />

          {/* Floating WhatsApp Button */}
          <a
            href="https://wa.me/50242120707?text=Hola%20Inmcers%20S.A,%20me%20gustaría%20solicitar%20asesoría%20sobre%20mallas%20y%20cerramientos%20perimetrales."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3 rounded-full shadow-premium flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
            aria-label="Contactar por WhatsApp"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.004 2c-5.522 0-10 4.478-10 10 0 1.77.46 3.48 1.34 5.01L2 22l5.13-1.34a9.922 9.922 0 0 0 4.87 1.28c5.523 0 10-4.478 10-10 0-5.522-4.477-10-10-10z" fill="white" />
              <path d="M12.004 3.125c-4.9 0-8.875 3.975-8.875 8.875 0 1.57.41 3.09 1.19 4.45L3.75 19.95l3.58-.94a8.818 8.818 0 0 0 4.67 1.31c4.9 0 8.875-3.975 8.875-8.875S16.904 3.125 12.004 3.125z" fill="#25D366" />
              <path d="M15.82 13.9c-.2-.1-1.2-.6-1.39-.67-.19-.07-.33-.1-.47.11-.14.21-.55.7-.68.84-.12.14-.25.16-.45.06-.2-.1-.85-.31-1.62-1a6.01 6.01 0 0 1-1.12-1.39c-.12-.2-.01-.3.09-.4.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.07-.14.03-.26-.02-.36s-.47-1.13-.64-1.54c-.17-.4-.36-.34-.49-.35h-.42c-.14 0-.38.05-.58.27-.2.22-.76.74-.76 1.8s.77 2.08.88 2.23c.11.15 1.52 2.32 3.68 3.25.52.22.92.36 1.24.46.52.16.99.14 1.36.08.41-.06 1.2-.49 1.37-.96.17-.47.17-.87.12-.96c-.05-.08-.19-.13-.39-.23z" fill="white" />
            </svg>
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 font-body font-bold text-xs uppercase tracking-wider transition-all duration-300 ease-in-out whitespace-nowrap">
              WhatsApp Ventas
            </span>
          </a>
          
          {/* Botón scroll top */}
          <BackToTop />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
