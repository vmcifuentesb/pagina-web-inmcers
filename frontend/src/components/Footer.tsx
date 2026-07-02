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
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href={BRAND_DOC.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-secondary-hover hover:bg-primary transition-all duration-200 text-slate-400 hover:text-white cursor-pointer"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <button
                onClick={() => triggerWhatsApp("Hola, me interesa recibir información.")}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-secondary-hover hover:bg-green-600 transition-all duration-200 text-slate-400 hover:text-white cursor-pointer"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.415 9.86-9.857.001-2.636-1.024-5.115-2.887-6.979C16.578 1.906 14.1 .88 11.465.88 6.03.88 1.61 5.297 1.608 10.732c-.001 1.737.453 3.428 1.316 4.921l-.973 3.555 3.637-.954zm12.593-7.21c-.328-.164-1.944-.96-2.247-1.07-.303-.11-.523-.165-.743.165-.22.33-.852 1.07-1.044 1.29-.193.22-.386.247-.714.083-.328-.164-1.385-.51-2.637-1.627-.975-.87-1.632-1.947-1.823-2.277-.193-.33-.02-.508.145-.671.147-.147.328-.384.492-.577.164-.192.219-.329.328-.548.11-.22.055-.411-.027-.575-.082-.164-.743-1.792-1.018-2.454-.268-.646-.54-.559-.743-.569-.191-.01-.411-.011-.63-.011-.22 0-.577.082-.878.411-.302.33-1.152 1.124-1.152 2.741 0 1.618 1.178 3.182 1.342 3.402.164.22 2.317 3.538 5.614 4.962.784.34 1.397.542 1.874.693.788.25 1.503.215 2.07.13.632-.094 1.944-.795 2.217-1.562.273-.767.273-1.424.191-1.562-.08-.137-.3-.22-.628-.384z"/></svg>
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
        <div className="border-t border-secondary-light mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
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
