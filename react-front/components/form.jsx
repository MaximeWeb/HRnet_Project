import { useState } from "react";
import { states } from "../src/data/statesUS";

import { Calendar } from "react-calendar-composant";
import "react-calendar-composant/style.css";

import { DropMenu } from "react-dropmenu-composant";
import "react-dropmenu-composant/style.css";

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

  // OPTIONS DES ÉTATS
  const stateOptions = states.map((state) => ({
    value: state.code,
    label: state.name,
  }));

  // OPTIONS DES DÉPARTEMENTS
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

  // CHANGEMENT DES INPUTS
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // CHANGEMENT DES MENUS DÉROULANTS
  const handleDropMenuChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // CHANGEMENT DES DATES
  const handleDateChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

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

    // IL Y A DES ERREURS
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // FORMULAIRE VALIDE
    setErrors({});

    // RÉCUPÈRE LES EMPLOYÉS EXISTANTS
    const employees =
      JSON.parse(localStorage.getItem("employees")) || [];

    // AJOUTE LE NOUVEL EMPLOYÉ
    employees.push(formData);

    // SAUVEGARDE DANS LOCALSTORAGE
    localStorage.setItem(
      "employees",
      JSON.stringify(employees),
    );

    // MESSAGE DE SUCCÈS
    setShowSuccess(true);

    // RÉINITIALISE LE FORMULAIRE
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

    // FERME LA MODAL APRÈS 3,5 SECONDES
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 3500);
  };

  return (
    <>
      {showSuccess && (
        <div className="success-message">
          ✓ Employee successfully created!
        </div>
      )}

      <form
        className="employee-form"
        onSubmit={handleSubmit}
      >
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
            <span className="error-message">
              {errors.firstName}
            </span>
          )}

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />

          {errors.lastName && (
            <span className="error-message">
              {errors.lastName}
            </span>
          )}

          <Calendar
            value={formData.birthDate}
            onChange={(value) =>
              handleDateChange("birthDate", value)
            }
          />

          {errors.birthDate && (
            <span className="error-message">
              {errors.birthDate}
            </span>
          )}

          <Calendar
            value={formData.startDate}
            onChange={(value) =>
              handleDateChange("startDate", value)
            }
          />

          {errors.startDate && (
            <span className="error-message">
              {errors.startDate}
            </span>
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
            <span className="error-message">
              {errors.street}
            </span>
          )}

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />

          {errors.city && (
            <span className="error-message">
              {errors.city}
            </span>
          )}

          <DropMenu
            id="state"
            name="state"
            options={stateOptions}
            value={formData.state}
            onChange={(value) =>
              handleDropMenuChange("state", value)
            }
            placeholder="States"
          />

          {errors.state && (
            <span className="error-message">
              {errors.state}
            </span>
          )}

          <input
            type="text"
            name="zipCode"
            placeholder="Zip Code"
            value={formData.zipCode}
            onChange={handleChange}
          />

          {errors.zipCode && (
            <span className="error-message">
              {errors.zipCode}
            </span>
          )}
        </div>

        <h3>Department</h3>

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

        {errors.department && (
          <span className="error-message">
            {errors.department}
          </span>
        )}

        <button type="submit">
          Save
        </button>
      </form>
    </>
  );
}