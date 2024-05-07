import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";

export default function Productsmcard(props) {
  let cartcontext = useContext(CartContext);
  const [inCart, setInCart] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    if (cartcontext.cart) {
      setInCart(false);
      for (const cartitem of cartcontext.cart) {
        if (props.item.id === cartitem.product_id) {
          setInCart(true);
          setCartQuantity(cartitem.quantity);
        }
      }
    }
  }, [cartcontext.cart, props.item.id]);

  if(props.item.quantity_available <= 0)
    return (<></>)

  return (
    <div className="smcard-product">
      <img
        src={props.item.image_url}
        alt="Product smcard"
        className="smcard-product-image"
      />
      <div className="smcard-product-content">
        <h2 className="smcard-product-title">
          {props.item ? props.item.product_name : "Product Name"}
        </h2>
        <h3 className="smcard-product-price">
          Price : {props.item ? props.item.price : "Price"} - Qty Left : ({" "}
          {props.item ? props.item.quantity_available : "quantity_available"} )
        </h3>
        <h5 className="smcard-product-description">
          {props.item ? props.item.description : "Description"}
        </h5>
        <div className="smcard-product-buttons">
          {inCart ? (
            <div className="product-quantity">
              <button
                className="btn-remove-from-cart"
                onClick={(e) => {
                  cartcontext.deleteFromCart(props.item.id);
                }}
              >
                Remove
              </button>
              <button
                className="product-minus-quantity"
                onClick={(e) => {
                  cartcontext.decreaseQuantity(props.item.id);
                }}
              >
                -
              </button>
              <span className="product-quantity">{cartQuantity}</span>
              <button
                className="product-plus-quantity"
                onClick={(e) => {
                  cartcontext.increaseQuantity(props.item.id);
                }}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="btn-add-to-cart"
              onClick={(e) => {
                cartcontext.addToCart(props.item.id);
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
