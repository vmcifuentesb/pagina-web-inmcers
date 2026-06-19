import { Link } from "react-router-dom"
import { ChevronRight, Home } from "lucide-react"

interface Crumb {
  label: string
  path?: string
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 pt-6">
      <ol className="flex items-center gap-1.5 text-sm text-gray-500">
        <li>
          <Link to="/" className="hover:text-brand transition-colors flex items-center gap-1">
            <Home size={14} /> Inicio
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight size={14} />
            {item.path ? (
              <Link to={item.path} className="hover:text-brand transition-colors">{item.label}</Link>
            ) : (
              <span className="text-gray-900 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
