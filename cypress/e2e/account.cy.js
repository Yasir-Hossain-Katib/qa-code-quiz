import LoginPage from '../pages/LoginPage'
import AccountPage from '../pages/AccountPage'

describe('Account Page Testing for SomeUser_name (with Name)', () => {
    let user1

    beforeEach(() => {
        LoginPage.visitLoginPage()
        cy.fixture('testData.json').then((userData) => {
            user1 = userData.validUsers[0] 
            LoginPage.login(user1.username, user1.password)
        })
    })

    it("should display a greeting in the account page header ", () => {
        AccountPage.verifyHeaderGreeting(user1.name)
    
    })

    it('should display correct field labels', () => {
        AccountPage.verifyUserNameLabel(user1)
        AccountPage.verifyFavouriteFruitLabel(user1)
        AccountPage.verifyFavouriteMovieLabel(user1)
        AccountPage.verifyFavouriteNumberLabel
    })

    it('should display users all information correctly', () => {
        AccountPage.verifyUserName(user1)
        AccountPage.verifyFavouriteFruitUser1(user1)
        AccountPage.verifyFavouriteMovieUser1(user1)
        AccountPage.verifyFavouriteNumberUser1(user1)
    })

    it("should display the logout button on the account page",()=>{
        AccountPage.verifyLogoutButton()
    })

    it("should redirect to the login page after logging out",()=>{
        AccountPage.verifyLogoutRedirection()
    })

    it("should redirect to the login page when the account page is reloaded",()=>{
        AccountPage.reloadAndVerifyLoginPage()
    })
})
    


describe('Account Page Testing for dummytree (without Name)', () => {
    let user2

    beforeEach(() => {
        LoginPage.visitLoginPage()
        cy.fixture('testData.json').then((userData) => {
            user2 = userData.validUsers[1] 
            LoginPage.login(user2.username, user2.password)
        })
    })

    it('should display a default greeting when the user name is missing', () => {
        AccountPage.verifyHeaderGreeting(user2.name)
    
    })

    it('should display correct field labels', () => {
        AccountPage.verifyUserNameLabel(user2)
        AccountPage.verifyFavouriteFruitLabel(user2)
        AccountPage.verifyFavouriteMovieLabel(user2)
        AccountPage.verifyFavouriteNumberLabel(user2)
    })

    it('should display users all information correctly', () => {
        AccountPage.verifyUserName(user2)
        AccountPage.verifyFavouriteFruitUser2(user2)
        AccountPage.verifyFavouriteMovieUser2(user2)
        AccountPage.verifyFavouriteNumberUser2(user2)
    })

    it("should display the logout button on the account page",()=>{
        AccountPage.verifyLogoutButton()
    })

    it("should redirect to the login page after logging out",()=>{
        AccountPage.verifyLogoutRedirection()
    })

    it("should redirect to the login page when the account page is reloaded",()=>{
        AccountPage.reloadAndVerifyLoginPage()
    })
})
    











