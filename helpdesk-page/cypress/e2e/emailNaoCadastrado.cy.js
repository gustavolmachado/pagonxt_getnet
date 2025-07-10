describe('Acesso ao site', () => {
  beforeEach(() => {
    cy.visit('/view/login.html')
  })

    it.only('Login', () => {
         cy.get('input[type="email"]').type('teste@fake.com')
         cy.get('input[type="password"]').type('senha')
         cy.get('button').click()
         cy.get('[href="#"]').should('not.exist').then((invalido) =>{
            cy.log('EMAIL INVALIDO')
         })
    })

})