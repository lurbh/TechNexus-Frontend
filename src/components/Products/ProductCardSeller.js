import React from "react";
import { useNavigate } from 'react-router-dom';

export default function ProductCardSeller(props){
    let navigate = useNavigate(); 

    return (
        <div className="card-product">
            <img src={props.item.image_url} alt="Product Card" className="card-product-image"/>
            <div className="card-product-content">
                <h2 className="card-product-title">{props.item?props.item.product_name:"Product Name"}</h2>
                <h3 className="card-product-price">Price : {props.item?props.item.price:"Price"} - Qty Left : ( {props.item?props.item.quantity_available:"quantity_available"} )</h3>
                <h5 className="card-product-description">{props.item?props.item.description:"Description"}</h5>
                <div className="card-product-buttons">
                    <button className="btn-edit" onClick={(e) => {navigate(`/products/edit/${props.item.id}`)}}>Edit</button>
                    <button className="btn-delete" onClick={(e) => {navigate(`/products/delete/${props.item.id}`)}}>Delete</button>
                </div>
            </div>
        </div>
    )
}

// product_id: id,
//             product_name: product_name,
//             category_id: category_id,
//             brand_id: brand_id,
//             description: description,
//             price: price,
//             quantity_available: quantity_available