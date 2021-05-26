class CustomersListPage {

    get tableHeader() {
        return cy.get('thead');
    }
    get tableRows() {
            return cy.get('tbody tr');
        }
}

export default new CustomersListPage();