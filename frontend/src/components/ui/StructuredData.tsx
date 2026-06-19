import { productos } from "../../data/productos"
import { faqData } from "../../data/faq"
import { testimonios } from "../../data/testimonios"

export function StructuredData() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://inmcers.com#business",
      name: "Inmcers S.A",
      image: "https://inmcers.com/images/logo/logo-oficial.png",
      url: "https://inmcers.com",
      telephone: "+50222182800",
      email: "ventas@inmcers.com",
      description:
        "Industria de mallas y cercas en Guatemala. Fabricación propia de malla ciclón, razor ribbon, privacinta y sistemas de cerramiento perimetral.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5ª Avenida y 2ª Calle E 11-72, Colonia Guajitos",
        addressLocality: "Zona 21, Ciudad de Guatemala",
        addressCountry: "GT",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:30",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "12:00",
        },
      ],
      areaServed: {
        "@type": "Country",
        name: "Guatemala",
      },
      sameAs: [
        "https://www.facebook.com/InmcersS.A",
        "https://www.instagram.com/inmcers_s.a",
        "https://api.whatsapp.com/send?phone=50242120707",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: productos.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: p.nombre,
          description: p.descripcion,
          category: p.categoria,
          url: `https://inmcers.com/productos#${p.id}`,
          image: `https://inmcers.com${p.imagen}`,
          brand: { "@type": "Brand", name: "Inmcers S.A" },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "GTQ",
            url: `https://inmcers.com/productos#${p.id}`,
          },
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqData.map((faq) => ({
        "@type": "Question",
        name: faq.pregunta,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.respuesta,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://inmcers.com/" },
        { "@type": "ListItem", position: 2, name: "Nosotros y Servicios", item: "https://inmcers.com/nosotros" },
        { "@type": "ListItem", position: 3, name: "Productos", item: "https://inmcers.com/productos" },
        { "@type": "ListItem", position: 4, name: "Proyectos", item: "https://inmcers.com/proyectos" },
        { "@type": "ListItem", position: 5, name: "Blog", item: "https://inmcers.com/blog" },
        { "@type": "ListItem", position: 6, name: "Contacto", item: "https://inmcers.com/contacto" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      subType: "Review",
      review: testimonios.map((t) => ({
        "@type": "Review",
        author: { "@type": "Person", name: t.nombre },
        reviewBody: t.texto,
        itemReviewed: { "@type": "LocalBusiness", name: "Inmcers S.A" },
      })),
    },
  ]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
