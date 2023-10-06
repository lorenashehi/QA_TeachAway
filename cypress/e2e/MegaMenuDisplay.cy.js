describe('Mega Menu Display', () => {

    before(()=>{
      cy.visit('https://www.teachaway.com/');
      cy.wait(4000); // waiting time for the cookies banner to appear
      cy.get('#hs-eu-confirmation-button').click(); // accept cookies
      cy.get('.ub-emb-visible > .ub-emb-close').click(); // remove the banner that appears above the mega menu
  
    });
  
    it('Checks Mega Menu items', () => {
      
      cy.get('.navbar').should('exist'); //checks that the mega menu is present on the website
      cy.get('.navbar').within(() => {  // checks that inside the mega menu is present:
        cy.get('.navbar-brand > img').should('exist'); // the image logo 
        cy.get('[title="Jobs"]').should('exist'); // JOBS
        cy.get('[data-id="menu_link_content:210ee31d-f75e-446e-8218-3595ae4c3a5b:2"] > .dropdown-toggle').should('exist'); // TEFL
        cy.get('[data-id="menu_link_content:199042d1-9fd2-4cb9-8d4a-7f4efe5c36cc:432"] > .dropdown-toggle').should('exist'); // TEACHER CERTIFICATION
        cy.get('[data-id="menu_link_content:5a996b46-a95c-4baa-a8ff-827bbe63f8bd:3"] > a').should('exist'); // COURSES
        cy.get('.nav-recruitment > :nth-child(1)').should('exist'); //HIRE TEACHERS
    
      })
    })
  
  
    it('Checks the font of the Mega Menu items when hovering/moving the mouse away.', () => {
      cy.visit('https://www.teachaway.com/');
      cy.visit('https://www.teachaway.com/');
      cy.get('.navbar').should('exist').within(() => {  // Find and select the Mega Menu element
        cy.get('.tb-megamenu-nav').each(($menuItem) => {  // Select all Mega Menu items using their common selector, iterate over each of them
          cy.wrap($menuItem).trigger('mouseover');  // Hover over each of the Mega Menu item
          cy.wrap($menuItem).should('have.css', 'color', 'rgb(33, 37, 41)');  // Assert that the Mega Menu item text is in bold when hovering
          cy.wrap($menuItem).trigger('mouseout');  // Move the mouse pointer away to reset the style
          cy.wrap($menuItem).should('have.css', 'color','rgb(33, 37, 41)');  // Assert that the Mega Menu item text is not in bold after moving the mouse pointer away
        })
      }) 
  
    }) 
 
  })
  