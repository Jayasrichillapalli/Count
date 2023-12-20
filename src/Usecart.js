// useCart.js
import { useState, useEffect } from "react";

const useCart = () => {
  // Load cart items from local storage on component mount
  const initialCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItems, setCartItems] = useState(initialCartItems);

  useEffect(() => {
    // Save cart items to local storage whenever it changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item !== productToRemove)
    );
  };

  return { cartItems, addToCart, removeFromCart };
};

export default useCart;
