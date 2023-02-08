// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('XYPriority', (string, diferenceX, diferenceY) => {
    var x;
    var y;
    var path = "";
    if (string == 'x') {

        for (x = diferenceX; x != 0;) {
            if (diferenceX != 0) {
                if (diferenceX > 0) {
                    path += '{rightarrow}';

                    x--;
                }
                else if (diferenceX < 0) {

                    path += '{leftarrow}';

                    x++;
                }
            }
        }

        for (y = diferenceY; y != 0;) {
            if (diferenceY != 0) {
                if (diferenceY > 0) {

                    path += '{downarrow}';

                    y--;
                }
                else if (diferenceY < 0) {

                    path += '{uparrow}';

                    y++;
                }
            }
        }
    } else if (string == 'y') {
        for (y = diferenceY; y != 0;) {
            if (diferenceY != 0) {
                if (diferenceY > 0) {

                    path += '{downarrow}';

                    y--;
                }
                else if (diferenceY < 0) {

                    path += '{uparrow}';

                    y++;
                }
            }
        }
        for (x = diferenceX; x != 0;) {
            if (diferenceX != 0) {
                if (diferenceX > 0) {

                    path += '{rightarrow}';

                    x--;
                }
                else if (diferenceX < 0) {

                    path += '{leftarrow}';

                    x++;
                }
            }
        }
    }
    path += '{enter}'
    cy.get('body').type(path);
})


Cypress.Commands.add('TypeUser', (string) => {
    // Map with characters and their coordinates in the matrix.
    let displayMat = new Map();
    displayMat['a'] = '00'; displayMat['b'] = '01'; displayMat['c'] = '02'; displayMat['d'] = '03'; displayMat['e'] = '04'; displayMat['f'] = '05'; displayMat['g'] = '06';
    displayMat['h'] = '10'; displayMat['i'] = '11'; displayMat['j'] = '12'; displayMat['k'] = '13'; displayMat['l'] = '14'; displayMat['m'] = '15'; displayMat['n'] = '16';
    displayMat['!'] = '20'; displayMat['o'] = '21'; displayMat['p'] = '22'; displayMat['q'] = '23'; displayMat['r'] = '24'; displayMat['s'] = '25'; displayMat['t'] = '26';
    displayMat['u'] = '30'; displayMat['v'] = '31'; displayMat['w'] = '32'; displayMat['x'] = '33'; displayMat['y'] = '34'; displayMat['z'] = '35'; displayMat['0'] = '36';
    displayMat['1'] = '40'; displayMat['2'] = '41'; displayMat['3'] = '42'; displayMat['4'] = '43'; displayMat['5'] = '44'; displayMat['6'] = '45'; displayMat['7'] = '46';
    displayMat['8'] = '50'; displayMat['9'] = '51'; displayMat[' '] = '52';

    var currentPos = new Array(0, 0);
    var targetPos = new Array(0, 0);
    var diferenceX = 0;
    var diferenceY = 0;

    

    string = string; 

    var inputArray = Array.from(string.toLowerCase()); //From string to array
    inputArray.forEach(inputChar => { //Iterate through characters of the inputArray(string). The iterator is called "inputChar"
        var ret = displayMat[inputChar]; //Get the coordinates of the character(inputChar)

        //Set coordinates as targetPosition
        targetPos[1] = ret[0];
        targetPos[0] = ret[1];

        //Calculate the path to the target from the current position
        diferenceX = parseInt(targetPos[0]) - parseInt(currentPos[0]);
        diferenceY = parseInt(targetPos[1]) - parseInt(currentPos[1]);

        //Go to target Position Switch XY iteration priority to be able to use space, 8 and 9 charaters.  
        if (parseInt(currentPos[0]) <= 2) {
            cy.XYPriority('y', diferenceX, diferenceY);
        }
        else if (parseInt(currentPos[0]) >= 3) {
            cy.XYPriority('x', diferenceX, diferenceY);
        }        

        //Update Current Position
        currentPos[0] = targetPos[0];
        currentPos[1] = targetPos[1];
    });

})


Cypress.Commands.add('Login', (string) => {
    
    //Write on keyboard the username
    cy.TypeUser(string);  
    
 })

 Cypress.Commands.add('Password', (string) => {
    
    // Write on keyboard the password
    cy.TypeUser(string);

     
 })

 Cypress.Commands.add('Search', (string) => {
    
    // write on keyboard the search term
    cy.TypeUser(string);

 })

 Cypress.Commands.add('GoTo', (string) => {
    
    if (string == 'Entrar') {

        cy.get('body').type('{backspace}');//focus lateral menu
        cy.get('body').type('{downarrow}'); 
        cy.get('body').type('{downarrow}');
        cy.get('body').type('{downarrow}');
        cy.get('body').type('{downarrow}');
        cy.get('body').type('{downarrow}');
        cy.get('body').type('{enter}');//click on Entrar
    }  
    else if (string == 'Buscar') {

        cy.get('body').type('{backspace}');//focus lateral menu
        cy.get('body').type('{uparrow}'); 
        cy.get('body').type('{enter}');//click on Buscar
    }  
    else if (string == 'Peliculas') {

        cy.get('body').type('{backspace}');//focus lateral menu
        cy.get('body').type('{downarrow}'); 
        cy.get('body').type('{enter}');//click on Peliculas
    }  
    
 })



