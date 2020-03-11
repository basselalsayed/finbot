describe('User inputs', function() {
  it("'Hi', and bot displays one of the responses from the array", function() {
    let welcome = "Howdy there, partner! I'm Ubb, nice to meet you. You can ask me anything about personal finance. If you would like a list of topics that I can tell you about, type 'help'. Beep, boop, bop. 🤖"
    cy.visit('/')
    cy.get('#formBasicEmail').type('Hi')
    cy.get('button.btn.btn-primary').click()
    cy.get('div.card-body').should(($div) => {
      const text = $div.text()
      expect(text).to.contain.oneOf([`${welcome}HiHello!`, `${welcome}HiGood to see you again!`, `${welcome}HiHi there, how can I help?`])
    })
  })

  it("'budgeting', and bot displays the response", function() {
    cy.visit('/')
    cy.get('#formBasicEmail').type('budgeting')
    cy.get('button.btn.btn-primary').click()
    cy.contains('A budget is essential to living within your means')
  })

  it("'income', and bot displays the response", function() {
    cy.visit('/')
    cy.get('#formBasicEmail').type('income')
    cy.get('button.btn.btn-primary').click()
    cy.contains("Income is money (or some equivalent value) that an individual or business receives")
  })
})