import Ajv from 'ajv'
import { TodoSchema, TodoService } from '../../framework'

const ajv = new Ajv()

describe('Todo', () => {
  it('Should return a todo', async () => {
    const response = await TodoService.get(1)
    expect(response.status).toBe(200)
    expect(response.data).toStrictEqual({
      id: 1,
      completed: expect.any(Boolean),
      todo: expect.any(String),
      userId: expect.any(Number),
    })
  })

  it('Should return 404 if todo not exits', async () => {
    const response = await TodoService.get(10_000) // 10000
    expect(response.status).toBe(404)
    expect(response.data).toStrictEqual({
      message: "Todo with id '10000' not found",
    })
  })

  it('Should return a random todo', async () => {
    const response1 = await TodoService.getRandom()

    const validate1 = ajv.validate(TodoSchema, response1.data)
    expect(response1.status).toBe(200)
    expect(validate1).toBe(true)

    const response2 = await TodoService.getRandom()

    const validate2 = ajv.validate(TodoSchema, response2.data)
    expect(response2.status).toBe(200)
    expect(validate2).toBe(true)

    expect(response1.data).not.toStrictEqual(response2.data)
  })

  it.todo('Should return all todo by user id')
  it.todo('Should correct add new todo')
  it.todo('Should correct update todo')
  it.todo('Should delete todo')
})
