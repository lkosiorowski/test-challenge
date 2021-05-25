class ContactDetailPage {

    get nameRow() {
        return cy.get('p:nth-child(2)');
    }

    get numberOfEmployeesRow() {
        return cy.get('p:nth-child(3)');
    }

    get sizeRow() {
        return cy.get('p:nth-child(4)');
    }

    get contactRow() {
        return cy.get('p:nth-child(5)');
    }
}

export default new ContactDetailPage();