# Composant DropMenu — HRnet

`react-dropmenu-composant` est un package npm contenant un composant React réutilisable permettant d'afficher une liste déroulante.

Il permet de sélectionner une valeur parmi une liste d'options et peut être facilement intégré dans un formulaire React contrôlé.

Ce composant a été développé dans le cadre de la migration de l'application HRnet de jQuery vers React.

## Fonctionnalités

- Affichage d'une liste déroulante.
- Configuration dynamique des options.
- Gestion d'une valeur sélectionnée.
- Utilisation comme composant contrôlé React.
- Placeholder personnalisable.
- Possibilité de désactiver complètement la liste.
- Possibilité de désactiver certaines options.
- Support de l'attribut `required`.
- Support des attributs `id` et `name`.
- Ajout d'une classe CSS personnalisée.
- Feuille de styles fournie avec le package.

## Prérequis

L'application utilisatrice doit disposer de :

- React 18 ou supérieur.
- React DOM 18 ou supérieur.

## Installation

Le composant est disponible sur npm :

```bash
npm install react-dropmenu-composant
```

## Utilisation

Importer le composant et sa feuille de styles :

```jsx
import { DropMenu } from "react-dropmenu-composant";
import "react-dropmenu-composant/style.css";
```

Exemple :

```jsx
import { useState } from "react";
import { DropMenu } from "react-dropmenu-composant";
import "react-dropmenu-composant/style.css";

export default function DropMenuExample() {
  const [department, setDepartment] = useState("");

  const departmentOptions = [
    {
      value: "Marketing",
      label: "Marketing",
    },
    {
      value: "Engineering",
      label: "Engineering",
    },
    {
      value: "Human Resources",
      label: "Human Resources",
    },
    {
      value: "Legal",
      label: "Legal",
    },
  ];

  return (
    <DropMenu
      options={departmentOptions}
      value={department}
      onChange={setDepartment}
      placeholder="Select a department"
    />
  );
}
```

Le composant est contrôlé par son parent : `onChange` transmet directement la nouvelle valeur sélectionnée, puis le parent met à jour la prop `value`.

## Structure des options

Les options sont transmises au composant avec la prop `options`.

Chaque option doit contenir une propriété `value` et une propriété `label`.

Exemple :

```js
const options = [
  {
    value: "Engineering",
    label: "Engineering",
  },
  {
    value: "Marketing",
    label: "Marketing",
  },
];
```

La propriété `value` représente la valeur transmise au parent.

La propriété `label` représente le texte affiché dans la liste.

## Désactiver une option

Une option peut être désactivée avec la propriété `disabled` :

```js
const options = [
  {
    value: "Engineering",
    label: "Engineering",
  },
  {
    value: "Marketing",
    label: "Marketing",
    disabled: true,
  },
];
```

## Exemple avec un formulaire

Le composant peut être intégré dans un état contenant plusieurs champs :

```jsx
import { useState } from "react";
import { DropMenu } from "react-dropmenu-composant";
import "react-dropmenu-composant/style.css";

export default function EmployeeForm() {
  const [formData, setFormData] = useState({
    state: "",
    department: "Marketing",
  });

  const handleDropMenuChange = (name, value) => {
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const departmentOptions = [
    {
      value: "Marketing",
      label: "Marketing",
    },
    {
      value: "Engineering",
      label: "Engineering",
    },
    {
      value: "Human Resources",
      label: "Human Resources",
    },
    {
      value: "Legal",
      label: "Legal",
    },
  ];

  return (
    <form>
      <label htmlFor="department">
        Department
      </label>

      <DropMenu
        id="department"
        name="department"
        options={departmentOptions}
        value={formData.department}
        onChange={(value) =>
          handleDropMenuChange("department", value)
        }
        placeholder="Select a department"
      />
    </form>
  );
}
```

## Props

| Prop | Type | Valeur par défaut | Description |
| --- | --- | --- | --- |
| `options` | `Array` | `[]` | Liste des options disponibles. |
| `value` | `string` | `""` | Valeur actuellement sélectionnée. |
| `onChange` | `(value: string) => void` | Aucune | Callback appelé lorsqu'une nouvelle valeur est sélectionnée. |
| `placeholder` | `string` | `"Select an option"` | Texte affiché lorsqu'aucune valeur n'est sélectionnée. |
| `id` | `string` | Aucune | Identifiant HTML du champ `select`. |
| `name` | `string` | Aucune | Attribut `name` du champ `select`. |
| `disabled` | `boolean` | `false` | Désactive complètement la liste déroulante. |
| `required` | `boolean` | `false` | Rend la sélection obligatoire dans un formulaire. |
| `className` | `string` | `""` | Permet d'ajouter une classe CSS personnalisée. |

`onChange` reçoit directement la valeur sélectionnée et non un événement DOM.

Par exemple :

```jsx
<DropMenu
  value={department}
  onChange={(value) => setDepartment(value)}
  options={departmentOptions}
/>
```

## Placeholder

Un placeholder peut être défini avec :

```jsx
<DropMenu
  options={departmentOptions}
  value={department}
  onChange={setDepartment}
  placeholder="Select a department"
/>
```

Tant qu'aucune valeur n'est sélectionnée, le placeholder est affiché comme première option désactivée.

## Désactiver le composant

La liste entière peut être désactivée :

```jsx
<DropMenu
  options={departmentOptions}
  value={department}
  onChange={setDepartment}
  disabled={true}
/>
```

## Champ obligatoire

Dans un formulaire, la prop `required` peut être utilisée :

```jsx
<DropMenu
  options={departmentOptions}
  value={department}
  onChange={setDepartment}
  required={true}
/>
```

## Styles

Le package fournit sa propre feuille de styles.

Elle doit être importée dans l'application :

```jsx
import "react-dropmenu-composant/style.css";
```

Une classe CSS supplémentaire peut être ajoutée avec la prop `className` :

```jsx
<DropMenu
  options={departmentOptions}
  value={department}
  onChange={setDepartment}
  className="department-select"
/>
```

Les styles du composant peuvent ensuite être adaptés ou surchargés dans l'application utilisatrice.

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

Le composant repose sur l'élément HTML natif `select`.

Il ne propose pas encore :

- de recherche parmi les options ;
- de sélection multiple ;
- de groupes d'options ;
- de rendu personnalisé des options.

## Package npm

Nom du package :

```text
react-dropmenu-composant
```

Version initiale publiée :

```text
1.0.0
```

