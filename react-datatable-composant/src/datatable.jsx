import { useState } from "react";
import "./datatable.css";
import { ArrowUp, ArrowDown, ArrowUpDown } from "lucide-react";

export default function DataTable({
  data = [],
  columns = [],
  entryName = "entries",
  rowKey,
}) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  // =========================
  // TRI
  // =========================

  const handleSort = (key) => {
    let direction = "asc";

    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    setSortConfig({
      key,
      direction,
    });

    setCurrentPage(1);
  };

  // =========================
  // RECHERCHE
  // =========================

  const filteredData = data.filter((row) => {
    const searchValue = search.toLowerCase();

    return columns.some((column) =>
      String(row[column.key] ?? "")
        .toLowerCase()
        .includes(searchValue),
    );
  });

  // =========================
  // TRI DES DONNÉES
  // =========================

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig.key) {
      return 0;
    }

    const valueA = a[sortConfig.key] ?? "";
    const valueB = b[sortConfig.key] ?? "";

    const column = columns.find((column) => column.key === sortConfig.key);

    // TRI DES DATES
    if (column?.type === "date") {
      const dateA = new Date(valueA);
      const dateB = new Date(valueB);

      return sortConfig.direction === "asc" ? dateA - dateB : dateB - dateA;
    }

    // TRI TEXTES / NOMBRES
    const comparison = String(valueA)
      .toLowerCase()
      .localeCompare(String(valueB).toLowerCase(), undefined, {
        numeric: true,
      });

    return sortConfig.direction === "asc" ? comparison : -comparison;
  });

  // =========================
  // PAGINATION
  // =========================

  const totalPages = Math.ceil(sortedData.length / entriesPerPage);

  const startIndex = (currentPage - 1) * entriesPerPage;

  const currentData = sortedData.slice(startIndex, startIndex + entriesPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // =========================
  // NOMBRE D'ENTRÉES
  // =========================

  const handleEntriesChange = (e) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  // =========================
  // RECHERCHE
  // =========================

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="datatable">
      {/* CONTROLS */}
      <div className="datatable-controls">
        {/* ENTRIES SELECT */}
        <div className="datatable-entries">
          <label htmlFor="datatable-entries-select">Show</label>

          <select
            id="datatable-entries-select"
            value={entriesPerPage}
            onChange={handleEntriesChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>

          <span>entries</span>
        </div>

        {/* SEARCH */}
        <div className="datatable-search">
          <label htmlFor="datatable-search-input">Search:</label>

          <input
            id="datatable-search-input"
            type="text"
            placeholder={`Search ${entryName}...`}
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  onClick={() => {
                    if (column.sortable !== false) {
                      handleSort(column.key);
                    }
                  }}
                >
                  {column.label}

                  {column.sortable !== false && (
                    <span className="sort-arrow">
                      {sortConfig.key === column.key ? (
                        sortConfig.direction === "asc" ? (
                          <ArrowUp size={16} />
                        ) : (
                          <ArrowDown size={16} />
                        )
                      ) : (
                        <ArrowUpDown size={16} />
                      )}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {currentData.length > 0 ? (
              currentData.map((row, rowIndex) => (
                <tr
                  key={
                    rowKey && row[rowKey] !== undefined ? row[rowKey] : rowIndex
                  }
                >
                  {columns.map((column) => (
                    <td key={column.key}>{row[column.key] ?? ""}</td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length || 1} className="no-results">
                  No employee found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* FOOTER */}
      <div className="datatable-footer">
        {/* INFO */}
        <div className="datatable-info">
          Showing {sortedData.length === 0 ? 0 : startIndex + 1} to{" "}
          {Math.min(startIndex + entriesPerPage, sortedData.length)} of{" "}
          {sortedData.length} {entryName}
        </div>

        {/* PAGINATION */}
        <div className="datatable-pagination">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentPage === 1 || totalPages === 0}
          >
            Previous
          </button>

          <span>
            Page {totalPages === 0 ? 0 : currentPage} of {totalPages}
          </span>

          <button
            type="button"
            onClick={handleNext}
            disabled={totalPages === 0 || currentPage >= totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
