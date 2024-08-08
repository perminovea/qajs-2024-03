/* eslint-disable jest/no-conditional-expect */
import { config as _config, AuthDummyjsonService } from '../../framework'

const config = _config.dummyjson

describe('Auth', () => {
  it('Success login', async () => {
    const response = await AuthDummyjsonService.login({
      username: config.username,
      password: config.password,
    })

    expect(response.status).toEqual(200)
    expect(response.data.username).toBe(config.username)
    expect(response.data.token).toBeTruthy()
  })

  it('Failed login', async () => {
    try {
      await AuthDummyjsonService.login({
        username: config.username,
        password: 'wrongpassword',
      })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      expect(error.response.statusCode).toEqual(400)
      expect(error.response.body.message).toBe('Invalid credentials')
    }
  })
})

// type User = {
//   id: number;
// }
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const user: any = { id: 10 }
//
// // console.log((user as User).id)
// console.log(user.id)
