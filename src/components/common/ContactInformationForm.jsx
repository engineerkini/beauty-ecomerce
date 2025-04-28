import React, { useState } from "react";
import Button from "./Button";

function ContactInformationForm() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Field */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border rounded-lg border-gray-300 outline-none shadow-sm focus:ring-pink-500 focus:border-pink-500"
            placeholder="example@gmail.com"
            required
          />
        </div>

        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border outline-none rounded-lg border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-lg outline-none border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            onClick={() => {}}
            type="submit"
            lable={"Save"}
            className={"w-full text-white"}
          />

          {/* <Button
            type="submit"
            className="w-full py-3 bg-primary-color text-white font-semibold rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            Save
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default ContactInformationForm;
