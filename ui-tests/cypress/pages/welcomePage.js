class WelcomePage {
    get inputName() {
        return cy.get('#name');
    }

    get submitButton() {
        return cy.get('input[type="button"]');
    }

    enterName(name) {
        this.inputName.type(name)
        this.submitButton.click()
    }
}

export default new WelcomePage();