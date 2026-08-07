import "../styles/TrackOrder.css";

function TrackOrder() {
  return (
    <div className="track-container">

      <h1>Track Your Order</h1>

      <div className="track-card">

        <h2>Order ID : KJ1001</h2>

        <div className="timeline">

          <div className="step completed">
            <div className="circle">✓</div>
            <p>Order Placed</p>
          </div>

          <div className="line"></div>

          <div className="step completed">
            <div className="circle">✓</div>
            <p>Confirmed</p>
          </div>

          <div className="line"></div>

          <div className="step active">
            <div className="circle">🚚</div>
            <p>Shipped</p>
          </div>

          <div className="line"></div>

          <div className="step">
            <div className="circle">📍</div>
            <p>Out for Delivery</p>
          </div>

          <div className="line"></div>

          <div className="step">
            <div className="circle">🏠</div>
            <p>Delivered</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default TrackOrder;