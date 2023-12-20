// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Products";
import Checkout from "./Checkout";
import Header from "./Header";
import Login from "./LoginMethod";
import Signup from "./Signup";
import Cart from "./Cart";

const App = () => {
  
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {

    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  
  const removeFromCart = (productToRemove) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productToRemove.id)
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Header />} />
        <Route path="/" element={<Products addToCart={addToCart} />} />
        <Route
          path="/checkout"
          element={<Checkout cartItems={cartItems} removeFromCart={removeFromCart} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
