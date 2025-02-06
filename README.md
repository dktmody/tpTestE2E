# Gestion des Utilisateurs - Tests E2E avec Cypress et phpUnit

Ce projet contient une application de gestion des utilisateurs accompagnée de tests E2E (End-to-End) réalisés avec Cypress et phpUnit.

## Structure du Projet

```
gestion_users/
├── cypress/
│   ├── e2e/
│   │   ├── 2-advanced-examples/
│   │   │   ├── querying.cy.js
│   │   │   ├── spies_stubs_clocks.cy.js
│   │   │   ├── storage.cy.js
│   │   │   ├── traversal.cy.js
│   │   │   ├── utilities.cy.js
│   │   │   ├── viewport.cy.js
│   │   │   ├── waiting.cy.js
│   │   │   └── window.cy.js
│   │   └── user_manager.cy.js
│   ├── fixtures/
│   │   └── example.json
│   ├── screenshots/
│   │   └── user_manager.cy.js/
│   │       ├── Gestion des utilisateurs - Tests E2E -- Ajoute un utilisateur (failed).png
│   │       ├── Gestion des utilisateurs - Tests E2E -- Modifie un utilisateur (failed).png
│   │       └── Gestion des utilisateurs - Tests E2E -- Supprime un utilisateur (failed).png
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── database.sql
├── index.html
├── package.json
├── package-lock.json
├── script.js
├── style.css
├── tests/
│   └── UserManagerTest.php
```

## Instructions

### Installation

1. Clonez le projet :

   ```bash
   git clone https://github.com/dktmody/tpTestE2E.git
   cd gestion_users
   ```

2. Installez les dépendances :

   ```bash
   npm install
   composer install
   ```

### Configuration de la base de données

1. Créez une base de données MySQL :

   ```sql
   CREATE DATABASE gestion_users;
   USE gestion_users;
   SOURCE database.sql;
   ```

2. Assurez-vous que les informations de connexion à la base de données sont correctement configurées dans l'application.

### Exécution de l'application

Ouvrez `index.html` dans votre navigateur ou utilisez un serveur local comme XAMPP.

### Lancer les tests Cypress

1. Ouvrez l'interface graphique de Cypress :

   ```bash
   npx cypress open
   ```

2. Exécutez les tests E2E.

### Lancer les tests phpUnit

1. Exécutez les tests avec la commande suivante :

   ```bash
   ./vendor/bin/phpunit tests/
   ```

## Fonctionnalités de Tests

- **Ajout d'utilisateur** : Vérifie si un utilisateur peut être ajouté correctement.
- **Modification d'utilisateur** : Vérifie la mise à jour des informations utilisateur.
- **Suppression d'utilisateur** : Vérifie si un utilisateur peut être supprimé.

## Technologies utilisées

- Cypress pour les tests E2E
- phpUnit pour les tests unitaires
- HTML, CSS, JavaScript pour l'application front-end
- MySQL pour la base de données

---

