# HRnet

Projet réalisé dans le cadre de la formation OpenClassrooms, consistant à migrer une application de gestion des employés de jQuery vers React.

L'application permet de créer des fiches employés et de consulter les employés enregistrés.

Dans le cadre de la migration, plusieurs fonctionnalités auparavant basées sur des plugins jQuery ont été remplacées par des composants React réutilisables et publiés sous forme de packages npm.

## Fonctionnalités

- Création d'un employé avec vérification des champs obligatoires.
- Sélection des dates avec un composant Calendar.
- Affichage des messages de confirmation dans une fenêtre modale.
- Sélection de valeurs avec des listes déroulantes réutilisables.
- Affichage des employés dans un tableau dynamique.
- Recherche dans la liste des employés.
- Tri des colonnes du tableau.
- Pagination des résultats.
- Sélection du nombre d'employés affichés par page.
- Enregistrement des employés dans le `localStorage` du navigateur.

## Technologies

Le projet utilise principalement :

- React 18
- React Router
- JavaScript
- CSS
- Vite
- ESLint
- npm

## Organisation du projet

| Emplacement | Contenu |
| --- | --- |
| Fichiers HTML, CSS et JavaScript à la racine | Application jQuery d'origine |
| `react-front/` | Application HRnet migrée vers React |
| `react-modal-composant/` | Package React de la fenêtre modale |
| `react-calendar-composant/` | Package React de sélection de date |
| `react-datatable-composant/` | Package React d'affichage et de manipulation des données |
| `react-dropmenu-composant/` | Package React de liste déroulante |

L'application jQuery d'origine est conservée dans le dépôt afin de pouvoir comparer l'ancienne version avec l'application migrée vers React.

## Composants React réutilisables

Quatre composants ont été isolés de l'application principale et transformés en packages React réutilisables.

### Modal

Package :

```text
react-modal-composant
```

Installation :

```bash
npm install react-modal-composant
```

La modale permet d'afficher du contenu personnalisé et de gérer sa fermeture depuis le composant parent.

### Calendar

Package :

```text
react-calendar-composant
```

Installation :

```bash
npm install react-calendar-composant
```

Le calendrier permet de saisir et sélectionner une date avec navigation entre les différents mois.

### DataTable

Package :

```text
react-datatable-composant
```

Installation :

```bash
npm install react-datatable-composant
```

Le tableau permet notamment :

- la recherche ;
- le tri des colonnes ;
- le tri des dates ;
- la pagination ;
- la sélection du nombre d'éléments affichés par page.

### DropMenu

Package :

```text
react-dropmenu-composant
```

Installation :

```bash
npm install react-dropmenu-composant
```

Le composant permet de créer des listes déroulantes contrôlées et configurables à partir d'une liste d'options.

## Installation et lancement

### Prérequis

- Node.js
- npm
- Git

### Récupérer le projet

```bash
git clone https://github.com/MaximeWeb/HRnet_Project.git
cd HRnet_Project
```

### Installer l'application React

```bash
cd react-front
npm install
```

Les quatre composants React réutilisables sont déclarés comme dépendances npm de l'application et sont automatiquement installés avec les autres dépendances.

### Lancer l'application

```bash
npm run dev
```

Ouvrir ensuite l'adresse indiquée par Vite dans le terminal.

## Build de production

Depuis le dossier `react-front` :

```bash
npm run build
```

Les fichiers de production sont générés dans le dossier `dist/`.

Pour tester le build de production :

```bash
npm run preview
```

## Vérification du code

Depuis le dossier `react-front` :

```bash
npm run lint
```

## Développement des composants

Les quatre composants React sont également présents dans le dépôt afin de conserver leur code source et de permettre leur développement.

Chaque composant possède son propre projet, son propre `package.json` et son propre `README.md`.

Les composants peuvent être développés et compilés indépendamment de l'application HRnet.

## Stockage des données

Les employés sont enregistrés dans le navigateur sous la clé `employees` du `localStorage`.

L'application ne possède pas de serveur ni de base de données distante.

Les données sont donc propres au navigateur utilisé et peuvent disparaître si les données du site sont supprimées.

## Packages npm

Les composants React réutilisables développés pour le projet sont publiés sur npm :

| Composant | Package |
| --- | --- |
| Modal | `react-modal-composant` |
| Calendar | `react-calendar-composant` |
| DataTable | `react-datatable-composant` |
| DropMenu | `react-dropmenu-composant` |

Ils peuvent être installés indépendamment dans d'autres applications React avec `npm install`.