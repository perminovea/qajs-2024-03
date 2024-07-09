type User = {
  name: string
  age: number | string
  orders: number[]
}

type Admin = User & {
  permissions: string[]
}

const numbers: number[] = [1,2,3]

const user: User = {
  name: 'Dany',
  age: 30,
  orders: [1,2,3,4]
}

const userAdmin: Admin =  {
  name: 'DanyAdmin',
  age: '30',
  orders: [1,2,3,4],
  permissions: ['read', 'write']
}

function greet(user: User): string {
  console.log(`Hello, ${user.age}!`)
  return user.name
}
