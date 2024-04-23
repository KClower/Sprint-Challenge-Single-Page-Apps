describe("This a test", () => {
    it("Should return True", () => {
        expect(true).to.equal(true);
    })
})

describe("Testing the home page", () => {
    beforeEach(function () {
        cy.visit("http://localhost:3000")
    });

    it("Looking for h1 on page", () => {
        cy.get("h1")
            .should("contain", "Welcome to the ultimate fan site!");
    })

    it("See if links are in the nav", () => {
        cy.get('[data-cy="homeLink"]')
            .should("exist")
        cy.get('[data-cy="characterLink"]')
            .should("exist")
        cy.get('[data-cy="locationLink"]')
            .should("exist")
    })

    it("Looking for h1 on page", () => {
        cy.get("h1")
            .should("contain", "Rick & Morty Fan Page");
    })

    it("Check image hosting", () => {
        cy.request("https://rickandmortyapi.com/api/character/avatar/1.jpeg")
            .then((response) => {
                expect(response.status).to.eq(200)
            })
    })

})

