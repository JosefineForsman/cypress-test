describe('template spec', () => {
  beforeEach( () => {
    cy.visit('http://localhost:5175/message')
    cy.viewport(1000, 1000);
  })

  it('should be a textarea to see and an input field to enter a username.', () => {
    cy.get('[data-id="message__text"]').should('exist');
    cy.get('[data-id="message__input"]').should('exist');
  });

  it('Should be a clickable button to be able to publish your message and be navigated to the flow-page.', () => {
    cy.get('[data-id="message__btn"]').click()
    cy.get('[data-id="flow"]').should('be.visible');
  });

  it('Check that user input is displayed correctly in the flow.', () => {
    

  });


})