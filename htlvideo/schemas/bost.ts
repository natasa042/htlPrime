import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'bost',
  title: 'Bost',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'text',
      type: 'text',
    }),
    
  ],

})
