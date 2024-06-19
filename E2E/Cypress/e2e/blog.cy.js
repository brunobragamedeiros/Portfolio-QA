/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

import { faker } from '@faker-js/faker';

describe('Search feature in blog', () => {
  it('access an article', () => {
    cy.visit('/blog')
    cy.get('[type="search"]').type('Visual Testing');
    cy.contains('Guest Post: Visual Testing with Cypress').click({ force: true });
  })
})

describe('Blog structure', () => {
  it('tests older posts flow', () => {
    cy.visit('/blog')
    cy.get('a').contains('Older posts').click();
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}blog/page/2`)
  })

  it('tests new posts flow', () => {
    cy.visit('/blog/page/2')
    cy.get('a').contains('Newer posts').click();
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}blog/page/1`)
  })

  it('tests subscription flow', () => {
    cy.visit('/blog/page/2')
    cy.get('[data-cy="footer-newsletter"]').click();
    cy.get('[name="email"]').type(faker.internet.email());
    cy.get('button').contains('Subscribe today').click();
    cy.get('h2').contains('Thank you for subscribing!').should('be.visible');
  })
})