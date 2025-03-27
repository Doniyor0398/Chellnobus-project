const User = require('../../models/User');

async function loginUser(req, reply) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // console.log('Тип user:', typeof user);
    // console.log('Методы user:', Object.getOwnPropertyNames(Object.getPrototypeOf(user)));
    if (!user) {
      return reply.code(400).send({ message: 'Неверный email' });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return reply.code(400).send({ message: 'Неверный пароль' });
    }
    const token = req.server.jwt.sign({
      id: user._id,
      email: user.email,
      role: user.role,
    });

    return reply.code(200).send({
      message: 'Вход выполнен',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    return reply.code(500).send({ message: 'Ошибка сервера' });
  }
}

async function logoutUser(req, reply) {
  try {
    reply.clearCookie('token', { path: '/' });
    return reply.code(200).send({ message: 'Goodbye' });
  } catch (error) {
    console.error('Ошибка удаления пользователя:', error);
    return reply.code(500).send({ message: 'Ошибка сервера' });
  }
}

async function authRoutes(fastify, opt) {
  fastify.post('/login', loginUser);
  fastify.post('/logout', logoutUser);
}

module.exports = authRoutes;

// module.exports = async function (fastify, options) {
//   fastify.get('/login', async (request, reply) => {
//     return { message: 'Login endpoint' };
//   });

//   fastify.post('/register', async (request, reply) => {
//     return { message: 'Register endpoint' };
//   });
// };
