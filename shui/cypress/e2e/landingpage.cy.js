describe('template spec', () => {
  beforeEach( () => {
    cy.visit('http://localhost:5175/')
    cy.viewport(1000, 1000);
  })

  it('should display landingpage', () => {
    cy.get('[data-id="landing"]').should('exist');
  });

  it('should be able to click "Skriv en kommentar" further to start writing in the text box.', () => {
    cy.get('[data-id="landing__btn"]').should('have.text', 'Skriv en kommentar').click();
    cy.get('[data-id="message"]').should('be.visible');
  });
})