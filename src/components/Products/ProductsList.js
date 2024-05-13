import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import ProductCard from "./ProductCard";
import SeachForm from "./SearchForm";

export default function ProductsList(props) {
  const context = useContext(ProductContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(context.getProducts());
  }, [context]);

  return (
    <div className="products-section">
      <h2 className="product-list-header">Product List</h2>
      <div className="list-search-holder">
        <SeachForm setProducts={setProducts} catogeryID={props.catogeryID} />
        {products.length ? (
          <ul className="product-list-user">
            {products.map((product) => (
              <ProductCard key={product.id} item={product} />
            ))}
          </ul>
        ) : (
          <h4 className="loading">Loading ...</h4>
        )}
      </div>
    </div>
  );
}
