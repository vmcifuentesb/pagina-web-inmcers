export default {
  name: 'contactInfo',
  title: 'Información de Contacto',
  type: 'document',
  fields: [
    {
      name: 'companyName',
      title: 'Nombre de la Empresa',
      type: 'string',
      initialValue: "Inmcers S.A",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Dirección Física',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'pbx',
      title: 'Central Telefónica (PBX)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'whatsappLines',
      title: 'Líneas de WhatsApp',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Format: "+502XXXXXXXX o Número visible"',
    },
    {
      name: 'emails',
      title: 'Correos Electrónicos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Etiqueta (ej: Ventas)', type: 'string' },
            { name: 'email', title: 'Correo', type: 'string' }
          ]
        }
      ]
    },
    {
      name: 'facebookLink',
      title: 'Enlace a Facebook',
      type: 'url',
    },
    {
      name: 'googleMapsEmbed',
      title: 'Embed de Google Maps (URL)',
      type: 'url',
      description: 'El link directo de src en el iframe de Google Maps share'
    }
  ],
};
