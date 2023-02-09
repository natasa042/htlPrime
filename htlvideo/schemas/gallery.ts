// imageGallery.js

export default {
  name: "gallery",
  type: "object",
  title: "Gallery",
  fields: [
    {
      name: 'videos',
      type: 'array',
      title: 'videos',
      of: [
        {
          name: 'video',
          type: 'image',
          title: 'video',
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
      ],
      options: {
        layout: 'grid'
      }
    }
  ]
}