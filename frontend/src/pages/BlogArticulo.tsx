import { useParams, Link } from "react-router-dom"
import { ChevronLeft, Calendar } from "lucide-react"
import { PageTransition } from "../components/ui/PageTransition"
import { SEOHead } from "../components/ui/SEOHead"
import { articulos } from "../data/articulos"
import { NotFound } from "./NotFound"
import { img } from "../lib/images"

export function BlogArticulo() {
  const { id } = useParams<{ id: string }>()
  const articulo = articulos.find((a) => a.id === id)

  if (!articulo) return <NotFound />

  return (
    <PageTransition>
      <SEOHead
        title={articulo.titulo}
        description={articulo.resumen}
        ogImage={img("/images/logo.png")}
      />
      <article className="py-20 px-4 mt-[104px] bg-slate-50 bg-noise">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-primary hover:underline mb-8 text-xs font-bold uppercase tracking-wider">
            <ChevronLeft size={16} /> Volver al blog
          </Link>
          <div className="space-y-4">
            <span className="text-[10px] font-black text-primary bg-primary/10 px-3 py-1.5 rounded-full uppercase tracking-wider">
              {articulo.categoria}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mt-4 leading-tight">{articulo.titulo}</h1>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 pb-6 border-b border-slate-200">
              <Calendar size={14} /> 
              <span>{new Date(articulo.fecha).toLocaleDateString("es-GT", { year: "numeric", month: "long", day: "numeric" })}</span>
            </div>
          </div>
          
          <div className="prose prose-slate max-w-none pt-8">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">{articulo.contenido}</p>
            
            <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200">
              <h4 className="font-extrabold text-sm text-slate-900 mb-2">¿Necesitas asesoría técnica para tu proyecto?</h4>
              <p className="text-xs text-slate-500 mb-4">
                Nuestro equipo de expertos está listo para ayudarte a planificar, cuantificar e instalar tu cerramiento perimetral.
              </p>
              <Link to="/contacto" className="text-xs font-black text-primary hover:underline uppercase tracking-wider flex items-center gap-1">
                <span>Contáctanos hoy mismo</span>
                <ChevronLeft className="w-3.5 h-3.5 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </PageTransition>
  )
}

export default BlogArticulo;
