import Fastify from 'fastify'
import fp from 'fastify-plugin'
import {app} from './app'

// Fill in this config with all the configurations
// needed for testing the application
export const config = async () => {
  return {}
}

// Automatically build and tear down our instance
export const testApp = () => {
  const fastify = Fastify()

  // fastify-plugin ensures that all decorators
  // are exposed for testing purposes, this is
  // different from the production setup

  beforeAll(async () => {
    void fastify.register(fp(app), await config())
    await fastify.ready()
  })

  afterAll(() => fastify.close())

  return fastify
}