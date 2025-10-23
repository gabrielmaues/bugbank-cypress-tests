// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('start', () => {
    cy.viewport(1440, 900)
    cy.visit('https://bugbank.netlify.app/')
})

Cypress.Commands.add('createLogin', (email, name, password, aliasName) => {
    cy.contains('button', 'Registrar')
        .click()
    cy.get('.card__register').within(() => {
        cy.get('input[name="email"]')
            .clear({force:true})
            .type(email, { force: true }) 
        cy.get('input[name="name"]')
            .clear({force:true})   
            .type(name, { force: true })
        cy.get('input[name="password"]')
            .clear({force:true})
            .type(password, { force: true })
        cy.get('input[name="passwordConfirmation"]')
            .clear({force:true})
            .type(password, { force: true })
        cy.get('#toggleAddBalance')   
            .click({ force: true })
        cy.contains('button', 'Cadastrar')
            .click({ force: true })
    })
    cy.get('#modalText')
        .should('contain.text', 'foi criada com sucesso')
        .invoke('text')
        .then((text) => {
            const match = text.match(/(\d+)-(\d)/)
            if (match) {
                const [full, main, digit] = match
                cy.wrap(main).as(`${aliasName}Main`)
                cy.wrap(digit).as(`${aliasName}Digit`)
                cy.log(`Conta criada - Main: ${main}, Dígito: ${digit}`)
            }
        })
    cy.get('#btnCloseModal')
        .click()
})


Cypress.Commands.add('submitLogin', (email, password) => {
    cy.get('.card__login').within(() => {
        cy.get('input[name="email"]')
            .type(email, { force: true })
        cy.get('input[name="password"]')
            .type(password, { force: true })
        cy.contains('button', 'Acessar')
            .click({ force: true })
      })
})
