export default function Modal({ children, onClose }) {
  // Ce composant permet d'afficher une fenêtre modale.
  //
  // Il reçoit deux props :
  // - children : le contenu qui sera affiché à l'intérieur de la modale
  // - onClose : la fonction qui permet de fermer la modale

   return (
    <div className="modal-overlay">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
      >
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Close"
        >
          x
        </button>

        {children}
      </div>
    </div>
  );
}
