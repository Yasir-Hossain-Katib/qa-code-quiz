class BasePage {
    
    get(element) {
        return cy.get(element)
    }

    clickElement(element) {
        return cy.get(element).click()
    }

    typeText(element, text) {
        return cy.get(element).type(text)
    }

    getText(element) {
        return cy.get(element).invoke('text')
    }

    isVisible(element) {
        return cy.get(element).should('be.visible')
    }

    visit(path){
        return cy.visit(path)
    }

   
}

export default BasePage
