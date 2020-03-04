describe('User inputs', function() {
  it("'Shadi', and page dsiplays Hello Shadi!", function() {
    cy.visit('/')
    cy.get('input').type('Shadi')
    cy.get('.inputbtn').click()
    cy.contains('Hello Shadi')

  })
})