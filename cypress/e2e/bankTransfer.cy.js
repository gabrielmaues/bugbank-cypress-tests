import TransferPage  from '../pages/bankTransferPage';
import { transfer, message } from '../fixtures/bankTransfer.json';
import { user1, user2 } from '../fixtures/user.json';

describe.only('Make a bank transfer', () => {

    beforeEach(() => {
        cy.start();
        cy.createLogin(user1.email, user1.name, user1.password, 'accountUser1');
        cy.createLogin(user2.email, user2.name, user2.password, 'accountUser2');
        cy.submitLogin(user1.email, user1.password);
    });

   

    it('Make a bank transfer possible', () => {
        cy.get('#btn-TRANSFERÊNCIA')
            .click()

        TransferPage.makeTransfer('@accountUser2Main', '@accountUser2Digit', transfer.transferValue, transfer.description)
        
        cy.contains('button', 'Transferir agora')
            .click({ force: true })
        cy.get('#modalText')
            .should('have.text',message.success)
        
    })


})
