// @ts-expect-error FIXME
import got from 'got'
import config from '../config/configDummyjson'

/**
 * Чтобы got работал вместе с jest
 * нужно добавить в jest.config.js
 *   transformIgnorePatterns: [
 *     "/node_modules/(?!got)/"
 *   ]
 * DOC: https://jestjs.io/docs/configuration#transformignorepatterns-arraystring
 */

interface LoginPayload {
  username: string
  password: string
  expiresInMins?: number
}
const login = async ({ username, password, expiresInMins }: LoginPayload) => {
  const response = await got.post(`${config.baseURL}/auth/login`, {
    json: {
      username,
      password,
      expiresInMins,
    },
    responseType: 'json',
  })

  return {
    status: response.statusCode,
    headers: response.headers,
    data: response.body,
  }
}

export default {
  login,
}
