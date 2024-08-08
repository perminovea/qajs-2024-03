import axios from 'axios'
import config from '../config/configBookstore'

const client = axios.create({
  baseURL: config.baseURL,
  validateStatus: () => true,
})

interface GetUserPayload {
  userId: string;
  token: string;
}
const getUser = async ({ userId, token }: GetUserPayload) => {
  const response = await client.get(`/Account/v1/User/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return {
    headers: response.headers,
    status: response.status,
    data: response.data,
  }
}

interface CreateUserPayload {
  userName: string;
  password: string;
}
const createUser = async ({ userName, password }: CreateUserPayload) => {
  const response = await client.post(`/Account/v1/User`, {
    userName,
    password,
  })

  return {
    headers: response.headers,
    status: response.status,
    data: response.data,
  }
}

interface RemoveUserPayload {
  userId: string;
  token: string;
}
const removeUser = async ({ userId, token }: RemoveUserPayload) => {
  const response = await client.delete(`/Account/v1/User/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return {
    headers: response.headers,
    status: response.status,
    data: response.data,
  }
}

export default {
  get: getUser,
  create: createUser,
  remove: removeUser,
}
