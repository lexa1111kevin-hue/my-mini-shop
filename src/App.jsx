import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CompanyHeader from "./components/CompanyHeader";
import Header from "./components/header";
import Slider from "./components/slider";
import TopProducts from "./components/TopProducts";
import BasketPage from "./components/BasketPage";

export default function App() {
  const [basket, setBaske] = useState([]);

  const addToBasket = (product) => {
    setBaske((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prev, { ...product, count: 1 }];
    });
  };

  return (
    <Router>
      <Header basket={basket} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CompanyHeader />
              <Slider />
              <TopProducts addToBasket={addToBasket} />
            </>
          }
        />
        <Route path="/basket" element={<BasketPage basket={basket} />} />
      </Routes>
    </Router>
  );
}
