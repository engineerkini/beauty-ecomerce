import React from "react";
import Button from "../common/Button";
import { Navigate, useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = { useNavigate };

  const shopAll = () => {
    navigate("/shop-all");
  };
  return (
    <div className="w-full h-full">
      <div className="px-4 xl:px-[100px] 2xl:px-[200px] md:px-6 flex items-center justify-start w-full h-full min-h-[75vh] bg-cover bg-center bg-[url('/images/hero.png')]">
        {/* <img  className=' w-full h-full min-h-[70vh] object-cover object-center ' src="/images/hero.png" alt="hero" /> */}
        <div className=" w-full flex flex-col md:gap-[30px] gap-[10px]">
          <div className="w-2/3">
            <h1 className=" max-w-[562px] text-[18px] md:text-[27px] md:leading-[40px] leading-p-lg lg:text-h1 text-text-color2 lg:leading-h1 font-[700] uppercase">
              {" "}
              Discover your inner beauty with Blossom Glow Kit
            </h1>
          </div>
          <div className="w-1/2">
            <p className=" text-p-sm leading-[21px] md:text-p-lg md:leading-[36px] font-[400] text-text-color2">
              Great gift for yourself and loved ones
            </p>
          </div>
          <div>
            <Button
              onClick={shopAll}
              className={" text-white min-w-[179px] md:min-w-[260px]"}
              type="button"
              lable={"Shop Now"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
