describe('cadastro de usuario', () => {
    it('o sistema deve permitir cadastrar com sucesso', () => {
        cy.fixture('dadosCadastro').then((cadastro) => {

            cy.visit('/login')
            cy.get('[data-testid="cadastrar"]').click()
            cy.get('[data-testid="nome"]').type(cadastro.nome)
            cy.get('[data-testid="email"]').type(cadastro.email)
            cy.get('[data-testid="password"]').type(cadastro.senha)
            cy.get('[data-testid="checkbox"]').click()
            cy.get('[data-testid="cadastrar"]').click()
            cy.get('h1').should('contain', 'Bem Vindo')

        })
    }),
        it('o sistema não deve permitir cadastrar com sucesso', () => {
            cy.fixture('dadosCadastro').then((cadastro) => {

                cy.visit('/login')
                cy.get('[data-testid="cadastrar"]').click()
                cy.get('[data-testid="nome"]').type(cadastro.nome)
                cy.get('[data-testid="email"]').type(cadastro.email)
                cy.get('[data-testid="password"]').type(cadastro.senha)
                cy.get('[data-testid="checkbox"]').click()
                cy.get('[data-testid="cadastrar"]').click()
                cy.get('.alert > :nth-child(2)').should('contain', 'Este email já está sendo usado')

            })
        })
})
