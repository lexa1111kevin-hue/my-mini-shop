import { useState } from "react";

const slides = [
  "Добро пожаловать в наш магазин !",
  "Свежие продукты каждый день",
  "Доступные цены и отличное качество",
  "Мы заботимся о вас и вашей семье ",
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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>{slides[index]}</h2>
      <div>
        <button onClick={prevSlide}>назад</button>
        <button onClick={nextSlide} style={{ marginLeft: "10px" }}>
          вперед
        </button>
      </div>
    </div>
  );
}
