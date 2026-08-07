import { useState, useRef, useEffect } from "react";
import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Temporary
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const navigate = useNavigate();
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo-section">
        <Link to="/">
          <img
            src="/image/Logoo.png"
            alt="Kapile Jewellers"
            className="logo-img"
          />
        </Link>
      </div>

      {/* Middle */}
      <div
        className={`middle-section ${
          showSearch ? "search-active" : ""
        }`}
      >
        <h1
          className={`brand-name ${
            showSearch ? "hide-brand" : ""
          }`}
        >
          Kapile Jewellers
        </h1>

        {showSearch && (
          <div className="search-box">
            <input
              type="text"
              placeholder="Search Jewellery..."
              autoFocus
              value={searchQuery}
              onChange={(e) => {
                const value = e.target.value;
                setSearchQuery(value);

                navigate(`/products?q=${value}`);
              }}
            />
          </div>
        )}
      </div>

      {/* Icons */}
      <div className="nav-icons">

        {showSearch ? (
          <FaTimes
            className="icon"
            onClick={() => setShowSearch(false)}
          />
        ) : (
          <FaSearch
            className="icon"
            onClick={() => setShowSearch(true)}
          />
        )}

        <Link to="/wishlist" className="wishlist-link">
          <FaHeart className="icon" />
        </Link>

        <Link to="/cart" className="cart-link">
          <FaShoppingCart className="icon" />
        </Link>

        {/* Menu */}
        <div className="profile-menu" ref={menuRef}>

          <FaBars
            className="icon"
            onClick={() =>
              setShowProfileMenu(!showProfileMenu)
            }
          />

          {showProfileMenu && (

            <div className="dropdown-menu">

              {!isLoggedIn ? (

                <>
                  <Link
                    to="/"
                    onClick={() =>
                      setShowProfileMenu(false)
                    }
                  >
                    🏠 Home
                  </Link>

                  <Link
                    to="/login"
                    onClick={() =>
                      setShowProfileMenu(false)
                    }
                  >
                    🔑 Login
                  </Link>

                  <Link
                    to="/register"
                    onClick={() =>
                      setShowProfileMenu(false)
                    }
                  >
                    📝 Register
                  </Link>

                  <Link
                    to="/about"
                    onClick={() =>
                      setShowProfileMenu(false)
                    }
                  >
                    ℹ️ About Us
                  </Link>

                  <Link
                    to="/contact"
                    onClick={() =>
                      setShowProfileMenu(false)
                    }
                  >
                    📞 Contact Us
                  </Link>

                  <Link
                    to="/help"
                    onClick={() =>
                      setShowProfileMenu(false)
                    }
                  >
                    ❓ Help Center
                  </Link>
                </>

              ) : (

                <>
                  <Link
                    to="/"
                    onClick={() =>
                      setShowProfileMenu(false)
                    }
                  >
                    🏠 Home
                  </Link>

                  <Link
                    to="/profile"
                    onClick={() =>
                      setShowProfileMenu(false)
                    }
                  >
                    👤 My Profile
                  </Link>

                  <Link
                    to="/my-orders"
                    onClick={() =>
                      setShowProfileMenu(false)
                    }
                  >
                    📦 My Orders
                  </Link>

                  <Link
                    to="/wishlist"
                    onClick={() =>
                      setShowProfileMenu(false)
                    }
                  >
                    ❤️ Wishlist
                  </Link>

                  <Link
                    to="/shipping"
                    onClick={() =>
                      setShowProfileMenu(false)
                    }
                  >
                    📍 Saved Address
                  </Link>

                  <Link
                    to="/edit-profile"
                    onClick={() =>
                      setShowProfileMenu(false)
                    }
                  >
                    ✏ Edit Profile
                  </Link>

                  <Link
                    to="/change-password"
                    onClick={() =>
                      setShowProfileMenu(false)
                    }
                  >
                    🔒 Change Password
                  </Link>

                  <Link
                    to="/about"
                    onClick={() =>
                      setShowProfileMenu(false)
                    }
                  >
                    ℹ️ About Us
                  </Link>

                  <Link
                    to="/contact"
                    onClick={() =>
                      setShowProfileMenu(false)
                    }
                  >
                    📞 Contact Us
                  </Link>

                  <Link
                    to="/help"
                    onClick={() =>
                      setShowProfileMenu(false)
                    }
                  >
                    ❓ Help Center
                  </Link>

                  <button
                    className="logout-btn"
                    onClick={() => {
                      setIsLoggedIn(false);
                      setShowProfileMenu(false);
                    }}
                  >
                    🚪 Logout
                  </button>

                </>

              )}

            </div>

          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;