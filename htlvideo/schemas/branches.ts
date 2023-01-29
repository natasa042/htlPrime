import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'branches',
  title: 'Zweige',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'branchImage',
      title: 'Main image',
      type: 'file',
    }),
    defineField({
      name: 'branchTitle',
      title: 'Name',
      type: 'text',
    }),
  ],

})
