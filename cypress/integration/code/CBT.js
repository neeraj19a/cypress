/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('https://bugreaper.blogspot.com')
  })

  it('open in Mac 15', () => {
    // https://on.cypress.io/window
    cy.viewport('macbook-15')
    cy.screenshot()
    cy.wait(200)
  })

   it('open in Mac 13', () => {
    // https://on.cypress.io/window
    cy.viewport('macbook-13')
    cy.screenshot()
    cy.wait(200)
  })

    it('open in ipad-2', () => {
    // https://on.cypress.io/window
    cy.viewport('ipad-2')
    cy.screenshot()
    cy.wait(200)
  })
    
it('open in samsung-s10', () => {
    // https://on.cypress.io/window
    cy.viewport('samsung-s10')
    cy.screenshot()
    cy.wait(200)
  })
    
  
})
