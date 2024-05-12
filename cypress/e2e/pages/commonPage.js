export class CommonPage{
    visitLink(url) {
        cy.visit(url);
    }
    writeUsername(){
        cy.get('[data-test="username"]').type("standard_user")
    }
    writePassword(){
        cy.get('[data-test="password"]').type("secret_sauce")
    }
    containText(Text){
        cy.get('body').should('contain',Text);
    }
    
}