import { FastifyReply, FastifyRequest } from 'fastify';
import { Resource } from 'fastify-autoroutes';
import { container } from 'tsyringe';
import BookHandler from '~/handler/book';

const handler = container.resolve(BookHandler);

export default (): Resource =>
  <Resource>{
    get: {
      schema: {
        description: 'Get list of books based on category ID',
        summary: 'Get all book by category',

        querystring: {
          type: 'object',
          properties: {
            categoryId: { type: 'number' },
            page: { type: 'number' },
            size: { type: 'number' },
          },
        },

        response: {
          200: {
            type: 'array',
            items: {
              $ref: 'http://example.com/schema/book#',
            },
          },
        },
      },
      handler: async (
        request: FastifyRequest<{
          Querystring: { categoryId: number; page: number; size: number };
        }>,
        reply: FastifyReply
      ) => {
        const categoryId = request.query.categoryId as number;
        const page = request.query.page as number;
        const size = request.query.size as number;

        const books = await handler.getByCategory(categoryId, page, size);

        return reply.send(books);
      },
    },
  };
