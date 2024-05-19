export class MainPage{

    clickLink(linkName){
        cy.get(`#${linkName}`).should('be.visible').click();
    }

    // Añade más funciones por ejemplo alquna que compruebe que aparece algunos elementos en la página o alguna que haga type

}
