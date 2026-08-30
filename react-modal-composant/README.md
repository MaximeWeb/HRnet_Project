# Composant Modal — HRnet

`react-modal-composant` est un package npm contenant un composant React réutilisable permettant d'afficher une fenêtre modale.

Ce composant a été développé dans le cadre de la migration de l'application HRnet de jQuery vers React.

## Fonctionnalités

- Affichage d'une fenêtre modale avec un fond assombri.
- Contenu personnalisable avec `children`.
- Fermeture avec un bouton.
- Fermeture avec la touche `Échap`.
- Fermeture lors d'un clic sur l'arrière-plan.
- Les clics à l'intérieur du contenu ne ferment pas la modale.
- Gestion de la fermeture par le composant parent avec `onClose`.

L'affichage de la modale est contrôlé par le composant parent : la modale reste visible tant qu'elle est présente dans le JSX.

## Prérequis

L'application utilisatrice doit disposer de :

- React 18 ou supérieur.
- React DOM 18 ou supérieur.

## Installation

Le composant est disponible sur npm :

```bash
npm install react-modal-composant
```

## Utilisation

Importer le composant et sa feuille de styles :

```jsx
import { Modal } from "react-modal-composant";
import "react-modal-composant/style.css";
```

Exemple complet :

```jsx
import { useState } from "react";
import { Modal } from "react-modal-composant";
import "react-modal-composant/style.css";

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir la modale
      </button>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h2>Confirmation</h2>
          <p>L'employé a été enregistré.</p>
        </Modal>
      )}
    </>
  );
}
```

Le callback `onClose` avertit le composant parent qu'une fermeture a été demandée.

Il appartient ensuite au parent de retirer la modale du JSX, par exemple :

```jsx
onClose={() => setIsOpen(false)}
```

## Contrôle de l'affichage

Le composant ne possède pas de prop `isOpen`.

Son affichage est contrôlé directement par le parent avec un rendu conditionnel :

```jsx
{isOpen && (
  <Modal onClose={() => setIsOpen(false)}>
    <p>Contenu de la modale</p>
  </Modal>
)}
```

Cette approche laisse au composant parent la responsabilité de gérer l'état d'ouverture et de fermeture.

## Contenu personnalisé

La prop `children` permet d'afficher n'importe quel contenu React dans la modale.

Par exemple :

```jsx
<Modal onClose={() => setIsOpen(false)}>
  <h2>Employee Created!</h2>
  <p>The employee has been successfully saved.</p>

  <button
    type="button"
    onClick={() => setIsOpen(false)}
  >
    Fermer
  </button>
</Modal>
```

## Fermeture de la modale

Une demande de fermeture peut être déclenchée de plusieurs façons :

- clic sur le bouton de fermeture ;
- pression sur la touche `Échap` ;
- clic sur l'arrière-plan de la modale.

Un clic à l'intérieur du contenu de la modale ne déclenche pas sa fermeture.

Dans tous les cas, le composant appelle :

```js
onClose();
```

Le composant parent décide ensuite de la modification de son état.

## Props

| Prop | Type | Description |
| --- | --- | --- |
| `children` | `ReactNode` | Contenu React affiché à l'intérieur de la modale. |
| `onClose` | `() => void` | Fonction appelée lorsqu'une fermeture de la modale est demandée. |

## Styles

Le package fournit sa propre feuille de styles.

Elle doit être importée dans l'application :

```jsx
import "react-modal-composant/style.css";
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

Le dossier `dist/` contient les fichiers JavaScript, CSS et la déclaration TypeScript nécessaires à la distribution du composant.

## Limites actuelles

Le composant ne propose pas encore de props permettant :

- de personnaliser directement le style de la modale ;
- de personnaliser le texte ou l'apparence du bouton de fermeture ;
- de choisir individuellement les méthodes de fermeture ;
- de gérer plusieurs tailles prédéfinies de modale.

Ces comportements peuvent être ajoutés dans de futures versions du composant.

## Package npm

Nom du package :

```text
react-modal-composant
```

Version initiale publiée :

```text
1.0.0
```

