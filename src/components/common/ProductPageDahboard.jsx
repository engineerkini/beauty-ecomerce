import { useState, useEffect } from "react";
import { PlusIcon } from "lucide-react";
import DataTable from "./Datatable";

const ProductsPageDashboard = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [formValues, setFormValues] = useState({
    product_name: "",
    product_model: "",
    price: "",
    category_id: "",
    company_name: "",
    description: "",
    rating: "",
    photo_url: "",
  });
  const [error, setError] = useState(null);
  const API_URL = "http://127.0.0.1:8080/products";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch products.");
      const data = await response.json();
      setProducts(data.products || []);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]:
        name === "price" || name === "rating" ? parseFloat(value) || "" : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const method = currentProduct ? "PUT" : "POST";
      const endpoint = currentProduct
        ? `${API_URL}/${currentProduct.id}`
        : API_URL;

      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      if (!response.ok)
        throw new Error(
          currentProduct
            ? "Failed to update product."
            : "Failed to add product."
        );

      await fetchProducts();
      resetModal();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete product.");

      await fetchProducts();
    } catch (err) {
      setError(err.message);
    }
  };

  const resetModal = () => {
    setFormValues({
      product_name: "",
      product_model: "",
      price: "",
      category_id: "",
      company_name: "",
      description: "",
      rating: "",
      photo_url: "",
    });
    setCurrentProduct(null);
    setIsModalOpen(false);
    setError(null);
  };

  const openModal = (product = null) => {
    setFormValues(
      product || {
        product_name: "",
        product_model: "",
        price: "",
        category_id: "",
        company_name: "",
        description: "",
        rating: "",
        photo_url: "",
      }
    );
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const productColumns = [
    { key: "id", title: "ID" },
    { key: "product_name", title: "Name" },
    { key: "product_model", title: "Model" },
    { key: "price", title: "Price" },
    { key: "category_id", title: "Category" },
    { key: "company_name", title: "Company" },
    { key: "rating", title: "Rating" },
    { key: "photo_url", title: "Photo URL" },
    {
      key: "actions",
      title: "Actions",
      render: (product) => (
        <div className="space-x-2">
          <button onClick={() => openModal(product)} className="text-blue-500">
            Edit
          </button>
          <button
            onClick={() => handleDelete(product.id)}
            className="text-red-500"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">All Products</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <button
        onClick={() => openModal()}
        className="mb-4 flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        <PlusIcon className="mr-2 w-4 h-4" /> Add New Product
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg w-80">
            <h3 className="text-lg font-semibold mb-4">
              {currentProduct ? "Edit Product" : "Add New Product"}
            </h3>
            <div className="space-y-3">
              {Object.keys(formValues).map((key) => (
                <input
                  key={key}
                  type={key === "rating" || key === "price" ? "number" : "text"}
                  name={key}
                  placeholder={key.replace("_", " ").toUpperCase()}
                  value={formValues[key]}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded text-sm"
                />
              ))}
              <div className="flex justify-end space-x-2">
                <button
                  onClick={resetModal}
                  className="px-3 py-1 bg-gray-200 rounded text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
                >
                  {currentProduct ? "Update" : "Add"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <DataTable
        data={products}
        columns={productColumns}
        onEdit={openModal}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ProductsPageDashboard;
