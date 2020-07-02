/// <reference types="Cypress" />


describe('Seating Arrg. Suite',() => { 

    it.only('stub xhr all teams',() => {
        cy.server()
        cy.route({
            method : 'GET',
            url : 'https://seating-arrangement.herokuapp.com/map/team/all',
            status : 400,
            response: {}
        }).as('allTeams')

        cy.visit('https://seating-arrangement.herokuapp.com/seats.html')

        cy.wait('@allTeams')
    })

    it('stub xhr map 1',() => {
        cy.server()
        cy.route({
            method : 'GET',
            url : 'https://seating-arrangement.herokuapp.com/map/1',
            status : 400,
            response: {}
        }).as('Map')

        cy.visit('https://seating-arrangement.herokuapp.com/seats.html')

        cy.wait('@Map')
    })
})