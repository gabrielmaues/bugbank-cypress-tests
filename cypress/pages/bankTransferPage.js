class TransferPage {
  fillAccountNumber(mainAlias, digitAlias) {
      cy.get(mainAlias).then(main => {
          cy.get('input[name="accountNumber"]').clear({ force: true }).type(main, { force: true })
      })
      cy.get(digitAlias).then(digit => {
          cy.get('input[name="digit"]').clear({ force: true }).type(digit, { force: true })
      })
  }

  fillTransferValue(value) {
      cy.get('input[name="transferValue"]').clear({ force: true }).type(value, { force: true })
  }

  fillDescription(description) {
      cy.get('input[name="description"]').clear({ force: true }).type(description, { force: true })
  }

  clickTransferNow() {
      cy.contains('button', 'Transferir agora').click({ force: true })
  }

  makeTransfer(mainAlias, digitAlias, value, description) {
      this.fillAccountNumber(mainAlias, digitAlias)
      this.fillTransferValue(value)
      this.fillDescription(description)
      this.clickTransferNow()
  }
}

export default new TransferPage()