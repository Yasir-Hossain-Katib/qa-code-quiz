import BasePage from './BasePage'
import { LoginSelectors } from '../fixtures/selectors'
import { AccountSelectors } from '../fixtures/selectors'
import { BASE_URL } from '../fixtures/urls'


class LoginPage extends BasePage{
    constructor(){
        super()
        this.selectors = LoginSelectors
        this.locators = AccountSelectors
    }


    visitLoginPage() {
        this.visit(BASE_URL)
    }

    headerText() {
        return this.isVisible(this.selectors.HEADER_TEXT)
    }

    userNameInput() {
        return this.isVisible(this.selectors.USERNAME_INPUT)
        
    }

    passwordInput() {
        return this.isVisible(this.selectors.PASSWORD_INPUT)
        
    }

    userNamePlaceholder() {
       return this.isVisible(this.selectors.USERNAME_INPUT).should('have.attr', 'placeholder', 'Enter Username')
    }
    
    passwordPlaceholder() {
        return this.isVisible(this.selectors.PASSWORD_INPUT).should('have.attr', 'placeholder', 'password')
    } 

    loginButton(){
        return this.isVisible(this.selectors.LOGIN_BUTTON)

    }

    ifNotHaveAccount() {
        return this.isVisible(this.selectors.NOT_HAVE_ACCOUNT_TEXT)

    }
   

    testInputsTypeAndClear() {
        
        cy.get(this.selectors.USERNAME_INPUT)
            .clear()
            .type('someUser')
            .should('have.value', 'someUser')
            .clear()
            .should('have.value', '')

        cy.get(this.selectors.PASSWORD_INPUT)
            .clear()
            .type('somePass123')
            .should('have.value', 'somePass123')
            .clear()
            .should('have.value', '')

        return this
    }

    
    login(username, password) {
        this.typeText(this.selectors.USERNAME_INPUT, username)
        this.typeText(this.selectors.PASSWORD_INPUT, password)
        return this.clickElement(this.selectors.LOGIN_BUTTON)
        
    }


    verifySuccessfulLogin() {
        return this.isVisible(this.locators.ACCOUNT_HEADER)
    }

    verifyUnsuccessfulLogin() {
        return this.isVisible(this.selectors.USERNAME_INPUT)
    }



    loginWithValidUsers() {
        cy.fixture('testData.json').then((userData) => {
            for (let i = 0; i < userData.validUsers.length; i++) {
                const user = userData.validUsers[i]
                cy.log(`Testing user ${i + 1}: ${user.username}`)
                this.login(user.username, user.password)
                this.verifySuccessfulLogin()
                this.visitLoginPage()
            }
        })
    }

    
    loginWithEmptyFields() {
        cy.fixture('testData.json').then((userData) => {
            const user = userData.invalidUsers[0]
            cy.log(`Testing invalid user 1: ${user.username}`)
            this.login(user.username, user.password)
            this.verifyUnsuccessfulLogin()
            
        })
    }

    loginWithEmptyEmail() {
        cy.fixture('testData.json').then((userData) => {
            const user = userData.invalidUsers[1]
            cy.log(`Testing invalid user 2: ${user.username}`)
            this.login(user.username, user.password)
            this.verifyUnsuccessfulLogin()
            
        })
    }

    loginWithEmptyPassword() {
        cy.fixture('testData.json').then((userData) => {
            const user = userData.invalidUsers[2]
            cy.log(`Testing invalid user 3: ${user.username}`)
            this.login(user.username, user.password)
            this.verifyUnsuccessfulLogin()
            
        })
    }

    loginWithInvalidUsername() {
        cy.fixture('testData.json').then((userData) => {
            const user = userData.invalidUsers[3]
            cy.log(`Testing invalid user 4: ${user.username}`)
            this.login(user.username, user.password)
            this.verifyUnsuccessfulLogin()
      
        })
    }

    loginWithInvalidPassword() {
        cy.fixture('testData.json').then((userData) => {
            const user = userData.invalidUsers[4]
            cy.log(`Testing invalid user 5: ${user.username}`)
            this.login(user.username, user.password)
            this.verifyUnsuccessfulLogin()
            
        })
    }

    loginWithInvalidUsernamePassword() {
        cy.fixture('testData.json').then((userData) => {
            const user = userData.invalidUsers[5]
            cy.log(`Testing invalid user 6: ${user.username}`)
            this.login(user.username, user.password)
            this.verifyUnsuccessfulLogin()
            
        })
    }

   


 
}

export default new LoginPage()
