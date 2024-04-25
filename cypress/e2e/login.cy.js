/// <reference types="cypress"/>

describe('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
    });


    //caminho feliz - usuario: aluno_ebac@teste.com senha:teste@teste.com
    it('deve fazer login com sucesso', () => {
        //captura de componetes
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        //resultado esperado
        cy.get('.wpb_wrapper > .woocommerce').should('contain', 'Olá, aluno_ebac')
    });

    //email invalido
    it('deve aparece uma mensagem de erro ao tentar logar com o email invalido', () => {
        //captura de componetes
        cy.get('#username').type('aluno_ebacteste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        //resultado esperado
        cy.get('.woocommerce-error').should('contain', 'Erro: O usuário aluno_ebacteste.com não está registrado neste site.')

    });

    //email com campo vazio
    it('deve aparece uma mensagem de erro ao tentar logar com o email vazio', () => {
        //captura de componetes
        cy.get('#username').type(' ')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        //resultado esperado
        cy.get('.woocommerce-error').should('contain', 'Erro: Nome de usuário é obrigatório.')

    });

    //senha invalido
    it('deve aparece uma mensagem de erro ao tentar logar com a senha invalida', () => {
        //captura de componetes
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('1234566778')
        cy.get('.woocommerce-form > .button').click()
        //resultado esperado
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
      
    });

    //Senha com campo vazio
    it('deve aparece uma mensagem de erro ao tentar logar com a senha vazia', () => {
        //captura de componetes
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type(' ')
        cy.get('.woocommerce-form > .button').click()
        //resultado esperado
        cy.get('.woocommerce-error').should('contain', 'Erro: O campo da senha está vazio.')
      
    });


});