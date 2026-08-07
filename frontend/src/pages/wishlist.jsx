import "../styles/Wishlist.css";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

function Wishlist() {
  const { wishlist, toggleWishlist } = useWishlist();

  console.log("Wishlist:", wishlist);

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-page">
        <h1 className="empty">❤️ Your Wishlist is Empty</h1>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <h1 className="wishlist-title">❤️ My Wishlist</h1>

      <div className="wishlist-grid">
        {wishlist.map((product) => {
          console.log("Product:", product);

          return (
            <div className="wishlist-card" key={product.id}>
              <div className="wishlist-image">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  onError={(e) => {
                    console.log("Image Error:", product.image);
                    e.target.style.border = "2px solid red";
                  }}
                />

                <p>Image: {String(product.image)}</p>
              </div>

              <div className="wishlist-details">
                <h2>{product.name}</h2>

                <p className="wishlist-stock">✓ In Stock</p>

                <div className="wishlist-rating">
                  ⭐⭐⭐⭐⭐ <span>(128 Reviews)</span>
                </div>

                <h3 className="wishlist-price">
                  ₹{product.price.toLocaleString()}
                </h3>

                <div className="wishlist-actions">
                  <button
                    className="wishlist-remove-btn"
                    onClick={() => toggleWishlist(product)}
                  >
                    🗑 Remove
                  </button>

                  <Link
                    to={`/product/${product.id}`}
                    className="wishlist-view-btn"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Wishlist;