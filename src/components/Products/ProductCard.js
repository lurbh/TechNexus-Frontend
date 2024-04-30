import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

export default function Productsmcard(props){
    let cartcontext = useContext(CartContext) 
    const [inCart,setInCart] = useState(false);
    let check = cartcontext.checkInCart(props.item.id);
    // setInCart(check);
    //setInCart(cartcontext.checkInCart(props.item.id));

    return (
        <div className="smcard-product">
            <img src={props.item.image_url} alt="Product smcard" className="smcard-product-image"/>
            <div className="smcard-product-content">
                <h2 className="smcard-product-title">{props.item?props.item.product_name:"Product Name"}</h2>
                <h3 className="smcard-product-price">Price : {props.item?props.item.price:"Price"} - Qty Left : ( {props.item?props.item.quantity_available:"quantity_available"} )</h3>
                <h5 className="smcard-product-description">{props.item?props.item.description:"Description"}</h5>
                <div className="smcard-product-buttons">
                    {inCart? 
                    <div className="product-quantity">
                        <button className="product-minus-quantity">-</button>
                        <span className="product-quantity">{props.item.quantity}</span>
                        <button className="product-plus-quantity">+</button>
                    </div>
                    :<button className="btn-edit" onClick={(e) => {
                        cartcontext.addToCart(props.item.id)
                    }}>Add to Cart</button>}
                </div>
            </div>
        </div>
    )
}