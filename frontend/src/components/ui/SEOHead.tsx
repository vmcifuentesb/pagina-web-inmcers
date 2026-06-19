import { Helmet } from "react-helmet-async"

interface SEOHeadProps {
  title: string
  description: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
}

export function SEOHead({ title, description, ogTitle, ogDescription, ogImage }: SEOHeadProps) {
  const fullTitle = `${title} — Inmcers S.A`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={ogTitle ?? fullTitle} />
      <meta property="og:description" content={ogDescription ?? description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:title" content={ogTitle ?? fullTitle} />
      <meta name="twitter:description" content={ogDescription ?? description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  )
}
