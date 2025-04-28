import React, { useState } from "react";

const FAQs = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the estimated delivery time for domestic shipping?",
      answer:
        "Domestic shipping typically takes 2-5 business days. Expedited options are available for faster delivery.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we offer international shipping to many countries. Delivery times range from 7-14 business days, and shipping rates vary by location.",
    },
    {
      question: "What are the return conditions?",
      answer:
        "Items must be returned within 30 days of purchase, unopened and in their original packaging, to be eligible for a return.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order ships, you will receive a tracking number via email. You can use this number to track your package through our website or the carrier’s site.",
    },
    {
      question: "Are there any items that cannot be returned?",
      answer:
        "Certain products, such as opened cosmetics and final sale items, cannot be returned. Please check product pages for specific details.",
    },
    {
      question: "How long does it take to process a refund?",
      answer:
        "Refunds are processed within 7-10 business days after we receive and inspect your returned item. Refunds are issued to the original payment method.",
    },
  ];

  return (
    <div className="faq-section p-6 bg-white border rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">
        Frequently Asked Questions
      </h2>
      {faqData.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left py-2 px-4 border rounded hover:bg-gray-300 transition font-medium"
          >
            {faq.question} {activeFAQ === index ? "▲" : "▼"}
          </button>
          {activeFAQ === index && (
            <div className="bg-gray-100 p-4 mt-2 border border-gray-300 rounded">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
