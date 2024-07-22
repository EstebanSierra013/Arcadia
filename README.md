
# Arcadia

Application web du Zoo Arcadia est composée de NodeJS côté serveur et de HTML, CSS, BootStrap côté client, et utilise MariaDB comme base de données relationnelle.



## Déploiement Local

### Prérequis

- Installateur Node.js : Node.js
- Editor de código: Visual Studio Code

Clone the project

```bash
  git clone https://github.com/EstebanSierra013/Arcadia.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install --save-dev package.json
```

Start the server

```bash
  node app.js    
```
    
### Variables de entorno

Un fichier .env est créé à la racine du projet et doit contenir les variables suivantes :

```bash
PORT = 3000

DB_HOST = 
DB_USER = 
DB_PASSWORD = 
DB_DATABASE = 

SECRET_JWT_KEY = 
MIN_PASSWORD_LENGTH = 

SALT_ROUNDS =
```

Correspondant aux variables de connexion à la base de données locale, une clé SECRET_JWT_KEY pour l'utilisation des jetons.

Il est nécessaire de créer un fichier .gitignore pour le fichier de configuration .env et pour node_modules.

## Arquitectura

Projet réalisé avec une architecture MVC qui comprend les fichiers suivants


### Models

Modèles des ressources de l'application peuvent être trouvés en effectuant les requêtes correspondantes.

### Controllers
Fichiers .js chargés de la communication entre les routeurs et les modèles d'accès à chaque ressource de l'application.

### Views
Templates EJS pour la visualisation de sites web

### Database
- db.js: Singleton pour la communication avec la base de données
- db.sql: Fichier SQL avec la création de toutes les tables
- precharged_db.sql: Insertion de données dans chacun des tableaux Insertion de données dans chacun des tableaux

### Helpers
Fichiers pour la gestion des erreurs et des exceptions, et définition d'un enum pour les rôles et les fonctions par rôle.

### Loaders
Initialise l'application ainsi que chacun des routes.

### Middlewares
Authentification de l'utilisateur (RCBA), Validation des images existantes et Validation des données (module ZOD).

### Public
Images, fichiers CSS, JS

### Routers
Routes de l'application



