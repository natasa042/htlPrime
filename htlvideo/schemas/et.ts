export default {
     name: "et",
    type: "document",
    title: "Elektrotechnik",
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