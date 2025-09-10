import { useDispatch } from "react-redux";
import { addToBasket } from "../store/basketSlice";

import Avocado from "/avocado.jpg";
import watermelon from "/watermelon.jpg";
import bilberry from "/bilberry.jpg";
import kiwi from "/kiwi.jpg";
import milk from "/milk.jpg";
import tomato from "/tomato.jpg";

export default function TopProducts() {
  const dispatch = useDispatch();
  const Products = [
    { id: "1", src: Avocado, alt: "Avocado" },
    { id: "2", src: watermelon, alt: "watermelon" },
    { id: "3", src: bilberry, alt: "bilberry" },
    { id: "4", src: kiwi, alt: "kiwi" },
    { id: "5", src: milk, alt: "milk" },
    { id: "6", src: tomato, alt: "tomato" },
  ];

  return (
    <main>
      <h3>Топ продукт</h3>
      <section>
        {Products.map((Product) => (
          <div key={Product.id} className="buyProduct">
            <img className="Products" src={Product.src} alt={Product.alt} />
            <button onClick={() => dispatch(addToBasket(Product))}>
              Добавить в корзину
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
