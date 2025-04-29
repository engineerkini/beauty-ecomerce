import React from "react";

function Cart({ cartItems }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item, index) => (
            <li key={index} className="p-4 bg-gray-100 rounded-md shadow-md">
              <img
                src={product.photo_url}
                alt={product.product_name}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <p className="font-semibold">{item.product_name}</p>
              <p className="text-gray-700">Price: ${item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
