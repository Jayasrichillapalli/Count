
import React, { useEffect, useState } from "react";
import "./cart.css";

const Cart = ({ cartItems, removeFromCart, handleQuantityChange }) => {
  const [loadedCartItems, setLoadedCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setLoadedCartItems(JSON.parse(savedCartItems));
    } else {
      setLoadedCartItems(cartItems);
    }
  }, [cartItems]);

  const updateLocalStorage = (updatedCartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setLoadedCartItems(updatedCartItems);
    handleQuantityChange(updatedCartItems);
  };

  const handleRemoveFromCart = (item) => {
    const updatedCartItems = loadedCartItems.filter((cartItem) => cartItem.id !== item.id);
    updateLocalStorage(updatedCartItems);
    removeFromCart(item);
  };

  const handleQuantitySelectChange = (item, newQuantity) => {
    const updatedCartItems = loadedCartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: newQuantity };
      }
      return cartItem;
    });

    updateLocalStorage(updatedCartItems);
  };

  return (
    <div className="cart-container">
      {loadedCartItems.length === 0 ? (
        <div className="empty-cart-message">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <ul>
          {loadedCartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="item-details">
                <div className="item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="item-info">
                  <p>
                    <b>{item.title}</b>
                  </p>
                  <p>
                    <b>${item.price.toFixed(2)}</b>
                  </p>
                  <p>
                    <b>
                      qty :{" "}
                      <select
                        value={item.quantity}
                        onChange={(e) => handleQuantitySelectChange(item, e.target.value)}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((quantity) => (
                          <option key={quantity} value={quantity}>
                            {quantity}
                          </option>
                        ))}
                      </select>
                    </b>
                  </p>
                  <br />
                  <button
                    onClick={() => handleRemoveFromCart(item)}
                    className="remove-button"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
