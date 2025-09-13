import { useDispatch, useSelector } from "react-redux";
import "./BasketPage.css";
import { removeFromBasket } from "../store/basketSlice";

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
              <p>количество:{item.count} шт.</p>
              <button onClick={() => dispatch(removeFromBasket(item.id))}>
                удалить{" "}
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
