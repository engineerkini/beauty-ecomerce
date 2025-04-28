import { useState } from "react";
import { PlusIcon, Edit2Icon, Trash2Icon } from "lucide-react";
import DataTable from "./Datatable";

const ProductsPageDashboard = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Black Soap",
      category: "Face Product",
      price: "$999.99",
      stock: 25,
    },
    {
      id: 2,
      name: "Gilet",
      category: "Skin Care",
      price: "$699.99",
      stock: 50,
    },
    {
      id: 3,
      name: "oil",
      category: "Skin Care",
      price: "$199.99",
      stock: 150,
    },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  const handleAddProduct = () => {
    const newProductEntry = { ...newProduct, id: products.length + 1 };
    setProducts([...products, newProductEntry]);
    setNewProduct({ name: "", category: "", price: "", stock: "" });
    setIsAddModalOpen(false);
  };

  const handleEditProduct = (product) => {
    setEditProduct(product);
    setIsAddModalOpen(true);
  };

  const handleUpdateProduct = () => {
    setProducts(
      products.map((p) => (p.id === editProduct.id ? editProduct : p))
    );
    setEditProduct(null);
    setIsAddModalOpen(false);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const productColumns = [
    { key: "id", title: "ID" },
    { key: "name", title: "Product Name" },
    { key: "category", title: "Category" },
    { key: "price", title: "Price" },
    { key: "stock", title: "Stock" },
    { key: "actions", title: "Actions" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">All Products</h2>

      {/* Add Product Button */}
      <button
        onClick={() => setIsAddModalOpen(true)}
        className="mb-4 flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        <PlusIcon className="mr-2 w-4 h-4" /> Add New Product
      </button>

      {/* Add/Edit Product Modal */}
      {(isAddModalOpen || editProduct) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-xl font-semibold mb-4">
              {editProduct ? "Edit Product" : "Add New Product"}
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Product Name"
                value={editProduct ? editProduct.name : newProduct.name}
                onChange={(e) =>
                  editProduct
                    ? setEditProduct({ ...editProduct, name: e.target.value })
                    : setNewProduct({ ...newProduct, name: e.target.value })
                }
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="text"
                placeholder="Category"
                value={editProduct ? editProduct.category : newProduct.category}
                onChange={(e) =>
                  editProduct
                    ? setEditProduct({
                        ...editProduct,
                        category: e.target.value,
                      })
                    : setNewProduct({ ...newProduct, category: e.target.value })
                }
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="text"
                placeholder="Price"
                value={editProduct ? editProduct.price : newProduct.price}
                onChange={(e) =>
                  editProduct
                    ? setEditProduct({ ...editProduct, price: e.target.value })
                    : setNewProduct({ ...newProduct, price: e.target.value })
                }
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="number"
                placeholder="Stock"
                value={editProduct ? editProduct.stock : newProduct.stock}
                onChange={(e) =>
                  editProduct
                    ? setEditProduct({
                        ...editProduct,
                        stock: Number(e.target.value),
                      })
                    : setNewProduct({
                        ...newProduct,
                        stock: Number(e.target.value),
                      })
                }
                className="w-full px-3 py-2 border rounded"
              />
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => {
                    setIsAddModalOpen(false);
                    setEditProduct(null);
                  }}
                  className="px-4 py-2 bg-gray-200 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={editProduct ? handleUpdateProduct : handleAddProduct}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  {editProduct ? "Update" : "Add"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Table */}
      <DataTable
        data={products}
        columns={productColumns}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
      />
    </div>
  );
};

export default ProductsPageDashboard;
