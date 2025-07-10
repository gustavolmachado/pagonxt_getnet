import { url } from "inspector"

describe('template spec', () => {
  it('passes', () => {
    
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/users',
      failOnStatusCode: false,
      body: {
          "name": "Gustavo Machado",
          "email": "gustavo@machado.com"
    }
    }).as('postNewUser')

    cy.get('@postNewUser').then((result) => {
      expect(result.status).equal(201)
      cy.log('Usuario criado')
    })

    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/users/6',
      failOnStatusCode: false,
    }).as('getNewUser')

    cy.get('@getNewUser').then((result) => {
      expect(result.status).equal(200)
      cy.log('Usuario Encontrado')
    })

    cy.request({
      method: 'PUT',
      url: 'http://localhost:3000/users/6',
      failOnStatusCode: false,
      body: {
          "id": 6,
          "name": "Gustavo Lemos",
          "email": "gustavo@machado.com"
      }
    }).as('postNewUser')

    cy.get('@postNewUser').then((result) => {
      expect(result.status).equal(200)
      cy.log('Usuario Atualizado')
    })

    cy.request({
      method: 'DELETE',
      url: 'http://localhost:3000/users/6',
      failOnStatusCode: false,
    }).as('deleteNewUser')

    cy.get('@deleteNewUser').then((result) => {
      expect(result.status).equal(200)
      cy.log('Usuario Deletado')
    })    



  })
})