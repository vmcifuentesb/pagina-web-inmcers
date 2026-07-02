import { img } from './images';

export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: 'malla-ciclon' | 'razor-ribbon' | 'privacinta' | 'tuberia' | 'herreria' | 'accesorios' | 'instalaciones';
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
  // --- PRODUCTOS DE MALLA ---
  {
    id: 'prod-3',
    title: 'Malla Ciclón Galvanizada',
    slug: 'malla-galvanizada',
    description: 'Fabricación propia de malla galvanizada de alta calidad y resistencia para seguridad perimetral. Excelente protección contra la corrosión.',
    category: 'malla-ciclon',
    specifications: [
      'Calibres disponibles: 11, 12, 12.5, 13, 14',
      'Alturas estándar: 1.0, 1.5, 2.0, 2.5, 3.0 metros',
      'Acabados en Triple Galvanizado (HG)',
      'Medidas de cuadro: desde 2 ¾" hasta ½" de abertura'
    ],
    image: img('/images/fotos/Malla galvanizada (1).jpg'),
    featured: true
  },
  {
    id: 'prod-4',
    title: 'Malla PVC Verde',
    slug: 'malla-pvc-verde',
    description: 'Malla ciclón con recubrimiento de PVC en color verde. Ofrece protección adicional contra la humedad y una excelente estética para áreas residenciales o deportivas.',
    category: 'malla-ciclon',
    specifications: [
      'Disponible únicamente en color Verde Bosque',
      'Mayor durabilidad en climas húmedos y zonas costeras',
      'Calibres reforzados para mayor firmeza'
    ],
    image: img('/images/catalogo/Malla PVC.jpg'),
    featured: true
  },
  {
    id: 'prod-4-priva',
    title: 'Malla PVC con Privacinta',
    slug: 'malla-pvc-privacinta',
    description: 'Malla ciclón combinada con cintas plásticas de privacidad (Privacinta) entrelazadas en el tejido para un bloqueo visual del 95%.',
    category: 'malla-ciclon',
    specifications: [
      'Privacinta disponible en Verde, Gris y Azul',
      'Bloqueo visual óptimo para residencias y colegios',
      'Material con protección UV para evitar decoloración'
    ],
    image: img('/images/catalogo/Malla PVCcon privacinta (1).JPG'),
    featured: true
  },
  // --- ACCESORIOS ---
  {
    id: 'acc-1',
    title: 'Tapones Plásticos',
    slug: 'tapones-plasticos',
    description: 'Tapones plásticos de alta calidad para sellar extremos de tubos galvanizados, evitando filtraciones de agua y óxido interno.',
    category: 'accesorios',
    specifications: [
      'Para tubos de diámetros de 1 ¼", 1 ½" y 2"',
      'Material termoplástico resistente a la intemperie'
    ],
    image: img('/images/catalogo/Tapón de púa.jpg'),
    featured: false
  },
  {
    id: 'acc-2',
    title: 'Unión para Tubería',
    slug: 'union-tubo',
    description: 'Coples de unión para alinear y conectar tramos de tubos galvanizados estructurales de forma segura.',
    category: 'accesorios',
    specifications: [
      'Medidas disponibles: 1 ¼", 1 ½" y 2"',
      'Galvanizado de alta resistencia mecánica'
    ],
    image: img('/images/catalogo/Codo.JPG'),
    featured: false
  },
  {
    id: 'acc-3',
    title: 'Copa Doble con Abrazadera',
    slug: 'copa-doble-abrazadera',
    description: 'Accesorio esquinero de acoplamiento doble con abrazadera incorporada de media luna para fijar rieles superiores en postes tensores.',
    category: 'accesorios',
    specifications: [
      'Facilita la instalación de marcos perimetrales firmes',
      'Medidas estándar: para tubos de 1 ¼", 1 ½" y 2"'
    ],
    image: img('/images/catalogo/Copa con abrazadera.JPG'),
    featured: false
  },
  {
    id: 'acc-4',
    title: 'Espada Sencilla con Tapón Púa de Aluminio',
    slug: 'espada-sencilla-tapon',
    description: 'Espada de soporte para líneas superiores de alambre de púas, equipada con tapón púa de aluminio para tubos galvanizados.',
    category: 'accesorios',
    specifications: [
      'Compatible con tubos de 1 ¼", 1 ½" y 2"',
      'Material de aluminio anticorrosivo'
    ],
    image: img('/images/catalogo/Espada sencilla.jpg'),
    featured: false
  },
  {
    id: 'acc-5',
    title: 'Privacinta (Rollos)',
    slug: 'privacinta-rollo',
    description: 'Rollos de cinta plástica de privacidad para entrelazar en mallas ciclón residenciales o comerciales.',
    category: 'accesorios',
    specifications: [
      'Colores disponibles: Verde, Gris y Azul',
      'Estabilidad térmica y protección UV',
      'Anchos estándar compatibles con mallas ciclón de 2" y 2.5"'
    ],
    image: img('/images/catalogo/Privacinta verde.JPG'),
    featured: true
  },
  {
    id: 'acc-6',
    title: 'Engrapadora Markwell y Grapas',
    slug: 'engrapadora-markwell',
    description: 'Herramienta profesional marca Markwell y grapas metálicas especiales para fijación rápida y segura de Privacinta en la malla.',
    category: 'accesorios',
    specifications: [
      'Grapas de acero galvanizado resistentes al óxido',
      'Aplicación rápida y acabado firme'
    ],
    image: img('/images/catalogo/Engrapadora y grapas (1).jpg'),
    featured: false
  },
  // --- SEGURIDAD ---
  {
    id: 'prod-5',
    title: 'Razor Ribbon (Concertina)',
    slug: 'razor-ribbon',
    description: 'Barrera de seguridad física disuasiva tipo concertina de cuchillas de acero galvanizado o acero inoxidable.',
    category: 'malla-ciclon',
    specifications: [
      'Razor Ribbon: Diámetros de Ø 350 mm, 450 mm, 600 mm, 750 mm',
      'Alambre de púas espigado de alta tensión superior',
      'Cuchillas cortantes de acero inoxidable 304 o galvanizado'
    ],
    image: img('/images/razor_ribbon.png'),
    featured: true
  },
  {
    id: 'prod-7',
    title: 'Tubería Estructural Galvanizada',
    slug: 'tuberia-galvanizada',
    description: 'Tubería redonda para postes esquineros, tensores y rieles de marcos de soporte en mallas perimetrales.',
    category: 'malla-ciclon',
    specifications: [
      'Diámetros estándar: 1 ¼", 1 ½" y 2"',
      'Chapa calibre 18 y chapa pesada',
      'Resistente a la intemperie por baño galvanizado'
    ],
    image: img('/images/fotos/Bultos de alambre 2.jpeg'),
    featured: false
  },
  // --- HERRERÍA ---
  {
    id: 'prod-8',
    title: 'Estructuras y Trabajos de Herrería',
    slug: 'trabajos-herreria',
    description: 'Desarrollamos portones, balcones, barandas, toldos, casetas y protectores de herrería profesional hechos a medida.',
    category: 'herreria',
    specifications: [
      'Diseño personalizado para residencias y comercios',
      'Soldadura profesional garantizada',
      'Fabricación e instalación profesional'
    ],
    image: img('/images/fotos/Portones (1).jpg'),
    featured: true
  },
  // --- INSTALACIONES ---
  {
    id: 'prod-9',
    title: 'Servicio de Instalación Profesional',
    slug: 'instalacion-integral',
    description: 'Servicio completo de instalación de mallas, razor ribbon, privacinta y herrería a nivel nacional.',
    category: 'instalaciones',
    specifications: [
      'Supervisión y control de obra en campo',
      'Instalación firme y con garantía escrita de mano de obra'
    ],
    image: img('/images/fotos/_MG_3133.JPG'),
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
    detailedDescription: 'En Inmcers S.A fabricamos de forma directa la malla galvanizada y PVC verde, garantizando precios competitivos de fábrica. Para tuberías, accesorios y demás perfiles, dependemos de los precios del mercado para ofrecerle la mejor oferta comercial.',
    features: [
      'Fabricación directa de malla galvanizada y PVC verde',
      'Materiales de alta resistencia y durabilidad',
      'Atención personalizada y asesoría comercial',
      'Cobertura de envíos a los 22 departamentos'
    ]
  },
  {
    id: 'srv-2',
    title: 'Instalación y Proyectos de Cerramiento',
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
    title: 'Asesoría de Ventas',
    slug: 'asesoria-ventas',
    icon: 'Award',
    shortDescription: 'Atención personalizada y orientación técnica en cada etapa de su proyecto.',
    detailedDescription: 'Asesoría comercial y técnica personalizada. Nuestro equipo de ventas le brinda orientación sobre las características de cada producto, métodos de instalación, especificaciones técnicas y la mejor solución para las necesidades de su proyecto.',
    features: [
      'Orientación comercial y técnica personalizada',
      'Cotizaciones formales y detalladas',
      'Explicación de calibres y especificaciones',
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
