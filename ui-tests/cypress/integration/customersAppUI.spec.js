import WelcomePage from '../pages/welcomePage';
import CustomersListPage from '../pages/customersListPage';
import ContactDetailPage from '../pages/contactDetailPage';


describe('Customers App - UI tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Verify alert appears when blank name field is submitted', () => {
        WelcomePage.submitButton.click().then(() => {
            cy.on('window:alert', (str) => {
                expect(str).to.equal(`Please provide your name`)})
            })
    })

    it('Verify proper company size categories based on employees number', () => {
        WelcomePage.enterName('test')
        CustomersListPage.tableHeader.should('include.text', 'Name')
        CustomersListPage.tableRows.should('have.length.above', 0)
        CustomersListPage.tableRows.then((rows) => {
          const numberOfContacts = rows.length
            for (let i = 1; i < numberOfContacts ; i++) {
                cy.get(`tbody > tr:nth-child(${i}) > td:nth-child(2)`).then( (employees) => {
                    const numberOfEmployees = employees.text()
                    cy.get(`tbody > tr:nth-child(${i}) > td:nth-child(3)`).then((sizes) => {
                        const companySize = sizes.text()
                        if (numberOfEmployees <= 10) {
                            expect(companySize).equal('Small')
                        } else if (numberOfEmployees <= 1000 && numberOfEmployees > 10) {
                            expect(companySize).equal('Medium')
                        } else expect(companySize).equal('Big')
                    })
                })
            }

        })
    })

    it('Verify user is presented with the message about missing contact info', () => {
        WelcomePage.enterName('test')
        cy.get('tbody a').contains('United Brands').click()
        ContactDetailPage.nameRow.should('include.text', 'United Brands')
        ContactDetailPage.numberOfEmployeesRow.should('include.text', '20')
        ContactDetailPage.sizeRow.should('include.text', 'Medium')
        ContactDetailPage.contactRow.should('not.exist');
        cy.contains('div', 'No contact info available')
    })

})

