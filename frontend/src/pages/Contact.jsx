import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you. Get in touch with Kapile Jewellers for
          any questions or assistance.
        </p>
      </section>

      <div className="contact-container">

        <div className="contact-info">
          <h2>Get In Touch</h2>

          <div className="info-box">
            <h3>📍 Address</h3>
            <p>Kapile Jewellers, Maharashtra, India</p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-box">
            <h3>📧 Email</h3>
            <p>kapilejewellers@gmail.com</p>
          </div>

          <div className="info-box">
            <h3>🕒 Working Hours</h3>
            <p>Monday - Saturday</p>
            <p>10:00 AM - 8:00 PM</p>
          </div>
        </div>

        <div className="contact-form">

          <h2>Send Message</h2>

          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;