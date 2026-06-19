import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { PageTransition } from "../components/ui/PageTransition"
import { SEOHead } from "../components/ui/SEOHead"

export function NotFound() {
  return (
    <PageTransition>
      <SEOHead title="Página no encontrada" description="La página que buscas no existe o ha sido movida. Regresa al inicio de Inmcers S.A." />
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-xl">
          <span className="text-8xl font-bold text-primary block mb-4">404</span>
          <h1 className="text-4xl font-bold mb-4 text-slate-900">Página no encontrada</h1>
          <p className="text-lg text-slate-500 mb-8">
            La página que buscas no existe o ha sido movida. Verifica la dirección o vuelve al inicio.
          </p>
          <Link to="/">
            <Button variant="primary" size="lg">Volver al inicio</Button>
          </Link>
        </div>
      </div>
    </PageTransition>
  )
}

export default NotFound;
