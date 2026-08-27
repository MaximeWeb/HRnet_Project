import { useState } from "react";
import Form from "../components/form";
import { Modal } from "react-modal-composant";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h2 className="titleHome">
        Create Employee
      </h2>

      <button
        className="buttonForm"
        onClick={() => setIsOpen(true)}
      >
        Open form
      </button>

     {isOpen && (
  <Modal onClose={() => setIsOpen(false)}>
    <Form onClose={() => setIsOpen(false)} />
  </Modal>
)}
    </div>
  );
}
  

