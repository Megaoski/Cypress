describe('Login the app', function () {
    it('Visits the url, logs in and selects main profile', function () {        

       //Once page is loaded procede to Entrar menu
        cy.GoTo("Entrar");

        //Wait for Login page to load
        cy.url().should('include', '/#/login');

        //Function to auto login via string
        cy.Login('oscarsubesp');
    })
});
