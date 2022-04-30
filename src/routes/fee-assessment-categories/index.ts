import { FastifyReply, FastifyRequest } from 'fastify';
import { Resource } from 'fastify-autoroutes';
import { container } from 'tsyringe';
import CategoryHandler from '~/handler/category';

const handler = container.resolve(CategoryHandler);

export default (): Resource =>
  <Resource>{
    get: {
      schema: {
        description: 'Get list of all categories',
        summary: 'Get all categories',
        tags: ['Category'],

        response: {
          200: {
            type: 'array',
            items: {
              $ref: 'http://example.com/schema/category#',
            },
          },
        },
      },
      handler: async (request: FastifyRequest, reply: FastifyReply) => {
        const categories = await handler.getAll();

        return reply.send(categories);
      },
    },
  };
