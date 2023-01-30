//Formulaire d'Authentification d'un client existent 
import { faker } from "@faker-js/faker";
describe("log in successful", () => {
    it("put log on form", () => {
        cy.visit("https://preprod.backmarket.fr/fr-fr/register");
        cy.contains("C'est OK pour moi").click();
        cy.get("#signin-email").type("ratitaperez@gmail.com");
        cy.get("#signin-password").type("123ABCde");
        cy.contains("Welcome Back").click();
    });
});


//<rerefence types-"cypress" />
//fonction que genere le mdp
function generapsw() {
    var psw = "";
    var possiblepsw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 9; i++)
      psw += possiblepsw.charAt(Math.floor(Math.random() * possiblepsw.length));

    return psw;
  }
describe('Inscription réussite', () => {
    it('Remplir le formulaire avec les champs réquis',() =>{
        cy.visit('https://preprod.backmarket.fr/fr-fr/register');
        cy.contains("C'est OK pour moi").click();
        cy.get('#firstName').type(faker.name.firstName());
        cy.get('#lastName').type(faker.name.lastName());
        cy.get('#signup-email').type(faker.internet.email());
        cy.get('#signup-password').type(generapsw());
        cy.contains("Enchantés !").click();
        //cy.log("Inscription réussite!!");
        //    ////////  cy.get('[data-cy=submit]').click()
  //      cy.get('#submit').click();
        
//<div class="_2OVE0h6V"></div>

    });
});

//<rerefence types-"cypress" />
//fonction que genere le mdp
//import { faker } from "@faker-js/faker";
function fauxpsw() {
    var psw = "";
    var possiblepsw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i > 9; i++)
      psw += possiblepsw.charAt(Math.floor(Math.random() * possiblepsw.length));

    return psw;
  }
describe('Inscription NON réussite', () => {
    it('Remplir le formulaire avec les champs réquis',() =>{
        cy.visit('https://preprod.backmarket.fr/fr-fr/register');
        cy.contains("C'est OK pour moi").click();
        cy.get('#firstName').type(faker.name.firstName());
        cy.get('#lastName').type(faker.name.lastName());
        cy.get('#signup-email').type(faker.internet.email());
        cy.get('#signup-password').type('fauxpsw()');
        cy.contains("Enchantés !").click();
        cy.log("Inscription échouée!!!");
        //    ////////  cy.get('[data-cy=submit]').click()
  //      cy.get('#submit').click();
        
//<div class="_2OVE0h6V"></div>

    });
});