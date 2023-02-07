describe('SearchMedia', function() {

 
    it('Search for a media', function() {

      // Change url whenever we want to test a new deploy(stage1 etc)
      cy.visit('https://stage1-tv-app-webos.filmin.es/')

      // Assertion to wait for home page to load               
      cy.url().should('include', '/#/react');

      cy.wait(7000);

      //Navigate to Buscar menu
      cy.GoTo("Buscar");

      // Assertion to wait for search page to load               
      cy.url().should('include', '/#/search');

      // Type search
      cy.Search("kubrick");

    })

});