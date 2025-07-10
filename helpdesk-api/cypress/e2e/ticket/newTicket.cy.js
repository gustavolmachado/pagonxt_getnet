import { url } from "inspector"

describe('template spec', () => {
  it('passes', () => {
    
    // POST
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/tickets',
      failOnStatusCode: false,
      body: {
        "userId": 5,
        "description": "Loren Ipsum"
    }
    }).as('postNewTicket')

    cy.get('@postNewTicket').then((result) => {
      expect(result.status).equal(201)
      cy.log('Ticket criado')
    })
     
    // GET
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/tickets/6',
      failOnStatusCode: false,
    }).as('getNewTicket')

    cy.get('@getNewTicket').then((result) => {
      expect(result.status).equal(200)
      cy.log('Ticket Encontrado')
    })
     
    // PUT
    /*cy.request({
      method: 'PUT',
      url: 'http://localhost:3000/tickets/6/open',
      failOnStatusCode: false,
      body: {
        "userId": 5,
        "description": "Loren Loren",
        "status": "Closed",
        "createdAt": "2025-07-08T21:42:38.880Z"
      }
    }).as('postNewTicket')

    cy.get('@postNewTicket').then((result) => {
      expect(result.status).equal(200)
    })*/

    // DELETE
    cy.request({
      method: 'DELETE',
      url: 'http://localhost:3000/tickets/6',
      failOnStatusCode: false,
    }).as('deleteNewTicket')

    cy.get('@deleteNewTicket').then((result) => {
      expect(result.status).equal(200)
      cy.log('Ticket Deletado')
    }) 



  })
})