import { useState } from "react";
import sing from "/slider.img/sing.jpg";
import product from "/slider.img/product.jpg";
import sale from "/slider.img/sale.jpg";
import family from "/slider.img/family.jpg";

const slides = [
  { text: "Добро пожаловать в наш магазин !", src: sing, alt: "sing" },
  { text: "Свежие продукты каждый день", src: product, alt: "product" },
  { text: "Доступные цены и отличное качество", src: sale, alt: "sale" },
  { text: "Мы заботимся о вас и вашей семье ", src: family, alt: "family" },
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <img
        src={slides[index].src}
        alt={slides[index].alt}
        style={{ width: "400px", height: "auto", margin: "0px 0px 20px" }}
      />
      <h2>{slides[index].text}</h2>
      <div>
        <button onClick={prevSlide}>назад</button>
        <button onClick={nextSlide} style={{ marginLeft: "10px" }}>
          вперед
        </button>
      </div>
    </div>
  );
}
