const BookSchema = {
  title: 'Book',
  $id: 'http://example.com/schema/book',
  type: 'object',
  properties: {
    id: { type: 'number' },
    title: { type: 'string' },
    category_id: { type: 'number' },
    authors: { type: 'array', items: { type: 'string' } },
    cover_url: { type: 'string', format: 'url' },
    description: { type: 'string' },
    sections: {
      type: 'array',
      items: {
        type: 'object',
        properties: { title: { type: 'string' }, content: { type: 'string' } },
      },
    },
    audio_length: { type: ['number', 'null'] },
  },
};

export default BookSchema;
