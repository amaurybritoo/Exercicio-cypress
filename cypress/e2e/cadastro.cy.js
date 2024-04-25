/// <reference types="cypress" />

var faker = require('@faker-js/faker')



//Criando as variaveis
let senha = faker.fakerPT_BR.internet.password()
let nome = faker.fakerPT_BR.person.firstName('male')
let sobrenome = faker.fakerPT_BR.person.lastName('male')
let email = faker.fakerPT_BR.internet.email(nome + sobrenome)

describe('Funcionalidade Cadastro', () => {


    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
    });

    it('deve ser feito o cadastro com sucesso', () => {

        //Pré cadastro
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(senha)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        //Cadastro
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('#account_display_name').clear().type(nome + ' ' + sobrenome)
        cy.get('.woocommerce-Button').click()

        //Resultado esperado
        cy.get('.woocommerce-MyAccount-content').should('contain', `Olá, ${nome} ${sobrenome}`)
    });
});