import { url } from "inspector"

describe('template spec', () => {
  it('passes', () => {
    
  cy.request({
      method: 'GET',
      url: 'http://localhost:3000/users/100',
      failOnStatusCode: false,
    }).as('getNewUsers')

    cy.get('@getNewUsers').then((result) => {
      expect(result.status).equal(404)
      cy.log('Usuario nao encontrado')
    })
  })
})