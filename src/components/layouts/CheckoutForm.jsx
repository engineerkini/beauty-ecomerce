import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

const CheckoutForm = ({ cartItems, updateQuantity }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    subscribeToNewsletter: false,
    deliveryMethod: "ship",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePaymentMethodClick = (method) => {
    setSelectedPaymentMethod(method);
    window.location.href = "http://localhost:5000/pay/paypal";
  };

  const handleCheck = () => {
    if (!selectedPaymentMethod) {
      alert("Please select a payment method before continuing.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (handleCheck()) {
      console.log("Form submitted:", formData);
      console.log("Selected Payment Method:", selectedPaymentMethod);
      alert("Order has been placed successfully");
    }

    const cartDetails = cartItems
      .map(
        (item) =>
          `${item.product_name} (x${item.quantity}): KSH ${
            item.price * item.quantity
          }`
      )
      .join("\n");

    const emailParams = {
      to_email: "goriderray@gmail.com, rayjustin481@gmail.com",
      user_name: formData.firstName,
      user_address: formData.address,
      user_email: formData.email,
      cart_details: cartDetails,
      total_price: `KSH ${subtotal}`,
    };

    emailjs
      .send(
        "service_koac7yy",
        "template_al29uyy",
        emailParams,
        "m5okyqReJXrsKPd_J"
      )
      .then(() => {
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send email.");
      });
  };

  const subtotal = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const checkout = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <header className="w-full flex justify-between items-center mb-6 bg-white shadow h-20 p-6 md:px-10">
        <Link to="/" className="text-gray-600 hover:text-gray-800 text-lg">
          ← Home
        </Link>
        <h1 className="text-2xl font-bold text-text-color2">
          <Link to="/">
            <span className="text-primary-color">Bloom</span> Beauty
          </Link>
        </h1>
      </header>

      <main className="w-full max-w-5xl flex flex-col md:flex-row md:space-x-8">
        <section className="w-full md:w-2/3 space-y-4 bg-white shadow-lg rounded-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="flex justify-between items-center pb-4">
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-700"
                >
                  Contact Information
                </label>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-color focus:border-primary-color"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="subscribeToNewsletter"
                name="subscribeToNewsletter"
                required
                checked={formData.subscribeToNewsletter}
                onChange={handleInputChange}
                className="h-4 w-4 text-primary-color rounded mr-2"
              />
              <label htmlFor="subscribeToNewsletter" className="text-gray-700">
                Subscribe to the newsletter
              </label>
            </div>

            <fieldset>
              <legend className="block font-medium text-gray-700 mb-2">
                Delivery Method
              </legend>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="ship"
                    checked={formData.deliveryMethod === "ship"}
                    onChange={handleInputChange}
                    className="mr-2 h-4 w-4 text-primary-color"
                  />
                  Ship
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="deliveryMethod"
                    required
                    value="pickUp"
                    checked={formData.deliveryMethod === "pickUp"}
                    onChange={handleInputChange}
                    className="mr-2 h-4 w-4 text-primary-color"
                  />
                  Pick Up
                </label>
              </div>
            </fieldset>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  required
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-color focus:border-primary-color"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-color focus:border-primary-color"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="address"
                className="block font-medium text-gray-700"
              >
                Address
              </label>
              <input
                required
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-color focus:border-primary-color"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="city"
                  className="block font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-color focus:border-primary-color"
                />
              </div>

              <div>
                <label
                  htmlFor="postalCode"
                  className="block font-medium text-gray-700"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  required
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-color focus:border-primary-color"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-color focus:border-primary-color"
              />
            </div>
            <div className="space-y-4">
              <button
                type="button"
                className="w-full flex items-center justify-center bg-green-600 text-white font-medium py-3 rounded-md hover:bg-green-700"
                onClick={() => handlePaymentMethodClick("M-Pesa")}
              >
                <img
                  src="data:image/png;base64,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"
                  alt="M-Pesa Logo"
                  className="w-6 h-6 mr-2"
                />
                Pay with M-Pesa
              </button>
              <button
                type="button"
                className="w-full flex items-center justify-center bg-blue-600 text-white font-medium py-3 rounded-md hover:bg-blue-700"
                onClick={() => {
                  window.location.href = "http://localhost:5000/pay/paypal";
                  handlePaymentMethodClick("PayPal"); 
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png"
                  alt="PayPal Logo"
                  className="w-6 h-6 mr-2"
                />
                Pay with PayPal
              </button>

              <button
                type="button"
                className="w-full flex items-center justify-center bg-white text-black font-medium py-3 rounded-md hover:bg-gray-800"
                onClick={() => handlePaymentMethodClick("Apple Pay")}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWxYUQvdwKXZ9meVu4Jx6fr7nNNo99TLl-bA&s"
                  alt="Apple Pay Logo"
                  className="w-6 h-6 mr-2"
                />
                Pay with Apple Pay
              </button>
              {selectedPaymentMethod && (
                <div className="p-4 bg-green-100 text-green-800 rounded-md">
                  Successfully Paid with {selectedPaymentMethod}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-primary-color text-white font-medium py-3 rounded-md hover:bg-pink-500 mt-6"
            >
              Continue To Shipping
            </button>
          </form>
        </section>

        <aside className="md:block md:w-1/3 bg-white p-6 rounded-lg shadow-lg mt-8 md:mt-0">
          <h2 className="text-lg font-semibold mb-4">Your Order</h2>
          <div className="space-y-4">
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
          </div>
          <div className="flex justify-between items-center font-semibold mt-6">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default CheckoutForm;
