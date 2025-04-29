import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Star } from "lucide-react";
import RateProduct from "./RateProduct";
import Header from "./Header";
import Footer from "./Footer";

function Product() {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product;
  const [averageRating, setAverageRating] = useState(product?.rating);
  const [totalReviews, setTotalReviews] = useState(product?.total_rating);

  if (!product) {
    return (
      <div className="max-w-screen-xl mx-auto p-6">
        <p className="text-lg text-center text-gray-600 animate-pulse">
          Loading product details...
        </p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="max-w-screen-xl mx-auto p-4 flex justify-center items-center mt-20">
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 flex flex-col md:flex-row items-start gap-4 md:gap-6 animate-fade-in">
          <div className="w-full md:w-1/3 relative overflow-hidden rounded-lg">
            <img
              src={product.photo_url}
              alt={product.product_name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </div>
          <div className="flex-1 ml-4 sm:ml-8 md:ml-16 lg:ml-20">
            <h1 className="text-3xl mb-3 tracking-tight">
              {product.product_name}
            </h1>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="w-4 h-4 text-pink-300"
                  fill={index < averageRating ? "pink" : "transparent"}
                />
              ))}
              <span className="text-sm text-gray-500 ml-1">
                ({averageRating?.toFixed(1)})
              </span>
            </div>
            <p className="text-xl mt-4 mb-2">${product.price}</p>
            <p className="text-base text-gray-600 mt-2 mb-4 leading-relaxed">
              {product.description}
            </p>
            <button className="bg-pink-300 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
              Add to Cart
            </button>
            <div className="mt-6">
              <RateProduct
                productId={product.id}
                onRatingSubmitted={(newAverageRating) => {
                  setAverageRating(newAverageRating);
                  setTotalReviews((prev) => prev + 1);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
