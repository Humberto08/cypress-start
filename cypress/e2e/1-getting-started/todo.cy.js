context('TodoMVC', () => {
  it("Adicioner uma nova tarefa", () => {
    cy.visit("https://todomvc-app-for-testing.surge.sh/");


    cy.get("input.new-todo").type("Estudar automoção de testes{enter}")

    // validação / garantia

    cy.get("ul.todo-list li").should("have.length", 1)


    //chai

  })
})


