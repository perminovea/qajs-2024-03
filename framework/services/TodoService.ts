import axios from 'axios'
import config from '../config/configDummyjson'

const client = axios.create({
  baseURL: `${config.baseURL}/todos`,
  validateStatus: null,
})

interface Todo {
  id: number;
  completed: boolean;
  todo: string;
  userId: number;
}

interface GetAllTodos {
  limit?: number;
  skip?: number;
}
const getAllTodos = async ({ limit, skip }: GetAllTodos) => {
  const response = await client.get('/', {
    params: {
      limit,
      skip,
    },
  })

  return {
    status: response.status,
    headers: response.headers,
    data: response.data as Todo[],
  }
}

const getTodo = async (id: string) => {
  const response = await client.get(`/${id}`)

  return {
    status: response.status,
    headers: response.headers,
    data: response.data as Todo,
  }
}

const getRandomTodo = async () => {
  const response = await client.get(`/random`)

  return {
    status: response.status,
    headers: response.headers,
    data: response.data as Todo,
  }
}

const getAllTodosByUserId = async (userId: number) => {
  const response = await client.get(`/user/${userId}`)

  return {
    status: response.status,
    headers: response.headers,
    data: response.data as Todo[],
  }
}

const addTodo = async (data: Partial<Todo>) => {
  const response = await client.post('/', data)

  return {
    status: response.status,
    headers: response.headers,
    data: response.data as Todo[],
  }
}

const updateTodo = async (data: Partial<Todo>) => {
  const response = await client.put(`/`, data)

  return {
    status: response.status,
    headers: response.headers,
    data: response.data as Todo,
  }
}

const deleteTodo = async (id: number) => {
  const response = await client.delete(`/` + id)

  return {
    status: response.status,
    headers: response.headers,
    data: response.data as null,
  }
}

export default {
  getAll: getAllTodos,
  get: getTodo,
  getRandom: getRandomTodo,
  getAllByUserId: getAllTodosByUserId,
  add: addTodo,
  update: updateTodo,
  delete: deleteTodo,
}
