import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import ProductCardSeller from "./ProductCardSeller";

export default function ProductsListSeller() {
  const context = useContext(ProductContext);

  return (
    <div className="products-section">
      <h2 className="product-list-header">Seller Product List</h2>
      {context.products.length ? (
        <ul className="product-list-seller">
          {context.getProducts().map((product) => (
            <ProductCardSeller key={product.id} item={product} />
          ))}
        </ul>
      ) : (
        <h4 className="loading">Loading ...</h4>
      )}
    </div>
  );
}
