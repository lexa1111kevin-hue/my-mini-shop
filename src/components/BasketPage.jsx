import "./BasketPage.css";
export default function BasketPage({ basket }) {
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
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
