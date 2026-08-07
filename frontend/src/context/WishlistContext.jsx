import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

const toggleWishlist = (product) => {
  console.log("Clicked Product:", product);

  if (wishlist.find((item) => item.id === product.id)) {
    setWishlist(wishlist.filter((item) => item.id !== product.id));
  } else {
    setWishlist([...wishlist, product]);
  }
};
useEffect(() => {
  console.log("Wishlist Data:", wishlist);
}, [wishlist]);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};