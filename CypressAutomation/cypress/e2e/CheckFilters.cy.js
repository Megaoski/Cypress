describe('CheckFilters', function() {
    it('Enters Movie catalog and checks that the premier filter is not activated. Then checks that filters work it works', function() {
        //-----------LOGIN-------------------------------
       //-----------------------------------------------

      // Change url whenever we want to test a new deploy(stage1 etc)
      cy.visit('https://stage1-tv-app-webos.filmin.es/')

      // Assertion to wait for home page to load               
      cy.url().should('include', '/#/react');

      cy.wait(5000);

      //Navigate to Entrar menu
      cy.GoTo("Entrar");

      //Assertion to wait for login page to load
      cy.url().should('include', '/#/login');
      
      cy.wait(1000)

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

      //-----------NOW WE NEED TO CHECK THAT THE FILTERS WORK, BUT HOW?

    })

  
  })

});