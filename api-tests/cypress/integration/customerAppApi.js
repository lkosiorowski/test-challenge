describe('Testing API of Customer App', () => {

    it.only('Verify bad request is received on incorrect request body', () => {
        cy.request('POST', '/', {"test": "test"}).then((response) => {
            expect(response.status).to.eq(400)
        })
    });

    it.only('Validate customer size categories', () => {
        cy.request('POST', '/', {"name":"test"}).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.customers.length).to.be.above(0)
            const numberOfContacts = response.body.customers.length
            let i;
            for (i = 0; i < numberOfContacts ; i++) {
                console.log(i);
                let numberOfEmployees = response.body.customers[i].employees;
                if (numberOfEmployees <= 10 && numberOfEmployees > 0) {
                    expect(response.body.customers[i].size).equal('Small')
                } else if (numberOfEmployees <= 1000 && numberOfEmployees > 10) {
                    expect(response.body.customers[i].size).equal('Medium')
                } else expect(response.body.customers[i].size).equal('Big')

            }

        })
    });

    it.only('Validate values for all the fields are present in the response', () => {
        cy.request('POST', '/', {"name":"test"}).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).equal('test')
            expect(response.body.timestamp).equal((new Date()).toDateString())
            const numberOfContacts = response.body.customers.length
            let i;
            for (i = 0; i < numberOfContacts ; i++) {
                expect(response.body.customers[i].employees).exist
                expect(response.body.customers[i].size).exist
                if (response.body.customers[i].id === 4 ) {
                    expect(response.body.customers[i].contactInfo).not.exist
                } else if (response.body.customers[i].id === 1 ) {
                    expect(response.body.customers[i].contactInfo.name).equal('John Smith')
                    expect(response.body.customers[i].contactInfo.email).equal('jsmith@americasinc.com')
                }
            }

        })
    });

});