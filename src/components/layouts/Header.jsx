import React, { useState } from "react";
import {
  FaSearch,
  FaUser,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Header({ toggleCart }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const routes = [
    { name: "Home", path: "/" },
    { name: "Shop All", path: "/shop-all" },
    { name: "Bestsellers", path: "/best-sellers" },
    { name: "Collection", path: "/collection" },
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className="bg-gray-50 shadow fixed top-0 left-0 w-full z-50">
      <div className="mx-auto flex items-center justify-between py-4 px-4 xl:px-[100px] 2xl:px-[200px] md:px-6">
        <div className="text-2xl font-bold text-text-color2">
          <Link to="/">
            <span className="text-primary-color">Bloom</span> Beauty
          </Link>
        </div>

        <button
          className="lg:hidden text-text-color1 text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className="hidden lg:flex space-x-6 text-text-color1">
          {routes.map((route, index) => (
            <Link
              key={index}
              to={route.path}
              className="hover:text-primary-color text-[16px] leading-[24px] font-[400]"
            >
              {route.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-6 text-gray-600">
          <div className="flex flex-col items-center">
            <FaSearch className="text-xl hover:text-primary-color" />
            <span className="text-xs">Search</span>
          </div>
          <div className="flex flex-col items-center">
            <Link to={"/account"} className="flex flex-col items-center">
              <FaUser className="text-xl hover:text-primary-color" />
              <span className="text-xs">Account</span>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <FaShoppingBag
              className="text-xl hover:text-primary-color cursor-pointer"
              onClick={toggleCart} // Toggle cart drawer on click
            />
            <span className="text-xs">Cart</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
