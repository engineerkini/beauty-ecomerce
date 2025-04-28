import { Splide, SplideSlide } from "@splidejs/react-splide";
// Import the core Splide styles
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import React from "react";

const BlogSlider = ({ children, arrows = false }) => {
  return (
    <div className="w-full">
      <Splide
        options={{
          type: "loop",
          drag: "free",
          focus: "center",
          perPage: 3,
          perMove: 1,
          gap: "20px",
          pagination: true,
          arrows: arrows,
          autoScroll: {
            speed: 0.3,
            pauseOnHover: true,
            pauseOnFocus: true,
            rewind: false,
          },
          breakpoints: {
            400: {
              perPage: 1,
              gap: "20px",
            },
            640: {
              perPage: 2,
              gap: "20px",
            },
            768: {
              perPage: 2,
              gap: "20px",
            },
            1024: {
              perPage: 3,
              gap: "20px",
            },
            1280: {
              perPage: 3,
              gap: "20px",
            },
            1440: {
              perPage: 3,
              gap: "20px",
            },
            1560: {
              perPage: 3,
              gap: "20px",
            },
            1920: {
              perPage: 4,
              gap: "20px",
            },
            2560: {
              perPage: 5,
              gap: "40px",
            },
            3560: {
              perPage: 6,
              gap: "40px",
            },
          },
        }}
        // extensions={{ AutoScroll }}
        aria-label="My Projects"
      >
        {React.Children.map(children, (child, index) => (
          <SplideSlide key={index}>{child}</SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default BlogSlider;
