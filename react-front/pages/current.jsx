
import { useState } from "react";
import { DataTable } from "react-datatable-composant";
import "react-datatable-composant/style.css";

export default function CurrentPage() {
  const [employees] = useState(() => {
    return JSON.parse(localStorage.getItem("employees")) || [];
  });
const columns = [
  { key: "firstName", label: "First Name" },
  { key: "lastName", label: "Last Name" },
  { key: "birthDate", label: "Date of Birth", type: "date" },
  { key: "startDate", label: "Start Date", type: "date" },
  { key: "street", label: "Street" },
  { key: "city", label: "City" },
  { key: "state", label: "State" },
  { key: "zipCode", label: "Zip Code" },
  { key: "department", label: "Department" },
];

  return (
    <div className="employees-page">
      <h1 className="currentTitle">Current employees</h1>

     <DataTable
  data={employees}
  columns={columns}
  entryName="employees"
/>
    </div>
  );
}