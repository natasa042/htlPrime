import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pictureET',
  title: 'Picture ET',
  type: 'document',
  fields: [
    defineField({
      name: 'nameET',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'imageET',
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
