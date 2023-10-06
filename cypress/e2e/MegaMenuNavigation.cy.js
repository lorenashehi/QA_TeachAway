describe('Mega Menu Navigation', () => {
    it('Clicks on Mega Menu Items', () => {
      cy.visit('https://www.teachaway.com/');
      cy.get('[data-id="menu_link_content:5a996b46-a95c-4baa-a8ff-827bbe63f8bd:3"] > a').click(); //COURSES
      cy.url().should('eq', 'https://www.teachaway.com/courses-and-certifications');
      //cy.get('.nav-recruitment > :nth-child(1)').click(); // HIRE TEACHERS
      //cy.url().should('eq', 'https://www.teachaway.com/recruitment');
      cy.get('#login > .ta-web-ui-button__text').click(); //LOGIN
      cy.url().should('eq', 'https://www.teachaway.com/login');
      cy.visit('https://www.teachaway.com/');
      cy.get('#register').click(); //REGISTER
      cy.url().should('eq', 'https://www.teachaway.com/register');

    });
  });
  