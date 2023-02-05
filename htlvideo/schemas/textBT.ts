import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'textsBT',
  title: 'Text Bau',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      name: 'descriptionBT',
      title: 'beschreibung',
      type: 'text',
    }),
    
  ],

})
