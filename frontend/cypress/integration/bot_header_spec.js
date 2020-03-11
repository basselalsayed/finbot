describe('The home Page', function() {
  it('shows the chatbot', function() {
    cy.visit('/')
  })

  it("contains the word ubb", function() {
    cy.visit('/')
    cy.contains('ubb')
  })
})