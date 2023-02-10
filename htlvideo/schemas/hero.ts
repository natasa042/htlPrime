export default {
    name: "hero",
    type: "object",
    title: "Hero",
    fields: [
      {
        name: 'heading',
        type: 'string',
        title: 'Titel'
      },
      {
        name: 'tagline',
        type: 'string',
        title: 'Tagline'
      },
      {
        name: 'excerpt',
        type: 'text',
        title: 'Text'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Bild',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text'
          }
        ]
      }
    ]
  }