const request = require('supertest')
import { app } from './app'

describe('GET index', () => {
  it('should work', async () => {
    const res = await request(app).get("/")

    expect(res.body).toHaveProperty('foo')
    expect(res.body.foo).toEqual('bar')
  })
})

describe('POST /new', () => {
  it('should take a post request', async (done) => {
    const res = await request(app)
      .post("/new")
      .type("json")
      .send({
        key: "value",
      })

    expect(res.body).toHaveProperty('key')
    expect(res.body.key).toEqual('value')
    done()
  })
})
