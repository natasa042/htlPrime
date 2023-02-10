export default {
    name: "bt",
    type: "document",
    title: "Bautechnik",
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