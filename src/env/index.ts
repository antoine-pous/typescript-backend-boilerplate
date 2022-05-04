import {config} from "dotenv";
config()

import {cleanEnv, num} from "envalid"

export interface IEnv {
  readonly PORT: number
}


export const env: IEnv = cleanEnv(process.env, {
  PORT: num()
})
