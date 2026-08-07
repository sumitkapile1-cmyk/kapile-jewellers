import { Link } from "react-router-dom";
import "../styles/Profile.css";

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-card">

        <div className="profile-header">
          <img
            src="/image/profile.png"
            alt="Profile"
            className="profile-image"
          />

          <h2>Sumit Kapile</h2>

          <p>sumit@gmail.com</p>

          <p>+91 8999571456</p>
        </div>

        <div className="profile-menu">

          <Link to="/my-orders" className="profile-item">
            📦 My Orders
          </Link>

          <Link to="/wishlist" className="profile-item">
            ❤️ Wishlist
          </Link>

          <Link to="/shipping" className="profile-item">
            📍 Saved Address
          </Link>

          <Link to="/edit-profile" className="profile-item">
            ✏ Edit Profile
          </Link>

          <Link to="/change-password" className="profile-item">
            🔒 Change Password
          </Link>

          <Link to="/help" className="profile-item">
            ❓ Help Center
          </Link>

          <button className="logout-btn">
            🚪 Logout
          </button>

        </div>

      </div>
    </div>
  );
}

export default Profile;