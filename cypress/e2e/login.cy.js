import LoginPage from '../pages/LoginPage'

describe('Login Functionality', () => {
    beforeEach(() => {
        LoginPage.visitLoginPage()
    })
    
    it("Login Successful with valid username and valid password", ()=>{
        LoginPage.loginWithValidUsers()
    })

    it("Login Unsuccessful with empty username and empty password", ()=>{
        LoginPage.loginWithEmptyFields()
        
    })

    it("Login Unsuccessful with empty username and valid password", ()=>{
        LoginPage.loginWithEmptyEmail()
        
    })

    it("Login Unsuccessful with valid username and empty password", ()=>{
        LoginPage.loginWithEmptyPassword()
        
    })

    it("Login Unsuccessful with valid username and invalid password", ()=>{
        LoginPage.loginWithInvalidPassword()
        
    })

    it("Login Unsuccessful with invalid username and valid password", ()=>{
        LoginPage.loginWithInvalidUsername()
        
    })

    it("Login Unsuccessful with invalid username and invalid password", ()=>{
        LoginPage.loginWithInvalidUsernamePassword()
        
    })


})


describe('Login UI',()=>{
    beforeEach(() => {
        LoginPage.visitLoginPage()
    })

    it("should display the header text", ()=>{
        LoginPage.headerText()
    })

    it("should display the username input field", ()=>{
        LoginPage.userNameInput()
    })

    it("should display the password input field", ()=>{
        LoginPage.passwordInput()
    })

    it("should show the correct placeholder in the username field", ()=>{
        LoginPage.userNamePlaceholder()
    })

    it("should show the correct placeholder in the password field", ()=>{
        LoginPage.passwordPlaceholder()
    })

    it("should allow typing and clearing text in the input fields", ()=>{
        LoginPage.testInputsTypeAndClear()
    })

    it("should display the login button", ()=>{
        LoginPage.loginButton()
    })
    
    it("should display the 'If you do not have an account,contact an admin' message", ()=>{
        LoginPage.ifNotHaveAccount()
    })

})



