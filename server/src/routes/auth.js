module.exports = async function (fastify, options) {
    fastify.get('/login', async (request, reply) => {
      return { message: 'Login endpoint' };
    });
  
    fastify.post('/register', async (request, reply) => {
      return { message: 'Register endpoint' };
    });
  };