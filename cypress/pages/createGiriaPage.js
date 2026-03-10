class CreateGiriaPage {

  openInsertPage() {
    cy.contains('a', 'Inserir Gíria').click({ force: true })
  }

  fillNome(nome) {
    cy.get('input[placeholder="Gíria ou termo..."]')
      .type(nome, { force: true })
  }

  fillExplicacao(explicacao) {
    cy.get('textarea')
      .type(explicacao, { force: true })
  }

  fillExemplo(exemplo) {
    cy.get('input[placeholder="Exemplo de como usar a gíria..."]')
      .type(exemplo, { force: true })
  }

  clickAdicionar() {
    cy.contains('button', 'Adicionar Gíria').click({ force: true })
  }


  adicionarGiria(nome, explicacao, exemplo) {
    this.openInsertPage()
    this.fillNome(nome)
    this.fillExplicacao(explicacao)
    this.fillExemplo(exemplo)
    this.clickAdicionar()
  }
}

export default new CreateGiriaPage()