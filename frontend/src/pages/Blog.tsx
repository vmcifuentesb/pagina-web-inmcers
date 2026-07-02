import { Link } from "react-router-dom"
import { Calendar, ArrowRight } from "lucide-react"
import { PageTransition } from "../components/ui/PageTransition"
import { SEOHead } from "../components/ui/SEOHead"
import { StaggerContainer, StaggerItem } from "../components/ui/StaggerReveal"
import { articulos } from "../data/articulos"

export function Blog() {
  return (
    <PageTransition>
      <SEOHead
        title="Blog de Cerramiento Perimetral"
        description="Consejos, guías y novedades sobre malla ciclón, cerramientos perimetrales y seguridad en Guatemala."
      />
      <div className="bg-secondary text-white pt-32 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-pattern opacity-5 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-black mb-4 !text-white">Blog Perimetral</h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-medium">
            Consejos, guías y novedades sobre cerramiento perimetral y seguridad en Guatemala.
          </p>
        </div>
      </div>

      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articulos.map((a) => (
                <StaggerItem key={a.id}>
                  <Link to={`/blog/${a.id}`} className="block group">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 h-full hover:shadow-lg transition-all duration-300">
                      <div className="h-48 overflow-hidden bg-slate-100">
                        <img 
                          src={a.imagen} 
                          onError={(e) => { 
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1508873696983-2df519f0397e?q=80&w=400"; 
                          }}
                          alt={`${a.titulo} — Blog Inmcers S.A Guatemala`} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          loading="lazy" 
                        />
                      </div>
                      <div className="p-6 space-y-3">
                        <span className="text-[10px] font-black text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                          {a.categoria}
                        </span>
                        <h2 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-primary transition-colors leading-snug">{a.titulo}</h2>
                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">{a.resumen}</p>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-2 border-t border-slate-100/50">
                          <Calendar size={14} /> 
                          <span>{new Date(a.fecha).toLocaleDateString("es-GT", { year: "numeric", month: "long", day: "numeric" })}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      <section className="pb-20 px-4 text-center bg-slate-50">
        <Link to="/contacto" className="inline-flex items-center gap-2 text-primary hover:underline font-bold text-xs uppercase tracking-wider">
          <span>Contáctanos para más información</span> 
          <ArrowRight size={16} />
        </Link>
      </section>
    </PageTransition>
  )
}

export default Blog;
