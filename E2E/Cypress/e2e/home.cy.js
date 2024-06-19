/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe('Links in Home', () => {

  it('tests the links in navbar', () => {
    cy.visit('/')

    const expectedTitles = ['Product', 'Docs', 'Community', 'Company', 'Pricing']
    const expectedPaths = ['/app', 'https://on.cypress.io/', '/blog', '/about-us', '/pricing']

    cy.get('[data-cy="main"]').within(() => {
      cy.get('ul').should('have.length', 8);
         cy.assertLinks('.nav-bar-link', expectedTitles, expectedPaths)
      
    }) 
  })
})
