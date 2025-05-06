import React, { useState } from 'react';

const Shipping = () => {
  const [showDomestic, setShowDomestic] = useState(false);
  const [showInternational, setShowInternational] = useState(false);
  const [showRestrictions, setShowRestrictions] = useState(false);
  const [showReturnPolicy, setShowReturnPolicy] = useState(false);
  const [showHowToReturn, setShowHowToReturn] = useState(false);
  const [showRefunds, setShowRefunds] = useState(false);

  return (
    <div className="shipping-section p-6 bg-white border rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>

      {/* Domestic Shipping */}
      <div className="dropdown mb-4">
        <button 
          onClick={() => setShowDomestic(!showDomestic)} 
          className="w-full text-left py-2 px-4 border transition font-medium"
        >
          Domestic Shipping {showDomestic ? '▲' : '▼'}
        </button>
        {showDomestic && (
          <div className="dropdown-content p-4 mt-2">
            <p>
              We offer fast and reliable domestic shipping options, ensuring that your products arrive within 2-5 business days. All orders over $50 qualify for free standard shipping. Expedited shipping is also available at an additional cost.
            </p>
          </div>
        )}
      </div>

      {/* International Shipping */}
      <div className="dropdown mb-4">
        <button 
          onClick={() => setShowInternational(!showInternational)} 
          className="w-full text-left py-2 px-4  border  transition font-medium"
        >
          International Shipping {showInternational ? '▲' : '▼'}
        </button>
        {showInternational && (
          <div className="dropdown-content p-4 mt-2 rounded">
            <p>
              For our international customers, we provide global shipping options with delivery times ranging from 7-14 business days, depending on the destination. Please note that customs fees may apply, and shipping rates vary by location.
            </p>
          </div>
        )}
      </div>

      {/* Shipping Restrictions */}
      <div className="dropdown mb-4">
        <button 
          onClick={() => setShowRestrictions(!showRestrictions)} 
          className="w-full text-left py-2 px-4  border transition font-medium"
        >
          Shipping Restrictions {showRestrictions ? '▲' : '▼'}
        </button>
        {showRestrictions && (
          <div className="dropdown-content p-4 mt-2 rounded">
            <p>
              Please note that certain products cannot be shipped to specific regions due to local regulations and carrier restrictions. Check our product pages for details on restricted items and applicable areas.
            </p>
          </div>
        )}
      </div>

      {/* Return Policy */}
      <h2 className="text-2xl font-semibold mb-4">Returns</h2>
      <div className="dropdown mb-4">
        <button 
          onClick={() => setShowReturnPolicy(!showReturnPolicy)} 
          className="w-full text-left py-2 px-4  border  transition font-medium"
        >
          Return Policy {showReturnPolicy ? '▲' : '▼'}
        </button>
        {showReturnPolicy && (
          <div className="dropdown-content p-4 mt-2 rounded">
            <p>
              We accept returns within 30 days of purchase for unused and unopened items. Items must be in their original packaging to qualify for a return.
            </p>
          </div>
        )}
      </div>

      {/* How to Return */}
      <div className="dropdown mb-4">
        <button 
          onClick={() => setShowHowToReturn(!showHowToReturn)} 
          className="w-full text-left py-2 px-4  border  transition font-medium"
        >
          How to Return {showHowToReturn ? '▲' : '▼'}
        </button>
        {showHowToReturn && (
          <div className="dropdown-content p-4 mt-2 rounded">
            <p>
              To return an item, please contact our customer support team for a return authorization number. Once approved, ship the item back to our provided address with the return number clearly marked on the package.
            </p>
          </div>
        )}
      </div>

      {/* Refunds */}
      <div className="dropdown mb-4">
        <button 
          onClick={() => setShowRefunds(!showRefunds)} 
          className="w-full text-left py-2 px-4  border  transition font-medium"
        >
          Refunds {showRefunds ? '▲' : '▼'}
        </button>
        {showRefunds && (
          <div className="dropdown-content p-4 mt-2 rounded">
            <p>
              Refunds will be processed within 7-10 business days after we receive and inspect your returned item. Refunds are issued to the original payment method. Please note that shipping fees are non-refundable.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shipping;
