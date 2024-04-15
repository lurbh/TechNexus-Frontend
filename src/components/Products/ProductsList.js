import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import ProductCard from "../Main/ProductCard";

export default function ProductsList()
{
    const context = useContext(ProductContext);

    return (
        <div className="products-section">
            <h2 className="product-list-header">Product List</h2>
            <ul className="product-list">
                {context.getProducts().map(product =>  (
                    <ProductCard key={product.product_id} item={product} />
                ))}
            </ul>
        </div>
    )
}