import express from 'express'
import bodyParser from 'body-parser'

const app = express()

// Enable JSON parsing on request.body
app.use(bodyParser.json())

app.get('/', (request, response) => {
  response.json({ foo: 'bar' });
})

app.post('/new', (request, response) => {
  const { body } = request;
  response.json(body);
})

export { app }

