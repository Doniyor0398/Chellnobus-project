// src/config/routesConfig.js
const authRoutes = require('../routes/auth');
const userRoutes = require('../routes/user');

async function routes(fastify, options) {
  fastify.register(authRoutes, { prefix: '/api/auth' });
  fastify.register(userRoutes, { prefix: '/api/user' });
}

module.exports = routes;
