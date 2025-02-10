import React from "react";
import { Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-[290px] flex flex-col border bg-[#FFFFFF] shadow-sm pb-[20px] rounded-[6px] gap-[10px]">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="object-cover object-center h-auto w-auto rounded"
      />

      <div className="flex flex-col px-5 items-start justify-start gap-[10px]">
        {/* Product Title */}
        <h3 className="text-base font-medium mb-1">{product.title}</h3>

        {/* Star Rating */}
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

        {/* Product Description */}
        <p className="text-sm text-gray-500 mb-2">{product.description}</p>

        {/* Price */}
        <p className="text-base mb-4">${product.price}</p>
      </div>

      {/* Add to Bag Button */}
      <div className="px-5">
        <button className="w-full bg-transparent border border-black rounded-none hover:border-none hover:text-white text-text-color2 hover:bg-[#f98da1] transition-all ease-in-out duration-300 px-[10px] py-[5px]">
          Add To Bag
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
