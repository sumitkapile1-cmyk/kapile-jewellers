import "./../styles/Cart.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h1 className="empty">🛒 Your Cart is Empty</h1>
      </div>
    );
  }

  return (
    <div className="cart-page">

      <h1 className="cart-heading">Shopping Cart</h1>

      <div className="cart-container">

        {/* Left Side */}
        <div className="cart-left">

          {cart.map((item) => (
            <div className="cart-item" key={item.id}>

              <div className="cart-image">
                <img
                  src={item.image}
                  alt={item.name}
                />
              </div>

              <div className="cart-details">

                <h2>{item.name}</h2>

                <p className="stock">
                  ✓ In Stock
                </p>

                <div className="rating">
                  ⭐⭐⭐⭐⭐
                  <span> (128 Reviews)</span>
                </div>

                <h3 className="price">
                  ₹{item.price.toLocaleString()}
                </h3>

                <div className="qty-section">

                  <button
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>

                </div>

                <div className="cart-actions">

                  <button
                    className="remove"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    🗑 Remove
                  </button>

                  <Link
                    to={`/product/${item.id}`}
                    className="view-product"
                  >
                    View Product
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Right Side */}
        <div className="cart-right">

          <div className="summary-box">

            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span>FREE</span>
            </div>

            <div className="summary-row">
              <span>GST</span>
              <span>Included</span>
            </div>

            <hr />

            <div className="summary-total">
              <span>Total</span>

              <span>
                ₹{total.toLocaleString()}
              </span>
            </div>

            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Cart;