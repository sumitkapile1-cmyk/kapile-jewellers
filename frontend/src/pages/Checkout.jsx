import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/Checkout.css";

function Checkout() {
  const navigate = useNavigate();

  const { cart } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = cart.length > 0 ? 100 : 0;
  const gst = subtotal * 0.03;
  const total = subtotal + shipping + gst;

  if (cart.length === 0) {
    return (
      <div className="checkout-container">
        <h1>Your Checkout is Empty</h1>

        <button
          className="continue-btn"
          onClick={() => navigate("/products")}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <div className="checkout-content">

        <div className="checkout-products">

          {cart.map((item) => (
            <div className="checkout-card" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="checkout-info">
                <h3>{item.name}</h3>

                <p>
                  ₹{item.price.toLocaleString()}
                </p>

                <p>
                  Quantity : {item.quantity}
                </p>
              </div>

            </div>
          ))}

        </div>

        <div className="order-summary">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>₹{shipping}</span>
          </div>

          <div className="summary-row">
            <span>GST (3%)</span>
            <span>₹{gst.toFixed(2)}</span>
          </div>

          <hr />

          <div className="summary-row total">
            <span>Total</span>

            <span>
              ₹{total.toLocaleString()}
            </span>
          </div>

          <button
            className="continue-btn"
            onClick={() => navigate("/shipping")}
          >
            Continue
          </button>

        </div>

      </div>
    </div>
  );
}

export default Checkout;