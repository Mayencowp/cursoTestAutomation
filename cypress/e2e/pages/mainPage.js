export class MainPage{

    clickLink(linkName){
        cy.get(`#${linkName}`).should('be.visible').click();
    }

}