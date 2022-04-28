import fastifyCors from '@fastify/cors';
import { FastifyInstance } from 'fastify';

const applyCors = (server: FastifyInstance): void => {
  server.register(fastifyCors, {
    origin: ['http://localhost:3000'],
    methods: ['GET'],
  });
};

export default applyCors;
