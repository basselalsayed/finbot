describe('The home Page', function() {
  it('successfully loads', function() {
    cy.visit('/')
  })

  it("contains 'Hello world'", function() {
    cy.visit('/')
    cy.contains('Hello, world')
  })
})