export default {
  name: 'service',
  title: 'Servicio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nombre del Servicio',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icono (Lucide name)',
      type: 'string',
      description: 'Nombre del icono de Lucide (ej: Tool, Shield, Package, Truck)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'shortDescription',
      title: 'Descripción Corta',
      type: 'string',
      description: 'Se muestra en las tarjetas de la página de inicio o lista.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'detailedDescription',
      title: 'Descripción Detallada',
      type: 'text',
      description: 'Contenido completo para la página del servicio.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'features',
      title: 'Características Clave',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Ejemplo: "Asesoría experta sin costo", "Instaladores propios con garantía"',
    },
    {
      name: 'image',
      title: 'Imagen de Fondo o Ilustración',
      type: 'image',
      options: {
        hotspot: true,
      },
    }
  ],
};
