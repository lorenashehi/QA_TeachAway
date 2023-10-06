describe('Access Submenus of Mega Menu Items', () => {
    
    it('Should access submenus of Mega Menu items', () => {
        cy.visit('https://www.teachaway.com/');
        cy.wait(4000); // waiting time for the cookies banner to appear
        cy.get('#hs-eu-confirmation-button').click(); // accept cookies
        cy.get('.ub-emb-visible > .ub-emb-close').click(); // remove the banner that appears above the mega menu

        cy.get('[title="Jobs"]').click();
        cy.get('#tb-megamenu-column-1 > :nth-child(1)').should('exist');

        cy.get('[data-id="menu_link_content:210ee31d-f75e-446e-8218-3595ae4c3a5b:2"] > .dropdown-toggle').click();
        cy.get('#tb-megamenu-column-10 > .tb-megamenu-column-inner').should('exist');

        cy.get('[data-id="menu_link_content:199042d1-9fd2-4cb9-8d4a-7f4efe5c36cc:432"] > .dropdown-toggle').click();
        cy.get('#tb-megamenu-column-11 > .tb-megamenu-column-inner').should('exist');



    });
  });
   