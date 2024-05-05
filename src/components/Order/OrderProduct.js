import React from "react";

export default function OrderProduct(props) {
  console.log(props);
  return (
    <div className="order-product-card">
      <img
        src={props.item.product.image_url}
        alt="Product Card"
        className="order-product-image"
      />
      <div className="order-product-content">
        <h2 className="order-product-title">
          {props.item ? props.item.product.product_name : "Product Name"}
        </h2>
        <h3 className="order-product-price">
          {props.item ? props.item.product.price : "Price"}
        </h3>
        <h3 className="order-product-quantity">
          {props.item ? props.item.quantity : "Quantity"}
        </h3>
        <h3 className="order-product-totalprice">
          {props.item
            ? props.item.product.price * props.item.quantity
            : "Price"}
        </h3>
      </div>
    </div>
  );
}
