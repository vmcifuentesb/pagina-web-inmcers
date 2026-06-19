import { img } from '../lib/images';

export interface Proyecto {
  titulo: string
  desc: string
  ubicacion: string
  imagen: string
}

export const proyectos: Proyecto[] = [
  { titulo: "Cerramiento Industrial", desc: "Instalación de malla ciclón galvanizada HG para bodega industrial de 500m²", ubicacion: "Zona 12, Guatemala", imagen: img("/images/fotos/Malla galvanizada (4).jpg") },
  { titulo: "Seguridad Perimetral Residencial", desc: "Cerramiento con razor ribbon y malla ciclón PVC para residencial exclusivo", ubicacion: "Carretera a El Salvador", imagen: img("/images/fotos/Malla PVC (1).jpg") },
  { titulo: "Privacidad Residencial", desc: "Instalación de privacinta color verde en malla ciclón para casa habitación", ubicacion: "Zona 15, Guatemala", imagen: img("/images/fotos/Privacinta verde5.jpg") },
  { titulo: "Complejo Deportivo", desc: "Cerramiento perimetral de cancha polideportiva con malla ciclón galvanizada", ubicacion: "Quetzaltenango", imagen: img("/images/fotos/Malla 3.jpeg") },
  { titulo: "Seguridad Industrial", desc: "Sistema de seguridad perimetral con razor ribbon grado industrial", ubicacion: "Mixco, Guatemala", imagen: img("/images/fotos/Alambre espigado (1).jpg") },
  { titulo: "Techado Metálico", desc: "Estructura metálica y enlaminado para área de carga de 200m²", ubicacion: "Zona 21, Guatemala", imagen: img("/images/fotos/Techos (2).jpg") },
  { titulo: "Cerramiento Agrícola", desc: "Instalación de tubería galvanizada y malla ciclón para finca agrícola", ubicacion: "Escuintla", imagen: img("/images/fotos/Malla galvanizada (7).jpg") },
  { titulo: "Proyecto Educativo", desc: "Cerramiento perimetral para colegio con malla ciclón PVC y accesos", ubicacion: "Zona 7, Guatemala", imagen: img("/images/fotos/Malla PVC (3).jpg") },
  { titulo: "Proyecto Integral", desc: "Fabricación e instalación llave en mano de cerramiento completo para centro comercial", ubicacion: "Huehuetenango", imagen: img("/images/fotos/Embajada de Brasil.jpeg") },
]
