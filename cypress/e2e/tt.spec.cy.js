describe('test template spec', () => {
   
    //it('google test', function(){
     // cy.visit('https://www.google.tn/?hl=fr')
      //cy.get('#APjFqb').type('Automation step by step{enter} ')
    
    //})
    it('step by step test', function(){
      cy.visit('https://automationstepbystep.com/')
      
      // Step 4: Scroll down to the bottom of the page
    cy.scrollTo('bottom')
    cy.wait(2000);
    // Step 5: Verify that we've scrolled to the bottom
    // For example, check if the footer is visible
    cy.get('#footer')
       .should('be.visible')
    // Step 6: Scroll back to the top
   cy.scrollTo('top')
   cy.wait(2000);


    // Step 7: Verify that we've scrolled back to the top
    cy.get('.header-top-wrap')
        .should('be.visible')

    cy.get('i > a > .alignnone')
        .click({ force: true })
    cy.get('#mobile-menu')
       .click({ force: true })
    cy.get('#menu-item-86 > .open-submenu')
       .click({ force: true })
    cy.get('#menu-item-113 > a')
       .click({ force: true })
       
   // cy.get('#menu-item-116 > a')
     //  .click({ force: true })
   /// cy.get(':nth-child(2) > .yotu-video > .yotu-video-thumb-wrp')
      // .click({ force: true })
    cy.get(':nth-child(1) > a > .wp-image-3221')
       .click({ force: true })
    cy.get('.tnp-form > .tnp-email')
       .type('rania.tlich@esprit.tn {enter}')
       
   // cy.url('https://automationstepbystep.com/?na=s')
      // .should('include', '/math-question');  // Remplacez par l'URL ou une partie de l'URL de la page de question mathématique

     // cy.url("https://automationstepbystep.com/?na=s").should('include', '/math-question');  // Assurez-vous que c'est la bonne URL attendue

      // Interceptez les chiffres dans les cases
      cy.get('[name="n1"]').invoke('val').then(text1 => {
        cy.log("Valeur de n1 : " + text1 + " ///////////////////////////");  // Log pour vérifier la valeur récupérée
        const number1 = Number(text1);
        //const number1 = parseInt(text1, 10);
  
        cy.get('[name="n2"]').invoke('val').then(text2 => {
          cy.log("Valeur de n2 : " + text2);  // Log pour vérifier la valeur récupérée
          const number2 = Number(text2);
          //const number2 = parseInt(text2, 10);
          //const number1 = parsenumber(n1);
          //const number2 = parsenumbert(n2);
          const result = number1 + number2;
          // Calculez le résultat
         // const result = number1 + number2;
          cy.log(`Résultat du calcul : ${result}`);  // Log pour vérifier le résultat du calcul
  
          // Entrez le résultat dans le champ de réponse
          cy.get('[name="n3"]').clear().type(result);
  
          // Soumettez le formulaire
          cy.get('[type="submit"]').click();
        


  
          // Ajoutez une assertion pour vérifier que l'opération a réussi
         // cy.get('.success-message').should('be.visible');  // Remplacez par le sélecteur correct du message de succès
        
  


    })
  })
})
})
  

