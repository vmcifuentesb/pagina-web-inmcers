import { img } from '../lib/images';

export interface Testimonio {
  nombre: string
  proyecto: string
  texto: string
  foto: string
}

export const testimonios: Testimonio[] = [
  { nombre: "Carlos Méndez", proyecto: "Cerramiento Industrial", texto: "Excelente servicio y calidad. La instalación quedó perfecta y cumplieron con los tiempos acordados. Totalmente recomendados.", foto: img("/images/fotos/AntiguaGuat-Panadeli11.jpeg") },
  { nombre: "María López", proyecto: "Residencial", texto: "Muy profesionales. Nos asesoraron en la mejor opción para nuestra casa y el resultado superó nuestras expectativas.", foto: img("/images/fotos/Privacinta verde3.jpg") },
  { nombre: "Juan Pérez", proyecto: "Centro Deportivo", texto: "30 años de experiencia se notan. La malla ciclón que fabrican es de primera calidad. Contrataremos nuevamente para futuros proyectos.", foto: img("/images/fotos/Chimaltenango15.jpeg") },
]
