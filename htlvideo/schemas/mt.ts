export default {
    name: "mt",
   type: "document",
   title: "Mechatronik",
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