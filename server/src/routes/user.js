const User = require('../models/User');

const createUserSchema = {
  body: {
    type: 'object',
    required: ['name', 'email', 'password'],
    properties: {
      name: { type: 'string' },
      email: { type: 'string', format: 'email' },
      password: { type: 'string', minLength: 6 },
    },
  },
};
const updateUserSchema = {
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      email: { type: 'string', format: 'email' },
      password: { type: 'string', minLength: 6 },
    },
  },
};

async function createUser(req, reply) {
  try {
    const { name, email, password, rePassword } = req.body;

    if (password !== rePassword) {
      return reply.status(400).send({ message: 'Пароли не совпадают' });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return reply.status(400).send({ message: 'Email уже используется' });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();
    const token = req.server.jwt.sign({
      id: newUser._id,
      email: newUser.email,
    });

    return reply.status(201).send({
      message: 'Пользователь создан',
      user: { id: newUser._id, name: newUser.name, email: newUser.email },
      token,
    });
  } catch (error) {
    console.error(error);
    return reply.status(500).send({ message: 'Ошибка сервера' });
  }
}

async function updateUser(req, reply) {
  try {
    const { name, email, password, rePassword } = req.body;
    const userId = req.user.id;

    const user = await User.findById(userId);
    if (!user) {
      return reply.code(404).send({ message: 'Пользователь не найден' });
    }
    if (name) user.name = name;
    if (email) user.email = email;
    if (password) {
      if (password !== rePassword) {
        return reply.code(400).send({ message: 'Пароли не совпадают' });
      }
      user.password = password;
    }

    await user.save();

    return reply.code(200).send({
      message: 'Данные пользователя обновлены',
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error(error);
    return reply.code(500).send({ message: 'Ошибка сервера' });
  }
}

async function deleteUser(req, reply) {
  try {
    const userId = req.user.id;
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return reply.code(404).send({ message: 'Пользователь не найден' });
    }
    reply.clearCookie('token', { path: '/' });
    return reply.code(200).send({ message: 'RIP' });
  } catch (error) {
    console.error('Ошибка удаления пользователя:', error);
    return reply.code(500).send({ message: 'Ошибка сервера' });
  }
}

async function userRoutes(fastify, opts) {
  fastify.post('/', { schema: createUserSchema }, createUser);
  fastify.put(
    '/',
    { preHandler: [fastify.authenticate], schema: updateUserSchema },
    updateUser
  );
  fastify.delete('/', { preHandler: [fastify.authenticate] }, deleteUser);
}

module.exports = userRoutes;
