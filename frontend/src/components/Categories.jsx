import { Link } from "react-router-dom";
import "../styles/Categories.css";

function Categories() {
  return (
    <section className="categories" id="collection">
      <h2>Choose Collection</h2>

      <div className="category-grid">

        {/* Women Collection */}
        <Link
          to="/products?gender=women"
          className="card"
        >
          <img
            src="/image/women.png"
            alt="Women Collection"
          />

          <span className="collection-btn">
            View Collection
          </span>
        </Link>

        {/* Men Collection */}
        <Link
          to="/products?gender=men"
          className="card"
        >
          <img
            src="/image/men.png"
            alt="Men Collection"
          />

          <span className="collection-btn">
            View Collection
          </span>
        </Link>

      </div>
    </section>
  );
}

export default Categories;