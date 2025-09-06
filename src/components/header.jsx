import { Link } from "react-router-dom";

export default function Header({ basket }) {
  const totalCount = basket.reduce((acc, item) => acc + item.count, 0);
  return (
    <header>
      <h3>CoodFood</h3>
      <Link to="/basket">
        <img className="basket" src="./basket.svg" alt="" />
        <span>{totalCount}</span>
      </Link>
    </header>
  );
}
