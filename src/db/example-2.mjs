import { client } from './client.mjs'

await client.connect()

const result = await client.query(
  "SELECT * FROM airports WHERE city = 'Москва';",
)
console.log(result.rows)

await client.end()
