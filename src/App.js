// src/App.js
import React from 'react';
import ProductCard from './ProductCard/ProductCard';  // Importing the ProductCard component

const App = () => {
  const product = {
    title: "Wireless Headphones",  // Product title
    description: "Noise-cancelling, Best quality. Experience rich sound and comfort.", // Product description
    price: 199.99,  // Product price
    // Direct image URL you provided
    imageUrl: "https://www.binarytides.com/blog/wp-content/uploads/2020/02/cowin-e7-pro-active-noise-cancelling-headphones.jpg"
  };

  return (
    <div>
      <h1>Product Details</h1>
      {/* Pass the product data to the ProductCard component */}
      <ProductCard
        title={product.title}
        description={product.description}
        price={product.price}
        imageUrl={product.imageUrl}
      />
    </div>
  );
};

export default App;
