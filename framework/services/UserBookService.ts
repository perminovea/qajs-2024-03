import supertest from 'supertest'
import config from '../config/configBookstore'

interface ReplaceBookPayload {
  userId: string;
  fromIsbn: string;
  toIsbn: string;
  token: string;
}
const replaceBook = async ({ userId, fromIsbn, toIsbn, token }: ReplaceBookPayload) => {
  const response = await supertest(config.baseURL)
    .put(`/BookStore/v1/Books/${fromIsbn}`)
    .set('Authorization', `Bearer ${token}`)
    .send({
      userId,
      isbn: toIsbn,
    })
  return {
    headers: response.headers,
    status: response.status,
    data: response.body,
  }
}

interface AddListOfBooksPayload {
  userId: string;
  isbns: string[];
  token: string;
}
const addListOfBooks = async ({ userId, isbns, token }: AddListOfBooksPayload) => {
  const payload = {
    userId,
    collectionOfIsbns: isbns.map(isbn => ({ isbn })),
  }

  const response = await supertest(config.baseURL)
    .post(`/BookStore/v1/Books`)
    .set('Authorization', `Bearer ${token}`)
    .set('Accept', 'application/json')
    .send(payload)
  return {
    headers: response.headers,
    status: response.status,
    data: response.body,
  }
}

interface RemoveAllBooksPayload {
  userId: string;
  token: string;
}
const removeAllBooks = async ({ userId, token }: RemoveAllBooksPayload) => {
  const response = await supertest(config.baseURL)
    .delete(`/BookStore/v1/Books?UserId=${userId}`)
    .set('Authorization', `Bearer ${token}`)
  return {
    headers: response.headers,
    status: response.status,
    data: response.body,
  }
}

export default {
  replace: replaceBook,
  addList: addListOfBooks,
  removeAll: removeAllBooks,
}
