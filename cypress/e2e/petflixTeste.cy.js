describe('Sistema da petFlix deve', () => {
    // acessar o site
    it('Exibir a home do site', () => {
        cy.visit('http://localhost:5173/Home')
    })
    // acessar um filme
    it('Exibir um video', () => {
        cy.visit('http://localhost:5173/Home')
        cy.get('[href="/Assistir/1"]').click();
    })
    // assistir
    it('Dar play em um video', () => {
        cy.visit('http://localhost:5173/Home')
        cy.get('[href="/Assistir/1"]').click()
        cy.get('[width="750"]').click();
    })
    it('Voltar para o home, da tela assistir', () => {
        cy.visit('http://localhost:5173/Home')
        cy.get('[href="/Assistir/1"]').click()
        cy.get('[href="/Home"]').click();
    })

})