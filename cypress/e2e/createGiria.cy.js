
import CreateGiriaPage from '../pages/createGiriaPage';
import { giria } from '../fixtures/giria.json';
import { user } from '../fixtures/user.json';

describe('Criar uma gíria nova', () => {

    beforeEach(() => {
        cy.start();
        cy.submitLogin(user.email, user.password);
    });

    it('Adicionar Gíria', () => {
        cy.wait(3000)//necessário para carregar a página do login
        CreateGiriaPage.adicionarGiria(
            giria.nome,
            giria.explicacao,
            giria.exemplo
        )
        cy.contains('Significado de: calabreso')
            .should('be.visible')
    })
})
