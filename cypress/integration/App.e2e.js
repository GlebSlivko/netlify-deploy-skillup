describe('The Login Page', () => {
    it('user can authenticate using the login form', () => {
      const email = 'alice.carr@test.com';
      const password = 'k12h1k0$5;lpa@Afn';
  
      cy.visit('/');
      cy.get('input[name=email]').should("have.value",'');

      // Fill out the form
      cy.get('input[name=email]').type(email);
      cy.get('input[name=password]').type(`${password}`);

      cy.get('input[name=email]').should("have.value",'alice.carr@test.com');
      // Click the sign-in button
      cy.get('p').should("have.length","0");
      cy.get('button[type=submit]').click();
      
      cy.get('p').should("have.length","200");
  
      // UI should display the user's task list
    //   cy.get('[aria-label="tasks"] li').should('have.length', 6);
    });
  });