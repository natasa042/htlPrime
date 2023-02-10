export default {
    name: "it",
    type: "document",
    title: "Informationstechnik",
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
          { type: 'textWithIllustration' },
          ]
      }
    ]
  }