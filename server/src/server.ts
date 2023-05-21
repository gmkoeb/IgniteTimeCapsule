import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'
import 'dotenv/config'
import jwt from '@fastify/jwt'
import { authRoutes } from './routes/auth'
import { uploadRoutes } from './routes/upload'
import multipart from '@fastify/multipart'
import { resolve } from 'path'
const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})
app.register(multipart)
app.register(memoriesRoutes)
app.register(authRoutes)
app.register(uploadRoutes)
app.register(jwt, {
  secret: 'spacetime',
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('👌http server running on port 3333')
  })
