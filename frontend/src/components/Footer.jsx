import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo */}
        <div className="footer-box">
          <img
            src="/image/Logoo.png"
            alt="Kapile Jewellers"
            className="footer-logo"
          />

          <p>
            Luxury Jewellery crafted with elegance and trust.
            Hallmarked Gold, Silver & Diamond Collections.
          </p>

          <div className="social-icons">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/Sumit.Kapile"
              className="facebook"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/sumit_kapile_/"
              className="instagram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918999571456"
              className="whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/profile">Profile</Link>
        </div>

        {/* Customer Service */}
        <div className="footer-box">
          <h3>Customer Service</h3>

          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms & Conditions</Link>
          <Link to="/return-policy">Return Policy</Link>
          <Link to="/shipping-policy">Shipping Policy</Link>
          <Link to="/faq">FAQ</Link>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact Us</h3>

          <p>
            <FaPhoneAlt /> +91 8999571456
          </p>

          <p>
            <FaEnvelope /> info@kapilejewellers.com
          </p>

          <p>
            <FaMapMarkerAlt /> Pune, Maharashtra
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Kapile Jewellers. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;