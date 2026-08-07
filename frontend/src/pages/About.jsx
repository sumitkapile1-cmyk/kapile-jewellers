import "../styles/About.css";

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <h1>About Kapile Jewellers</h1>
        <p>
          Crafting timeless jewellery with elegance, trust, and unmatched
          craftsmanship for every special occasion.
        </p>
      </section>

      <section className="about-container">

        <div className="about-section">
          <h2>✨ Our Story</h2>
          <p>
            Kapile Jewellers is dedicated to creating premium quality jewellery
            that reflects beauty, elegance, and tradition. Every design is
            crafted with attention to detail using the finest materials.
          </p>
        </div>

        <div className="about-section">
          <h2>💎 Our Mission</h2>
          <p>
            Our mission is to provide customers with elegant jewellery,
            exceptional quality, transparent pricing, and complete trust in
            every purchase.
          </p>
        </div>

        <div className="about-section">
          <h2>⭐ Why Choose Us?</h2>

          <div className="features-grid">

            <div className="feature-card">
              <h3>💍 Premium Designs</h3>
              <p>Exclusive jewellery collections for every occasion.</p>
            </div>

            <div className="feature-card">
              <h3>✔ Hallmarked Gold</h3>
              <p>Certified jewellery with guaranteed purity.</p>
            </div>

            <div className="feature-card">
              <h3>🚚 Fast Delivery</h3>
              <p>Safe and secure doorstep delivery.</p>
            </div>

            <div className="feature-card">
              <h3>🤝 Trusted Service</h3>
              <p>Customer satisfaction is always our priority.</p>
            </div>

          </div>
        </div>

      </section>

    </div>
  );
}

export default About;