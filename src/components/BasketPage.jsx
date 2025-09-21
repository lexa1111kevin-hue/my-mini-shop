import { useDispatch, useSelector } from "react-redux";
import "./BasketPage.css";
import { addToBasket, removeFromBasket } from "../store/basketSlice";
import Products from "./Product";

export default function BasketPage() {
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  return (
    <main className="basket-page">
      <h2>Корзина</h2>
      {basket.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <div className="basket-grid">
          {basket.map((item) => (
            <div key={item.id} className="basket-card">
              <img src={item.src} alt={item.alt} />
              <h4>{item.alt}</h4>
              <div className="counter">
                <button
                  className="btn-count"
                  onClick={() => dispatch(removeFromBasket(item.id))}
                >
                  -
                </button>
                <p className="text-count">{item.count}</p>
                <button
                  className="btn-count"
                  onClick={() => dispatch(addToBasket(item))}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
