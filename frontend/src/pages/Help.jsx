import "../styles/Help.css";
import { FaBox, FaCreditCard, FaTruck, FaUndo, FaGem, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Help() {
  const navigate = useNavigate();
  return (
    <div className="help-container">

      {/* Hero Section */}
      <div className="help-hero">
        <h1>Help Center</h1>
        <p>We're here to help you with orders, payments and jewellery services.</p>

        <input
          type="text"
          placeholder="🔍 Search your question..."
        />
      </div>

      {/* Cards */}
      <div className="help-cards">

        <div className="card">
          <FaBox size={35}/>
          <h3>Orders</h3>
          <p>Track and manage orders</p>
        </div>

        <div className="card">
          <FaCreditCard size={35}/>
          <h3>Payments</h3>
          <p>Payment related help</p>
        </div>

        <div className="card">
          <FaTruck size={35}/>
          <h3>Shipping</h3>
          <p>Delivery information</p>
        </div>

        <div className="card">
          <FaUndo size={35}/>
          <h3>Returns</h3>
          <p>Refund & Exchange</p>
        </div>

        <div className="card">
          <FaGem size={35}/>
          <h3>Jewellery Care</h3>
          <p>Maintenance Tips</p>
        </div>

        <div className="card">
          <FaPhone size={35}/>
          <h3>Support</h3>
          <p>Call us anytime</p>
        </div>

      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>

        <details>
          <summary>How can I place an order?</summary>
          <p>Select your jewellery, add it to cart and complete checkout.</p>
        </details>

        <details>
          <summary>How do I track my order?</summary>
          <p>You can track your order from your profile after login.</p>
        </details>

        <details>
          <summary>Which payment methods are accepted?</summary>
          <p>UPI, Debit Card, Credit Card and Net Banking.</p>
        </details>

        <details>
          <summary>Can I cancel an order?</summary>
          <p>Yes, before the product is shipped.</p>
        </details>

      </div>

      {/* Contact */}
      <div className="contact-box">
        <h2>Need More Help?</h2>

        <p>📞 +91 8999571456</p>
        <p>📧 support@kapilejewellers.com</p>
        <p>📍 Pune, Maharashtra</p>
        <p>🕒 Monday - Saturday | 10 AM - 7 PM</p>

        <button onClick={() => navigate("/contact")}>
          Contact Us
        </button>

      </div>

    </div>
  );
}

export default Help;