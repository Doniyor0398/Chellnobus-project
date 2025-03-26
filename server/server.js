require('dotenv').config();
const fastify = require('fastyfy')({ logger: true });
const fastifyJWT = require('fastify-jwt');
const connectDB = require('./src/config/dbConfig');
const routes = require('./src/config/routes');


fastify.register(fastifyJWT, {
    secret: process.env.JWT_SECRET || 'your-secret-key',
  });

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
