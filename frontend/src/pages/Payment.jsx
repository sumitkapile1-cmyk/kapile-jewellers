import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Payment.css";

function Payment() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const handlePlaceOrder = () => {
    navigate("/order-success");
  };

  return (
    <div className="payment-container">
      <div className="payment-box">

        <h1>Select Payment Method</h1>

        <label className="payment-option">
          <input
            type="radio"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Cash on Delivery
        </label>

        <label className="payment-option">
          <input
            type="radio"
            value="upi"
            checked={paymentMethod === "upi"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          UPI Payment
        </label>

        <label className="payment-option">
          <input
            type="radio"
            value="card"
            checked={paymentMethod === "card"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Credit / Debit Card
        </label>

        <label className="payment-option">
          <input
            type="radio"
            value="razorpay"
            checked={paymentMethod === "razorpay"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Razorpay
        </label>

        <button
          className="place-order-btn"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>

      </div>
    </div>
  );
}

export default Payment;