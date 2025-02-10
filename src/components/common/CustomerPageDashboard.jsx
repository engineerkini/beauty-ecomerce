import React, { useEffect, useState } from "react";
import DataTable from "./Datatable";

const CustomersPageDashboard = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "http://127.0.0.1:8080/customers";

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch customers.");
      const data = await response.json();
      console.log("Fetched customers:", data);
      setCustomers(data.customers || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  

  const customerColumns = [
    { key: "first_name", title: "Name" },
    { key: "last_name", title: "Last Name"},
    { key: "phone_number", title: "Phone Number" },
    { key: "email", title: "Email" },
    { key: "address", title: "Address" },
    {
      key: "actions",
      title: "Actions",
      render: (customer) => (
        <div className="space-x-2">
          <button
            onClick={() => console.log("Edit customer:", customer)}
            className="text-blue-500"
          >
            Edit
          </button>
          <button
            onClick={() => console.log("Delete customer ID:", customer.id)}
            className="text-red-500"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  if (loading) {
    return <p className="text-center text-gray-600">Loading customers...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">All Customers</h2>
      <DataTable
        data={customers}
        columns={customerColumns}
        onEdit={(row) => console.log("Edit customer:", row)}
        onDelete={(id) => console.log("Delete customer ID:", id)}
      />
    </div>
  );
};

export default CustomersPageDashboard;
