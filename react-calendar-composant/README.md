# Composant Calendar — HRnet

`react-calendar-plugin` est un package contenant un composant React réutilisable de sélection de date.

Il associe un champ de type `date` à un calendrier permettant de parcourir les mois et de sélectionner un jour.

## Fonctionnalités

* Saisie d’une date dans le champ.
* Ouverture et fermeture du calendrier avec un bouton.
* Navigation vers le mois précédent ou suivant.
* Sélection d’un jour et mise en évidence de la date sélectionnée.
* Fermeture après une sélection ou un clic à l’extérieur.
* Synchronisation avec la date transmise par le composant parent.

La semaine commence le lundi. Les libellés du calendrier sont actuellement en anglais.

## Prérequis

L’application utilisatrice doit disposer de React et React DOM, version 18 ou supérieure.

Pour préparer l’environnement de développement complet, consulter le README principal du dépôt HRnet.

## Installation locale

Depuis le dossier `react-calendar-plugin` :

```bash
npm install
npm run build
```

Pour ajouter initialement le package à une application React située dans un dossier voisin :

```bash
npm install ../react-calendar-plugin
```

Dans HRnet, cette dépendance est déjà déclarée dans le `package.json` de `react-front`.

## Utilisation

Importer le composant et sa feuille de styles :

```jsx
import { useState } from "react";
import { Calendar } from "react-calendar-plugin";
import "react-calendar-plugin/style.css";

export default function CalendarExample() {
  const [date, setDate] = useState("");

  return (
    <div>
      <Calendar value={date} onChange={setDate} />

      <p>Date sélectionnée : {date || "Aucune"}</p>

      <button type="button" onClick={() => setDate("")}>
        Effacer la date
      </button>
    </div>
  );
}
```

Le calendrier est contrôlé par son parent : `onChange` transmet la nouvelle date, puis le parent la renvoie au composant avec `value`.

## Props

| Prop       | Type                     | Valeur par défaut | Description                                                            |
| ---------- | ------------------------ | ----------------- | ---------------------------------------------------------------------- |
| `value`    | `string`                 | `""`              | Date valide au format `YYYY-MM-DD`, ou chaîne vide.                    |
| `onChange` | `(date: string) => void` | Aucune            | Callback recevant la nouvelle date, ou `""` lorsque le champ est vidé. |

`onChange` reçoit une chaîne de caractères, pas un événement DOM. Pour conserver la sélection, le parent doit mettre à jour `value`.

Le mois parcouru et la date sélectionnée sont distincts : naviguer entre les mois ne modifie pas la sélection.

## Développement

Depuis le dossier du package :

| Commande        | Action                                            |
| --------------- | ------------------------------------------------- |
| `npm run dev`   | Lancer la démonstration locale du calendrier.     |
| `npm run lint`  | Vérifier le code avec ESLint.                     |
| `npm run build` | Générer les fichiers de distribution dans `dist`. |

Après une modification du composant, reconstruire le package pour actualiser la version utilisée par HRnet.

## Points à finaliser

* Copier la déclaration TypeScript dans `dist/index.d.ts`, conformément au chemin déclaré dans `package.json`.
* Corriger les avertissements concernant les variables globales React du build UMD.
* Ajouter des tests automatisés.

Le composant ne propose pas encore de props pour choisir la langue ou définir des dates minimum et maximum.
