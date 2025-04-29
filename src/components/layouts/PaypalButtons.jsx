import React, { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({ totalAmount }) => {
  const [orderID, setOrderID] = useState("");

  const createOrder = () => {
    return fetch("https://bloomm-backend-2.onrender.com/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer_id: 1, // Replace with dynamic customer ID as needed
        order_date: new Date().toISOString(),
        total: totalAmount,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        }
        setOrderID(data.paypal_order.id);
        return data.paypal_order.id;
      })
      .catch((error) => {
        console.error("Error creating order:", error);
        alert("Error creating order. Please try again later.");
      });
  };

  const onApprove = (data) => {
    return fetch(`http://127.0.0.1:5000/capture-order/${data.orderID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((details) => {
        if (details.error) {
          throw new Error(details.error);
        }
        alert(`Transaction completed by ${details.payer.name.given_name}`);
      })
      .catch((error) => {
        console.error("Error capturing order:", error);
        alert("Error capturing order. Please contact support.");
      });
  };

  return (
    <PayPalScriptProvider
      options={{ "client-id": "your-client-id", currency: "USD" }}
    >
      <PayPalButtons
        createOrder={(data, actions) => createOrder()}
        onApprove={(data, actions) => onApprove(data)}
        onError={(err) => {
          console.error("PayPal Buttons onError:", err);
          alert("An error occurred with your transaction. Please try again.");
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
