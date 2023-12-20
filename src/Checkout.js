import React, { useEffect, useState } from "react";
import "./cart.css";
import Header from "./Header";
import Footer from "./Footer";
import Cart from "./Cart";

const Checkout = ({ cartItems, removeFromCart }) => {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let newSubtotal = 0;
    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      newSubtotal += item.price * item.quantity;
    }
    setSubtotal(newSubtotal);
  }, [cartItems]);

  useEffect(() => {
    // Recalculate subtotal with updated cart items
    let newSubtotal = 0;
    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      newSubtotal += item.price * item.quantity;
    }
    setSubtotal(newSubtotal);

    // Update localStorage with updated cart items
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleQuantityChange = (updatedCartItems) => {
    let newSubtotal = 0;
    for (let i = 0; i < updatedCartItems.length; i++) {
      const item = updatedCartItems[i];
      newSubtotal += item.price * item.quantity;
    }
    setSubtotal(newSubtotal);
  };

  const totalBill = () => {
    alert(`Your Order is Successful \n Total Bill: $${subtotal.toFixed(2)}\n\n\n\nThanks for shopping!`);
  };

  return (
    <>
      <Header />
      <div className="row">
        <div className="col-9">
          <img
            src="https://t4.ftcdn.net/jpg/04/65/46/51/360_F_465465194_yegA0uWYD0kToZbQ4nwu575g3LDUEFmE.jpg"
            className="image-banner"
            alt="Banner"
          />
        </div>

        <div className="col-3">
          <div className="checkout">
            <p>
              <b>Subtotal items: ${subtotal.toFixed(2)}</b>
            </p>
            <p>This order contains a free gift</p>
            <p>Free Shipping on all orders</p>
            <button className="btn-checkout" onClick={totalBill}>
              Proceed to Buy
            </button>
          </div>
        </div>
        <div className="col-12">
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            handleQuantityChange={handleQuantityChange}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
