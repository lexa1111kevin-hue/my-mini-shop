import { useDispatch } from "react-redux";
import { addToBasket } from "../store/basketSlice";

import Avocado from "/avocado.jpg";
import watermelon from "/watermelon.jpg";
import bilberry from "/bilberry.jpg";
import kiwi from "/kiwi.jpg";
import milk from "/milk.jpg";
import tomato from "/tomato.jpg";
import apple from "/apple.jpg";
import izym from "/izym.jpg";
import meat from "/meat.jpg";
import spagetti from "/spagetti.jpg";

export default function Product() {
  const dispatch = useDispatch();
  const Products = [
    { id: "1", src: Avocado, alt: "Avocado" },
    { id: "2", src: watermelon, alt: "watermelon" },
    { id: "3", src: bilberry, alt: "bilberry" },
    { id: "4", src: kiwi, alt: "kiwi" },
    { id: "5", src: milk, alt: "milk" },
    { id: "6", src: tomato, alt: "tomato" },
    { id: "7", src: apple, alt: "aplle" },
    { id: "8", src: izym, alt: "izym" },
    { id: "9", src: meat, alt: "meat" },
    { id: "10", src: spagetti, alt: "spagetti" },
  ];

  return (
    <main>
      <h3>продукт</h3>
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
