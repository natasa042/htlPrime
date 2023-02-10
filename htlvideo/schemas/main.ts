export default {
    name: "main",
    type: "document",
    title: "Landing Page",
    fields: [
      {
        name: 'title',
        title: 'Titel',
        type: 'string'
      },
      {
        name: 'components',
        type: 'array',
        title: 'Komponente',
        of: [
          { type: 'hero' },
          ]
      }
    ]
  }