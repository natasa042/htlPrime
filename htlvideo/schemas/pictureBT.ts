import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pictureBT',
  title: 'Picture Bau',
  type: 'document',
  fields: [
    defineField({
      name: 'nameBT',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'imageBT',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
