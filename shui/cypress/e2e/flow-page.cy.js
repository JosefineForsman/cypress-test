describe('template spec', () => {
  beforeEach( () => {
    cy.visit('http://localhost:5175/flow')
    cy.viewport(1000, 1000);
  })

  it(' should be able to click on the Pen icon to be navigated to A new message.', () => {
    cy.get('[data-id="flow__pen"]').should('exist').click()
    cy.get('[data-id="message"]').should('be.visible');
  });

  it('In each message there must be a date, text message and a username', () => {
    cy.get('[data-id="flow__date"]').should('be.visible')
    cy.get('[data-id="flow__text"]').should('be.visible')
    cy.get('[data-id="flow__username"]').should('be.visible')
  });
})