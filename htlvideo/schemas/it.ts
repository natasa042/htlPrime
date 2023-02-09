export default {
  
    // Setup a 'document' type to house the page builder field
    
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
          { type: 'hero' }, // hero.js (same applies for the other types)
          { type: 'textWithIllustration' },
          { type: 'callToAction' },
          { type: 'gallery' },
          // etc...
          ]
      }
    ]
  }