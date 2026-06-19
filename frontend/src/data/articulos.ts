import { img } from '../lib/images';

export interface Articulo {
  id: string
  titulo: string
  resumen: string
  contenido: string
  fecha: string
  categoria: string
  imagen: string
}

export const articulos: Articulo[] = [
  {
    id: "tipos-malla-ciclon",
    titulo: "Tipos de Malla Ciclón: ¿Cuál elegir para tu proyecto?",
    resumen: "Conoce las diferencias entre malla ciclón PVC y galvanizada, y descubre cuál es la mejor opción según tu tipo de proyecto.",
    contenido: "La malla ciclón es una de las soluciones de cerramiento más populares en Guatemala. En Inmcers S.A fabricamos dos tipos principales: malla ciclón galvanizada por inmersión en caliente (HG) y malla ciclón con recubrimiento PVC.\n\nLa malla HG es ideal para proyectos donde se busca una solución económica y resistente a la intemperie. Su proceso de galvanizado le otorga una capa protectora de zinc que la protege contra la corrosión.\n\nLa malla PVC, por otro lado, ofrece una capa adicional de recubrimiento plástico que la hace más resistente a la humedad y está disponible en varios colores (verde, negro, blanco), lo que la hace perfecta para proyectos residenciales y áreas donde la estética es importante.\n\n¿Cuál elegir? Si buscas economía y durabilidad para un proyecto industrial, la malla HG es tu mejor opción. Si priorizas la estética y trabajas en zonas de alta humedad, la malla PVC es la recomendada.\n\nEn Inmcers te asesoramos sin compromiso para que elijas la mejor opción para tu proyecto.",
    fecha: "2026-05-15",
    categoria: "Productos",
    imagen: img("/images/fotos/Malla galvanizada (1).jpg")
  },
  {
    id: "mantenimiento-cerramiento",
    titulo: "Cómo mantener tu cerramiento perimetral en óptimas condiciones",
    resumen: "Consejos prácticos para alargar la vida útil de tu malla ciclón y mantenerla como el primer día.",
    contenido: "Un cerramiento perimetral bien mantenido puede durar décadas. Aquí te compartimos consejos prácticos para mantener tu malla ciclón en óptimas condiciones.\n\nLimpieza regular: Lava tu malla con agua y jabón neutro al menos dos veces al año. Esto elimina el polvo, la suciedad y los contaminantes que pueden acelerar la corrosión.\n\nInspección visual: Revisa periódicamente tu cerramiento en busca de daños, óxido superficial o puntos donde el recubrimiento se haya desgastado. Detectarlos a tiempo permite reparaciones menores antes de que se conviertan en problemas mayores.\n\nPoda de vegetación: Mantén la vegetación alejada de la malla. Las plantas trepadoras y la humedad que retienen pueden acelerar la corrosión y dañar el recubrimiento.\n\nRevisión de postes y soportes: Asegúrate de que los postes estén firmes y sin óxido en la base. Los soportes son la estructura que sostiene todo el cerramiento.\n\nReparaciones oportunas: Si detectas algún daño, repáralo lo antes posible. Una pequeña rotura puede convertirse en un problema mayor si no se atiende a tiempo.\n\nSiguiendo estos consejos, tu cerramiento perimetral lucirá como nuevo por muchos años.",
    fecha: "2026-04-20",
    categoria: "Consejos",
    imagen: img("/images/fotos/Privacinta Turquesa 1.jpg")
  },
  {
    id: "seguridad-perimetral-industrial",
    titulo: "Seguridad perimetral industrial: soluciones recomendadas",
    resumen: "Las mejores opciones en seguridad perimetral para naves industriales, bodegas y plantas de producción.",
    contenido: "La seguridad perimetral en entornos industriales requiere soluciones robustas y confiables. En Inmcers S.A ofrecemos varias opciones dependiendo del nivel de seguridad que necesites.\n\nPara naves industriales y bodegas, recomendamos combinar malla ciclón de alta resistencia con razor ribbon en la parte superior. Esta combinación ofrece una barrera física difícil de superar.\n\nPara plantas de producción y centros de distribución, el sistema de razor ribbon tipo concertina es la opción más recomendada. Su diseño en espiral con láminas afiladas disuade cualquier intento de intrusión.\n\nPara subestaciones eléctricas y áreas críticas, recomendamos malla ciclón de cuadro pequeño (1\" o menor) combinada con privacinta y razor ribbon, creando una barrera visual y física completa.\n\nTodas nuestras instalaciones incluyen tubería galvanizada estructural y accesorios de fijación de alta resistencia, garantizando un sistema perimetral duradero y efectivo.\n\n¿Necesitas asesoría para tu proyecto industrial? Contáctanos y te visitamos para evaluar tu perímetro y recomendarte la mejor solución.",
    fecha: "2026-03-10",
    categoria: "Seguridad",
    imagen: img("/images/fotos/Embajada de Brasil8.jpeg")
  }
]
