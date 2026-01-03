import React from "react";

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <table className="cart-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td className="cart-image">{item.image}</td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span className="quantity">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </td>
              <td>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="total">TOTAL: ${total}</h2>
    </div>
  );
};

export default Cart;
