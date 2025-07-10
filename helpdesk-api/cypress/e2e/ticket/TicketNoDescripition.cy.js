import { url } from "inspector"

describe('template spec', () => {
  it('passes', () => {
    
      cy.request({
      method: 'POST',
      url: 'http://localhost:3000/tickets',
      failOnStatusCode: false,
      body: {
        "userId": 5,
    }
    }).as('postNewTicket')

    cy.get('@postNewTicket').then((result) => {
      expect(result.status).equal(400)
    })
  })
})