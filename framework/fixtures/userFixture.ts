import { faker } from '@faker-js/faker'

export interface User {
  userName: string;
  password: string;
}

export function generateUserCredentials(): User {
  return {
    userName: faker.internet.email(),
    password: 'P@ssw0rd',
  }
}
