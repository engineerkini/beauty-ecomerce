import React, { useState } from "react";

function RateProduct({ productId, onRatingSubmitted }) {
  const [rating, setRating] = useState(0);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (rating < 1 || rating > 5) {
      setError("Please select a rating between 1 and 5");
      return;
    }
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://bloomm-backend-1.onrender.com/products/${productId}rate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ rating }),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to submit rating");
      }

      const data = await response.json();
      onRatingSubmitted(data.product.average_rating);
      setRating(0);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold">Rate this product:</h3>
      <div className="flex space-x-2 mt-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            className={`text-3xl ${
              rating >= star ? "text-pink-500" : "text-gray-300"
            }`}
            aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
          >
            ★
          </button>
        ))}
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}
      <button
        onClick={handleSubmit}
        className="mt-4 bg-pink-300 font-semibold text-white px-6 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Rating"}
      </button>
    </div>
  );
}

export default RateProduct;
