describe('Todo list', () => {
  beforeEach(() => {
    cy.eyesOpen({
      appName: "tau-todo-app",
      testName: Cypress.currentTest.title
    })
  })
  afterEach(() => {
    cy.eyesClose()
  })
  it('should store input text as value', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[data-testid="todo-input"]').type("first todo item")
    
    cy.get('[data-testid="todo-input"]').should('have.value', "first todo item")

    cy.eyesCheckWindow({
      tag: "add input",
      target: "region",
      matchLevel: "Strict",
      selector: {
        type: "name",
        selector: "add_todo"
      }
    })
  })
})