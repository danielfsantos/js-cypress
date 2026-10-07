
describe('login com exito', () => {
  it('Login com sucesso', () => {
    cy.fixture('dadosCadastro').then((dados) => {

      cy.visit('/login')
      cy.get('[data-testid="email"]').type(dados.email)
      cy.get('[data-testid="senha"]').type(dados.senha)
      cy.get('[data-testid="entrar"]').click()
      cy.get('h1').should('contain', 'Bem Vindo')

    })

  })
})