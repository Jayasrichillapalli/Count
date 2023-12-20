import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Header({ allProducts, setFilteredProducts }) {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  

  const handleAddToCart = () => {
    setCartItemCount((prevCount) => prevCount + 1);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const filteredProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid header-content">
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
            <button className="btn" type="button" onClick={handleSearchSubmit}>
              <i className="fas fa-search"></i>
            </button>
          </form>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white text-decoration-none"
                  aria-current="page"
                >
                  <div>
                    <Link to="/checkout">
                      <i className="fas fa-shopping-cart" style={{ color: 'white' }}>
                      <p className="item-count">{cartItemCount}</p>
                      </i>
                    </Link>
                  </div>
                </a>
              </li>
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
        </div>
      </nav>
    </div>
  );
}

export default Header;