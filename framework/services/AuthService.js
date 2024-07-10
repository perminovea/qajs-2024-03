import config from '../config/configBookstore'
import { cached } from '../utils/cache'

class AuthService {
  static async generateToken({ userName, password }) {
    const response = await fetch(`${config.baseURL}/Account/v1/GenerateToken`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName, password }),
    })

    return {
      headers: response.headers,
      status: response.status,
      data: await response.json(),
    }
  }

  static async authorized({ userName, password }) {
    // this....
    const response = await fetch(`${config.baseURL}/Account/v1/Authorized`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName, password }),
    })

    return {
      headers: response.headers,
      status: response.status,
      data: await response.json(),
    }
  }

  static generateTokenCached() {
    return cached(AuthService.generateToken)
  }

  static getTokenFromCache = async ({ userName, password }) => {
    const response = await AuthService.generateTokenCached({
      userName,
      password,
    })
    if (typeof response.data.token !== 'string') {
      throw new Error('No token in response')
    }
    return response.data.token
  }
}

export { AuthService }
