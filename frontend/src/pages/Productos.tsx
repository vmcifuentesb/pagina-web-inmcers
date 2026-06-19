import React, { useEffect, useState } from 'react';
import { Search, Filter, Phone, Check, Info, Shield, Package, Truck, TrendingDown, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { getProducts } from '../lib/sanity';
import type { Product } from '../lib/sanity';
import { Link } from 'react-router-dom';

export const Productos: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data);
      setFilteredProducts(data);
    });
  }, []);

  useEffect(() => {
    let result = products;

    // Filtro por categoría
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filtro por búsqueda de texto
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
         p.title.toLowerCase().includes(query) || 
         p.description.toLowerCase().includes(query) ||
         p.specifications.some(spec => spec.toLowerCase().includes(query))
      );
    }

    setFilteredProducts(result);
  }, [selectedCategory, searchQuery, products]);

  const categories = [
    { name: 'Todos', value: 'all' },
    { name: 'Accesorios', value: 'accesorios' },
    { name: 'Productos de Malla', value: 'malla-ciclon' },
    { name: 'Herrería', value: 'herreria' },
    { name: 'Instalaciones', value: 'instalaciones' }
  ];

  return (
    <div className="pt-24 bg-slate-50 text-slate-800 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.01] z-0"></div>
      <Helmet>
        <title>Catálogo de Mallas y Cerramientos — Inmcers S.A</title>
        <meta 
          name="description" 
          content="Industria de mallas y cercas en Guatemala. Catálogo de malla ciclón galvanizada, PVC, razor ribbon, privacinta, tubería y accesorios para cerramiento perimetral." 
        />
      </Helmet>
      
      {/* Encabezado (Dark Style for premium visual impact) */}
      <section className="relative bg-secondary py-20 px-4 sm:px-6 lg:px-8 border-b border-secondary-light/30 text-center overflow-hidden">
        {/* Glows de fondo */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-radial-glow rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-radial-glow-accent rounded-full blur-3xl opacity-40"></div>
        
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Catálogo Técnico Oficial</span>
          <h1 className="text-4xl font-title font-extrabold !text-white tracking-tight sm:text-5xl">
            Catálogo de Mallas y Cerramientos de Fábrica
          </h1>
          <p className="text-lg text-slate-350 font-body max-w-2xl mx-auto leading-relaxed">
            Fabricación propia de malla ciclón galvanizada y PVC. Distribuidor de reja 3D, razor ribbon, alambres y postes al por mayor en Guatemala con más de 30 años de trayectoria.
          </p>
        </div>
      </section>

      {/* Filtros e Interactividad (Light background) */}
      <section className="relative z-10 py-6 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          {/* Categorías */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2 flex items-center">
              <Filter className="w-3.5 h-3.5 mr-1 text-primary" />
              Categoría:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-lg font-body font-semibold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Barra de Búsqueda */}
          <div className="relative w-full md:max-w-xs shrink-0">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar producto o medida..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-250 font-body text-sm text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all bg-slate-50 placeholder-slate-400"
            />
          </div>

        </div>
      </section>

      {/* Listado de Productos (Light background cards) */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id}
                  className="flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm hover:border-primary/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group"
                >
                  {/* Contenedor de Imagen */}
                  <div className="relative h-56 bg-slate-50/50 p-8 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-contain h-full w-full opacity-90 transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Badge de categoría */}
                    <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
                      {product.category === 'malla-ciclon' 
                        ? 'Malla Ciclón' 
                        : product.category === 'razor-ribbon' 
                        ? 'Razor' 
                        : product.category === 'privacinta'
                        ? 'Privacinta'
                        : product.category === 'tuberia'
                        ? 'Tubería'
                        : 'Herrería'}
                    </div>
                  </div>

                  {/* Detalles del Producto */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <h3 className="font-title font-bold text-xl text-slate-900 leading-snug group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Especificaciones Técnicas */}
                    <div className="bg-slate-50 p-4 rounded-xl space-y-2.5 border border-slate-100">
                      <div className="flex items-center space-x-1.5 text-primary">
                        <Info className="w-4 h-4 shrink-0" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Ficha Técnica Oficial:</span>
                      </div>
                      <ul className="space-y-1.5">
                        {product.specifications.map((spec, idx) => (
                          <li key={idx} className="flex items-start text-xs text-slate-700 font-body">
                            <Check className="w-3.5 h-3.5 mr-2 text-primary shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Botón de Cotización */}
                    <div className="pt-2">
                      <a
                        href={`https://wa.me/50242120707?text=Hola%20Inmcers%20S.A,%20quiero%20cotizar%20el%20producto:%20${encodeURIComponent(product.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full py-3 px-4 rounded-lg bg-primary hover:bg-primary-hover text-white font-body font-bold text-sm transition-all duration-200 shadow-md cursor-pointer"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Cotizar en WhatsApp
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-xl mx-auto space-y-4">
              <span className="text-4xl block">🔍</span>
              <h3 className="font-title font-bold text-xl text-slate-900">No se encontraron productos</h3>
              <p className="font-body text-slate-600 text-sm max-w-md mx-auto">
                No pudimos encontrar resultados que coincidan con la búsqueda "{searchQuery}". Intente con otro término o seleccione una categoría diferente.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-body font-semibold text-sm rounded-lg hover:bg-primary-hover transition-colors cursor-pointer"
              >
                Limpiar Filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECCIÓN INTEGRADA: DISTRIBUIDOR / VENTAS AL POR MAYOR (Light Gray background) */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block">Canal de Distribución</span>
            <h2 className="text-3xl font-title font-extrabold text-slate-900">Ventas Mayoristas y Distribuidores</h2>
            <p className="font-body text-slate-600">
              Ofrecemos precios competitivos de fábrica y stock permanente para ferreterías, constructoras e instaladores en toda Guatemala.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Shield size={32} className="text-primary" />, title: "Fabricación Propia", desc: "Producimos nuestra propia malla ciclón en planta, garantizando calidad consistente y disponibilidad permanente." },
              { icon: <Package size={32} className="text-primary" />, title: "Stock Permanente", desc: "Contamos con un inventario robusto de malla ciclón, tubería, privacinta y accesorios para entregas inmediatas." },
              { icon: <Truck size={32} className="text-primary" />, title: "Cobertura Nacional", desc: "Despachamos pedidos mayoristas en los 22 departamentos de Guatemala con flota de transporte propia." },
              { icon: <TrendingDown size={32} className="text-primary" />, title: "Precios Sin Intermediarios", desc: "Al comprar directo de fábrica obtienes los mejores márgenes del mercado para potenciar tu negocio." },
              { icon: <Users size={32} className="text-primary" />, title: "Asistencia Técnica", desc: "Capacitación técnica sobre calibres, aberturas y soporte técnico para tu equipo de ventas." },
              { icon: <Phone size={32} className="text-primary" />, title: "Atención Preferencial", desc: "Ejecutivo de cuentas asignado para procesar, programar y coordinar la logística de tus pedidos rápidamente." }
            ].map((v) => (
              <div key={v.title} className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary/50 transition-all duration-300 h-full shadow-sm relative group overflow-hidden">
                <div className="mb-4">{v.icon}</div>
                <h3 className="text-base font-extrabold mb-2 text-slate-900">{v.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-xl mx-auto space-y-6">
            <h3 className="text-xl font-bold text-slate-900">¿Deseas solicitar una lista de precios mayorista?</h3>
            <p className="text-xs text-slate-650 leading-relaxed">
              Ponte en contacto con nuestro departamento de proyectos y ventas corporativas para recibir tu cotización de distribuidor o abrir una cuenta con nosotros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/mayorista" 
                className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-xl transition duration-200 text-xs flex items-center justify-center cursor-pointer shadow-md"
              >
                Ver Información de Mayoristas
              </Link>
              <Link 
                to="/contacto" 
                className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-350 font-bold py-3 px-6 rounded-xl transition duration-200 text-xs flex items-center justify-center cursor-pointer"
              >
                Solicitar Cotización de Distribuidor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guía Técnica de Selección (Light Section) */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">Ayuda Comercial</span>
            <h2 className="text-3xl font-title font-extrabold text-slate-900">Guía Técnica de Selección</h2>
            <p className="font-body text-slate-600 mt-4 font-medium">Entienda las diferencias entre calibres y aberturas para elegir la mejor opción para su proyecto de cerramiento.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Comparación de Calibres */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-title font-bold text-xl text-slate-900 mb-6 flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <span className="text-primary text-sm font-black">1</span>
                </div>
                Grosor del alambre (Calibre)
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-slate-950">Calibre 12.5</span>
                    <span className="text-[10px] px-2 py-0.5 bg-accent/10 text-accent rounded font-extrabold uppercase">Económico</span>
                  </div>
                  <p className="text-xs sm:text-sm font-body text-slate-600 leading-relaxed">Ideal para divisiones internas temporales o perímetros de bajo riesgo. El alambre es más delgado y maleable.</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-xl border border-primary/20 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-primary">Calibre 11</span>
                    <span className="text-[10px] px-2 py-0.5 bg-primary/20 text-primary-hover rounded font-bold uppercase">Estándar Comercial</span>
                  </div>
                  <p className="text-xs sm:text-sm font-body text-slate-600 leading-relaxed">La opción más equilibrada. Excelente resistencia estructural para terrenos, canchas y residencias.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-slate-950">Calibre 10</span>
                    <span className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded font-extrabold uppercase">Alta Seguridad</span>
                  </div>
                  <p className="text-xs sm:text-sm font-body text-slate-600 leading-relaxed">Alambre muy grueso y rígido. Recomendado para uso industrial, bodegas o áreas de alta seguridad.</p>
                </div>
              </div>
            </div>

            {/* Comparación de Aberturas */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-title font-bold text-xl text-slate-900 mb-6 flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <span className="text-primary text-sm font-black">2</span>
                </div>
                Tamaño del Rombo (Abertura)
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-slate-950">2.5 Pulgadas</span>
                    <span className="text-[10px] px-2 py-0.5 bg-accent/10 text-accent rounded font-extrabold uppercase">Amplio</span>
                  </div>
                  <p className="text-xs sm:text-sm font-body text-slate-600 leading-relaxed">Rombo grande. Uso en delimitaciones generales agrícolas donde no hay riesgo de intrusión humana.</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-xl border border-primary/20 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-primary">2.25 Pulgadas</span>
                    <span className="text-[10px] px-2 py-0.5 bg-primary/20 text-primary-hover rounded font-bold uppercase">Más Utilizado</span>
                  </div>
                  <p className="text-xs sm:text-sm font-body text-slate-600 leading-relaxed">Proporciona excelente visibilidad y resistencia al escalamiento. El estándar para el 80% de los proyectos.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-slate-950">2.0 o Menos</span>
                    <span className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded font-extrabold uppercase">Cerrado</span>
                  </div>
                  <p className="text-xs sm:text-sm font-body text-slate-600 leading-relaxed">Rombo pequeño. Utilizado en avicultura, zoológicos, o áreas que requieren prevenir el paso de objetos pequeños.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
export default Productos;
