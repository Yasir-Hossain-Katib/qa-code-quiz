import BasePage from './BasePage'
import { AccountSelectors } from '../fixtures/selectors'
import { LoginSelectors } from '../fixtures/selectors'


class AccountPage extends BasePage {
    constructor() {
        super()
        this.selectors = AccountSelectors
        this.locators = LoginSelectors
    }
    
   
    verifyHeaderGreeting(username) {
        if (username && username !== '') {
            return this.get(this.selectors.ACCOUNT_HEADER).should('contain', `Hello ${username}`)
        } else {
            return this.get(this.selectors.ACCOUNT_HEADER).should('contain', 'Hello undefined')
        }
        
    }

    verifyUserNameLabel(userData) {
        if (userData.name) {
            cy.xpath(this.selectors.NAME)
              .should('be.visible')
              .should('contain','Name')
            cy.contains(userData.name).should('be.visible')
        } else {
            cy.xpath(this.selectors.NAME)
              .should('be.visible')
              .should('contain','Name')
        }
    }

    verifyUserName(userData){
        if(userData.name){
            cy.xpath(this.selectors.NAME1)
              .should('be.visible')
              .should('contain',userData.name)
        }
    }
    
    
    
    verifyFavouriteFruitLabel(userData){
        cy.xpath(this.selectors.FAVOURITE_FRUIT)
          .should('be.visible')
          .should('contain','Favourite Fruit')
    }

    verifyFavouriteFruitUser1(userData){
        cy.xpath(this.selectors.FRUIT1)
          .should('be.visible')
          .should('contain',userData.favouriteFruit);
    }

    verifyFavouriteFruitUser2(userData){
        cy.xpath(this.selectors.FRUIT2)
               .should('be.visible')
               .should("contain",userData.favouriteFruit);
    }
    
    verifyFavouriteMovieLabel(userData){
        cy.xpath(this.selectors.FAVOURITE_MOVIE)
              .should('be.visible')
              .should('contain','Favourite Movie');
    }

    verifyFavouriteMovieUser1(userData){
        cy.xpath(this.selectors.MOVIE1)
              .should('be.visible')
              .should('contain',userData.favouriteMovie);
    }
    
    verifyFavouriteMovieUser2(userData){
        cy.xpath(this.selectors.MOVIE2)
        .should('be.visible')
        .should('contain',userData.favouriteMovie);
    }

    verifyFavouriteNumberLabel(userData){
        cy.xpath(this.selectors.FAVOURITE_NUMBER)
              .should('be.visible')
              .should('contain','Favourite Number');
        cy.contains(userData.favouriteNumber).should('be.visible');
    }

    verifyFavouriteNumberUser1(userData){
        cy.xpath(this.selectors.NUMBER1)
        .should('be.visible')
        .should('contain',userData.favouriteNumber);
    }

    verifyFavouriteNumberUser2(userData){
        cy.xpath(this.selectors.NUMBER2)
        .should('be.visible')
        .should('contain',userData.favouriteNumber);
    }

    
    verifyLogoutButton() {
        return this.isVisible(this.selectors.LOGOUT_BUTTON);
    }

    verifyLogoutRedirection(){
        this.clickElement(this.selectors.LOGOUT_BUTTON);
        return this.isVisible(this.locators.HEADER_TEXT);
    }

    reloadAndVerifyLoginPage(){
        cy.reload();
        return this.isVisible(this.locators.LOGIN_BUTTON);
    }
}

export default new AccountPage()
