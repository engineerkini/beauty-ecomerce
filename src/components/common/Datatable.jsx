
import React, { useState } from "react";
import PropTypes from "prop-types";
import { PencilIcon, TrashIcon } from "lucide-react";

const DataTable = ({ data, columns, onEdit, onDelete, rowsPerPage = 10 }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Ensure data is an array
  const tableData = Array.isArray(data) ? data : [];

  // Filter data based on search term
  const filteredData = tableData.filter((item) =>
    columns.some(
      (column) =>
        column.key !== "actions" &&
        String(item[column.key] || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    )
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const displayedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="py-2 px-4 border-b text-sm font-medium text-gray-600"
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayedData.length > 0 ? (
              displayedData.map((row) => (
                <tr key={row.id || row.key} className="hover:bg-gray-50">
                  {columns.map((column) =>
                    column.key === "actions" ? (
                      <td
                        key={column.key}
                        className="py-2 px-4 border-b text-sm text-gray-700"
                      >
                        <div className="flex space-x-2">
                          <button
                            onClick={() => onEdit(row)}
                            className="text-blue-500 hover:text-blue-700 focus:outline-none"
                            aria-label="Edit"
                          >
                            <PencilIcon className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => onDelete(row.id)}
                            className="text-red-500 hover:text-red-700 focus:outline-none"
                            aria-label="Delete"
                          >
                            <TrashIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    ) : (
                      <td
                        key={column.key}
                        className="py-2 px-4 border-b text-sm text-gray-700"
                      >
                        {row[column.key] || ""}
                      </td>
                    )
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="py-4 px-4 text-center text-gray-500"
                >
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {filteredData.length > 0 && (
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-600">
            Showing {Math.min(
              (currentPage - 1) * rowsPerPage + 1,
              filteredData.length
            )}{" "}
            to{" "}
            {Math.min(currentPage * rowsPerPage, filteredData.length)} of{" "}
            {filteredData.length} entries
          </p>
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
              disabled={currentPage === 1}
              aria-label="Previous Page"
            >
              Previous
            </button>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
              disabled={currentPage === totalPages}
              aria-label="Next Page"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  rowsPerPage: PropTypes.number,
};

export default DataTable;
