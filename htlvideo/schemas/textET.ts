import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'textsET',
  title: 'Text ET',
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
      name: 'descriptionET',
      title: 'beschreibung',
      type: 'text',
    }),
    
  ],

})
