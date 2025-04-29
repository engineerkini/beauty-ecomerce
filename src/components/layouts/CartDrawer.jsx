import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

function CartDrawer({ isOpen, toggleCart, cartItems, updateQuantity }) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/account/checkout");
  };
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 mt-14 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Cart</h2>
          <button onClick={toggleCart} className="text-gray-500 text-lg">
            X
          </button>
        </div>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            <ul className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <li key={item.id} className="p-4 rounded-md shadow-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{item.product_name}</p>
                      <p className="text-gray-700">Price: ${item.price}</p>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max(0, item.quantity - 1)
                          )
                        }
                        className="px-2 py-1 bg-gray-200 rounded-md"
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-2 py-1 bg-gray-200 rounded-md"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-lg font-semibold border-t pt-4">
              Total: ${totalPrice.toFixed(2)}
            </div>
            <div className="mt-6">
              <button
                onClick={goToCheckout}
                className="w-full bg-pink-300 text-white py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartDrawer;
