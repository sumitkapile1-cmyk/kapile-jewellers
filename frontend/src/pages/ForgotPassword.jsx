import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    // Future Backend API
    setMessage(
      "Password reset link has been sent to your email."
    );
  };

  return (
    <div className="forgot-page">
      <div className="forgot-box">

        <h2>Forgot Password</h2>

        <p>
          Enter your registered email address.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <button type="submit">
            Send Reset Link
          </button>

        </form>

        {message && (
          <p className="success-msg">
            {message}
          </p>
        )}

        <Link to="/login" className="back-login">
          ← Back to Login
        </Link>

      </div>
    </div>
  );
}

export default ForgotPassword;