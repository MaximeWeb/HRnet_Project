export default function Modal({ children, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">

        <button
          className="close-button"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        {children}

      </div>
    </div>
  );
}