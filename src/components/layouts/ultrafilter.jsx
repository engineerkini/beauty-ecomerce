import { useState } from "react";

function Ultrafilter({ onFilterChange }) {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilterSubmit = () => {
    onFilterChange(minPrice, maxPrice);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Filter by Price</h2>
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="w-full border border-gray-300 p-2 rounded"
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="w-full border border-gray-300 p-2 rounded"
      />
      <button
        onClick={handleFilterSubmit}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Apply
      </button>
    </div>
  );
}

export default Ultrafilter;