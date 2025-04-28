import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import ContactInformationForm from "../common/ContactInformationForm";
import Shipping from "./Shipping";
import FAQs from "../common/FAQ'S";

const About_us = () => (
  <div className="border rounded p-4 shadow-md ">
    <h1 className="text-2xl font-semibold  mb-4"><span className="text-2xl font-semibold text-primary-color">Bloom</span> Beauty</h1>
    <p>Welcome to Bloom Beauty, your ultimate destination for premium beauty products designed to elevate your personal care and confidence. In today’s fast-paced world, we understand that both men and women strive to present their best selves and embrace their unique beauty. At Bloom Beauty, we believe that self-care is not just a luxury but a vital part of feeling empowered and attractive.

Our mission is to make top-quality beauty products accessible to everyone, anywhere. We offer an extensive range of products, from skincare essentials and makeup must-haves to haircare and wellness solutions—all curated to meet the diverse needs of our customers. With an emphasis on convenience, we have streamlined our e-commerce platform to ensure a seamless shopping experience, enabling you to browse and order at any time, from anywhere.

What sets us apart is our commitment to reliable, doorstep delivery service, ensuring that your beauty regimen is never interrupted. Whether you’re enhancing your daily routine or looking for the perfect item for a special occasion, we’re here to cater to your desires and needs.

Join our growing community of beauty enthusiasts and experience the simplicity and joy of finding your favorite products with ease at Bloom Beauty. Your beauty, your way, delivered to your door.</p>
  </div>
);

const Shipp = () => (
  <div>
    <Shipping />
  </div>
);

const Contact = () => (
  <div>
    <h2 className="text-lg font-medium mb-4">Contact</h2>
    {/* Add table for orders */}
  </div>
);

const FAQ = () => (
  <div>
    <FAQs />
  </div>
);

const AccountPage = () => {
  const [activeSection, setActiveSection] = useState("Contact information");
  

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center h-full min-h-screen w-full p-4 lg:p-6">
      <div className="lg:flex w-full max-w-4xl">
        <div className="lg:w-1/3 mb-4 lg:mb-0 mr-0 lg:mr-4 border p-4 rounded bg-white shadow w-full">
          <div className="space-y-2">
            {["About us", "Contact", "Shipping & Returns", "FAQ's"].map(
              (section) => (
                <div
                  key={section}
                  className={`cursor-pointer hover:bg-gray-100 rounded-md p-3 flex justify-between items-center ${
                    activeSection === section
                      ? "bg-gray-100 font-medium text-primary-color"
                      : "font-normal"
                  }`}
                  onClick={() => handleSectionClick(section)}
                >
                  <span>{section}</span>
                  {section === "Orders" || section === "Wishlist" ? (
                    <ChevronRight className="text-gray-500" />
                  ) : (
                    ""
                  )}
                </div>
              )
            )}
          </div>
        </div>

        <div className="lg:w-2/3  p-4  w-full">
          {activeSection === "Contact information" && (
            <About_us />
          )}
          {activeSection === "About us" && <About_us />}
          {activeSection === "Shipping & Returns" && <Shipp />}
          {activeSection === "Contact" && <Contact />}
          {activeSection === "FAQ's" && <FAQ />}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
