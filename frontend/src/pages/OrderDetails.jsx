import { Link, useParams } from "react-router-dom";
import "../styles/OrderDetails.css";

function OrderDetails() {
  const { id } = useParams();

  const order = {
    id,
    product: "Gold Ring",
    image: "/image/ring.jpg",
    price: 25000,
    quantity: 1,
    payment: "Cash on Delivery",
    status: "Processing",
    orderDate: "12 July 2026",
    delivery: "15 July 2026",
    address:
      "123, MG Road, Pune, Maharashtra - 411001",
  };

  return (
    <div className="order-details-page">

      <h1>Order Details</h1>

      <div className="details-card">

        <img src={order.image} alt={order.product} />

        <div className="details-info">

          <h2>{order.product}</h2>

          <p><b>Order ID:</b> {order.id}</p>

          <p><b>Price:</b> ₹{order.price.toLocaleString()}</p>

          <p><b>Quantity:</b> {order.quantity}</p>

          <p><b>Payment:</b> {order.payment}</p>

          <p><b>Status:</b> {order.status}</p>

          <p><b>Order Date:</b> {order.orderDate}</p>

          <p><b>Estimated Delivery:</b> {order.delivery}</p>

          <p><b>Delivery Address:</b></p>

          <p>{order.address}</p>

          <div className="details-buttons">

            <Link to="/track-order">
              <button>Track Order</button>
            </Link>

            <Link to="/products">
              <button>Buy Again</button>
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default OrderDetails;