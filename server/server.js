require('dotenv').config();
const fastify = require('fastify')();
// const fastify = require('fastify')({ logger: true });
const fastifyJWT = require('fastify-jwt');
const fastifyCookie = require('@fastify/cookie');
const connectDB = require('./src/config/dbConfig');
const routes = require('./src/config/routesConfig');

fastify.register(fastifyJWT, {
  secret: process.env.JWT_SECRET || 'your-secret-key',
});
fastify.decorate('authenticate', async function (req, reply) {
  try {
    const decoded = await req.jwtVerify();
    req.user = decoded;
    // console.log('---------------------------------------------------------------------------------------',decoded);
  } catch (err) {
    reply.send(new Error('Неавторизованный доступ'));
  }
});
fastify.register(fastifyCookie);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB();
    fastify.register(routes);
    await fastify.listen({ port: PORT });
    console.log(`Server_start_http://localhost:${PORT}`);
  } catch (err) {
    if (err.code === 'EADDRINUSE') {
      fastify.log.error(`Ошибка: порт ${PORT} уже занят!`);
      // Освободить порт (kill -9 PID или npx kill-port 3000)
    } else {
      fastify.log.error(err);
    }
    process.exit(1);
  }
};

start();
