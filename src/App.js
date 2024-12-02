// src/ProductCard/App.js
import React from 'react';
import ProductCard from './ProductCard'; // Import ProductCard component

const App = () => {
  return (
    <div className="app">
      <ProductCard
        title="Wireless Headphones"
        description="Noise-cancelling, over-ear headphones"
        price={199.99}
        imageUrl="https://example.com/headphones.jpg" // Example image URL
      />
      {/* You can add more ProductCard components with different product details */}
    </div>
  );
};

export default App;
