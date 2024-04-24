describe("Testing the Selected Character page", () => {

    beforeEach(function () {
        cy.intercept("GET", "https://rickandmortyapi.com/api/episode/*", (req) => {
            const url = req.url
            const isEpisodeOne = url.includes("1")



            if (isEpisodeOne === true) {
                req.reply({
                    statusCode: 200,
                    body: {
                        "id": 1,
                        "name": "Pilot",
                        "air_date": "December 2, 2013",
                        "episode": "S01E01",
                        "url": "https://rickandmortyapi.com/api/episode/1",
                        "created": "2017-11-10T12:56:33.798Z"
                    },
                })
            }
            else {
                req.reply({
                    statusCode: 200,
                    body: {
                        "id": 2,
                        "name": "Lawnmower Dog",
                        "air_date": "December 9, 2013",
                        "episode": "S01E02",
                        "url": "https://rickandmortyapi.com/api/episode/2",
                        "created": "2017-11-10T12:56:33.916Z"
                    }
                })
            }
        })


    })
    it("Check if the SelectedCharacterCard is returned", () => {
        cy.visit("http://localhost:3000/character")
        cy.intercept('https://rickandmortyapi.com/api/character', {
            statusCode: 200,
            body: {
                results: [
                    {
                        "id": 1,
                        "name": "Rick Sanchez",
                        "status": "Alive",
                        "species": "Human",
                        "type": "",
                        "gender": "Male",
                        "origin": {
                            "name": "Earth (C-137)",
                            "url": "https://rickandmortyapi.com/api/location/1"
                        },
                        "location": {
                            "name": "Citadel of Ricks",
                            "url": "https://rickandmortyapi.com/api/location/3"
                        },
                        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                        "episode": [
                            "https://rickandmortyapi.com/api/episode/1",
                            "https://rickandmortyapi.com/api/episode/2",

                        ],
                        "url": "https://rickandmortyapi.com/api/character/1",
                        "created": "2017-11-04T18:48:46.250Z"
                    },
                ]
            },
        }).as("charactersRequest")
        cy.wait("@charactersRequest")
        cy.get('[data-cy="characterCard-1"]').click()
        cy.get('[data-cy="selectedCharacterCard-1"]')
            .should("exist")
    })

    it("See if name is correct", () => {
        cy.get('[data-cy="selectedCharacterCard-1"]')
            .find('[data-cy="characterName"]')
            .contains("Rick Sanchez")
    })
    it("See if Species and Status are correct", () => {
        cy.get('[data-cy="selectedCharacterCard-1"]')
            .find('[data-cy="characterSpecies"]')
            .contains("Human")
            .contains("Alive")
    })
    it("See if location is correct", () => {
        cy.get('[data-cy="selectedCharacterCard-1"]')
            .find('[data-cy="characterLocation"]')
            .contains("Citadel of Rick")
    })
    it("See if origin is correct", () => {
        cy.get('[data-cy="selectedCharacterCard-1"]')
            .find('[data-cy="characterOrigin"]')
            .contains("Earth")
    })
    it("See if episode name is correct", () => {
        cy.get('[data-cy="episodeCard"]')
            .find('[data-cy="episodeName"]')
            .contains("Pilot")
    })
    it("See if episode number is correct", () => {
        cy.get('[data-cy="episodeCard"]')
            .find('[data-cy="episodeNumber"]')
            .contains("S01E01")
    })
    it("See if the air date is correct", () => {
        cy.get('[data-cy="episodeCard"]')
            .find('[data-cy="episodeDate"]')
            .contains("December 2, 2013")
    })
})