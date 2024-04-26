import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Productsmcard(props){
    let navigate = useNavigate(); 

    return (
        <div className="smcard-product">
            <img src={props.item.image_url} alt="Product smcard" className="smcard-product-image"/>
            <div className="smcard-product-content">
                <h2 className="smcard-product-title">{props.item?props.item.product_name:"Product Name"}</h2>
                <h3 className="smcard-product-price">Price : {props.item?props.item.price:"Price"} - Qty Left : ( {props.item?props.item.quantity_available:"quantity_available"} )</h3>
                <h5 className="smcard-product-description">{props.item?props.item.description:"Description"}</h5>
                <div className="smcard-product-buttons">
                    <button className="btn-edit" onClick={(e) => {}}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}