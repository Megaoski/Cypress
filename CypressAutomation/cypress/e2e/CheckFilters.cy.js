describe('CheckFilters', function() {
    it('Enters Movie catalog and checks that the premier filter is not activated. Then checks that filters work it works', function() {
        //-----------LOGIN-------------------------------
       //-----------------------------------------------

       // Change url from function whenever we want to test a new deploy(stage1 etc)
       cy.VisitURL();

      // Assertion to wait for home page to load               
      cy.url().should('include', '/#/react');

      cy.wait(5000);

      //Navigate to Entrar menu
      cy.GoTo("Entrar");

      //Assertion to wait for login page to load
      cy.url().should('include', '/#/login');
      
      cy.wait(1000);

      //Introduce username
      cy.Login('oscarsubesp');

      //Reposition keyboard focus to "a" before writting password
      cy.get('body').type('{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{downarrow}');
      cy.get('body').type('{leftarrow}');

      //Introduce password
      cy.Password('qafilmin');

      //Reposition keyboard focus to "a" before writting password
      cy.get('body').type('{rightarrow}{downarrow}');
      cy.get('body').type('{enter}');

      //w8 profiles page to load
      cy.wait(3000);
      
      //select main profile, the first
      cy.get('body').type('{enter}');

      //-----------NAVIGATE TO CATALOG-----------------
      //-----------------------------------------------

      cy.wait(1000);
  
      // Navigate to PELICULAS menu
      cy.GoTo("Peliculas");
  
      // Assertion to wait for search page to load               
      cy.url().should('include', '/#/catalog');

      //-----------CHECK PREMIER FILTER IS NEVER ACTIVE BY DEFAULT-----------------
      //-------------------------------------------------------------------------

      cy.wait(3000);

      //------------------------------------------------

      cy.get('.catalog-filter-element.ng-scope').as('Filters'); //save FILTERS values

      cy.get('@Filters').then(function ($Filters) {
      //save text of the current filters into a log variable     
      cy.log($Filters.text());
        
      //check if saved log variable contains EN SUBSCRIPCIÓN since it should always be active by default in the catalog
      cy.get('.catalog-filter-element.ng-scope').should('contain.text', 'EN SUBSCRIPCIÓN');
      //check that EN ALQUILER filter is never activated by default in the catalog
      cy.get('.catalog-filter-element.ng-scope').should('not.contain.text', 'EN ALQUILER');

      //-----------NOW WE NEED TO CHECK THAT THE FILTERS WORK, BUT HOW?

      cy.wait(1000);

      // position focus to the filters zone
      cy.get('body').type('{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}');
      cy.get('body').type('{enter}{downarrow}{enter}');//select the EN ALQUILER FILTER
      cy.wait(1000);
      cy.get('body').type('{backspace}');//reposition focus to first catalog element
      cy.wait(5000);  
      // check that the EN ALQUILER filter is working and the first movie default focused has en premier info
      cy.get('.catalog-filter-element.ng-scope').should('contain.text', 'EN SUBSCRIPCIÓN');
      //cy.get('body').should('have.attr', 'premier-white-ticket-image');
      //cy.focused().should('contain.text', 'item.is_premier');
      //cy.get('.catalog-filter-element.ng-scope.ng-if').should('contain.text', 'item.is_premier');

    })

  
  })

});