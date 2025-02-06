// describe('Gestion des utilisateurs - Tests E2E', () => {
//     const baseUrl = 'http://localhost/gestion_users/src/';
//
//     beforeEach(() => {
//         cy.visit(baseUrl);
//     });
//
//     it('Ajoute un utilisateur', () => {
//         cy.get('input[name="name"]').type('Test User');
//         cy.get('input[name="email"]').type('testuser@example.com');
//         cy.contains('Ajouter').click();
//         cy.contains('Test User (testuser@example.com)').should('exist');
//     });
//
//     it('Modifie un utilisateur', () => {
//         cy.contains('Test User').parent().find('.edit-button').click();
//         cy.get('input[name="name"]').clear().type('Updated User');
//         cy.get('input[name="email"]').clear().type('updated@example.com');
//         cy.contains('Modifier').click();
//         cy.contains('Updated User (updated@example.com)').should('exist');
//     });
//
//     it('Supprime un utilisateur', () => {
//         cy.contains('Updated User').parent().find('.delete-button').click();
//         cy.contains('Updated User').should('not.exist');
//     });
// });
describe('Test de connexion à mon projet', () => {
    it('Vérifie que la page d’accueil s’affiche', () => {
        cy.visit('http://localhost/gestion_users/src/'); // Mets la bonne URL ici
        cy.contains('Gestion des utilisateurs'); // Vérifie un texte sur la page
    });
});
