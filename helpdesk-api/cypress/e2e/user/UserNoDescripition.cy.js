import { url } from "inspector"

describe('template spec', () => {
  it('passes', () => {
    
      cy.request({
      method: 'POST',
      url: 'http://localhost:3000/users',
      failOnStatusCode: false,
      body: {
      
    }
    }).as('postNewTicket')

    cy.get('@postNewTicket').then((result) => {
      expect(result.status).equal(400)
      cy.log('Erro ao criar usuario')
    })
  })
})