import React, { useState } from 'react';
import { Ruler, ArrowRight, ArrowLeft, Send, CheckCircle, ShieldCheck, Mail, User, Phone, Calculator, HardHat } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

type Tab = 'calculator' | 'quote';
type Step = 1 | 2 | 3;

interface QuoteData {
  meters: string;
  height: string;
  material: string;
  installation: string;
  name: string;
  phone: string;
  email: string;
  company: string;
  location: string;
}

export const Cotizar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('calculator');
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<QuoteData>({
    meters: '',
    height: '1.50',
    material: 'malla_ciclon',
    installation: 'si',
    name: '',
    phone: '',
    email: '',
    company: '',
    location: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Calculator State
  const [calcPerimetro, setCalcPerimetro] = useState("");
  const [calcAltura, setCalcAltura] = useState("2");
  const [calcResultado, setCalcResultado] = useState<{ malla: number; postes: number; tuberia: number } | null>(null);

  const handleNext = () => {
    if (step === 1) {
      const newErrors: Record<string, string> = {};
      if (!formData.meters) newErrors.meters = 'Debe indicar los metros lineales aproximados.';
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      setErrors({});
      setStep(2);
    }
  };

  const handlePrev = () => {
    if (step > 1) setStep((prev) => (prev - 1) as Step);
  };

  const validateFinal = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio.';
    if (!formData.phone.trim()) newErrors.phone = 'El teléfono es obligatorio.';
    if (!formData.location.trim()) newErrors.location = 'La ubicación es obligatoria.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateFinal()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setStep(3);
    }, 1200);
  };

  const getWhatsAppLink = () => {
    const materialLabel = formData.material === 'malla_ciclon' ? 'Malla Ciclón Galvanizada' : formData.material === 'malla_pvc' ? 'Malla Ciclón PVC' : formData.material === 'razor_ribbon' ? 'Razor Ribbon' : 'Euro Reja';
    const text = `Hola Inmcers S.A, quiero solicitar una cotización formal:\n\n*Proyecto:* ${formData.meters}m lineales\n*Altura:* ${formData.height}m\n*Material:* ${materialLabel}\n*Instalación:* ${formData.installation === 'si' ? 'Sí, requerida' : 'No, solo material'}\n*Ubicación:* ${formData.location}\n\n*Contacto:* ${formData.name}\n*Empresa:* ${formData.company || 'N/A'}\n*Tel:* ${formData.phone}\n*Correo:* ${formData.email || 'N/A'}`;
    return `https://wa.me/50242120707?text=${encodeURIComponent(text)}`;
  };

  const handleCalcular = (e: React.FormEvent) => {
    e.preventDefault();
    const p = parseFloat(calcPerimetro);
    const a = parseFloat(calcAltura);
    if (!p || !a) return;

    const area = p * a;
    const postes = Math.ceil(p / 2.5);
    const tuberia = Math.ceil(p * 1.05);

    setCalcResultado({ malla: Math.round(area), postes, tuberia });
  };

  const transferirMedidasACotizar = () => {
    if (!calcPerimetro) return;
    setFormData({
      ...formData,
      meters: calcPerimetro,
      height: calcAltura,
    });
    setActiveTab('quote');
    setStep(1);
    setIsSuccess(false);
  };

  return (
    <div className="pt-32 bg-slate-50 text-slate-800 min-h-screen relative overflow-hidden bg-noise">
      <Helmet>
        <title>Cotizar y Estimar Materiales — Inmcers S.A</title>
        <meta name="description" content="Use nuestra calculadora técnica de materiales y solicite una cotización formal para su cerramiento perimetral con Inmcers S.A en Guatemala." />
      </Helmet>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto z-10 relative">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Herramientas del Cliente</span>
          <h1 className="text-3xl sm:text-4xl font-title font-extrabold text-slate-900 tracking-tight mt-2">
            Cotice y Calcule su Proyecto
          </h1>
          <p className="text-slate-600 font-body mt-3 max-w-2xl mx-auto text-xs sm:text-sm">
            Calcule los materiales requeridos o rellene nuestro formulario de cotización técnica paso a paso para recibir asesoría formal inmediata de Inmcers S.A.
          </p>
        </div>

        {/* Tab Toggle Navigation */}
        <div className="flex border-b border-slate-200 mb-8 w-full max-w-lg mx-auto bg-slate-200/60 rounded-xl p-1.5">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-title font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
              activeTab === 'calculator'
                ? 'bg-primary text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/40'
            }`}
          >
            <Calculator className="w-4 h-4 shrink-0" />
            <span>1. Estimar Materiales</span>
          </button>
          <button
            onClick={() => setActiveTab('quote')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-title font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
              activeTab === 'quote'
                ? 'bg-primary text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/40'
            }`}
          >
            <Send className="w-4 h-4 shrink-0" />
            <span>2. Solicitar Cotización</span>
          </button>
        </div>

        {/* Card Contenedor Principal */}
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 sm:p-10 overflow-hidden relative text-slate-800">

          {/* TAB 1: CALCULADORA DE MATERIALES */}
          {activeTab === 'calculator' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-title font-bold text-slate-900">Calculadora Técnica Perimetral</h2>
                  <p className="text-xs text-slate-500">Estime postes, malla y tubería de forma referencial</p>
                </div>
              </div>

              <form onSubmit={handleCalcular} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Perímetro Total (metros lineales) *
                  </label>
                  <div className="relative">
                    <Ruler size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="number"
                      required
                      min="1"
                      value={calcPerimetro}
                      onChange={(e) => setCalcPerimetro(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-950 focus:outline-none focus:border-primary text-sm font-semibold"
                      placeholder="Ej: 120"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Altura de la Malla (metros)
                  </label>
                  <div className="relative">
                    <HardHat size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <select
                      value={calcAltura}
                      onChange={(e) => setCalcAltura(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-950 focus:outline-none focus:border-primary text-sm font-semibold cursor-pointer"
                    >
                      <option value="1.00">1.00 metro</option>
                      <option value="1.50">1.50 metros (Estándar)</option>
                      <option value="2.00">2.00 metros</option>
                      <option value="2.50">2.50 metros</option>
                      <option value="3.00">3.00 metros</option>
                    </select>
                  </div>
                </div>

                <div className="md:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-title font-bold text-sm shadow-md transition-all duration-200 cursor-pointer"
                  >
                    Estimar Materiales Requeridos
                  </button>
                </div>
              </form>

              {calcResultado && (
                <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-inner animate-in fade-in duration-300">
                  <h3 className="text-base font-bold mb-4 text-center text-slate-900 tracking-wide uppercase">Estimación de Materiales para {calcPerimetro}m</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                      <p className="text-xl sm:text-2xl font-black text-primary">{calcResultado.malla}</p>
                      <p className="text-[9px] uppercase font-bold text-slate-500 mt-1">m² de malla</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                      <p className="text-xl sm:text-2xl font-black text-primary">{calcResultado.postes}</p>
                      <p className="text-[9px] uppercase font-bold text-slate-500 mt-1">postes de línea</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                      <p className="text-xl sm:text-2xl font-black text-primary">{calcResultado.tuberia}</p>
                      <p className="text-[9px] uppercase font-bold text-slate-500 mt-1">ml de tubería</p>
                    </div>
                  </div>

                  <p className="text-[10px] text-slate-500 text-center font-semibold leading-normal bg-primary/5 p-3.5 rounded-xl border border-primary/20 max-w-xl mx-auto">
                    * Estimación física de materiales básicos para referencia. No incluye accesorios de tensión (abrazaderas, copas), razor ribbon superior ni servicios de instalación. Solicite su cotización formal para obtener precios oficiales de fábrica personalizados.
                  </p>

                  <div className="text-center pt-6 border-t border-slate-200 mt-6">
                    <button
                      onClick={transferirMedidasACotizar}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent hover:bg-accent-hover text-white font-title font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                    >
                      <span>2. Proceder a Cotizar con estas Medidas</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: MULTI-STEP QUOTE WIZARD */}
          {activeTab === 'quote' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              
              {/* Wizard Progress Tracker */}
              {!isSuccess && (
                <div className="mb-6">
                  <div className="flex items-center justify-between relative max-w-md mx-auto">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-slate-200 rounded-full z-0"></div>
                    <div 
                      className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-primary rounded-full z-0 transition-all duration-350"
                      style={{ width: step === 1 ? '0%' : '100%' }}
                    ></div>
                    
                    <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${step >= 1 ? 'bg-primary text-white shadow-md' : 'bg-slate-100 text-slate-500 border border-slate-200'}`}>
                      1
                    </div>
                    <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${step >= 2 ? 'bg-primary text-white shadow-md' : 'bg-slate-100 text-slate-500 border border-slate-200'}`}>
                      2
                    </div>
                  </div>
                  <div className="flex justify-between max-w-md mx-auto mt-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    <span>1. Especificaciones</span>
                    <span>2. Datos de Contacto</span>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Ruler className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-lg font-title font-bold text-slate-900">Medidas y Materiales</h2>
                      <p className="text-xs text-slate-500">Especifique el cercado de su propiedad o lote</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Metros Lineales Aproximados *
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={formData.meters}
                        onChange={(e) => setFormData({...formData, meters: e.target.value})}
                        className={`w-full px-4 py-3 rounded-lg border bg-slate-50 text-slate-950 font-body text-sm focus:outline-none focus:border-primary ${errors.meters ? 'border-red-500' : 'border-slate-300'}`}
                        placeholder="Ej. 150"
                      />
                      {errors.meters && <span className="text-red-500 text-[10px] font-bold">{errors.meters}</span>}
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Altura de la Malla
                      </label>
                      <select
                        value={formData.height}
                        onChange={(e) => setFormData({...formData, height: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-950 font-body text-sm focus:outline-none focus:border-primary cursor-pointer"
                      >
                        <option value="1.00">1.00 metro</option>
                        <option value="1.50">1.50 metros (Estándar)</option>
                        <option value="2.00">2.00 metros</option>
                        <option value="2.50">2.50 metros</option>
                        <option value="3.00">3.00 metros</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Material Principal Deseado
                      </label>
                      <select
                        value={formData.material}
                        onChange={(e) => setFormData({...formData, material: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-950 font-body text-sm focus:outline-none focus:border-primary cursor-pointer"
                      >
                        <option value="malla_ciclon">Malla Ciclón Galvanizada (HG)</option>
                        <option value="malla_pvc">Malla Ciclón PVC Verde</option>
                        <option value="malla_privacinta">Malla Ciclón + Privacinta (Verde, Gris, Azul)</option>
                        <option value="razor_ribbon">Solo Razor Ribbon / Concertina</option>
                        <option value="paneles">Euro Reja 3D (Paneles rígidos)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                        ¿Requiere Mano de Obra de Instalación?
                      </label>
                      <div className="flex gap-4 mt-1">
                        <label className="flex-1 flex items-center justify-center gap-2 p-3 border rounded-lg cursor-pointer transition-all bg-slate-50 border-slate-300 hover:bg-slate-100 has-[:checked]:border-primary has-[:checked]:bg-primary/10">
                          <input 
                            type="radio" 
                            name="installation" 
                            className="hidden" 
                            checked={formData.installation === 'si'}
                            onChange={() => setFormData({...formData, installation: 'si'})} 
                          />
                          <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-xs font-bold text-slate-950">Sí, con instalación</span>
                        </label>
                        <label className="flex-1 flex items-center justify-center gap-2 p-3 border rounded-lg cursor-pointer transition-all bg-slate-50 border-slate-300 hover:bg-slate-100 has-[:checked]:border-primary has-[:checked]:bg-primary/10">
                          <input 
                            type="radio" 
                            name="installation" 
                            className="hidden" 
                            checked={formData.installation === 'no'}
                            onChange={() => setFormData({...formData, installation: 'no'})} 
                          />
                          <span className="text-xs font-bold text-slate-950">No, solo suministro</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-200 flex justify-end">
                    <button
                      onClick={handleNext}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary hover:bg-primary-hover text-white font-title font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
                    >
                      Continuar
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-lg font-title font-bold text-slate-900">Información del Cliente</h2>
                      <p className="text-xs text-slate-500">Indique sus datos para contactarle</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className={`w-full px-4 py-3 rounded-lg border bg-slate-50 text-slate-950 font-body text-sm focus:outline-none focus:border-primary ${errors.name ? 'border-red-500' : 'border-slate-300'}`}
                        placeholder="Juan Pérez"
                      />
                      {errors.name && <span className="text-red-500 text-[10px] font-bold">{errors.name}</span>}
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Teléfono / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className={`w-full pl-10 pr-4 py-3 rounded-lg border bg-slate-50 text-slate-950 font-body text-sm focus:outline-none focus:border-primary ${errors.phone ? 'border-red-500' : 'border-slate-300'}`}
                          placeholder="4212 0707"
                        />
                      </div>
                      {errors.phone && <span className="text-red-500 text-[10px] font-bold">{errors.phone}</span>}
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Correo Electrónico
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-950 font-body text-sm focus:outline-none focus:border-primary"
                          placeholder="ventas@empresa.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Empresa / Razón Social (Opcional)
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-950 font-body text-sm focus:outline-none focus:border-primary"
                        placeholder="Ej. Constructoras, S.A."
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Ubicación del Terreno / Proyecto *
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        className={`w-full px-4 py-3 rounded-lg border bg-slate-50 text-slate-950 font-body text-sm focus:outline-none focus:border-primary ${errors.location ? 'border-red-500' : 'border-slate-300'}`}
                        placeholder="Ej. Quetzaltenango / Zona 10 Capital"
                      />
                      {errors.location && <span className="text-red-500 text-[10px] font-bold">{errors.location}</span>}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-200 flex justify-between">
                    <button
                      onClick={handlePrev}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-slate-500 hover:bg-slate-100 font-body font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Volver
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary hover:bg-primary-hover text-white font-body font-bold text-xs sm:text-sm transition-all shadow-md disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                          Procesando...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="w-4 h-4 mr-2" />
                          Solicitar Presupuesto
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="text-center py-12 px-4 animate-in zoom-in duration-300">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-primary mb-6 border border-primary/20">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-title font-extrabold text-slate-900 mb-4">
                    ¡Solicitud Registrada Exitosamente!
                  </h2>
                  <p className="font-body text-slate-600 max-w-md mx-auto mb-8 text-xs sm:text-sm">
                    Hemos registrado las dimensiones de su perímetro de <strong>{formData.meters} metros lineales</strong>. Un asesor comercial de <strong>Inmcers S.A</strong> le contactará de inmediato con la propuesta formal.
                  </p>
                  
                  <div className="bg-slate-50 p-6 rounded-xl mb-8 max-w-sm mx-auto text-left border border-slate-200">
                    <h3 className="font-bold text-xs text-primary uppercase tracking-wider mb-3">Resumen del Proyecto:</h3>
                    <ul className="space-y-2.5 text-xs font-body text-slate-700">
                      <li><span className="font-semibold text-slate-500">Metraje Lineal:</span> {formData.meters}m</li>
                      <li><span className="font-semibold text-slate-500">Altura:</span> {formData.height}m</li>
                      <li><span className="font-semibold text-slate-500">Mano de obra:</span> {formData.installation === 'si' ? 'Sí (Con mano de obra)' : 'No (Solo Suministro)'}</li>
                      <li><span className="font-semibold text-slate-500">Ubicación física:</span> {formData.location}</li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent hover:bg-accent-hover text-white font-body font-bold text-xs sm:text-sm shadow-md transition-colors cursor-pointer"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Enviar Directo por WhatsApp
                    </a>
                    <button
                      onClick={() => {
                        setStep(1);
                        setIsSuccess(false);
                      }}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-700 font-body font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                    >
                      Nueva Consulta
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default Cotizar;
