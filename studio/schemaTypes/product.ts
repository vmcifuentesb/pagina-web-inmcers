export default {
  name: 'product',
  title: 'Producto',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nombre del Producto',
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
      name: 'description',
      title: 'Descripción',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Malla Ciclón', value: 'malla-ciclon' },
          { title: 'Razor Ribbon', value: 'razor-ribbon' },
          { title: 'Privacinta', value: 'privacinta' },
          { title: 'Tubería Galvanizada', value: 'tuberia' },
          { title: 'Herrería y Estructuras', value: 'herreria' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'specifications',
      title: 'Especificaciones Técnicas',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Ejemplo: "Medidas de cuadro de 2 ¾\", 2 ½\", 2\", 1 ½\""',
    },
    {
      name: 'featured',
      title: 'Destacado en Home',
      type: 'boolean',
      initialValue: false,
    }
  ],
};
