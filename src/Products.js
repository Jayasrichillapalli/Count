import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { FaShoppingCart } from 'react-icons/fa';


const Products = ({ addToCart}) => {
  const [allProducts, setAllProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [addedToCart, setAddedToCart] = useState({}); 
  

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      const parsedCartItems = JSON.parse(savedCartItems);
      setCartItemCount(parsedCartItems.length);
    }
  }, []);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setAllProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  useEffect(() => {
    const updatedFilteredProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(updatedFilteredProducts);
  }, [searchTerm, allProducts]);

  const cartProducts = (product) => {
    addToCart(product);
    const updatedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    updatedCartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItemCount(updatedCartItems.length);
    setAddedToCart((prevAddedToCart) => ({
      ...prevAddedToCart,
      [product.id]: true,
    }));
    console.log("Cart count updated:", updatedCartItems.length);
  };
  

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const updatedFilteredProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(updatedFilteredProducts);
  };
  const handleAddToCart = () => {
    setCartItemCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div>
            <Link to="/">
              <img
                src="https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png"
                id="logo"
                alt="Amazon Logo"
              />
            </Link>
          </div>

          <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/checkout" className="text-white ms-3">
              <FaShoppingCart size={20} />
              <span className="badge bg-secondary ms-1">{cartItemCount}</span>
            </Link>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  My Account
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" href="#" to="/signup">
                      Signup
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#" to="/login">
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/23/Central/BAU/Christmas/HERO/PC_hero_2x._CB571201008_.jpg"
          className="image-style"
          alt="E-commerce Banner"
        />
      </div>

      <div id="products-wrapper">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-card">
            <p><b>{product.title}</b></p>
            <img className="product-thumbnail" src={product.image} alt={product.title} />
            <p><b>${product.price}</b></p>
            <p><b>{product.category}</b></p>
            <p><b>{product.rating.rate}</b>
              <i className="fa-solid fa-star" style={{ color: "#e08a00" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#e08a00" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#e08a00" }}></i>
            </p>
            <button
              className="add-to-cart-button"
              onClick={() => cartProducts(product)}
              disabled={addedToCart[product.id]}
            >
              {addedToCart[product.id] ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Products;
