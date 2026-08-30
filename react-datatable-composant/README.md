# Composant DataTable — HRnet

`react-datatable-composant` est un package npm contenant un composant React réutilisable permettant d'afficher et de manipuler des données sous forme de tableau.

Il propose notamment la recherche, le tri des colonnes, la pagination et la sélection du nombre d'éléments affichés par page.

Ce composant a été développé dans le cadre de la migration de l'application HRnet de jQuery vers React.

## Fonctionnalités

- Affichage de données sous forme de tableau.
- Configuration dynamique des colonnes.
- Recherche globale dans les colonnes affichées.
- Tri croissant et décroissant des colonnes.
- Tri spécifique des dates.
- Possibilité de désactiver le tri d'une colonne.
- Sélection du nombre d'éléments affichés par page.
- Pagination avec navigation précédente et suivante.
- Affichage du nombre d'éléments actuellement visibles.
- Gestion du cas où aucune donnée ne correspond à la recherche.
- Possibilité de définir une propriété unique pour identifier les lignes.
- Tableau responsive avec défilement horizontal si nécessaire.

## Prérequis

L'application utilisatrice doit disposer de :

- React 18 ou supérieur.
- React DOM 18 ou supérieur.

## Installation

Le composant est disponible sur npm :

```bash
npm install react-datatable-composant
```

## Utilisation

Importer le composant et sa feuille de styles :

```jsx
import { DataTable } from "react-datatable-composant";
import "react-datatable-composant/style.css";
```

Exemple :

```jsx
import { DataTable } from "react-datatable-composant";
import "react-datatable-composant/style.css";

export default function EmployeeTable() {
  const employees = [
    {
      firstName: "John",
      lastName: "Doe",
      birthDate: "1990-05-12",
      startDate: "2024-01-15",
      department: "Engineering",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      birthDate: "1988-11-03",
      startDate: "2023-06-20",
      department: "Marketing",
    },
  ];

  const columns = [
    {
      key: "firstName",
      label: "First Name",
    },
    {
      key: "lastName",
      label: "Last Name",
    },
    {
      key: "birthDate",
      label: "Date of Birth",
      type: "date",
    },
    {
      key: "startDate",
      label: "Start Date",
      type: "date",
    },
    {
      key: "department",
      label: "Department",
    },
  ];

  return (
    <DataTable
      data={employees}
      columns={columns}
      entryName="employees"
    />
  );
}
```

## Configuration des colonnes

Les colonnes sont transmises au composant avec la prop `columns`.

Chaque colonne est représentée par un objet contenant au minimum une clé `key` et un libellé `label`.

Exemple :

```js
{
  key: "firstName",
  label: "First Name"
}
```

`key` correspond à la propriété à lire dans chaque objet du tableau `data`.

Par exemple :

```js
const employees = [
  {
    firstName: "John",
    lastName: "Doe"
  }
];
```

peut être associé aux colonnes :

```js
const columns = [
  {
    key: "firstName",
    label: "First Name"
  },
  {
    key: "lastName",
    label: "Last Name"
  }
];
```

## Tri des données

Par défaut, les colonnes sont triables.

Un clic sur l'en-tête d'une colonne applique un tri croissant. Un second clic applique un tri décroissant.

### Tri des dates

Pour qu'une colonne soit triée comme une date, ajouter :

```js
type: "date"
```

Exemple :

```js
{
  key: "startDate",
  label: "Start Date",
  type: "date"
}
```

Le composant convertira alors les valeurs en dates avant de les comparer.

### Désactiver le tri

Le tri peut être désactivé pour une colonne avec :

```js
sortable: false
```

Exemple :

```js
{
  key: "actions",
  label: "Actions",
  sortable: false
}
```

## Recherche

Le champ de recherche filtre les données en fonction des colonnes déclarées dans `columns`.

La recherche est insensible à la casse.

Lorsqu'une nouvelle recherche est effectuée, la pagination revient automatiquement à la première page.

## Pagination

Le composant permet de choisir le nombre d'éléments affichés par page parmi :

- 10
- 25
- 50
- 100

Les boutons `Previous` et `Next` permettent de naviguer entre les différentes pages.

Le composant affiche également le nombre d'éléments actuellement visibles, par exemple :

```text
Showing 1 to 10 of 25 employees
```

## Props

| Prop | Type | Valeur par défaut | Description |
| --- | --- | --- | --- |
| `data` | `Array` | `[]` | Tableau contenant les données à afficher. |
| `columns` | `Array` | `[]` | Configuration des colonnes du tableau. |
| `entryName` | `string` | `"entries"` | Nom utilisé dans la recherche et les informations de pagination. |
| `rowKey` | `string` | Aucune | Propriété utilisée comme identifiant unique pour chaque ligne. |

## Propriétés des colonnes

| Propriété | Type | Obligatoire | Description |
| --- | --- | --- | --- |
| `key` | `string` | Oui | Propriété de l'objet à afficher dans la colonne. |
| `label` | `string` | Oui | Libellé affiché dans l'en-tête du tableau. |
| `type` | `string` | Non | Utiliser `"date"` pour activer le tri chronologique. |
| `sortable` | `boolean` | Non | Utiliser `false` pour désactiver le tri de la colonne. |

## Identifiant des lignes

Par défaut, le composant utilise l'index de la ligne comme clé React.

Lorsqu'une propriété unique est disponible dans les données, il est préférable d'utiliser la prop `rowKey`.

Exemple :

```jsx
<DataTable
  data={employees}
  columns={columns}
  entryName="employees"
  rowKey="id"
/>
```

avec des données de la forme :

```js
{
  id: 1,
  firstName: "John",
  lastName: "Doe"
}
```

## Styles

Le package fournit sa propre feuille de styles.

Elle doit être importée dans l'application :

```jsx
import "react-datatable-composant/style.css";
```

Les styles peuvent ensuite être adaptés ou surchargés dans l'application utilisatrice si nécessaire.

## Développement

Pour travailler directement sur le package :

```bash
npm install
npm run dev
```

Commandes disponibles :

| Commande | Action |
| --- | --- |
| `npm run dev` | Lancer l'environnement de développement local. |
| `npm run lint` | Vérifier le code avec ESLint. |
| `npm run build` | Générer les fichiers de distribution dans `dist/`. |
| `npm run preview` | Prévisualiser le build local. |

Pour générer le package de production :

```bash
npm run build
```

## Limites actuelles

Le composant ne propose pas encore :

- de personnalisation des valeurs proposées pour le nombre d'éléments par page ;
- de pagination avec accès direct à un numéro de page ;
- de rendu personnalisé des cellules ;
- de gestion intégrée d'actions sur les lignes.

## Package npm

Nom du package :

```text
react-datatable-composant
```

Version initiale publiée :

```text
1.0.0
```

