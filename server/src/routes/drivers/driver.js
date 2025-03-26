const Driver = require('../../models/Driver');

const createSchema = {
  body: {
    type: 'object',
    required: ['name', 'phone', 'schedule', 'shift', 'vehicle', 'name_vehicle'],
    properties: {
      name: { type: 'string' },
      phone: { type: 'string' },
      schedule: { type: 'string' },
      shift: { type: 'string' },
      vehicle: { type: 'string' },
      name_vehicle: { type: 'string' },
    },
  },
};

async function getDriver(req, reply) {
  try {
    const allDrivers = await Driver.find();
    return reply.code(200).send(allDrivers);
  } catch (error) {
    console.error(error);
    return reply.status(500).send({ message: 'Ошибка сервера' });
  }
}

async function createDriver(req, reply) {
  try {
    const { name, phone, schedule, shift, vehicle, name_vehicle } = req.body;
    if (!req.user) {
      return reply
        .code(404)
        .send({ message: 'Вы должны войти в свой аккаунт' });
    }
    const existDriver = await Driver.findOne({ phone });
    if (existDriver) {
      return reply.code(400).send({ message: 'Телефон уже используется' });
    }
    const newDriver = new Driver({
      name,
      phone,
      schedule,
      shift,
      vehicle,
      name_vehicle,
    });
    await newDriver.save();
    return reply.code(201).send({ message: 'Водитель добавлен' });
  } catch (error) {
    console.error(error);
    return reply.status(500).send({ message: 'Ошибка сервера' });
  }
}

async function driverRoutes(fastify, opts) {
  fastify.get('/', getDriver);
  fastify.post(
    '/',
    {
      preHandler: [fastify.authenticate],
      schema: createSchema,
    },
    createDriver
  );
}

module.exports = driverRoutes;
