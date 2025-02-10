import DataTable from "./Datatable";

const OrdersPageDashboard = () => {
  const orderData = [
    {
      id: "#12345",
      customer: "John Doe",
      product: "Gaming Mouse",
      amount: "$99.99",
    },
    {
      id: "#12346",
      customer: "Jane Smith",
      product: "Keyboard",
      amount: "$159.99",
    },
    // Add more sample data as needed
  ];

  const orderColumns = [
    { key: "id", title: "Order ID" },
    { key: "customer", title: "Customer" },
    { key: "product", title: "Product" },
    { key: "amount", title: "Amount" },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">All Orders</h2>
      <DataTable data={orderData} columns={orderColumns} />
    </div>
  );
};
export default OrdersPageDashboard;
