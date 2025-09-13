import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import CompanyHeader from "./components/CompanyHeader";
import Header from "./components/header";
import Slider from "./components/slider";
import TopProducts from "./components/TopProducts";
import BasketPage from "./components/BasketPage";
import Product from "./components/Product";
import { use } from "react";

function AppRouter() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToTopProducts) {
      const el = document.getElementById("top-products");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CompanyHeader />
              <Slider />
              <TopProducts />
            </>
          }
        />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}
