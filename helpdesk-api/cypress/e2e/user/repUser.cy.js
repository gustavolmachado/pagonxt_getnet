import { url } from "inspector"

describe('template spec', () => {
  it('passes', () => {
    
    cy.request({
        method: 'GET',
        url: 'http://localhost:3000/users/1',
        failOnStatusCode: false,
     }).then((response) => {
        if (response.status === 200) {
            cy.log('Usuário já existe. Criação não será feita.');
        } else {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/users',
                failOnStatusCode: false,
                body: {
                    "name": "Caetano Veloso",
                    "email": "caetano.veloso@outlook.com"
                }
             })
        }
     })
    })
})