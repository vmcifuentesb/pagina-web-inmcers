import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, Calculator, ChevronDown } from 'lucide-react';
import { BRAND_DOC } from '../data/brand';
import { img } from '../lib/images';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerWhatsApp = (message = "Hola, me gustaría recibir más información sobre sus servicios de mallas y cerramientos perimetrales.") => {
    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/50242120707?text=${encodedMsg}`, '_blank');
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-secondary to-secondary-hover text-white text-xs md:text-sm py-2 px-4 flex justify-between items-center border-b border-primary/25 relative z-50">
        <div className="flex items-center space-x-4 mx-auto md:mx-0 font-medium">
          <a href={`tel:+502${BRAND_DOC.pbx.replace(/-/g, '')}`} className="flex items-center hover:text-primary transition-colors cursor-pointer">
            <Phone className="w-3.5 h-3.5 text-primary mr-1.5" />
            <span>PBX: {BRAND_DOC.pbx}</span>
          </a>
          <button onClick={() => triggerWhatsApp("Hola, deseo solicitar presupuesto.")} className="flex items-center hover:text-green-400 transition-colors cursor-pointer">
            <MessageSquare className="w-3.5 h-3.5 text-green-400 mr-1.5" />
            <span>WhatsApp: {BRAND_DOC.whatsapp}</span>
          </button>
          <span className="hidden md:inline text-slate-300">| Cobertura en toda Guatemala | 30 Años Fabricando Calidad</span>
        </div>
        <div className="hidden md:flex items-center space-x-3">
          <span className="text-slate-350 text-xs font-normal">¿Necesitas cuantificar materiales?</span>
          <Link
            to="/cotizar"
            className="bg-primary hover:bg-primary-hover text-white font-bold px-3 py-1 rounded transition text-xs flex items-center cursor-pointer shadow-md"
          >
            <Calculator className="w-3.5 h-3.5 mr-1" />
            Presupuesto Rápido
          </Link>
        </div>
      </div>

      {/* Main Glassmorphism Header */}
      <header
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-premium py-2'
            : 'bg-secondary/95 py-4 border-b border-secondary-light/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo with Rounded White Background */}
            <Link to="/" className="flex items-center cursor-pointer bg-white px-4 py-1.5 rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.03] shrink-0">
              <img
                src={img("/images/logo/logo-oficial.png")}
                alt="Inmcers S.A Logo"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-primary/20 text-primary-light'
                      : 'text-slate-300 hover:text-white hover:bg-secondary-hover'
                  }`
                }
              >
                Inicio
              </NavLink>
              <NavLink
                to="/nosotros"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-primary/20 text-primary-light'
                      : 'text-slate-300 hover:text-white hover:bg-secondary-hover'
                  }`
                }
              >
                Nosotros
              </NavLink>

              {/* Servicios Dropdown */}
              <div 
                className="relative group py-2"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className="px-3 py-2 rounded-lg font-semibold text-xs text-slate-300 hover:text-white hover:bg-secondary-hover flex items-center gap-1 cursor-pointer transition-all duration-200 focus:outline-none"
                >
                  <span>Servicios</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-250 group-hover:rotate-180" />
                </button>
                
                <div 
                  className={`absolute left-0 mt-1 w-56 rounded-xl bg-secondary border border-secondary-light shadow-premium transition-all duration-300 ${
                    isServicesOpen 
                      ? 'opacity-100 translate-y-0 visible pointer-events-auto' 
                      : 'opacity-0 -translate-y-2 invisible pointer-events-none'
                  }`}
                >
                  <div className="py-1.5 p-1.5 space-y-1">
                    <Link
                      to="/servicios"
                      onClick={() => setIsServicesOpen(false)}
                      className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:bg-secondary-hover hover:text-white transition-colors"
                    >
                      Servicios de Instalación
                    </Link>
                    <Link
                      to="/mayorista"
                      onClick={() => setIsServicesOpen(false)}
                      className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:bg-secondary-hover hover:text-white transition-colors"
                    >
                      Venta Mayorista / Distribuidores
                    </Link>
                  </div>
                </div>
              </div>

              <NavLink
                to="/productos"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-primary/20 text-primary-light'
                      : 'text-slate-300 hover:text-white hover:bg-secondary-hover'
                  }`
                }
              >
                Productos
              </NavLink>
              <NavLink
                to="/proyectos"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-primary/20 text-primary-light'
                      : 'text-slate-300 hover:text-white hover:bg-secondary-hover'
                  }`
                }
              >
                Proyectos
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-primary/20 text-primary-light'
                      : 'text-slate-300 hover:text-white hover:bg-secondary-hover'
                  }`
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/contacto"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-primary/20 text-primary-light'
                      : 'text-slate-300 hover:text-white hover:bg-secondary-hover'
                  }`
                }
              >
                Contacto
              </NavLink>
            </nav>

            {/* Utility Actions */}
            <div className="hidden sm:flex items-center space-x-3">
              <Link
                to="/cotizar"
                className="px-4 py-2 rounded-lg text-xs bg-primary text-white font-bold hover:bg-primary-hover shadow-md shadow-primary/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5 mr-1.5" />
                <span>Cotizar Proyecto</span>
              </Link>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <div className="flex xl:hidden items-center space-x-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-secondary-hover text-slate-200 hover:bg-secondary-light transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`xl:hidden absolute left-0 right-0 bg-secondary border-b border-secondary-light shadow-premium transition-all duration-300 ease-in-out ${
            isOpen ? 'top-full opacity-100 visible' : 'top-[-500px] opacity-0 invisible pointer-events-none'
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {[
              { name: 'Inicio', path: '/' },
              { name: 'Nosotros', path: '/nosotros' },
              { name: 'Servicios de Instalación', path: '/servicios' },
              { name: 'Venta Mayorista', path: '/mayorista' },
              { name: 'Productos', path: '/productos' },
              { name: 'Proyectos', path: '/proyectos' },
              { name: 'Blog', path: '/blog' },
              { name: 'Contacto', path: '/contacto' }
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-lg font-semibold text-sm transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-slate-200 hover:bg-secondary-hover'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="pt-4 border-t border-secondary-light mt-2 space-y-2">
              <Link
                to="/cotizar"
                onClick={() => setIsOpen(false)}
                className="w-full bg-primary text-white py-2.5 rounded-lg text-center font-bold text-sm flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Calculator className="w-4 h-4" />
                <span>Pre-Cotizador Express</span>
              </Link>
              <button
                onClick={() => {
                  setIsOpen(false);
                  triggerWhatsApp("Hola, deseo solicitar un presupuesto de materiales.");
                }}
                className="w-full bg-green-650 hover:bg-green-700 text-white py-2.5 rounded-lg text-center font-bold text-sm flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Ventas Directas</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
