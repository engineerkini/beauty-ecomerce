import React from "react";

const orders = [
  {
    id: "167749-0500",
    date: "February 27, 2023 12:42 PM",
    status: "Processing",
    products: [
      {
        id: 1,
        name: "Soft Finish",
        description: "All Around Safe Block Sun Milk SPF50+/PA+++",
        code: "10896",
        quantity: 2,
        price: 19.6,
        image: "./images/products/product2.png",
      },
      {
        id: 2,
        name: "Soft Finish",
        description: "All Around Safe Block Sun Milk SPF50+/PA+++",
        code: "10896",
        quantity: 2,
        price: 19.6,
        image: "./images/products/product2.png",
      },
    ],
    total: 140.0,
    delivery: 0,
  },
  {
    id: "167749-0501",
    date: "February 27, 2023 12:42 PM",
    status: "Delivered",
    products: [
      {
        id: 3,
        name: "Soft Finish",
        description: "All Around Safe Block Sun Milk SPF50+/PA+++",
        code: "10896",
        quantity: 2,
        price: 19.6,
        image: "./images/products/product2.png",
      },
    ],
    total: 140.0,
    delivery: 0,
  },
  {
    id: "167749-0502",
    date: "February 27, 2023 12:42 PM",
    status: "Canceled",
    products: [
      {
        id: 4,
        name: "Soft Finish",
        description: "All Around Safe Block Sun Milk SPF50+/PA+++",
        code: "10896",
        quantity: 2,
        price: 19.6,
        image: "./images/products/product2.png",
      },
    ],
    total: 140.0,
    delivery: 0,
  },
];

const OrderHistory = () => (
  <div className="p-4 max-w-3xl mx-auto">
    <h2 className="text-2xl font-semibold mb-6">
      Your Orders <span className="text-gray-500">(All)</span>
    </h2>
    {orders.map((order) => (
      <div key={order.id} className="border-b border-gray-200 pb-6 mb-6">
        <div className="flex justify-between items-center mb-4 gap-2">
          <div className="text-lg font-medium">
            Order No. {order.id}, {order.date}
          </div>
          <div
            className={`px-3 py-1 rounded-full text-sm  ${
              order.status === "Delivered"
                ? "bg-green-100 text-green-500"
                : order.status === "Canceled"
                ? "bg-red-100 text-red-500"
                : "bg-purple-100 text-purple-500"
            }`}
          >
            {order.status}
          </div>
        </div>
        <div className="space-y-4">
          {order.products.slice(0, 3).map((product) => (
            <div key={product.id} className="flex items-center space-x-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 rounded-md object-cover"
              />
              <div className="flex-1">
                <div className="font-semibold">{product.name}</div>
                <div className="text-sm text-gray-600">
                  {product.description}
                </div>
                <div className="text-sm text-gray-500">
                  Product code: {product.code}
                </div>
              </div>
              <div className="text-right">
                <div className="text-gray-600">{product.quantity} Pcs</div>
                <div className="font-medium">${product.price.toFixed(2)}</div>
              </div>
            </div>
          ))}
          {order.products.length > 3 && (
            <button className="text-purple-500 text-sm mt-2">
              Show More (+{order.products.length - 3} Items)
            </button>
          )}
        </div>
        <div className="mt-4 text-right space-y-1">
          <div className="text-gray-500">Total: ${order.total.toFixed(2)}</div>
          <div className="text-gray-500">
            Delivery: ${order.delivery.toFixed(2)}
          </div>
          <div className="font-semibold text-lg">
            Total: ${order.total.toFixed(2)}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default OrderHistory;
