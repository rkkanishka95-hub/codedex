import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image">{product.image}</div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button className="add-btn" onClick={() => addToCart(product)}>
        Add
      </button>
    </div>
  );
};

export default ProductCard;
