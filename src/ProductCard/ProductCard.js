// src/ProductCard/ProductCard.js
import React from 'react';
import './ProductCard.css';  // Importing the CSS styles

const ProductCard = ({ title, description, price, imageUrl }) => {
  return (
    <div className="product-card">
      {/* Product image */}
      <img src={imageUrl} alt={title} className="product-image" />
      {/* Product title */}
      <h3 className="product-title">{title}</h3>
      {/* Product description */}
      <p className="product-description">{description}</p>
      {/* Product price */}
      <span className="product-price">${price}</span>
    </div>
  );
};

export default ProductCard;
