import { useState } from "react";
import { states } from "../src/data/statesUS";

export default function Form({ onClose }) {
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "Marketing",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const newErrors = {};

  // trim pour verifier que meme si le champ est rempli d'espace ce n'est pas correct 
  if (!formData.firstName.trim()) {
    newErrors.firstName = "First Name is required";
  }
// console.log(newErrors);

  if (!formData.lastName.trim()) {
    newErrors.lastName = "Last Name is required";
  }

  if (!formData.birthDate) {
    newErrors.birthDate = "Date of Birth is required";
  }

  if (!formData.startDate) {
    newErrors.startDate = "Start Date is required";
  }

  if (!formData.street.trim()) {
    newErrors.street = "Street is required";
  }

  if (!formData.city.trim()) {
    newErrors.city = "City is required";
  }

  if (!formData.state) {
    newErrors.state = "State is required";
  }

  if (!formData.zipCode.trim()) {
    newErrors.zipCode = "Zip Code is required";
  }

  if (!formData.department) {
    newErrors.department = "Department is required";
  }

  // Il y a des erreurs
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  // ✅ Formulaire valide : on supprime les anciennes erreurs
  setErrors({});

  // Récupère les employés existants
  const employees =
    JSON.parse(localStorage.getItem("employees")) || [];

  employees.push(formData);

  localStorage.setItem(
    "employees",
    JSON.stringify(employees)
  );

  // Affiche le message de succès
  setShowSuccess(true);

  // Réinitialise le formulaire
  setFormData({
    firstName: "",
    lastName: "",
    birthDate: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "Marketing",
  });

  // Ferme la modal après 4,5 secondes
  setTimeout(() => {
    setShowSuccess(false);
    onClose();
  }, 3500);
};
  return (
    <>
      {showSuccess && (
        <div className="success-message">✓ Employee successfully created!</div>
      )}

      <form className="employee-form" onSubmit={handleSubmit}>
        <h2>Create Employee</h2>
        <div className="flex column">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <span className="error-message">{errors.firstName}</span>
          )}

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <span className="error-message">{errors.lastName}</span>
          )}
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
          {errors.birthDate && (
            <span className="error-message">{errors.birthDate}</span>
          )}

          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />

          {errors.startDate && (
            <span className="error-message">{errors.startDate}</span>
          )}
        </div>

        <h3>Address</h3>
        <div className="flex column">
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={formData.street}
            onChange={handleChange}
          />
          {errors.street && (
            <span className="error-message">{errors.street}</span>
          )}
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <span className="error-message">{errors.city}</span>}
          <select name="state" value={formData.state} onChange={handleChange}>
            <option value="">States</option>

            {states.map((state) => (
              <option key={state.code} value={state.code}>
                {state.name}
              </option>
            ))}
          </select>
          {errors.state && (
            <span className="error-message">{errors.state}</span>
          )}
          <input
            type="text"
            name="zipCode"
            placeholder="Zip Code"
            value={formData.zipCode}
            onChange={handleChange}
          />
          {errors.zipCode && (
            <span className="error-message">{errors.zipCode}</span>
          )}
        </div>
        <h3>Department</h3>

        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
        >
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Legal">Legal</option>
        </select>
        {errors.department && (
          <span className="error-message">{errors.department}</span>
        )}
        <button type="submit">Save</button>
      </form>
    </>
  );
}
