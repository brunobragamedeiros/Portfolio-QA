Cypress.Commands.add('assertLinks', (elementIdentifier, expectedTitle, expectedPath) => {
    cy.get(elementIdentifier).each((item, index) => {
        cy.get(elementIdentifier).eq(index)
            .contains(expectedTitle[index])
            .should('have.attr', 'href').and('include', `${expectedPath[index]}`) // without clicking the button, it checks for the url and its status code
            .then(href => {
                cy
                    .request(href)
                    .its('status')
                    .should('eq', 200);
            });
    })
})


