import { Shield, Package, Truck, TrendingDown, Building, Users, ChevronRight, Phone } from "lucide-react"
import { PageTransition } from "../components/ui/PageTransition"
import { SEOHead } from "../components/ui/SEOHead"
import { Breadcrumbs } from "../components/ui/Breadcrumbs"
import { StaggerContainer, StaggerItem } from "../components/ui/StaggerReveal"
import { Link } from "react-router-dom"

export function Mayorista() {
  const triggerWhatsApp = (message = "Hola, me interesa recibir más información sobre distribución.") => {
    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/50242120707?text=${encodedMsg}`, '_blank');
  };

  return (
    <PageTransition>
      <SEOHead
        title="Distribuidor Mayorista de Malla"
        description="Distribuidor mayorista de malla ciclón, tubería y cercas en Guatemala. Precios de fábrica para ferreterías, constructoras y distribuidores."
      />
      <Breadcrumbs items={[{ label: "Mayorista" }]} />
      
      {/* Encabezado (Dark Theme for high impact) */}
      <div className="bg-secondary text-white py-20 border-b border-secondary-light/30 relative overflow-hidden">
        {/* Glows de fondo */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-radial-glow rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-radial-glow-accent rounded-full blur-3xl opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <Building size={48} className="text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-title font-black !text-white mb-4">Distribuidor Mayorista</h1>
          <p className="text-lg text-slate-350 max-w-3xl mx-auto leading-relaxed">
            Precios directos de fábrica para ferreterías, constructoras y distribuidores en todo Guatemala.
          </p>
        </div>
      </div>

      {/* Sección 1 (Light Section) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Alianzas Comerciales</span>
            <h2 className="text-3xl font-title font-extrabold text-slate-900 mt-3">¿Por qué ser distribuidor de Inmcers?</h2>
            <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>
          
          <StaggerContainer>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Shield size={36} />, title: "Fabricación Propia", desc: "Producimos nuestra propia malla ciclón, garantizando calidad consistente y disponibilidad permanente de inventario." },
                { icon: <Package size={36} />, title: "Stock Permanente", desc: "Contamos con inventario amplio de malla ciclón, tubería, privacinta y accesorios para entregas inmediatas." },
                { icon: <Truck size={36} />, title: "Cobertura Nacional", desc: "Realizamos entregas en los 22 departamentos de Guatemala con flota de distribución propia de fábrica." },
                { icon: <TrendingDown size={36} />, title: "Precios Sin Intermediarios", desc: "Al ser fabricantes directos, ofrecemos tarifas preferenciales de distribuidor. Solicite nuestra lista oficial." },
                { icon: <Users size={36} />, title: "Asesoría de Ventas", desc: "Capacitación y soporte comercial para su equipo de ventas. Le ayudamos a impulsar el crecimiento de su negocio." },
                { icon: <Phone size={36} />, title: "Atención Especializada", desc: "Línea directa para mayoristas con un ejecutivo de cuenta asignado para agilizar la cotización y despacho." },
              ].map((v) => (
                <StaggerItem key={v.title}>
                  <div className="text-center p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary/50 hover:shadow-md transition-all duration-300 h-full flex flex-col items-center">
                    <div className="text-primary mb-4 flex justify-center">{v.icon}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Sección 2 (Dark/Blue Section for visual transition) */}
      <section className="py-20 bg-secondary text-white border-b border-secondary-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Sistemas Disponibles</span>
            <h2 className="text-3xl font-title font-extrabold !text-white mt-3">Productos para Distribuidores</h2>
            <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { nombre: "Malla Ciclón", desc: "Galvanizada y forrada en PVC, calibres 10, 11 y 12.5, en todas las aberturas." },
                { nombre: "Tubería Galvanizada", desc: "Diámetros industriales de 1 ¼\" a 2\", largos de 3 a 6 metros." },
                { nombre: "Razor Ribbon", desc: "Concertina galvanizada o de acero inoxidable en diámetros de 18\" y 24\"." },
                { nombre: "Privacinta", desc: "Rollos de cinta de privacidad de alta densidad en verde, café, gris, negro y blanco." },
                { nombre: "Alambre de Púas", desc: "Alambre espigado de alta resistencia, galvanizado en calibres comerciales." },
                { nombre: "Accesorios de Sujeción", desc: "Abrazaderas, tensores, capuchones, soleras, grapas y alambre de amarre." },
                { nombre: "Portones Metálicos", desc: "Portones corredizos y batientes residenciales o de control industrial a medida." },
                { nombre: "Herrería en General", desc: "Estructuras de soporte, postes reforzados, marcos y gaviones." },
              ].map((p) => (
                <StaggerItem key={p.nombre}>
                  <div className="bg-secondary-hover border border-secondary-light/45 rounded-xl p-5 hover:bg-secondary-light/30 hover:border-primary/50 transition-all h-full">
                    <h3 className="font-bold text-white mb-2">{p.nombre}</h3>
                    <p className="text-xs text-slate-350 leading-relaxed">{p.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Sección 3 (Light Section with call to action) */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Solicite su lista de precios al por mayor</h2>
          <p className="text-sm text-slate-600 mb-8 leading-relaxed">
            Póngase en contacto con nuestro equipo comercial hoy mismo y descubra por qué Inmcers S.A es el aliado de distribución perimetral más confiable en Guatemala.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <a 
              href="tel:+50222182800" 
              className="flex items-center justify-center gap-2 bg-secondary text-white px-6 py-4 rounded-xl font-bold text-xs hover:bg-secondary-hover transition-colors shadow-md cursor-pointer"
            >
              <Phone size={16} /> Llamar al PBX
            </a>
            <button 
              onClick={() => triggerWhatsApp("Hola, deseo solicitar la lista oficial de precios para distribuidores / mayorista.")} 
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-4 rounded-xl font-bold text-xs transition-colors shadow-md cursor-pointer"
            >
              WhatsApp <ChevronRight size={16} />
            </button>
            <Link 
              to="/contacto" 
              className="flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-4 rounded-xl font-bold text-xs hover:bg-primary/5 transition-colors cursor-pointer"
            >
              Formulario de Contacto <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Mayorista;
