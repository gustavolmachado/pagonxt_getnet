describe('Acesso ao site', () => {
    beforeEach(() => {
        cy.visit('/view/login.html')
    })


    it.only('Login', () => {
        cy.get('input[type="email"]').type('teste@teste.com')
        cy.get('input[type="password"]').type('senha')
        cy.get('button').click()
    })

    it.only('Ticket com email invalido', () =>{
        cy.get('[href="./ticket.html"]').click()
        cy.get('button[class="addButton"]').click()
        cy.get('[for="name"] > input').type('teste@fake.com')
        cy.get('[for="description"] > input').type('Loren Ipsum Teste') //3 palavras
        cy.get('.input-container > button').click()
        cy.get('form > span').click()
        cy.get(':nth-child(3) > .info > .upper').contains('Loren Ipsum Teste').should('not.exist').then(() =>{
            cy.log('EMAIL INVALIDO')
        })
     })

    after(() => {
        const path = '../helpdesk-page/data/loggedIn.json';

         cy.task('deleteFileIfExists', path).then((deleted) => {
            if (deleted) {
                cy.log(`Arquivo ${path} deletado`);
            } else {
                cy.log(`Arquivo ${path} não encontrado`);
            }
        });
    });

})