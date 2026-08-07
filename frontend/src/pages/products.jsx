import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import {
  FaHeart,
  FaRegHeart,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import "../styles/Products.css";

function Products() {
  const [searchParams] = useSearchParams();
  const gender = searchParams.get("gender");
  const search = searchParams.get("q") || "";

  // Sample Products Data
  const [products] = useState([
    {
      id: 1,
      name: "Diamond Necklace",
      gender: "women",
      category: "necklace",
      price: 45000,
      originalPrice: 55000,
      rating: 4.5,
      reviews: 128,
      image: "/image/diamond-necklace.jpg",
      inStock: true,
      isNew: true,
    },
    {
      id: 2,
      name: "Diamond Earring",
      gender: "women",
      category: "earrings",
      price: 35000,
      originalPrice: 42000,
      rating: 4.8,
      reviews: 95,
      image: "/image/diamond earring.jpg",
      inStock: true,
      isNew: false,
    },
    {
      id: 3,
      name: "Diamond Bracelet",
      gender: "women",
      category: "bracelet",
      price: 12000,
      originalPrice: 15000,
      rating: 4.3,
      reviews: 67,
      image: "/image/diamond bracelet.jpg",
      inStock: true,
      isNew: true,
    },
    {
      id: 4,
      name: "Diamond Ring",
      gender: "women",
      category: "ring",
      price: 28000,
      originalPrice: 35000,
      rating: 4.7,
      reviews: 112,
      image: "/image/diamond ring.jpg",
      inStock: false,
      isNew: false,
    },
    {
      id: 5,
      name: "Diamond Bangles Set",
      gender: "women",
      category: "bangles",
      price: 55000,
      originalPrice: 68000,
      rating: 4.6,
      reviews: 85,
      image: "/image/diamond bangle.jpg",
      inStock: true,
      isNew: true,
    },
    {
      id: 6,
      name: "Diamond pendant",
      gender: "women",
      category: "pendant",
      price: 32000,
      originalPrice: 40000,
      rating: 4.4,
      reviews: 78,
      image: "/image/diamond pendant.jpg",
      inStock: true,
      isNew: false,
    },
    {
      id: 7,
      name: "Gold Bracelet",
      gender: "women",
      category: "bracelet",
      price: 48000,
      originalPrice: 60000,
      rating: 4.9,
      reviews: 154,
      image: "/image/gold bracelet.png",
      inStock: true,
      isNew: true,
    },
    {
      id: 8,
      name: "Gold Earrings",
      gender: "women",
      category: "earrings",
      price: 38000,
      originalPrice: 48000,
      rating: 4.5,
      reviews: 92,
      image: "/image/gold earring.png",
      inStock: true,
      isNew: false,
    },
    {
      id: 9,
      name: "Gold Bracelet",
      gender: "men",
      category: "Bracelet",
      price: 38000,
      originalPrice: 48000,
      rating: 4.5,
      reviews: 92,
      image: "/image/men gold bracelet.png",
      inStock: true,
      isNew: false,
    },
    {
      id:10,
      name: "Gold Ring",
      gender: "men",
      category: "Ring",
      price: 38000,
      originalPrice: 48000,
      rating: 4.5,
      reviews: 92,
      image: "/image/gold ring .png",
      inStock: true,
      isNew: false,
    },
  ]);

    // ==========================
  // State Management
  // ==========================
  const [filteredProducts, setFilteredProducts] = useState(products);
  const { cart, addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();
  const [sortBy, setSortBy] = useState("newest");
  const [cartNotification, setCartNotification] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [showSort, setShowSort] = useState(false);

  // ==========================
  // Filter & Sort Products
  // ==========================
  const filterAndSortProducts = () => {
    let filtered = products.filter((product) => {
      const matchesGender =
        !gender || product.gender === gender;
        const matchesSearch =
          search === "" ||
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
          selectedCategory === "all" ||
          product.category === selectedCategory;

        return (
          matchesGender &&
          matchesSearch &&
          matchesCategory
        );
    });

    switch (sortBy) {
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : -1));
        break;

      case "priceAsc":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "priceDesc":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;

      default:
        break;
    }

    setFilteredProducts(filtered);
  };

  // ==========================
  // Handlers
  // ==========================
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // ==========================
  // useEffect
  // ==========================
 useEffect(() => {
  filterAndSortProducts();
}, [
  gender,
  search,
  sortBy,
  selectedCategory,
]);
  // ==========================
  // Wishlist
  // ==========================


  // ==========================
  // Cart
  // ==========================
  
  // ==========================
// Discount
// ==========================
const getDiscount = (original, current) => {
  return Math.round(
    ((original - current) / original) * 100
  );
};

 return (
  <div className="products-page">

    {cartNotification && (
      <div className="cart-notification">
        <FaShoppingCart className="notification-icon" />
        {cartNotification}
      </div>
    )}

    <div className="products-container">
  <main className="products-main">

    {gender && (
<div className="products-header">

  <div className="filter-wrapper">

    <button
      className="filter-btn"
      onClick={() => {
        setShowFilterMenu(!showFilterMenu);

        if (showFilterMenu) {
          setShowCategory(false);
          setShowSort(false);
        }
      }}
    >
      <BsThreeDotsVertical />
    </button>

    {showFilterMenu && (
      <div className="filter-dropdown">

        <div className="dropdown-group">

          <button
            className="dropdown-title"
            onClick={() => {
              setShowCategory(!showCategory);
              setShowSort(false);
            }}
          >
            {showCategory ? "▼ Category" : "▶ Category"}
          </button>

          {showCategory && (
            <div className="dropdown-options">
              <button onClick={() => setSelectedCategory("all")}>All</button>
              <button onClick={() => setSelectedCategory("ring")}>Rings</button>
              <button onClick={() => setSelectedCategory("necklace")}>Necklace</button>
              <button onClick={() => setSelectedCategory("earrings")}>Earrings</button>
              <button onClick={() => setSelectedCategory("bracelet")}>Bracelet</button>
              <button onClick={() => setSelectedCategory("bangles")}>Bangles</button>
            </div>
          )}

        </div>

        <div className="dropdown-group">

          <button
            className="dropdown-title"
            onClick={() => {
              setShowSort(!showSort);
              setShowCategory(false);
            }}
          >
            {showSort ? "▼ Sort" : "▶ Sort"}
          </button>

          {showSort && (
            <div className="dropdown-options">
              <button onClick={() => setSortBy("newest")}>Newest</button>
              <button onClick={() => setSortBy("priceAsc")}>Price Low → High</button>
              <button onClick={() => setSortBy("priceDesc")}>Price High → Low</button>
              <button onClick={() => setSortBy("rating")}>Rating</button>
            </div>
          )}

        </div>

      </div>
    )}

  </div>

  <h1>
    {gender === "women"
      ? "Women's Collection"
      : "Men's Collection"}
  </h1>

</div>
)}
        {/* Filter Button */}

        {/* Products */}
{filteredProducts.length > 0 ? (
  <div className="products-grid">
            {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="product-link"
            >
              <div className="product-card">

                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />

                  {product.isNew && (
                    <span className="badge-new">NEW</span>
                  )}

                  {!product.inStock && (
                    <span className="badge-outofstock">
                      OUT OF STOCK
                    </span>
                  )}

                  {product.originalPrice > product.price && (
                    <span className="badge-discount">
                      -{getDiscount(product.originalPrice, product.price)}%
                    </span>
                  )}

                  <button
                    className="wishlist-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(product);
                    }}
                  >
                    {wishlist.find((item) => item.id === product.id) ? (
                      <FaHeart className="icon-filled" />
                    ) : (
                      <FaRegHeart />
                    )}
                  </button>
                </div>

                <div className="product-info">

                  <h3 className="product-name">
                    {product.name}
                  </h3>

                  <div className="rating-section">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < Math.floor(product.rating)
                              ? "star-filled"
                              : "star-empty"
                          }
                        />
                      ))}
                    </div>

                    <span className="review-count">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  <div className="price-section">
                    <span className="current-price">
                      ₹{product.price.toLocaleString()}
                    </span>

                    {product.originalPrice > product.price && (
                      <span className="original-price">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <button
                    className={`add-to-cart-btn ${
                      !product.inStock ? "disabled" : ""
                    }`}
                    disabled={!product.inStock}
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);

                      setCartNotification(`Added "${product.name}" to cart!`);

                      setTimeout(() => {
                        setCartNotification("");
                      }, 3000);
                    }}
                  >
                    <FaShoppingCart className="btn-icon" />
                    {product.inStock
                      ? "Add to Cart"
                      : "Out of Stock"}
                  </button>

                  </div> {/* product-info */}
              </div> {/* product-card */}

            </Link>
            ))}

          </div>
        ) : (
          <div className="no-products">
            <p>No products found.</p>
            
          </div>
        )}

      </main>
    </div>
  </div>
);
}

export default Products;