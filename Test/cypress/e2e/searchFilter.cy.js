///<reference types="cypress"/>

describe("Search filter", () => {

    it("Test case for search filter", () => {

        cy.visit("https://lucent-gumdrop-c8a7dc.netlify.app/")
        cy.get("input").type("Adriaen van Wesel")
        cy.get(".button").click()
        cy.get(".p-4 > :nth-child(2)").contains("Adriaen van Wesel")
    })

})