import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pictureMT',
  title: 'Picture MT',
  type: 'document',
  fields: [
    defineField({
      name: 'nameMT',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'imageMT',
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
