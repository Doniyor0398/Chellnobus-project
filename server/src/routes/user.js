const { default: fastify } = require('fastify');
const User = require('../models/User')

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

  const userRoutes = async (fastify, options) => {
    
  }