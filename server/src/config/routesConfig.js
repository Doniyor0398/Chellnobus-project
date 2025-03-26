// src/config/routesConfig.js
const authRoutes = require('../routes/user/auth');
const userRoutes = require('../routes/user/user');
const driverRoutes = require('../routes/drivers/driver');

async function routes(fastify, options) {
  fastify.register(authRoutes, { prefix: '/api/auth' });
  fastify.register(userRoutes, { prefix: '/api/user' });
  fastify.register(driverRoutes, { prefix: '/api/driver' });
}

module.exports = routes;
