import { useState } from "react"
import { Check, ChevronLeft, ChevronRight, MessageSquare, Ruler, User, Package } from "lucide-react"
import { productos } from "../../data/productos"

interface CotizadorProps {
  onComplete?: () => void
}

const pasos = [
  { numero: 1, titulo: "Producto", icon: Package },
  { numero: 2, titulo: "Medidas", icon: Ruler },
  { numero: 3, titulo: "Datos", icon: User },
]

export function CotizadorRapido({ onComplete }: CotizadorProps) {
  const [paso, setPaso] = useState(1)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [metros, setMetros] = useState("")
  const [altura, setAltura] = useState("2")
  const [nombre, setNombre] = useState("")
  const [telefono, setTelefono] = useState("")
  const [correo, setCorreo] = useState("")

  const producto = productos.find((p) => p.id === selectedProduct)

  const enviarWhatsApp = () => {
    const productoNombre = producto?.nombre ?? "No especificado"
    const area = Number.parseFloat(metros) * Number.parseFloat(altura)
    const mensaje = [
      "¡Hola! Quiero solicitar una cotización:\n",
      `*Producto:* ${productoNombre}\n`,
      `*Metros lineales:* ${metros} m\n`,
      `*Altura:* ${altura} m\n`,
      `*Área total:* ${isNaN(area) ? "—" : Math.round(area)} m²\n`,
      `*Nombre:* ${nombre}\n`,
      `*Teléfono:* ${telefono}\n`,
      correo ? `*Correo:* ${correo}\n` : "",
      "\n\n¡Gracias!",
    ].join("")

    const encodedMsg = encodeURIComponent(mensaje);
    window.open(`https://wa.me/50242120707?text=${encodedMsg}`, "_blank")
    onComplete?.()
    
    // Resetear al paso 1 y limpiar inputs
    setPaso(1)
    setSelectedProduct(null)
    setMetros("")
    setNombre("")
    setTelefono("")
    setCorreo("")
  }

  const puedeAvanzar = () => {
    if (paso === 1) return selectedProduct !== null
    if (paso === 2) return Number.parseFloat(metros) > 0
    if (paso === 3) return nombre.trim() !== "" && telefono.trim().length >= 8
    return false
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-0 mb-8">
        {pasos.map((p, i) => (
          <div key={p.numero} className="flex items-center">
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  p.numero < paso
                    ? "bg-green-500 text-white"
                    : p.numero === paso
                    ? "bg-primary text-white ring-4 ring-primary/20"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                {p.numero < paso ? <Check className="w-4 h-4" /> : <p.icon className="w-4 h-4" />}
              </div>
              <span className={`hidden sm:block text-xs font-bold ${p.numero <= paso ? "text-slate-800" : "text-slate-400"}`}>
                {p.titulo}
              </span>
            </div>
            {i < pasos.length - 1 && (
              <div className={`w-8 sm:w-12 h-0.5 mx-2 ${p.numero < paso ? "bg-green-500" : "bg-slate-200"}`} />
            )}
          </div>
        ))}
      </div>

      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
        {paso === 1 && (
          <div>
            <h3 className="text-base font-black mb-1">¿Qué producto necesitas?</h3>
            <p className="text-xs text-slate-500 mb-4">Selecciona el tipo de producto para tu proyecto</p>
            <div className="grid grid-cols-2 gap-2">
              {productos.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedProduct(p.id)}
                  className={`p-3 rounded-xl border-2 text-left transition-all cursor-pointer ${
                    selectedProduct === p.id
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-slate-200 bg-white text-slate-700 hover:border-primary/50"
                  }`}
                >
                  <span className="block text-[11px] font-black text-accent mb-0.5 uppercase tracking-wider">{p.categoria}</span>
                  <span className="block text-xs font-bold leading-tight">{p.nombre}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {paso === 2 && (
          <div className="space-y-4">
            <h3 className="text-base font-black mb-1">Medidas de tu proyecto</h3>
            <p className="text-xs text-slate-500 mb-4">Ingresa las dimensiones del área a cerrar</p>
            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Metros lineales del perímetro *</label>
                <input
                  type="number"
                  required
                  min="1"
                  value={metros}
                  onChange={(e) => setMetros(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                  placeholder="Ej: 100"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Altura de la malla</label>
                <select
                  value={altura}
                  onChange={(e) => setAltura(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                >
                  <option value="1">1 metro</option>
                  <option value="1.5">1.5 metros</option>
                  <option value="2">2 metros</option>
                  <option value="2.5">2.5 metros</option>
                  <option value="3">3 metros</option>
                </select>
              </div>
              {metros && Number.parseFloat(metros) > 0 && (
                <div className="bg-white border border-slate-100 rounded-xl p-3 text-xs flex justify-between items-center">
                  <span className="text-slate-400">Área total estimada:</span>
                  <span className="text-lg font-black text-primary">{Math.round(Number.parseFloat(metros) * Number.parseFloat(altura))} m²</span>
                </div>
              )}
            </div>
          </div>
        )}

        {paso === 3 && (
          <div className="space-y-4">
            <h3 className="text-base font-black mb-1">Tus datos de contacto</h3>
            <p className="text-xs text-slate-500 mb-4">Recibirás tu cotización por WhatsApp</p>
            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Nombre completo *</label>
                <input
                  type="text"
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Teléfono (WhatsApp) *</label>
                <input
                  type="tel"
                  required
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                  placeholder="Ej: 42120707"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Correo electrónico</label>
                <input
                  type="email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                  placeholder="Opcional"
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-6">
          {paso > 1 ? (
            <button
              onClick={() => setPaso(paso - 1)}
              className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-slate-700:text-slate-200 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Anterior
            </button>
          ) : (
            <div />
          )}

          {paso < 3 ? (
            <button
              onClick={() => setPaso(paso + 1)}
              disabled={!puedeAvanzar()}
              className="flex items-center gap-1 bg-primary text-white px-4 py-2 rounded-lg font-bold hover:bg-primary-hover transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer text-xs"
            >
              Siguiente <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={enviarWhatsApp}
              disabled={!puedeAvanzar()}
              className="flex items-center gap-1.5 bg-green-500 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-green-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer text-xs shadow-md"
            >
              <MessageSquare className="w-4 h-4" /> Cotizar por WhatsApp
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CotizadorRapido;
