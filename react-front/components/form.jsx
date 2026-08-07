
import { useState } from "react";

export default function Form() {
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

    // Récupère les employés déjà enregistrés
    const employees =
      JSON.parse(localStorage.getItem("employees")) || [];

    // Ajoute le nouvel employé
    employees.push(formData);
    console.log("test")

    // Sauvegarde
    localStorage.setItem("employees", JSON.stringify(employees));

    alert("Employee saved!");

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
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Employee</h2>

      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />

      <input
        type="date"
        name="birthDate"
        value={formData.birthDate}
        onChange={handleChange}
      />

      <input
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
      />

      <h3>Address</h3>

      <input
        type="text"
        name="street"
        placeholder="Street"
        value={formData.street}
        onChange={handleChange}
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
      />

      <input
        type="text"
        name="state"
        placeholder="State"
        value={formData.state}
        onChange={handleChange}
      />

      <input
        type="text"
        name="zipCode"
        placeholder="Zip Code"
        value={formData.zipCode}
        onChange={handleChange}
      />

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

      <br />
      <br />

      <button type="submit">Save</button>
    </form>
  );
}