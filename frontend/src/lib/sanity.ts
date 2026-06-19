import { img } from './images';

export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: 'malla-ciclon' | 'razor-ribbon' | 'privacinta' | 'tuberia' | 'herreria';
  specifications: string[];
  image: string;
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  icon: string; // Lucide icon name
  shortDescription: string;
  detailedDescription: string;
  features: string[];
}

export interface ContactInfo {
  companyName: string;
  address: string;
  pbx: string;
  whatsappLines: string[];
  emails: { label: string; email: string }[];
  facebookLink: string;
  googleMapsEmbed: string;
}

// Datos locales reales de Inmcers S.A extraídos de la documentación oficial
const LOCAL_PRODUCTS: Product[] = [
  // --- ACCESORIOS ---
  {
    id: 'prod-1',
    title: 'Codos, Escuadras y Copas',
    slug: 'accesorios-tuberia',
    description: 'Accesorios galvanizados como codos, escuadras/esquineros, copas simples y copas dobles con abrazadera de media luna, diseñados para trabajos de cerramiento y tubería PVC.',
    category: 'accesorios' as any,
    specifications: [
      'Fabricado con tubo galvanizado chapa 18',
      'Medidas estándar: 1 ¼", 1 ½" y 2"'
    ],
    image: img(''),
    featured: false
  },
  {
    id: 'prod-2',
    title: 'Aisladores y Postes para Razor',
    slug: 'aisladores-postes',
    description: 'Aisladores de porcelana y postes reforzados para la instalación segura de Razor Ribbon y cercos electrificados.',
    category: 'accesorios' as any,
    specifications: [
      'Aisladores de alta resistencia eléctrica (porcelana)',
      'Espadas y postes diseñados para máxima tensión'
    ],
    image: img(''),
    featured: false
  },
  // --- PRODUCTOS ---
  {
    id: 'prod-3',
    title: 'Malla Galvanizada',
    slug: 'malla-galvanizada',
    description: 'Fabricación de malla galvanizada de alta calidad y resistencia para seguridad perimetral. Excelente protección contra la corrosión.',
    category: 'malla-ciclon' as any,
    specifications: [
      'Cuadro de 2 ¾", 2 ½", 2", 1 ½", 1" ¾ y ½"',
      'Resistente a intemperie'
    ],
    image: img(''),
    featured: true
  },
  {
    id: 'prod-4',
    title: 'Malla PVC con Privacinta',
    slug: 'malla-pvc',
    description: 'Malla recubierta en PVC (verde, gris o azul) entrelazada con privacinta para máximo resguardo visual y estético.',
    category: 'malla-ciclon' as any,
    specifications: [
      'Medidas de privacinta: 2 ¾", 2 ½", 2", 1 ½" y 1"',
      'Colores: Verde, Gris, Azul'
    ],
    image: img(''),
    featured: true
  },
  {
    id: 'prod-5',
    title: 'Razor Ribbon y Alambre Espigado',
    slug: 'razor-ribbon',
    description: 'Barrera de alta seguridad física tipo concertina (Razor) y alambre espigado tipo económico para refuerzos superiores de bardas.',
    category: 'malla-ciclon' as any,
    specifications: [
      'Razor Ribbon: Galvanizado o HG / Acero inoxidable',
      'Alambre Espigado: Tipo Económico'
    ],
    image: img(''),
    featured: true
  },
  {
    id: 'prod-6',
    title: 'Gaviones',
    slug: 'gaviones',
    description: 'Estructuras de malla galvanizada de alta resistencia para muros de contención, estabilización de taludes y decoración exterior.',
    category: 'malla-ciclon' as any,
    specifications: [
      'Estructuras reticulares robustas',
      'Armado a medida'
    ],
    image: img(''),
    featured: false
  },
  {
    id: 'prod-7',
    title: 'Tubería Galvanizada y Hierro Plano',
    slug: 'tuberia-hierro',
    description: 'Tubería galvanizada para cerramientos y perfiles de hierro plano negro (planas).',
    category: 'malla-ciclon' as any,
    specifications: [
      'Tubería: medidas 1 ¼", 1 ½" y 2"',
      'Planas: Hierro plano negro de ¾ x 3/16'
    ],
    image: img(''),
    featured: false
  },
  // --- HERRERÍA ---
  {
    id: 'prod-8',
    title: 'Estructuras y Trabajos de Herrería',
    slug: 'trabajos-herreria',
    description: 'Desarrollamos balcones, portones, barandas, toldos, casetas, estanterías, jaulas y barandales con acabados profesionales a medida.',
    category: 'herreria' as any,
    specifications: [
      'Soldadura profesional garantizada',
      'Fabricación 100% a medida'
    ],
    image: img(''),
    featured: true
  },
  // --- INSTALACIONES ---
  {
    id: 'prod-9',
    title: 'Servicio de Instalación Integral',
    slug: 'instalacion-integral',
    description: 'Servicios de instalación profesional de malla galvanizada, razor, privacinta, estructuras metálicas y techos/enlaminados.',
    category: 'instalaciones' as any,
    specifications: [
      'Supervisión de obra de principio a fin',
      'Técnicos especialistas en cerramientos'
    ],
    image: img(''),
    featured: true
  }
];

const LOCAL_SERVICES: Service[] = [
  {
    id: 'srv-1',
    title: 'Suministro y Venta de Materiales',
    slug: 'venta-suministro-materiales',
    icon: 'Package',
    shortDescription: 'Materiales de alta calidad y durabilidad, garantizando resistencia y una larga vida útil.',
    detailedDescription: 'En Inmcers S.A somos especialistas en la fabricación y comercialización de malla galvanizada, PVC, tubería y privacinta. Controlamos cada etapa del proceso para garantizar productos con altos estándares de calidad.',
    features: [
      'Fabricación directa de malla ciclón',
      'Materiales de alta resistencia y durabilidad',
      'Atención personalizada y asesoría técnica',
      'Cobertura de envíos a los 22 departamentos'
    ]
  },
  {
    id: 'srv-2',
    title: 'Instalación y Proyectos Llave en Mano',
    slug: 'proyectos-llave-en-mano',
    icon: 'Shield',
    shortDescription: 'Puntualidad en cada entrega e instalación, cumpliendo con los tiempos acordados.',
    detailedDescription: 'Nuestro servicio integral es coordinado por supervisores de proyectos y ejecutado por equipos técnicos especializados. Realizamos la entrega únicamente después de una revisión conjunta con el cliente para asegurar su total satisfacción.',
    features: [
      'Equipos técnicos especializados',
      'Supervisión y seguimiento continuo del proyecto',
      'Revisión conjunta con el cliente',
      'Garantía de acabados precisos y funcionales'
    ]
  },
  {
    id: 'srv-3',
    title: 'Excelente Servicio al Cliente',
    slug: 'servicio-al-cliente',
    icon: 'Award',
    shortDescription: 'Atención personalizada y orientación técnica en cada etapa de su proyecto.',
    detailedDescription: 'Nuestros asesores de ventas altamente capacitados brindan atención personalizada para que usted encuentre la solución en seguridad perimetral que mejor se adapta a sus necesidades, con presupuestos claros y transparentes.',
    features: [
      'Asesores expertos a su disposición',
      'Cotizaciones formales y detalladas',
      'Respaldo de más de 30 años de experiencia',
      'Compromiso, calidad y eficiencia'
    ]
  }
];

const LOCAL_CONTACT: ContactInfo = {
  companyName: "Inmcers S.A",
  address: "5ª Avenida y 2ª Calle \"E\" 11-72, Colonia Guajitos, Zona 21, Municipio de Guatemala, Departamento de Guatemala.",
  pbx: "2218-2800",
  whatsappLines: ["4212-0707", "5856-0315"],
  emails: [
    { label: "Departamento de Ventas", email: "ventas@inmcers.com" },
    { label: "Departamento de Proyectos", email: "proyectos@inmcers.com" },
    { label: "Información General", email: "info@inmcers.com" }
  ],
  facebookLink: "https://www.facebook.com/inmcers.gt", // Enlace de ejemplo representativo
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.4285802264627!2d-90.54013182512165!3d14.574636785906236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a30cf7f4577f%3A0x2897fa12bf1b05bc!2s5a%20Avenida%20%26%202a%20Calle%20E%2C%20Ciudad%20de%20Guatemala!5e0!3m2!1ses!2sgt!4v1718139580193!5m2!1ses!2sgt"
};

// Intenta simular una consulta a Sanity CMS, si falla o da error de configuración, retorna los datos locales estáticos.
export async function getProducts(): Promise<Product[]> {
  try {
    // Si estuviéramos conectados a Sanity en producción haríamos:
    // return await sanityClient.fetch(`*[_type == "product"]`)
    // Simulamos una respuesta asíncrona rápida para emular llamadas a CMS
    return new Promise((resolve) => setTimeout(() => resolve(LOCAL_PRODUCTS), 100));
  } catch (error) {
    console.warn("Error consultando Sanity, usando fallback local:", error);
    return LOCAL_PRODUCTS;
  }
}

export async function getServices(): Promise<Service[]> {
  try {
    return new Promise((resolve) => setTimeout(() => resolve(LOCAL_SERVICES), 100));
  } catch (error) {
    console.warn("Error consultando Sanity, usando fallback local:", error);
    return LOCAL_SERVICES;
  }
}

export async function getContactInfo(): Promise<ContactInfo> {
  try {
    return new Promise((resolve) => setTimeout(() => resolve(LOCAL_CONTACT), 100));
  } catch (error) {
    console.warn("Error consultando Sanity, usando fallback local:", error);
    return LOCAL_CONTACT;
  }
}
