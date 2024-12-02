// src/ProductCard/ProductCard.js
import React from 'react';
import './ProductCard.css'; // Import the CSS for styling

const ProductCard = ({ title, description, price, imageUrl }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <p className="product-price">${price}</p>
    </div>
  );
};

export default ProductCard;
