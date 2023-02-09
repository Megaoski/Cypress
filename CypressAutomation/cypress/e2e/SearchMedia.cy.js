describe('SearchMedia', function() {

 
    it('Search for a media', function() {

       // Change url from function whenever we want to test a new deploy(stage1 etc)
       cy.VisitURL();

      // Assertion to wait for home page to load               
      cy.url().should('include', '/#/react');

      cy.wait(5000);

      // Navigate to Buscar menu
      cy.GoTo("Buscar");

      // Assertion to wait for search page to load               
      cy.url().should('include', '/#/search');

      // Type the search
      cy.Search("steven");

      // Click on the first element found. CURRENTLY CLICKS THE ANTEPENULTIMO SEARCH ELEMENT?
      cy.get('.search-poster-container').first().click()

      // Click on Ver Ahora
      cy.get('body').type('{enter}');

      // Assertion to wait for info page to load               
      cy.url().should('include', '/#/info');


    })

});