/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('Article', () => {
  beforeEach(() => {
    cy.login('root@mail.net', 'E5dPkCf7bPTnfn6q')
  })

  it('Добавление комментария', () => {
    cy.visit('https://rwa-194.87.102.103.sslip.io/article/post-for-test-edit')

    cy.contains('Post for test - edit')

    const message = faker.lorem.words({
      min: 2,
      max: 10,
    })

    cy.intercept('POST', '/api/articles/post-for-test-edit/comments').as(
      'sendComment',
    )

    cy.get('[placeholder="Write a comment..."]').type(message)

    cy.get('button').contains('Post Comment').click()

    cy.wait('@sendComment').its('response.statusCode').should('eq', 200)

    cy.get('.card-text').contains(message)

    // https://rwa-194.87.102.103.sslip.io/api/articles/post-for-test-edit/comments

    // {
    //   "comment": {
    //     "id": "3daa0ba5-aa4b-4e33-bf71-8eebe00c366b",
    //     "createdAt": "2024-07-01T18:06:46.466Z",
    //     "updatedAt": "2024-07-01T18:06:46.466Z",
    //     "body": "other comment",
    //     "articleId": "e3bd3e3e-c162-47ba-a108-4dd6a95532c7",
    //     "authorId": "05922851-0c02-4217-b29c-de44f500d204",
    //     "del": false,
    //     "author": {
    //       "id": "05922851-0c02-4217-b29c-de44f500d204",
    //       "username": "Damir Rysaev",
    //       "email": "root@mail.net",
    //       "bio": null,
    //       "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
    //       "following": false
    //     }
    //   }
    // }
  })

  it('Ошибка сервера при добавлении комментария', () => {
    cy.visit('https://rwa-194.87.102.103.sslip.io/article/post-for-test-edit')

    cy.contains('Post for test - edit')

    const message = faker.lorem.words({
      min: 2,
      max: 10,
    })

    cy.intercept('POST', '/api/articles/post-for-test-edit/comments', {
      statusCode: 500,
      body: {
        error: 'Invalid error',
      },
    }).as('sendComment')

    cy.get('[placeholder="Write a comment..."]').type(message)

    cy.get('button').contains('Post Comment').click()

    cy.wait('@sendComment').its('response.statusCode').should('eq', 500)
  })
})
