describe('Acesso ao site', () => {
  beforeEach(() => {
    cy.visit('/view/login.html')
  })


  it.only('Verificação de acesso', () => {
    cy.title().should('be.equal', 'Help Desk - Login')
  })
    
  it.only('Login', () => {
    cy.get('a').click()
    cy.get('[for="name"] > input').type('Teste')
    cy.get('[for="email"] > input').type('teste@teste.com')
    cy.get('#password').type('senha')
    cy.get('button').click()
    cy.get('a').click()
    cy.get('input[type="email"]').type('teste@teste.com')
    cy.get('input[type="password"]').type('senha')
    cy.get('button').click()
  })

  it('Criação de Usuário', () =>{
    cy.get('#addButton').click()
    cy.get('#name').type('Gustavo Machado')
    cy.get('#email').type('gustavo@machado.com')
    cy.get('#modal-button').click()
  })

  it.only('Buscar Usuario', () =>{
    cy.get('.filterContainer > input').type('gustavo')
    cy.get('.upper').contains('Gustavo Machado').should('be.visible')
  })

  it.only('Alteração de Usuário', () => {
    cy.get('button[onclick="triggerModalEdit(5)"]').click()
    cy.get('#name').click().type(' Alterado')
    cy.get('#modal-button').click()
  })

  it.only('Deletar Usuario', () =>{
    cy.get('[onclick="deleteCard(5)"]').click()
  })

  it.only('Verificar Tickets', () =>{
    cy.get('[href="./ticket.html"]').click()
    cy.get('select').select('Open')
    cy.get(':nth-child(1) > .info > .lower').contains('Open').should('be.visible')
    cy.get('select').select('In Progress')
    cy.get(':nth-child(1) > .info > .lower').contains('In Progress').should('be.visible')
    cy.get('select').select('Closed')
    cy.get(':nth-child(1) > .info > .lower').contains('Closed').should('be.visible')
    cy.get('select').select('--STATUS--')
  })

  it.only('Criar novo Ticket', () =>{
    cy.get('[href="./ticket.html"]').click()
    cy.get('button[class="addButton"]').click()
    cy.get('[for="name"] > input').type('caetano.veloso@outlook.com') //email ativo
    cy.get('[for="description"] > input').type('Loren Ipsum Teste') //3 palavras
    cy.get('.input-container > button').click()
    cy.get('form > span').click()
  })

  it.only('Editar ticket', () =>{
    cy.get('[href="./ticket.html"]').click()
    cy.get('[onclick="editCard(6)"]').click()
    cy.get('select').select('In Progress')
    cy.get(':nth-child(3) > .info > .upper').contains('Loren Ipsum Teste').should('be.visible')
    cy.get('select').select('--STATUS--')
  })

  it.only('Exclusao de ticket', () =>{
    cy.get('[href="./ticket.html"]').click()
    cy.get('[onclick="deleteCard(6)"]').click()
    cy.reload()
    cy.get(':nth-child(6) > .info > .upper').should('not.exist')
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