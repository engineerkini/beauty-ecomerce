import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

function ShopAll({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://bloomm-backend-1.onrender.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products || []))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto p-6 mt-20">
      {products.length === 0 ? (
        <p className="text-lg text-center text-gray-600 animate-pulse">
          Loading...
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col justify-between h-full"
            >
              <Link
                to={`/product/${product.id}`}
                state={{ product }}
              >
                <img
                  src={product.photo_url}
                  alt={product.product_name}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
              
              <div className="p-5 flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {product.product_name}
                </h2>
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-4 h-4 text-gray-300"
                      fill={index < product.rating ? "currentColor" : "transparent"}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">({product.rating})</span>
                </div>
                <p className="text-gray-600 mb-4">
                  {product.description.length > 30 ? product.description.slice(0, 30) + "..." : product.description}
                </p>
                <p className="text-base mb-4">${product.price}</p>
              </div>
              </Link>
              <div className="p-5">
                <button
                  className="w-full border border-black py-2 px-4 rounded transition duration-200 hover:bg-black hover:text-white"
                  onClick={() => addToCart(product)}
                >
                  Add to Bag
                </button>
              </div>
              <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                New
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShopAll;
