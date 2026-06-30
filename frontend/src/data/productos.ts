import { img } from '../lib/images';

export interface Producto {
  id: string
  nombre: string
  descripcion: string
  imagen: string
  categoria: string
  especificaciones?: string[]
  calibres?: string[]
  alturas?: string[]
  acabados?: string[]
  usos?: string[]
}

export const productos: Producto[] = [
  {
    id: "malla-ciclon",
    nombre: "Malla Ciclón Galvanizada",
    descripcion: "Fabricación propia en PVC Verde y Galvanizado (HG). Ideal para cerramientos residenciales, industriales y deportivos.",
    imagen: img("/images/fotos/Malla galvanizada (1).jpg"),
    categoria: "Malla Ciclón",
    calibres: ["Calibre 11", "Calibre 12", "Calibre 12.5", "Calibre 13", "Calibre 14"],
    alturas: ["1.0 m", "1.5 m", "2.0 m", "2.5 m", "3.0 m"],
    acabados: ["Galvanizado por Inmersión en Caliente (HG)", "Recubrimiento PVC (Verde únicamente)"],
    usos: ["Cerramientos residenciales", "Canchas deportivas", "Perímetros industriales", "Colegios y parques"],
    especificaciones: [
      "Disponible en PVC Verde y Galvanizado (HG)",
      "Fabricación propia en planta",
      "Alta durabilidad y resistencia a la intemperie"
    ]
  },
  {
    id: "razor-ribbon",
    nombre: "Razor Ribbon",
    descripcion: "Alambre de cuchillas de alta seguridad ideal para perímetros críticos. Disponible en galvanizado y acero inoxidable.",
    imagen: img("/images/razor_ribbon.png"),
    categoria: "Seguridad",
    calibres: ["Tipo Concertina (espiral)", "Tipo Plano (Flat Wrap)", "Tipo Cruceta (Cross)"],
    alturas: ["3 anillas (Ø 350 mm)", "4 anillas (Ø 450 mm)", "5 anillas (Ø 600 mm)", "6 anillas (Ø 750 mm)"],
    acabados: ["Galvanizado (HG)", "Acero Inoxidable 304"],
    usos: ["Perímetros de alta seguridad", "Cárceles y centros penitenciarios", "Bodegas industriales", "Subestaciones eléctricas"],
    especificaciones: [
      "Disponible en Galvanizado (HG)",
      "Disponible en Acero Inoxidable",
      "Alta resistencia al corte",
      "Máxima seguridad perimetral"
    ]
  },
  {
    id: "privacinta",
    nombre: "Privacinta",
    descripcion: "Cinta plástica de privacidad para mallas ciclón. Tejido de alta densidad para máxima discreción.",
    imagen: img("/images/fotos/Privacinta verde3.jpg"),
    categoria: "Accesorios",
    calibres: ["2 ¾\"", "2 ½\"", "2\"", "1\"", "½\""],
    acabados: ["Verde", "Gris", "Azul"],
    usos: ["Privacidad residencial", "Cerramientos de colegios", "Canchas deportivas", "Áreas recreativas"],
    especificaciones: [
      "Medidas: 2 ¾\", 2 ½\", 2\", 1\", ½\"",
      "Colores disponibles: Verde, Gris y Azul",
      "Protección contra rayos UV",
      "Fácil entrelazado en malla"
    ]
  },
  {
    id: "tuberia",
    nombre: "Tubería Galvanizada",
    descripcion: "Tubería estructural para postes y soportes de sistemas de cerramiento. Resistente a la corrosión.",
    imagen: img("/images/fotos/Bultos de alambre 2.jpeg"),
    categoria: "Estructura",
    calibres: ["1 ¼\" (42 mm)", "1 ½\" (48 mm)", "2\" (60 mm)"],
    alturas: ["3 m", "4 m", "5 m", "6 m", "Personalizable"],
    acabados: ["Galvanizado por Inmersión en Caliente (HG)", "Galvanizado + Pintura"],
    usos: ["Postes para malla ciclón", "Estructuras de portones", "Cerramientos industriales", "Soportes estructurales"],
    especificaciones: [
      "Diámetros: 1 ¼\", 1 ½\", 2\"",
      "Galvanizada",
      "Resistente a la corrosión",
      "Uso estructural"
    ]
  },
  {
    id: "alambre-espigado",
    nombre: "Alambre Espigado",
    descripcion: "Alambre de púas tradicional para cerramientos rurales y perimetrales. Económico y resistente.",
    imagen: img("/images/fotos/Alambre espigado (2).jpg"),
    categoria: "Seguridad",
    calibres: ["Calibre 12", "Calibre 14", "Calibre 16"],
    acabados: ["Galvanizado (HG)", "Acero Inoxidable"],
    usos: ["Cerramientos rurales", "Perímetros de fincas", "Divisiones de terreno", "Refuerzo de mallas"],
    especificaciones: [
      "Calibre 12, 14 y 16",
      "Galvanizado",
      "Resistente a la intemperie",
      "Económico"
    ]
  },
  {
    id: "herreria",
    nombre: "Herrería en General",
    descripcion: "Estructuras metálicas personalizadas: puertas, portones, barandas, pasamanos y más. Diseño a medida.",
    imagen: img("/images/fotos/Portones (1).jpg"),
    categoria: "Estructura",
    acabados: ["Hierro forjado", "Acero estructural", "Galvanizado", "Pintura electroestática"],
    usos: ["Portones residenciales", "Puertas industriales", "Barandas y pasamanos", "Estructuras metálicas a medida"],
    especificaciones: [
      "Diseño personalizado",
      "Fabricación a medida",
      "Instalación profesional",
      "Acabados de calidad"
    ]
  },
  {
    id: "techados",
    nombre: "Techados y Enlaminados",
    descripcion: "Soluciones de cubierta con láminas y estructuras metálicas para todo tipo de proyectos.",
    imagen: img("/images/fotos/Techos (1).jpg"),
    categoria: "Estructura",
    acabados: ["Lámina galvanizada", "Lámina pintro", "Policarbonato", "Teja metálica"],
    usos: ["Techos de bodegas", "Cobertizos industriales", "Marquesinas", "Áreas de carga"],
    especificaciones: [
      "Estructura metálica",
      "Láminas de calidad",
      "Impermeabilización",
      "Instalación profesional"
    ]
  }
]
