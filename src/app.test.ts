const request = require('supertest')
import { app } from './app'

describe('GET index', () => {
  it('should work', async () => {
    const res = await request(app).get("/")

    expect(res.body).toHaveProperty('foo')
    expect(res.body.foo).toEqual('bar')
  })
})
