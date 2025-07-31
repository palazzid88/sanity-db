export default {
  name: 'destino',
  title: 'Destino',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titulo',
        maxLength: 96,
      },
    },
    {
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'imagen',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'precio',
      title: 'Precio',
      type: 'number',
    },
    {
      name: 'region',
      title: 'Región',
      type: 'string',
      options: {
        list: [
          { title: 'Patagonia', value: 'patagonia' },
          { title: 'Cuyo', value: 'cuyo' },
          { title: 'Noroeste', value: 'noroeste' },
          { title: 'Litoral', value: 'litoral' },
          { title: 'Centro', value: 'centro' },
          { title: 'Noreste', value: 'noreste' },
        ],
      },
    },
    {
      name: 'provincia',
      title: 'Provincia',
      type: 'string',
    },
    {
      name: 'salidaMes',
      title: 'Mes de Salida',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Enero', value: 'enero' },
          { title: 'Febrero', value: 'febrero' },
          { title: 'Marzo', value: 'marzo' },
          { title: 'Abril', value: 'abril' },
          { title: 'Mayo', value: 'mayo' },
          { title: 'Junio', value: 'junio' },
          { title: 'Julio', value: 'julio' },
          { title: 'Agosto', value: 'agosto' },
          { title: 'Septiembre', value: 'septiembre' },
          { title: 'Octubre', value: 'octubre' },
          { title: 'Noviembre', value: 'noviembre' },
          { title: 'Diciembre', value: 'diciembre' },
        ],
        layout: 'checkbox',
      },
    },
    {
      name: 'categorias',
      title: 'Categorías del Paquete',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Relax', value: 'relax' },
          { title: 'Aventura', value: 'aventura' },
          { title: 'Familia', value: 'familia' },
          { title: 'Descanso', value: 'descanso' },
        ],
        layout: 'checkbox',
      },
    },
    {
      name: 'pension',
      title: 'Tipo de Pensión',
      type: 'string',
      options: {
        list: [
          { title: 'All Inclusive', value: 'all-inclusive' },
          { title: 'Media pensión', value: 'media-pension' },
          { title: 'Pensión completa', value: 'pension-completa' },
          { title: 'Solo alojamiento', value: 'solo-alojamiento' },
        ],
      },
    },
    {
      name: 'enPromocion',
      title: '¿Está en Promoción?',
      type: 'boolean',
    },
    {
      name: 'activo',
      title: '¿Paquete activo?',
      type: 'boolean',
      description: 'Si está desactivado, aparecerá como "Agotado" en la web.',
    },
  ],
};
