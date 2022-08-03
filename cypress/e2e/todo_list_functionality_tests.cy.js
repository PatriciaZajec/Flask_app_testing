/// <reference types="cypress"  />

var newEntry = Date.now()
var editedEntry = 2 * newEntry

describe("testing todo list functions", () => {


    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('https://flask.io/xsP2yM7fDiR4')
    })

    it('should open Flask page', () => {
        cy.get('.todolist')
            .should('be.visible')
    })

    it("should enter first task to a list", () => {
        cy.get("#task_description").type(newEntry + '{enter}')
        cy.contains(newEntry)
            .should('be.visible')
    })

    it("should enter new task to a list", () => {
        cy.get("#task_description").type(newEntry + '{enter}')
        cy.contains(newEntry)
            .should('be.visible')
    })

    it("should edit task in a list", () => {
        cy.get('.best_in_place').contains(newEntry).type(editedEntry)
        cy.get('#task_description').click()
        cy.contains(editedEntry)
            .should('be.visible')
    })


    it("should delete task in a list", () => {
        cy.get('.icon-remove').eq(0).click()
        cy.get('.container')
            .should('not.contain', editedEntry)
    })


    it('should finish tasks in a list', () => {
        cy.get('.check').check({ force: true })
        cy.get('#all-done').should('be.visible')
    })


    it('should rename list', () => {
        var nameList = 'New todo list '
        cy.get('#best_in_place_list_143982_name').type(nameList + newEntry)
        cy.get('#task_description').click()
        cy.get('#best_in_place_list_143982_name').should('contain', nameList + newEntry)
    })
})