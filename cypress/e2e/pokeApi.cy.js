describe('Pokemon', () => {

    beforeEach(() => {
        cy.fixture('dadosPokemon').as('dadosPokemon');
    })


    it('GET /pokemon deve retornar status 200 e iniciar com bulbasaur, ivysaur e venusaur', () => {
        cy.request('GET', `https://pokeapi.co/api/v2/pokemon/`).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.results[0].name).to.eq('bulbasaur')
            expect(response.body.results[1].name).to.eq('ivysaur')
            expect(response.body.results[2].name).to.eq('venusaur')
        })
    })



    it('O ID do pokemon deve ser o esperado', () => {
        cy.get('@dadosPokemon').then((dadosPokemon) => {
            dadosPokemon.forEach((pokemon) => {
                cy.request('GET', `https://pokeapi.co/api/v2/pokemon/${pokemon.nome}`).then((response) => {
                    expect(response.body.id).to.eq(pokemon.id);
                })
            })
        })
    })
});