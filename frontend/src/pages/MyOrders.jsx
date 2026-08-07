import { Link } from "react-router-dom";
import "../styles/MyOrders.css";

function MyOrders() {

  const orders = [
    {
      id: "KJ1001",
      name: "Gold Ring",
      image: "/image/ring.jpg",
      price: 25000,
      qty: 1,
      status: "Processing",
      date: "12 July 2026",
    },
    {
      id: "KJ1002",
      name: "Silver Chain",
      image: "/image/chain.jpg",
      price: 3500,
      qty: 2,
      status: "Delivered",
      date: "10 July 2026",
    },
  ];

  return (
    <div className="orders-container">

      <h1>My Orders</h1>

      {orders.map((order) => (

        <div className="order-card" key={order.id}>

          <img src={order.image} alt={order.name} />

          <div className="order-details">

            <h2>{order.name}</h2>

            <p><b>Order ID:</b> {order.id}</p>

            <p><b>Quantity:</b> {order.qty}</p>

            <p><b>Price:</b> ₹{order.price.toLocaleString()}</p>

            <p><b>Order Date:</b> {order.date}</p>

            <p className={`status ${order.status.toLowerCase()}`}>
              {order.status}
            </p>

          </div>

          <div className="order-buttons">

            <Link to="/track-order">
              <button>Track Order</button>
            </Link>

            <Link to={`/order-details/${order.id}`}>
              <button>View Details</button>
            </Link>
          </div>

        </div>

      ))}

    </div>
  );
}

export default MyOrders;