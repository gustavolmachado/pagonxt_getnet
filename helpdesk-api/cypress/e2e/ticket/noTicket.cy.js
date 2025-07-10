import { url } from "inspector"

describe('template spec', () => {
  it('passes', () => {
    
  cy.request({
      method: 'GET',
      url: 'http://localhost:3000/tickets/100',
      failOnStatusCode: false,
    }).as('getNewTicket')

    cy.get('@getNewTicket').then((result) => {
      expect(result.status).equal(404)
    })
  })
})