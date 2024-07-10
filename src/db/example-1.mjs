import { client } from './client.mjs'

await client.connect()

const response = await client.query('SELECT 1;')

// console.log(response);
console.log(response.rows)

await client.end()
