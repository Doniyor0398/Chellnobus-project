const fastify = require('fastify')
const authRoutes = require('../routes/auth')
const userRoutes = require('../routes/user')

const app = fastify()


app.register(authRoutes, {prefix: '/api/auth'})
app.register(userRoutes, {prefix: '/api/user'})

module.exports = app