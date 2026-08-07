import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/products";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import ShippingAddress from "./pages/ShippingAddress";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";
import MyOrders from "./pages/MyOrders";
import TrackOrder from "./pages/TrackOrder";
import OrderDetails from "./pages/OrderDetails";
import EditProfile from "./pages/EditProfile";
import ChangePassword from "./pages/ChangePassword";
import ForgotPassword from "./pages/ForgotPassword";

// Policy Pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ReturnPolicy from "./pages/ReturnPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import FAQ from "./pages/FAQ";

// Extra Pages
import NotFound from "./pages/NotFound";

// CSS
import "./styles/Navbar.css";
import "./styles/Hero.css";
import "./styles/Categories.css";
import "./styles/About.css";
import "./styles/Contact.css";
import "./styles/Footer.css";

function App() {
  const location = useLocation();

  // Route change zala ki top la scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Footer fakt ya pages var disel
  const showFooter = [
    "/",
    "/about",
    "/contact",
    "/help",
    "/privacy-policy",
    "/terms-conditions",
    "/return-policy",
    "/shipping-policy",
    "/faq",
  ].includes(location.pathname);

  return (
    <>
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />

        {/* Product */}
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Cart & Wishlist */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />

        {/* Order Flow */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shipping" element={<ShippingAddress />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/order-details/:id" element={<OrderDetails />} />

        {/* User */}
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Policies */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/faq" element={<FAQ />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {showFooter && <Footer />}
    </>
  );
}

export default App;