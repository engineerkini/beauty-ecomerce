import DataTable from "./Datatable";

const CustomersPageDashboard = () => {
  const customerData = [
    {
      id: 1,
      name: "Jane Alaa",
      email: "john@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Justine Ray",
      email: "jane@example.com",
      phone: "987-654-3210",
    },
    // Add more sample data as needed
  ];

  const customerColumns = [
    { key: "id", title: "ID" },
    { key: "name", title: "Name" },
    { key: "email", title: "Email" },
    { key: "phone", title: "Phone" },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">All Customers</h2>
      <DataTable
        onEdit={() => {}}
        onDelete={() => {}}
        data={customerData}
        columns={customerColumns}
      />
    </div>
  );
};

export default CustomersPageDashboard;
