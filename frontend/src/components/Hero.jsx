import "../styles/Hero.css";
import {
  FaGem,
  FaShieldAlt,
  FaTruck,
  FaUndoAlt,
} from "react-icons/fa";

function Hero() {
  const handleShopNow = () => {
    const section = document.getElementById("collection");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* ================= HERO ================= */}

      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-left">

            <h1>
              Luxury Jewellery
              <br />
              For Every Celebration
            </h1>

            <p className="hero-subtitle">
              The Art of Fine Jewellery
              <br />
              Crafted to Celebrate Every Moment.
            </p>

            <button
              className="shop-btn"
              onClick={handleShopNow}
            >
              Shop Now
            </button>

          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section className="features">

        <div className="feature">
          <FaGem />

          <div>
            <h3>Premium Quality</h3>
            <p>Finest Craftsmanship</p>
          </div>
        </div>

        <div className="feature">
          <FaShieldAlt />

          <div>
            <h3>Trusted & Certified</h3>
            <p>100% Hallmarked Jewellery</p>
          </div>
        </div>

        <div className="feature">
          <FaTruck />

          <div>
            <h3>Free Delivery</h3>
            <p>Fast & Secure Shipping</p>
          </div>
        </div>

        <div className="feature">
          <FaUndoAlt />

          <div>
            <h3>Easy Returns</h3>
            <p>7 Day Return Policy</p>
          </div>
        </div>

      </section>
    </>
  );
}

export default Hero;