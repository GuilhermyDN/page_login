describe('cypress basic test', () => {
  it('cadastro - test', () => {
    cy.visit('')
    cy.visit('http://localhost:5173/cadastro')

    cy.get('input[id="nome"]').type('teste silva do teste');
    cy.get('input[id="email"]').type("teste@teste.com");
    cy.get('input[name="cpf"]').type('12345678910');
    cy.get('input[id = "senha"]').type('12345');
    
    cy.get('[type^="submit"]').click();

    cy.wait(5300);
  })

  it('login - test', () => {
    cy.visit('');
    cy.visit('http://localhost:5173/login')
    
    cy.get('input[id="cpf"]').type("12345678910");
    cy.get('input[id="senha"]').type('12345');

    cy.get('[type^="submit"]').click(); 
  })
})