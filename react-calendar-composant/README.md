# Composant Calendar — HRnet

`react-calendar-composant` est un package npm contenant un composant React réutilisable de sélection de date.

Il associe un champ de type `date` à un calendrier permettant de parcourir les mois et de sélectionner un jour.

Ce composant a été développé dans le cadre de la migration de l'application HRnet de jQuery vers React.

## Fonctionnalités

- Saisie d’une date dans le champ.
- Ouverture et fermeture du calendrier avec un bouton.
- Navigation vers le mois précédent ou suivant.
- Sélection d’un jour et mise en évidence de la date sélectionnée.
- Fermeture après une sélection ou un clic à l’extérieur.
- Synchronisation avec la date transmise par le composant parent.

La semaine commence le lundi. Les libellés du calendrier sont actuellement en anglais.

## Prérequis

L’application utilisatrice doit disposer de :

- React 18 ou supérieur.
- React DOM 18 ou supérieur.

## Installation

Le composant est disponible sur npm :

```bash
npm install react-calendar-composant
```

## Utilisation

Importer le composant et sa feuille de styles :

```jsx
import { useState } from "react";
import { Calendar } from "react-calendar-composant";
import "react-calendar-composant/style.css";

export default function CalendarExample() {
  const [date, setDate] = useState("");

  return (
    <div>
      <Calendar
        value={date}
        onChange={setDate}
      />

      <p>Date sélectionnée : {date || "Aucune"}</p>

      <button
        type="button"
        onClick={() => setDate("")}
      >
        Effacer la date
      </button>
    </div>
  );
}
```

Le calendrier est contrôlé par son parent : `onChange` transmet la nouvelle date, puis le parent met à jour la valeur transmise au composant avec `value`.

## Exemple avec un formulaire

Le composant peut être intégré dans un état contenant plusieurs champs :

```jsx
import { useState } from "react";
import { Calendar } from "react-calendar-composant";
import "react-calendar-composant/style.css";

export default function EmployeeForm() {
  const [formData, setFormData] = useState({
    birthDate: "",
    startDate: "",
  });

  const handleDateChange = (name, value) => {
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  return (
    <form>
      <label>Date of Birth</label>

      <Calendar
        value={formData.birthDate}
        onChange={(value) =>
          handleDateChange("birthDate", value)
        }
      />

      <label>Start Date</label>

      <Calendar
        value={formData.startDate}
        onChange={(value) =>
          handleDateChange("startDate", value)
        }
      />
    </form>
  );
}
```

## Props

| Prop | Type | Valeur par défaut | Description |
| --- | --- | --- | --- |
| `value` | `string` | `""` | Date au format `YYYY-MM-DD`, ou chaîne vide. |
| `onChange` | `(date: string) => void` | Aucune | Callback recevant la nouvelle date, ou `""` lorsque le champ est vidé. |

`onChange` reçoit directement une chaîne de caractères et non un événement DOM.

Pour conserver la sélection, le composant parent doit mettre à jour la prop `value`.

Le mois parcouru et la date sélectionnée sont distincts : naviguer entre les mois ne modifie pas la sélection.

## Styles

Le package fournit sa propre feuille de styles.

Elle doit être importée dans l’application :

```jsx
import "react-calendar-composant/style.css";
```

Les styles peuvent ensuite être adaptés ou surchargés dans l’application utilisatrice si nécessaire.

## Développement

Pour travailler directement sur le package :

```bash
npm install
npm run dev
```

Commandes disponibles :

| Commande | Action |
| --- | --- |
| `npm run dev` | Lancer l’environnement de développement local. |
| `npm run lint` | Vérifier le code avec ESLint. |
| `npm run build` | Générer les fichiers de distribution dans `dist/`. |
| `npm run preview` | Prévisualiser le build local. |

Pour générer le package de production :

```bash
npm run build
```

Le dossier `dist/` contient les fichiers JavaScript, CSS et les déclarations TypeScript nécessaires à la distribution du composant.

## Limites actuelles

Le composant ne propose pas encore de props permettant :

- de choisir la langue du calendrier ;
- de définir une date minimum ;
- de définir une date maximum.

## Package npm

Nom du package :

```text
react-calendar-composant
```

Version initiale publiée :

```text
1.0.0
```

