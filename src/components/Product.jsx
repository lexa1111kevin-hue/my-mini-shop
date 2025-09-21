import { useDispatch } from "react-redux";
import { addToBasket } from "../store/basketSlice";
import Product from "../store/Product.json";
import { useState } from "react";
import SearchIcon from "/searchIcon.png";

export default function Products() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 9;

  // фильтруем продукты по поиску
  const filteredProduct = Product.filter((product) =>
    product.alt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPage = Math.ceil(filteredProduct.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentProduct = filteredProduct.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <main>
      <h3>Продукты</h3>
      <div className="searchBox">
        <input
          type="text"
          placeholder="Поиск продуктов..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setPage(1); // сброс на первую страницу
          }}
        />
        <img className="search" src={SearchIcon} alt="searchicon" />
      </div>

      <section>
        {currentProduct.map((product) => (
          <div key={product.id} className="basket-card">
            <img className="Products" src={product.src} alt={product.alt} />
            <h4>{product.alt}</h4>
            <button
              className="btn"
              onClick={() => dispatch(addToBasket(product))}
            >
              Добавить в корзину
            </button>
          </div>
        ))}
      </section>

      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          назад
        </button>
        <span>
          {page}/{totalPage || 1}
        </span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPage || totalPage === 0}
        >
          Вперед
        </button>
      </div>
    </main>
  );
}
