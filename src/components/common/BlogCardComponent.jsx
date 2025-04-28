import React from "react";
import Button from "./Button";

// Image Container Component
const ImageContainer = ({ src, alt }) => (
  <div className="w-full h-48 overflow-hidden rounded-lg bg-gray-100">
    <img
      src={src || "/api/placeholder/400/200"}
      alt={alt}
      className="w-full h-full object-cover"
    />
  </div>
);

// Card Title Component
const CardTitle = ({ children }) => (
  <h2 className="h-[40px] text-[20px] leading-[27px] text-text-color2 font-[600]">
    {children}
  </h2>
);

// Card Description Component
const CardDescription = ({ children }) => (
  <p className="text-gray-600 mt-2 line-clamp-2">{children}</p>
);

// Main Blog Card Component
const BlogCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  className = "",
}) => {
  return (
    <article
      className={` h-full w-[270px] lg:w-[300px] 2xl:w-[350px] flex flex-col gap-[8px] pb-[20px] bg-white rounded-[6px] overflow-hidden ${className}`}
    >
      <div className="p-4 flex flex-col gap-[8px]">
        <ImageContainer src={imageSrc} alt={imageAlt} />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4">
          <Button
            className={
              "w-full hover:border-none bg-transparent border border-text-color2"
            }
            lable={"Read More"}
          />
        </div>
      </div>
    </article>
  );
};

export default BlogCard;

// Export individual components for flexibility
export { ImageContainer, CardTitle, CardDescription };
