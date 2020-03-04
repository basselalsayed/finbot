describe('User inputs', function() {
  it("'Shadi', and page dsiplays Hello Shadi!", function() {
    cy.visit('/')
    cy.get('.input-name').type('Shadi')
    cy.get('.input-btn').click()
    cy.contains('Hello Shadi')

  })
})