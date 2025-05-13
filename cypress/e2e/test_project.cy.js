/// <reference types="cypress" />

it('google test', () =>{
    cy.visit('https://www.google.com/')
    cy.get('#APjFqb').type('Cypress Automation{enter}')
})