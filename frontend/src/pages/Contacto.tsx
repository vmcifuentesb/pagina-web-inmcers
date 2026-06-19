import React, { useEffect, useState, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, FileSpreadsheet, Building } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { getContactInfo } from '../lib/sanity';
import type { ContactInfo } from '../lib/sanity';
import FAQAccordion from '../components/ui/FAQAccordion';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import gsap from 'gsap';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Contacto: React.FC = () => {
  const [contact, setContact] = useState<ContactInfo | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  // Hooks de Revelado al Scroll
  const [contactRef, contactVisible] = useScrollReveal();
  const [faqRef, faqVisible] = useScrollReveal();
  const [mapRef, mapVisible] = useScrollReveal();
  
  // Estados del formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('instalacion');
  const [company, setCompany] = useState('');
  const [nit, setNit] = useState('');
  const [message, setMessage] = useState('');
  
  // Control de feedback
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    getContactInfo().then(data => setContact(data));
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(titleRef.current, { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' });
      gsap.from(subtitleRef.current, { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'El nombre es obligatorio.';
    if (!phone.trim()) newErrors.phone = 'El teléfono o WhatsApp es obligatorio.';
    if (!message.trim()) newErrors.message = 'El mensaje o medidas es obligatorio.';
    
    // Validación adicional si es mayorista
    if (projectType === 'mayorista') {
      if (!company.trim()) newErrors.company = 'El nombre de la empresa es obligatorio para distribuidores.';
    }
    
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Ingrese un correo electrónico válido.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const getWhatsAppLink = () => {
    let pTypeLabel = '';
    switch(projectType) {
      case 'suministro': pTypeLabel = 'Suministro de Materiales'; break;
      case 'instalacion': pTypeLabel = 'Instalación Llave en Mano'; break;
      case 'herreria': pTypeLabel = 'Herrería / Estructuras'; break;
      case 'mayorista': pTypeLabel = 'Distribuidor Mayorista'; break;
      default: pTypeLabel = 'Consulta General';
    }

    let text = `Hola Inmcers S.A, me comunico a través del sitio web:\n\n*Nombre:* ${name}\n*Teléfono:* ${phone}\n*Correo:* ${email || 'No proporcionado'}\n*Tipo de Proyecto:* ${pTypeLabel}`;
    
    if (projectType === 'mayorista') {
      text += `\n*Empresa:* ${company}\n*NIT:* ${nit || 'No proporcionado'}`;
    } else if (company) {
      text += `\n*Empresa:* ${company}`;
    }
    
    text += `\n*Mensaje:* ${message}`;
    return `https://wa.me/50242120707?text=${encodeURIComponent(text)}`;
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setProjectType('instalacion');
    setCompany('');
    setNit('');
    setMessage('');
    setIsSuccess(false);
  };

  return (
    <div ref={containerRef} className="pt-24 bg-slate-50 text-slate-800 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.01] z-0"></div>
      <Helmet>
        <title>Contacto y Cotizaciones — Inmcers S.A</title>
        <meta 
          name="description" 
          content="Comuníquese con la fábrica de mallas en Guatemala. Cotizaciones rápidas de malla ciclón, razor ribbon y cerramientos perimetrales. Asesoría experta a nivel nacional." 
        />
      </Helmet>
      <Breadcrumbs items={[{ label: "Contacto" }]} />
      
      {/* Encabezado (Dark Theme for high visual identity) */}
      <section className="relative bg-secondary py-20 px-4 sm:px-6 lg:px-8 border-b border-secondary-light/30 overflow-hidden text-center z-10">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-radial-glow rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-radial-glow-accent rounded-full blur-3xl opacity-40"></div>

        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Atención Inmediata</span>
          <h1 
            ref={titleRef}
            className="text-4xl font-title font-extrabold !text-white tracking-tight sm:text-5xl"
          >
            Contacto y Presupuestos
          </h1>
          <p 
            ref={subtitleRef}
            className="text-lg text-slate-350 font-body max-w-2xl mx-auto leading-relaxed"
          >
            Estamos listos para asesorarle en su proyecto de seguridad perimetral. Escríbanos o comuníquese directamente.
          </p>
        </div>
      </section>

      {/* Grid de Información y Formulario (Light Sections) */}
      <section ref={contactRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Informacion Oficial a la izquierda */}
          {contact && (
            <div className={`lg:col-span-5 space-y-6 transition-all duration-700 ease-out transform ${contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="space-y-4 text-left">
                <h2 className="text-2xl font-title font-extrabold text-slate-900">Nuestra Planta y Almacén</h2>
                <div className="w-12 h-1 bg-primary rounded-full"></div>
                <p className="font-body text-slate-600 text-sm leading-relaxed">
                  Visítenos o comuníquese a través de nuestros canales oficiales. Atendemos consultas técnicas y despachamos a nivel nacional.
                </p>
              </div>

              <div className="space-y-4 text-left">
                {/* Dirección */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mr-4 border border-primary/20">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-title font-bold text-sm text-slate-900">Dirección Física</h3>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">{contact.address}</p>
                  </div>
                </div>

                {/* Teléfonos */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mr-4 border border-primary/20">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-title font-bold text-sm text-slate-900">Central PBX</h3>
                    <p className="text-slate-800 text-sm mt-1 font-bold hover:text-primary transition-colors">
                      <a href={`tel:+502${contact.pbx.replace(/-/g, '')}`} className="cursor-pointer">{contact.pbx}</a>
                    </p>
                  </div>
                </div>

                {/* WhatsApps */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mr-4 border border-primary/20">
                    <i className="fa-brands fa-whatsapp text-xl text-primary"></i>
                  </div>
                  <div>
                    <h3 className="font-title font-bold text-sm text-slate-900">Líneas de WhatsApp</h3>
                    <div className="flex flex-col mt-1 space-y-1">
                      {contact.whatsappLines.map((num, idx) => (
                        <a
                          key={idx}
                          href={`https://wa.me/502${num.replace(/-/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 hover:text-primary font-semibold text-xs transition-colors cursor-pointer"
                        >
                          +502 {num} {idx === 0 ? '(Ventas Directas)' : '(Proyectos Corporativos)'}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Correos */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mr-4 border border-primary/20">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-title font-bold text-sm text-slate-900">Correos Oficiales</h3>
                    <div className="grid grid-cols-1 gap-2 mt-1">
                      {contact.emails.map((e, idx) => (
                        <div key={idx} className="flex flex-col">
                          <span className="text-[9px] text-slate-400 font-bold uppercase">{e.label}:</span>
                          <a href={`mailto:${e.email}`} className="text-slate-700 hover:text-primary transition-colors text-xs font-semibold cursor-pointer">
                            {e.email}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Horarios */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mr-4 border border-primary/20">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-title font-bold text-sm text-slate-900">Horario de Atención</h3>
                    <p className="text-slate-600 text-xs mt-1">Lunes a Viernes: 7:30 AM a 5:00 PM</p>
                    <p className="text-slate-600 text-xs">Sábado: 8:00 AM a 12:00 PM</p>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Formulario a la derecha (Light container card) */}
          <div className={`lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md text-left transition-all duration-700 ease-out transform ${
            contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '200ms' }}>
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-title font-extrabold text-slate-900">Envíe un Mensaje</h2>
                  <p className="font-body text-xs sm:text-sm text-slate-600">
                    Complete los detalles del proyecto y nos comunicaremos con usted.
                  </p>
                </div>

                {/* Nombre */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider" htmlFor="name">
                    Nombre Completo *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border font-body text-sm bg-slate-50 text-slate-900 focus:outline-none focus:border-primary ${
                      errors.name ? 'border-red-500' : 'border-slate-250'
                    }`}
                    placeholder="Juan Pérez"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 font-body">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Teléfono */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider" htmlFor="phone">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border font-body text-sm bg-slate-50 text-slate-900 focus:outline-none focus:border-primary ${
                        errors.phone ? 'border-red-500' : 'border-slate-250'
                      }`}
                      placeholder="Ej. 4212-0707"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 font-body">{errors.phone}</p>}
                  </div>

                  {/* Correo */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider" htmlFor="email">
                      Correo Electrónico
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-250 bg-slate-50 text-slate-900 font-body text-sm focus:outline-none focus:border-primary"
                      placeholder="juan@correo.com"
                    />
                  </div>
                </div>

                {/* Tipo de Servicio */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider" htmlFor="projectType">
                    Tipo de Servicio / Solicitud
                  </label>
                  <select
                    id="projectType"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-250 bg-slate-50 text-slate-900 font-body text-sm focus:outline-none focus:border-primary cursor-pointer"
                  >
                    <option value="instalacion">Instalación Llave en Mano (Con mano de obra)</option>
                    <option value="suministro">Suministro Directo (Solo materiales)</option>
                    <option value="herreria">Herrería Estructural / Techados / Portones</option>
                    <option value="mayorista">Distribuidor Mayorista (Ferreterías / Constructoras)</option>
                  </select>
                </div>

                {/* Conditional Fields for Wholesalers/Corporates */}
                {projectType === 'mayorista' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-in slide-in-from-top-4 duration-300">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider" htmlFor="company">
                        Nombre de la Empresa / Ferretería *
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          id="company"
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50 text-slate-900 font-body text-sm focus:outline-none focus:border-primary ${
                            errors.company ? 'border-red-500' : 'border-slate-250'
                          }`}
                          placeholder="Ferretería La Bendición"
                        />
                      </div>
                      {errors.company && <p className="text-red-500 text-xs mt-1 font-body">{errors.company}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider" htmlFor="nit">
                        NIT de Facturación (Opcional)
                      </label>
                      <div className="relative">
                        <FileSpreadsheet className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          id="nit"
                          type="text"
                          value={nit}
                          onChange={(e) => setNit(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-250 bg-slate-50 text-slate-900 font-body text-sm focus:outline-none focus:border-primary"
                          placeholder="Ej: 123456-7"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1.5 animate-in fade-in duration-300">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider" htmlFor="company">
                      Empresa (Opcional)
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-250 bg-slate-50 text-slate-900 font-body text-sm focus:outline-none focus:border-primary"
                      placeholder="Empresa o Nombre del Proyecto"
                    />
                  </div>
                )}

                {/* Mensaje / Medidas */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider" htmlFor="message">
                    Detalles del Proyecto o Solicitud *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border font-body text-sm bg-slate-50 text-slate-900 focus:outline-none focus:border-primary ${
                      errors.message ? 'border-red-500' : 'border-slate-250'
                    }`}
                    placeholder={
                      projectType === 'mayorista'
                        ? 'Ej. Solicito catálogo de precios mayoristas de malla ciclón y accesorios para reventa en nuestra ferretería ubicada en Jutiapa.'
                        : 'Ej. Solicito cotización para instalación de 75 metros de malla ciclón de 2.00m de altura con razor ribbon superior para un residencial en Fraijanes.'
                    }
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1 font-body">{errors.message}</p>}
                </div>

                {/* Botón de Envío */}
                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 inline-flex items-center justify-center px-6 py-4 rounded-xl bg-primary hover:bg-primary-hover disabled:bg-primary/50 text-white font-body font-bold text-sm transition-all duration-300 shadow-md cursor-pointer"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Enviando...' : 'Enviar por Formulario'}
                  </button>
                  
                  <a
                    href={name && phone && message ? getWhatsAppLink() : '#'}
                    onClick={(e) => {
                      if (!validateForm()) {
                        e.preventDefault();
                      }
                    }}
                    target={name && phone && message ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`flex-1 inline-flex items-center justify-center px-6 py-4 rounded-xl bg-accent text-white font-body font-bold text-sm transition-all duration-300 shadow-md ${
                      name && phone && message ? 'hover:bg-accent-hover cursor-pointer' : 'opacity-60 cursor-not-allowed'
                    }`}
                    title="Llene Nombre, Teléfono y Mensaje primero para habilitar el envío directo"
                  >
                    <i className="fa-brands fa-whatsapp text-base mr-2 text-green-400"></i>
                    Enviar a WhatsApp
                  </a>
                </div>
              </form>
            ) : (
              /* Mensaje de Éxito */
              <div className="text-center py-12 space-y-6 animate-in zoom-in duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary border border-primary/20">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-title font-extrabold text-2xl text-slate-900">¡Mensaje Enviado con Éxito!</h3>
                  <p className="font-body text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Hemos recibido su solicitud. Uno de nuestros asesores técnicos de **Inmcers S.A** se comunicará con usted de inmediato.
                  </p>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white font-body font-bold text-sm shadow-md cursor-pointer"
                  >
                    <i className="fa-brands fa-whatsapp text-base mr-2"></i>
                    Enviar copia por WhatsApp
                  </a>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-body font-semibold text-sm transition-colors cursor-pointer"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* SECCIÓN INTEGRADAS: PREGUNTAS FRECUENTES (FAQ) - (Light Section) */}
      <section ref={faqRef} className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200 bg-slate-100/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ease-out ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Resolución de Dudas</span>
            <h2 className="text-3xl font-title font-extrabold text-slate-900 mt-3">Preguntas Frecuentes</h2>
            <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-600 text-xs mt-4">
              Consulte las respuestas rápidas sobre fabricación de mallas, plazos, garantías y envíos en Guatemala.
            </p>
          </div>
          
          <FAQAccordion />
        </div>
      </section>

      {/* Mapa de Ubicación */}
      {contact && contact.googleMapsEmbed && (
        <section ref={mapRef} className={`map-section h-[450px] w-full border-t border-slate-200 relative overflow-hidden transition-all duration-700 ease-out transform ${
          mapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <iframe
            src={contact.googleMapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Física de Inmcers S.A en Zona 21, Guatemala"
          ></iframe>
        </section>
      )}

    </div>
  );
};

export default Contacto;
