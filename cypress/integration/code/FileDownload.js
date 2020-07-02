

context('Window', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/upload')
  })

  it('Download', () => {
    cy.downloadFile('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf','Download','demo.pdf')
  })
  })
