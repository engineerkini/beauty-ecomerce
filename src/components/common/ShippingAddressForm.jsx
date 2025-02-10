import React from "react";
import Button from "./Button";

const ShippingAddressForm = () => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-[6px] shadow">
      <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
      <form>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-pink-300"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-pink-300"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Country"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-pink-300"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Address"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-pink-300"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="City"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-pink-300"
          />
          <input
            type="text"
            placeholder="Postal Code"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-pink-300"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Phone"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-pink-300"
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="default"
            className="h-4 w-4 text-primary-color border-gray-300 rounded focus:ring-primary-color"
          />
          <label htmlFor="default" className="ml-2 text-sm text-gray-600">
            Set as default
          </label>
        </div>
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="notMe"
            className="h-4 w-4 text-primary-color border-gray-300 rounded focus:ring-primary-color"
          />
          <label htmlFor="notMe" className="ml-2 text-sm text-gray-600">
            The recipient is not me
          </label>
        </div>
        <Button
          onClick={() => {}}
          type="submit"
          lable={"Save"}
          className={"w-full text-white"}
        />
      </form>
    </div>
  );
};

export default ShippingAddressForm;
