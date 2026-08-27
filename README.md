# HRnet

Projet réalisé dans le cadre de la formation OpenClassrooms, consistant à migrer une application de gestion des employés de jQuery vers React.

L’application permet de créer des fiches employés et de consulter les employés enregistrés.

## Fonctionnalités

* Création d’un employé avec vérification des champs obligatoires.
* Sélection des dates avec un calendrier.
* Affichage du formulaire dans une fenêtre modale.
* Recherche, tri et pagination du tableau des employés.
* Enregistrement des employés dans le `localStorage` du navigateur.

## Technologies

React 18, React Router, JavaScript, CSS et Vite. ESLint est utilisé pour vérifier le code.

## Organisation du projet

| Emplacement                                  | Contenu                       |
| -------------------------------------------- | ----------------------------- |
| Fichiers HTML, CSS et JavaScript à la racine | Application jQuery d’origine  |
| `react-front/`                               | Application React             |
| `react-modal-plugin/`                        | Package du composant Modal    |
| `react-calendar-plugin/`                     | Package du composant Calendar |

La modale et le calendrier sont des composants React réutilisables, isolés dans des packages et utilisés localement par le front.

Le tableau et les listes déroulantes restent intégrés à l’application React : ils ne sont pas encore distribués comme packages séparés.

## Installation et lancement

### Prérequis

* Node.js 22.x, version 22.13.0 minimum, ou Node.js 24+.
* npm.
* Git.

### Récupérer le projet

```bash
git clone https://github.com/MaximeWeb/HRnet_Project.git
cd HRnet_Project
```

### Préparer les composants réutilisables

Depuis la racine du dépôt, installer puis compiler les deux packages :

```bash
npm install --prefix react-modal-plugin
npm run build --prefix react-modal-plugin

npm install --prefix react-calendar-plugin
npm run build --prefix react-calendar-plugin
```

### Lancer l’application React

```bash
npm install --prefix react-front
npm run dev --prefix react-front
```

Ouvrir ensuite l’adresse indiquée dans le terminal.

## Vérifications

Depuis la racine du dépôt, vérifier le code des trois projets :

```bash
npm run lint --prefix react-front
npm run lint --prefix react-modal-plugin
npm run lint --prefix react-calendar-plugin
```

Après compilation des deux packages, générer la version de production du front :

```bash
npm run build --prefix react-front
```

## Stockage des données

Les employés sont enregistrés dans le navigateur, sous la clé `employees` du `localStorage`.

L’application ne possède pas de serveur ni de base de données distante. Les données ne sont pas partagées entre les navigateurs et peuvent disparaître si les données du site sont effacées.
