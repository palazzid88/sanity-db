// schemas/destino.js

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
          { title: 'Patagonia', value: 'Patagonia' },
          { title: 'Cuyo', value: 'Cuyo' },
          { title: 'Noroeste', value: 'Noroeste' },
          { title: 'Litoral', value: 'Litoral' },
          { title: 'Centro', value: 'Centro' },
          { title: 'Noreste', value: 'Noreste' },

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
  ],
};
