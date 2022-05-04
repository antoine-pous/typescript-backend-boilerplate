import {FastifyPluginAsync} from 'fastify'

const notFoundHandler: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.setNotFoundHandler(async (req, res) => {
    return res.status(404).send({
      code: 404
      , resource: req.url
      , error: `Resource not found!`
    })
  })
}

export default notFoundHandler