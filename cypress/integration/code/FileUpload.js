

context('Window', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/upload')
  })

  it('open in Mac 15', () => {
    // https://on.cypress.io/window
    cy.viewport('macbook-15')
    cy.screenshot()
    cy.wait(200)
  })

  it('Upload the file and assert the name of the file',()=>{
	const filepath='download.png'
	
	cy.get("#file-upload").attachFile(filepath)
	cy.get("#file-submit").click()
	cy.get("#uploaded-files").contains('download')
})
})