/// <reference types='cypress'/>

describe('Funcionalidade Carrinho de compas', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    //variavel de quantidade de produtos
    let qtd = 5

    it('deve adicionar o produto ao carrinho', () => {

        //pegou a classe da tabela de produtos e escolheu um produto pelo index
        cy.get('.product-block').eq(3).click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(qtd)
        cy.get('.single_add_to_cart_button').click()

        //resultade esperado
        cy.get('.woocommerce-message').should('contain',` ${qtd} × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.`)
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').should('contain','View Cart')

    });

    it('Dever remover item do carrinho', () => {
        cy.get('.product-block').eq(3).click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(qtd)
        cy.get('.single_add_to_cart_button').click()

        //Remover item do carrinho
        cy.get('.woocommerce-message > .button').click()
        cy.get('.remove > .fa').click()
        cy.get('.woocommerce-message').should('contain','Ajax Full-Zip Sweatshirt” removido. Desfazer?')
    });

});