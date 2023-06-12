///<reference types="cypress"/>
describe("Art Details", () => {
    it("Test case for showing each Art details", () => {

        cy.visit("http://localhost:3000/")
        cy.get(".p-4 > :nth-child(2)")
        cy.get('[data-cy="titleButton"]').eq(0).click({ multiple: true })
    })
})
