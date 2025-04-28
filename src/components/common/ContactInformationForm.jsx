import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ContactInformationForm() {
  const [customers, setCustomer] = useState({});
  const navigate = useNavigate();
  const url = "https://bloomm-backend-2.onrender.com/";

  useEffect(() => {
    const userData = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!userData || !token) {
      navigate("/");
    } else {
      setCustomer(JSON.parse(userData));

      axios
        .get(`${url}customers`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .catch((error) => {
          console.error("Error fetching customer data:", error);
        });
    }
  }, [navigate]);

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
      <div>
        <h2 className="text-3xl font-semibold text-gray-800">
          Welcome Back {customers.first_name}
        </h2>
      </div>
      <div className="p-6 bg-gray-50 border rounded-lg shadow-sm">
        <h3 className="text-lg font-bold text-gray-700 mb-2">User Info</h3>
        <p className="text-gray-600">
          <span className="font-medium">Name:</span> {customers.first_name}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Email:</span> {customers.email}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Phone:</span> {customers.phone_number}
        </p>
      </div>
    </div>
  );
}

export default ContactInformationForm;
