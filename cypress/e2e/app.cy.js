describe('POC', () => {
    it('should access top page', () => {
        cy.visit('/');
        cy.get('a').should('exist');
    });
})