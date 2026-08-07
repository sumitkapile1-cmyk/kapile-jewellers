import { useNavigate } from "react-router-dom";
import "../styles/OrderSuccess.css";

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-card">

        <h1>🎉 Order Placed Successfully!</h1>

        <p>
          Thank you for shopping with <b>Kapile Jewellers</b>.
        </p>

        <h3>Estimated Delivery: 3 - 5 Days</h3>

        <div className="success-buttons">

          <button onClick={() => navigate("/products")}>
            Continue Shopping
          </button>

          <button onClick={() => navigate("/my-orders")}>
            My Orders
          </button>
        </div>

      </div>
    </div>
  );
}

export default OrderSuccess;