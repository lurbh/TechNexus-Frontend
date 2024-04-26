import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ProductContext } from "../../context/ProductContext";

export default function DeleteProduct(props)
{
    const context = useContext(ProductContext); 
    let navigate = useNavigate();
    const [product, setProduct] = useState({
        product_name: "",
        category_id: 0,
        brand_id: 0,
        description: "",
        price: 0,
        quantity_available: 0
    })
    useEffect( ()=> {
        const fetchProducts = () => {
            let tempProduct = context.getProductByID(props.productID);
            if(tempProduct.length)
                setProduct(...tempProduct);
        }
        fetchProducts()
    }, [context, props.productID])


    return (
        <div className="centre">
            <h2>Delete Product</h2>
            <div className="del-holder">
                <div className="del-title">
                    Are you sure you want to delete Product {product.product_name}
                </div>  
                <button className="del-cancel" onClick={() => {navigate("/products")}}>Cancel</button>
                <button className="del-delete" onClick={() =>{
                    context.deleteProduct(props.productID);
                    navigate("/products");
                }}>Delete</button>
            </div>
        </div>
    )
}