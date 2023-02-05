import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'textsMT',
  title: 'Text MT',
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
      name: 'descriptionMT',
      title: 'beschreibung',
      type: 'text',
    }),
    
  ],

})
