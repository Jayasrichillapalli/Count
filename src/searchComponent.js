// Your main component file

import React, { useState, useEffect } from 'react';
import Header from './Header';
import Products from './Products';
import axios from 'axios';

function MainComponent() {
  const [Products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (searchTerm) => {
    // Filter products based on the search term
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update the filtered products state
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Header products={products} onSearch={handleSearch} />
      <Products products={filteredProducts.length > 0 ? filteredProducts : products} />
    </div>
  );
}

export default MainComponent;
