import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const basket = useSelector((state) => state.basket);

  const totalCount = basket.reduce((acc, item) => acc + item.count, 0);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  const goToTopProducts = () => {
    navigate("/", { state: { scrollToTopProducts: true } });
    setIsOpen(false);
  };
  return (
    <header>
      <h3>CoodFood</h3>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>

      <ul className={isOpen ? "navigationMenu open" : "navigationMenu"}>
        <li className="elementNenu">
          <Link to="/Product">
            <p>Продукт</p>
          </Link>
        </li>
        <li className="elementNenu">
          <Link to="/">
            <p>Главная страница</p>
          </Link>
        </li>
        <li className="elementNenu">
          <p onClick={goToTopProducts} style={{ cursor: "pointer" }}>
            Топ продуктов
          </p>
        </li>
        <li className="elementNenu mobile-basket">
          <Link to="/basket">корзина({totalCount})</Link>
        </li>
      </ul>

      <Link to="/basket" className="basket-wrapper desktop-basket">
        <img className="basket" src="./basket.svg" alt="" />
        <span className="basket-count">{totalCount}</span>
      </Link>
    </header>
  );
}
