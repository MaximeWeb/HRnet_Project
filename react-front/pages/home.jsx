
import { useState } from "react";
import Form from "../components/form";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h2>Wanna join the employees ?</h2>

      <button
        className="buttonForm"
        onClick={() => setIsOpen(true)}
      >
        Open form
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Employee Form</h2>

            <Form />

            <button onClick={() => setIsOpen(false)}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
