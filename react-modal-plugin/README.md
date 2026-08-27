# Composant Modal — HRnet

`react-modal-plugin` est un package contenant un composant React réutilisable pour afficher une fenêtre modale.

## Fonctionnalités

* Affichage d’une fenêtre avec un fond assombri.
* Contenu personnalisable avec `children`.
* Demande de fermeture par le bouton, la touche Échap ou un clic à l’extérieur.
* Les clics dans le contenu ne ferment pas la modale.

L’affichage est contrôlé par le composant parent : la modale est visible tant qu’elle est présente dans le JSX.

## Prérequis

L’application utilisatrice doit disposer de React et React DOM, version 18 ou supérieure.

Pour préparer l’environnement de développement complet, consulter le README principal du dépôt HRnet.

## Installation locale

Depuis le dossier `react-modal-plugin` :

```bash
npm install
npm run build
```

Pour ajouter initialement le package à une application React située dans un dossier voisin :

```bash
npm install ../react-modal-plugin
```

Dans HRnet, cette dépendance est déjà déclarée dans le `package.json` de `react-front`.

## Utilisation

L’exemple suivant est prévu pour un fichier placé dans `react-front/src/`.

Le CSS compilé est importé par son chemin local, car le package ne déclare pas encore d’export public `style.css`.

```jsx
import { useState } from "react";
import { Modal } from "react-modal-plugin";
import "../../react-modal-plugin/dist/react-modal-plugin.css";

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        Ouvrir la modale
      </button>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h2>Confirmation</h2>
          <p>L’employé a été enregistré.</p>
        </Modal>
      )}
    </>
  );
}
```

Le callback `onClose` avertit le parent. Il appartient au parent de retirer la modale de l’affichage.

## Props

| Prop       | Type         | Description                                                                   |
| ---------- | ------------ | ----------------------------------------------------------------------------- |
| `children` | `ReactNode`  | Contenu à afficher dans la modale.                                            |
| `onClose`  | `() => void` | Fonction appelée lors d’une demande de fermeture. À fournir systématiquement. |

## Développement

Depuis le dossier du package :

```bash
npm run lint
npm run build
```

Le build génère les fichiers de distribution dans `dist`. Après une modification du composant, reconstruire le package pour actualiser la version utilisée par HRnet.

## Points à finaliser

* Ajouter un export public pour la feuille de styles.
* Isoler les classes CSS `.modal-overlay`, `.modal` et `.close-button` afin de limiter les conflits avec l’application.
* Corriger la déclaration TypeScript, qui indique actuellement que `onClose` est optionnel.
* Ajouter des tests automatisés.
