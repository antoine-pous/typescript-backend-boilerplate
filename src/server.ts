import {env} from "./env";
import {app} from "./app";
import fastify from "fastify";

fastify()
  .register(app)
  .listen(env.PORT)
  .then(() => console.log('Listen on port', env.PORT))
  .catch(console.error)
