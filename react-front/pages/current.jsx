import { useState } from "react";
import { ArrowUp, ArrowDown, ArrowUpDown } from "lucide-react";
import SearchBar from "../components/searchBar";
import EntriesSelect from "../components/entriesSelect";
import Pagination from "../components/pagination";

export default function CurrentPage() {
const [employees] = useState(() => {
  return JSON.parse(localStorage.getItem("employees")) || [];
});
  const [search, setSearch] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // État du tri
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  // Récupération des employés depuis le localStorage
  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("employees")) || [];

  //   setEmployees(data);
  // }, []);

  // RECHERCHE

  const filteredEmployees = employees.filter((employee) => {
    const searchValue = search.toLowerCase();

    return Object.values(employee).some((value) =>
      String(value).toLowerCase().includes(searchValue),
    );
  });

  // TRI

  const handleSort = (key) => {
    let direction = "asc";

    // Si on clique une deuxième fois sur la même colonne, on inverse le sens du tri
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    setSortConfig({
      key,
      direction,
    });

    // Quand on change le tri, on revient à la première page
    setCurrentPage(1);
  };

  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    // Aucun tri sélectionné
    if (!sortConfig.key) {
      return 0;
    }

    const valueA = a[sortConfig.key];
    const valueB = b[sortConfig.key];

    // TRI DES DATES

    if (sortConfig.key === "birthDate" || sortConfig.key === "startDate") {
      const dateA = new Date(valueA);
      const dateB = new Date(valueB);

      return sortConfig.direction === "asc" ? dateA - dateB : dateB - dateA;
    }

    // TRI DES TEXTES / NOMBRES

    const comparison = String(valueA)
      .toLowerCase()
      .localeCompare(String(valueB).toLowerCase(), undefined, {
        numeric: true,
      });

    return sortConfig.direction === "asc" ? comparison : -comparison;
  });

  // PAGINATION

  const totalPages = Math.ceil(sortedEmployees.length / entriesPerPage);

  const startIndex = (currentPage - 1) * entriesPerPage;

  const currentEmployees = sortedEmployees.slice(
    startIndex,
    startIndex + entriesPerPage,
  );

  // NOMBRE D'ENTRÉES

  const handleEntriesChange = (e) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  // RECHERCHE

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  // PAGE PRÉCÉDENTE

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // PAGE SUIVANTE

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="employees-page">
      <h1 className="currentTitle">Current employees</h1>

      <div className="table-controls">
        <EntriesSelect value={entriesPerPage} onChange={handleEntriesChange} />

        <SearchBar value={search} onChange={handleSearch} />
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort("firstName")}>
                First Name
                <span className="sort-arrow">
                  {sortConfig.key === "firstName" ? (
                    sortConfig.direction === "asc" ? (
                      <ArrowUp size={16} />
                    ) : (
                      <ArrowDown size={16} />
                    )
                  ) : (
                    <ArrowUpDown size={16} />
                  )}
                </span>
              </th>

              <th onClick={() => handleSort("lastName")}>
                Last Name
                <span className="sort-arrow">
                  {sortConfig.key === "lastName" ? (
                    sortConfig.direction === "asc" ? (
                      <ArrowUp size={16} />
                    ) : (
                      <ArrowDown size={16} />
                    )
                  ) : (
                    <ArrowUpDown size={16} />
                  )}
                </span>
              </th>

              <th onClick={() => handleSort("birthDate")}>
                Date of Birth
                <span className="sort-arrow">
                  {sortConfig.key === "birthDate" ? (
                    sortConfig.direction === "asc" ? (
                      <ArrowUp size={16} />
                    ) : (
                      <ArrowDown size={16} />
                    )
                  ) : (
                    <ArrowUpDown size={16} />
                  )}
                </span>
              </th>

              <th onClick={() => handleSort("startDate")}>
                Start Date
                <span className="sort-arrow">
                  {sortConfig.key === "startDate" ? (
                    sortConfig.direction === "asc" ? (
                      <ArrowUp size={16} />
                    ) : (
                      <ArrowDown size={16} />
                    )
                  ) : (
                    <ArrowUpDown size={16} />
                  )}
                </span>
              </th>

              <th onClick={() => handleSort("street")}>
                Street
                <span className="sort-arrow">
                  {sortConfig.key === "street" ? (
                    sortConfig.direction === "asc" ? (
                      <ArrowUp size={16} />
                    ) : (
                      <ArrowDown size={16} />
                    )
                  ) : (
                    <ArrowUpDown size={16} />
                  )}
                </span>
              </th>

              <th onClick={() => handleSort("city")}>
                City
                <span className="sort-arrow">
                  {sortConfig.key === "city" ? (
                    sortConfig.direction === "asc" ? (
                      <ArrowUp size={16} />
                    ) : (
                      <ArrowDown size={16} />
                    )
                  ) : (
                    <ArrowUpDown size={16} />
                  )}
                </span>
              </th>

              <th onClick={() => handleSort("state")}>
                State
                <span className="sort-arrow">
                  {sortConfig.key === "state" ? (
                    sortConfig.direction === "asc" ? (
                      <ArrowUp size={16} />
                    ) : (
                      <ArrowDown size={16} />
                    )
                  ) : (
                    <ArrowUpDown size={16} />
                  )}
                </span>
              </th>

              <th onClick={() => handleSort("zipCode")}>
                Zip Code
                <span className="sort-arrow">
                  {sortConfig.key === "zipCode" ? (
                    sortConfig.direction === "asc" ? (
                      <ArrowUp size={16} />
                    ) : (
                      <ArrowDown size={16} />
                    )
                  ) : (
                    <ArrowUpDown size={16} />
                  )}
                </span>
              </th>

              <th onClick={() => handleSort("department")}>
                Department
                <span className="sort-arrow">
                  {sortConfig.key === "department" ? (
                    sortConfig.direction === "asc" ? (
                      <ArrowUp size={16} />
                    ) : (
                      <ArrowDown size={16} />
                    )
                  ) : (
                    <ArrowUpDown size={16} />
                  )}
                </span>
              </th>
            </tr>
          </thead>

          <tbody>
            {currentEmployees.length > 0 ? (
              currentEmployees.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.firstName}</td>

                  <td>{employee.lastName}</td>

                  <td>{employee.birthDate}</td>

                  <td>{employee.startDate}</td>

                  <td>{employee.street}</td>

                  <td>{employee.city}</td>

                  <td>{employee.state}</td>

                  <td>{employee.zipCode}</td>

                  <td>{employee.department}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="no-results">
                  No employees found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <span>
          Showing {sortedEmployees.length === 0 ? 0 : startIndex + 1} to{" "}
          {Math.min(startIndex + entriesPerPage, sortedEmployees.length)} of{" "}
          {sortedEmployees.length} employees
        </span>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </div>
    </div>
  );
}
