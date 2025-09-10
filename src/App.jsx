import { HashRouter as Router, Routes, Route } from "react-router-dom";

import CompanyHeader from "./components/CompanyHeader";
import Header from "./components/header";
import Slider from "./components/slider";
import TopProducts from "./components/TopProducts";
import BasketPage from "./components/BasketPage";

export default function App() {
  return (
    <Router>
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
      </Routes>
    </Router>
  );
}
