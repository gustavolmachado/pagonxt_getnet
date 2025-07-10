import { url } from "inspector"

describe('template spec', () => {
  it('passes', () => {
    
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/users',
      failOnStatusCode: false
    })
  })
})