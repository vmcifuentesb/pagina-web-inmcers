import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { BRAND_DOC } from '../data/brand';
import { img } from '../lib/images';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const triggerWhatsApp = (message = "Hola, me gustaría recibir más información sobre sus servicios de mallas y cerramientos perimetrales.") => {
    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/50242120707?text=${encodedMsg}`, '_blank');
  };

  return (
    <footer className="bg-secondary text-slate-300 pt-16 pb-8 border-t border-secondary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            {/* Brand Logo with Rounded White Background */}
            <Link to="/" className="inline-flex items-center cursor-pointer bg-white px-4 py-1.5 rounded-lg shadow-sm transition-transform duration-300 hover:scale-[1.03] mb-2">
              <img
                src={img("/images/logo/logo-oficial.png")}
                alt="Inmcers S.A Logo"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed pt-2">
              Fabricantes directos de mallas perimetrales galvanizadas y PVC con más de 30 años de experiencia técnica respaldando su inversión en toda Guatemala.
            </p>
            <div className="pt-2 flex space-x-3">
              <a
                href={BRAND_DOC.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-secondary-hover hover:bg-primary transition-all duration-200 text-slate-400 hover:text-white cursor-pointer"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f text-sm"></i>
              </a>
              <a
                href={BRAND_DOC.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-secondary-hover hover:bg-primary transition-all duration-200 text-slate-400 hover:text-white cursor-pointer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>
              <button
                onClick={() => triggerWhatsApp("Hola, me interesa recibir información.")}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-secondary-hover hover:bg-green-600 transition-all duration-200 text-slate-400 hover:text-white cursor-pointer"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp text-sm"></i>
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-primary pl-2">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2.5 text-xs">
              {[
                { name: 'Inicio', path: '/' },
                { name: 'Nosotros', path: '/nosotros' },
                { name: 'Servicios de Instalación', path: '/servicios' },
                { name: 'Distribuidor Mayorista', path: '/mayorista' },
                { name: 'Productos', path: '/productos' },
                { name: 'Proyectos', path: '/proyectos' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contacto', path: '/contacto' }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-primary transition duration-150 flex items-center space-x-1 cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-primary shrink-0" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Product Highlights */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-primary pl-2">
              Sistemas Perimetrales
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Malla Ciclón Galvanizada (HG)</li>
              <li>Malla Recubierta en PVC</li>
              <li>Concertina Razor Ribbon</li>
              <li>Cinta Privacinta para Mallas</li>
              <li>Tubería Galvanizada y Perfiles</li>
              <li>Alambre Espigado (De Púas)</li>
              <li>Estructuras de Herrería y Gaviones</li>
            </ul>
          </div>

          {/* Col 4: Official Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-primary pl-2">
              Planta y Almacén
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-normal">
                  {BRAND_DOC.address}
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={`tel:+502${BRAND_DOC.pbx.replace(/-/g, '')}`} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  PBX Oficinas: {BRAND_DOC.pbx}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${BRAND_DOC.email}`} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  {BRAND_DOC.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-secondary-light mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {currentYear} Inmcers S.A. Todos los derechos reservados. Orgullosamente guatemaltecos, 30 años fabricando calidad.</p>
          <p className="mt-4 md:mt-0">
            Desarrollada por{' '}
            <a
              href="http://promptendweb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent font-semibold transition-colors cursor-pointer"
            >
              Promptend | promptendweb.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
