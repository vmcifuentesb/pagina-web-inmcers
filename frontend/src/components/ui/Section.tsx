interface SectionProps {
  id?: string
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  dark?: boolean
}

export function Section({ id, title, subtitle, children, className = "", dark = false }: SectionProps) {
  return (
    <section id={id} className={`py-20 px-4 ${dark ? "bg-dark text-white" : "bg-white"} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
            {subtitle && <p className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto">{subtitle}</p>}
            <div className="w-20 h-1 bg-brand mx-auto mt-6 rounded-full" />
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
