import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import CheckoutForm from "./components/layouts/CheckoutForm";
import AccountPage from "./components/layouts/AccountPage";
import Dashboard from "./components/layouts/Dashboard";

function App() {
  const location = useLocation();

  // Array of paths where Header and Footer should be shown
  const headerFooterPaths = ["/", "/about", "/account"];
  const showHeaderFooter = headerFooterPaths.includes(location.pathname);

  return (
    <>
      {showHeaderFooter && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/account/checkout" element={<CheckoutForm />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {showHeaderFooter && <Footer />}
    </>
  );
}

export default App;
