import {testApp} from "../testApp";

const error = {
  code: 404
  , resource: '/any/wrong/path'
  , error: 'Resource not found!'
}

describe('Route not found handler test suite', () => {
  const app = testApp()

  test('GET /any/wrong/path must return a 404 error', async () => {
    const res = await app.inject({
      url: '/any/wrong/path'
      , method: 'GET'
    })

    expect(res.statusCode).toBe(404)
    expect(JSON.parse(res.payload)).toEqual(error)
  })

  test('POST /any/wrong/path must return a 404 error', async () => {
    const res = await app.inject({
      url: '/any/wrong/path'
      , method: 'POST'
    })

    expect(res.statusCode).toBe(404)
    expect(JSON.parse(res.payload)).toEqual(error)
  })

  test('DELETE /any/wrong/path must return a 404 error', async () => {
    const res = await app.inject({
      url: '/any/wrong/path'
      , method: 'DELETE'
    })

    expect(res.statusCode).toBe(404)
    expect(JSON.parse(res.payload)).toEqual(error)
  })

  test('PUT /any/wrong/path must return a 404 error', async () => {
    const res = await app.inject({
      url: '/any/wrong/path'
      , method: 'PUT'
    })

    expect(res.statusCode).toBe(404)
    expect(JSON.parse(res.payload)).toEqual(error)
  })

  test('PATCH /any/wrong/path must return a 404 error', async () => {
    const res = await app.inject({
      url: '/any/wrong/path'
      , method: 'PATCH'
    })

    expect(res.statusCode).toBe(404)
    expect(JSON.parse(res.payload)).toEqual(error)
  })
})