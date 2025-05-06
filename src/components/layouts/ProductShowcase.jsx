import React from "react";
import Button from "../common/Button";

const ProductShowcase = () => {
  const tags = [
    "GreatGift",
    "AntiAging",
    "GreatGift",
    "Ingredients",
    "Ingredients",
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-[80px]">
      {/* 1 */}
      <div className="w-full flex flex-col-reverse md:flex-row gap-8  px-4 xl:px-[100px] 2xl:px-[200px] md:px-6 ">
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-6 md:w-1/2">
          <h1 className="text-h1 leading-h1 font-[500] text-text-color2">
            Blossom Glow Kit
          </h1>

          <p className="text-text-color1 leading-relaxed">
            Reveal your skin's natural glow with our Lotus Glow Kit. Nourishing
            body and face creams with lotus extract provide deep hydration and
            rejuvenation. Suitable for all skin types. Vegan, cruelty-free,
            eco-friendly.
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
              >
                # {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-4 pt-4 items-center justify-center ">
            <Button lable={"Shop Now"} className={"text-white w-full"} />
            <button className=" w-full px-6 py-2 text-gray-600 flex items-center gap-2 hover:text-gray-800">
              Explore More
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="md:w-1/2 h-full">
          <div className="relative h-full">
            <div className="bg-pink-100 rounded-lg overflow-hidden">
              <img
                src="./images/productshowcase.png"
                alt="Skincare products with cherry blossoms"
                className="w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] 2xl:min-h-[598px]  object-cover  object-center"
              />
            </div>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="w-full flex flex-col md:flex-row gap-8  px-4 xl:px-[100px] 2xl:px-[200px] md:px-6 ">
        {/* Right Content - Image */}
        <div className="md:w-1/2 h-full">
          <div className="relative h-full">
            <div className="bg-pink-100 rounded-lg overflow-hidden">
              <img
                src="./images/productshowcase2.png"
                alt="Skincare products with cherry blossoms"
                className="w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] 2xl:min-h-[598px]  object-cover  object-center"
              />
            </div>
          </div>
        </div>
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-6 md:w-1/2">
          <h1 className="text-h1 leading-h1 font-[500] text-text-color2">
          Floral Essence Masks Sets
          </h1>

          <p className="text-text-color1 leading-relaxed">
            Indulge in the beauty of nature with our Floral Essence Masks set.
            Each mask features a unique blend of flower extracts to hydrate and
            nourish your skin. Experience the essence of flowers in your
            skincare routine.
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
              >
                # {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-4 pt-4 items-center justify-center">
            <Button lable={"Shop Now"} className={"text-white w-full"} />
            <button className="w-full px-6 py-2 text-gray-600 flex items-center gap-2 hover:text-gray-800">
              Explore More
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
