import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'texts',
  title: 'Text',
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
      name: 'description',
      title: 'beschreibung',
      type: 'text',
    }),
    
  ],

})
