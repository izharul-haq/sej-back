const CategorySchema = {
  title: 'Category',
  $id: 'http://example.com/schema/category',
  type: 'object',
  properties: {
    id: { type: 'number' },
    name: { type: 'string' },
  },
};

export default CategorySchema;
