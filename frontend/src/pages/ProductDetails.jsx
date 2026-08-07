import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaStar,
  FaHeart,
  FaShoppingCart,
  FaBolt,
  FaTruck,
  FaUndo,
  FaShieldAlt,
  FaGem,
  FaTag,
  FaCheckCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "../styles/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const product = {
    id,
    name: "22K Gold Necklace",
    brand: "Kapile Jewellers",
    price: 45000,
    oldPrice: 55000,
    rating: 4.8,
    reviews: 125,
    stock: true,

    description:
      "Premium handcrafted gold jewellery made with BIS Hallmarked 22K Gold. Perfect for weddings, festivals and every special celebration.",

    specification: {
      Metal: "22K Gold",
      Purity: "916 Hallmark",
      Weight: "18 gm",
      Occasion: "Wedding",
      Warranty: "Lifetime Service",
    },

    images: [
      "/image/Necklace.png",
      "/image/women.png",
      "/image/men.png",
      "/image/Necklace.png",
    ],
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [wishlist, setWishlist] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(quantity + 1);

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-details-page">

      <div className="product-details">

        {/* LEFT */}

        <div className="product-left">

          <div className="image-box">

            <img
              src={selectedImage}
              alt={product.name}
              className="main-image"
            />

          </div>

          <div className="thumbnail-row">

            {product.images.map((img, index) => (

              <img
                key={index}
                src={img}
                alt=""
                className={
                  selectedImage === img
                    ? "thumbnail active"
                    : "thumbnail"
                }
                onClick={() => setSelectedImage(img)}
              />

            ))}

          </div>

        </div>

        {/* RIGHT */}

        <div className="product-right">

          <p className="brand-name">
            Brand :
            <span> {product.brand}</span>
          </p>

          <h1>{product.name}</h1>

          <div className="rating">

            {[1,2,3,4,5].map((star)=>(

              <FaStar
                key={star}
                className={
                  star <= Math.round(product.rating)
                    ? "star-fill"
                    : "star-empty"
                }
              />

            ))}

            <span>
              {product.rating} ({product.reviews} Ratings)
            </span>

          </div>

          <div className="price-box">

            <h2>
              ₹{product.price.toLocaleString()}
            </h2>

            <span className="old-price">
              ₹{product.oldPrice.toLocaleString()}
            </span>

            <span className="discount">
              18% OFF
            </span>

          </div>

          <div className="stock-status">

            {product.stock ? (
              <>
                <FaCheckCircle />
                In Stock
              </>
            ) : (
              "Out Of Stock"
            )}

          </div>

          <p className="description">
            {product.description}
          </p>

          {/* OFFERS */}

          <div className="offer-box">

            <h3>
              <FaTag />
              Available Offers
            </h3>

            <ul>

              <li>
                Flat ₹1000 OFF on Orders Above ₹50,000
              </li>

              <li>
                10% Instant Discount on HDFC Cards
              </li>

              <li>
                Free Jewellery Cleaning for Lifetime
              </li>

            </ul>

          </div>

          {/* DELIVERY */}

          <div className="delivery-box">

            <h3>

              <FaMapMarkerAlt />

              Delivery

            </h3>

            <div className="delivery-input">

              <input
                type="text"
                placeholder="Enter Pincode"
              />

              <button>
                Check
              </button>

            </div>

          </div>

          {/* QUANTITY */}

          <div className="quantity">

            <button onClick={decrease}>
              -
            </button>

            <span>{quantity}</span>

            <button onClick={increase}>
              +
            </button>

          </div>

          {/* BUTTONS */}

          <div className="action-buttons">

              <button className="cart-btn">
                <FaShoppingCart />
                  Add To Cart
              </button>

              <button className="buy-btn">
                  <FaBolt />
                    Buy Now
              </button>

          </div>

            <div
              style={{
               marginTop: "15px",
              }}
            >
               <button
                 className="wish-btn"
                  onClick={() => setWishlist(!wishlist)}
                >
                  <FaHeart
                    color={wishlist ? "red" : "#D4AF37"}
                  />
                </button>
            </div>
                    {/* FEATURES */}

          <div className="features">

            <div>
              <FaTruck />
              Free Delivery
            </div>

            <div>
              <FaUndo />
              Easy Returns
            </div>

            <div>
              <FaShieldAlt />
              Hallmarked Gold
            </div>

            <div>
              <FaGem />
              Premium Quality
            </div>

          </div>

        </div>

      </div>

      {/* ==========================
          PRODUCT SPECIFICATIONS
      ========================== */}

      <div className="details-section">

        <h2>Product Specifications</h2>

        <table className="spec-table">

          <tbody>

            {Object.entries(product.specification).map(
              ([key, value]) => (

                <tr key={key}>

                  <th>{key}</th>

                  <td>{value}</td>

                </tr>

              )
            )}

          </tbody>

        </table>

      </div>

      {/* ==========================
          CUSTOMER REVIEWS
      ========================== */}

      <div className="details-section">

        <h2>Customer Reviews</h2>

        <div className="review-summary">

          <div className="review-left">

            <h1>4.8</h1>

            <p>⭐⭐⭐⭐⭐</p>

            <span>125 Ratings</span>

          </div>

          <div className="review-right">

            <div className="progress-row">
              <span>5 ★</span>
              <progress value="90" max="100"></progress>
            </div>

            <div className="progress-row">
              <span>4 ★</span>
              <progress value="70" max="100"></progress>
            </div>

            <div className="progress-row">
              <span>3 ★</span>
              <progress value="25" max="100"></progress>
            </div>

            <div className="progress-row">
              <span>2 ★</span>
              <progress value="8" max="100"></progress>
            </div>

            <div className="progress-row">
              <span>1 ★</span>
              <progress value="3" max="100"></progress>
            </div>

          </div>

        </div>

        {/* REVIEW 1 */}

        <div className="review-card">

          <h4>Rahul Patil ✔</h4>

          <div className="review-stars">
            ⭐⭐⭐⭐⭐
          </div>

          <p>
            Excellent Quality.
            Delivery was very fast and
            packaging was premium.
          </p>

        </div>

        {/* REVIEW 2 */}

        <div className="review-card">

          <h4>Sneha Joshi ✔</h4>

          <div className="review-stars">
            ⭐⭐⭐⭐☆
          </div>

          <p>
            Beautiful necklace.
            Worth buying.
          </p>

        </div>

        {/* REVIEW 3 */}

        <div className="review-card">

          <h4>Amit Deshmukh ✔</h4>

          <div className="review-stars">
            ⭐⭐⭐⭐⭐
          </div>

          <p>
            Amazing craftsmanship.
            Highly Recommended.
          </p>

        </div>

        <button className="write-review-btn">

          Write Review

        </button>

      </div>

      {/* ==========================
          RELATED PRODUCTS
      ========================== */}

      <div className="details-section">

        <h2>Related Products</h2>

        <div className="related-grid">

          {[1,2,3,4].map((item)=>(

            <Link
              key={item}
              to={`/product/${item}`}
              className="related-card"
            >

              <img
                src="/image/Necklace.png"
                alt=""
              />

              <h3>Gold Necklace</h3>

              <p>₹45,000</p>

            </Link>

          ))}

        </div>

      </div>

      {/* ==========================
          RECENTLY VIEWED
      ========================== */}

      <div className="details-section">

        <h2>Recently Viewed</h2>

        <div className="related-grid">

          {[5,6,7,8].map((item)=>(

            <Link
              key={item}
              to={`/product/${item}`}
              className="related-card"
            >

              <img
                src="/image/women.png"
                alt=""
              />

              <h3>Diamond Jewellery</h3>

              <p>₹38,000</p>

            </Link>

          ))}

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;