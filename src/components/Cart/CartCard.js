import React from "react";

export default function CartCard(props)
{
    return (
        <div className="cart-product">
            <img src={props.item.product.image_url} alt="Product Card" className="cart-product-image"/>
            <div className="cart-product-content">
                <h2 className="cart-product-title">{props.item?props.item.product.product_name:"Product Name"}</h2>
                <h3 className="cart-product-price">{props.item?props.item.product.price:"Price"}</h3>
                <div className="cart-product-quantity">
                    <button className="cart-minus-quantity">-</button>
                    <span className="cart-quantity">{props.item.quantity}</span>
                    <button className="cart-plus-quantity">+</button>
                </div>
                <h3 className="cart-product-totalprice">{props.item?props.item.product.price * props.item.quantity:"Price"}</h3>
                <button className="cart-delete-item">Delete</button>
            </div>
        </div>
    )
}