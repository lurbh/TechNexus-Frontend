import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartCard from "./CartCard";

export default function CartSection() {
  const cartcontext = useContext(CartContext);

  return (
    <section className="cart-section">
      <h2 className="cart-section-header">Cart</h2>
      <div className="cart-body">
        <div className="cart-products-list">
          <div className="cart-products-list-header">
            <h2 className="cart-header-product">Product</h2>
            <h2 className="cart-header-price">Price</h2>
            <h2 className="cart-header-quantity">Quantity</h2>
            <h2 className="cart-header-total-price">Total Price</h2>
            <h2 className="cart-header-actions">Actions</h2>
          </div>
          {cartcontext.cart.map((item) => (
            <CartCard key={item.id} item={item} />
          ))}
          <div className="cart-footer">
            <h2 className="cart-footer-title">Total Price:</h2>
            <span className="cart-footer-total-price">
              {cartcontext.totalPrice}
            </span>
            <button
              className="checkout-button"
              onClick={() => {
                cartcontext.checkout();
              }}
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
