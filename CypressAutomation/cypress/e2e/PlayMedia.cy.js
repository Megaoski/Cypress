describe('PlayMedia', function() {

 
    it('Login, searching and playing a media', function() {

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

      //-----------SEARCH-------------------------------
      //------------------------------------------------

      cy.wait(1000);
  
      // Navigate to Buscar menu
      cy.GoTo("Buscar");
  
      // Assertion to wait for search page to load               
      cy.url().should('include', '/#/search');
  
      // Type the search
      cy.Search("steven");

      //-----------PLAY-------------------------------
      //----------------------------------------------
  
      // Click on the first element found. CURRENTLY CLICKS THE ANTEPENULTIMO SEARCH ELEMENT?
      cy.get('.search-poster-container').first().click()
  
      // Assertion to wait for info page to load               
      cy.url().should('include', '/#/info');

      // W8 before pressing the button if it has not loaded
      cy.wait(2000);

      // Click on Ver Ahora
      cy.get('body').type('{enter}');
      
      // Assertion to check that the player loads
      cy.url().should('include', '/#/player');
  
    
    })
    

});