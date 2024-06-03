let searchItem = '#search-bar'
let cartButton = '#cart-icon > img'
let shoppingModal = '#cartPopup'

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
    searchProducts(){
        cy.get(searchItem).should('be.visible').and('be.empty');
    }

    typeProducts(){
        cy.get(searchItem).type(Text);
    }
    
    cartIcon(){
        cy.get(cartButton).should('be.visible').and('be.enabled')
    }

    clickCartIcon(){
        cy.get(cartButton).click();
    }
    cartModalNotVisible(){
        cy.get(shoppingModal).should('not.be.visible');
    }
    cartModalVisible(){
        cy.get(shoppingModal).should('be.visible').and('contain', "Your Shopping Cart");
    }
}