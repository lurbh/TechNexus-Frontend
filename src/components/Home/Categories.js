import React, { useContext } from "react";
import CategoriesCard from "../Main/CategoriesCard";
import { ProductContext } from "../../context/ProductContext";

export default function Categories()
{
    const context = useContext(ProductContext);

    return (
        <section className="categories-section">
            <h2 className="categories-header">Categories</h2>
            <div className="card-category-holder">
                {context.getCategories().map((cat) => {;
                    return <CategoriesCard key={cat.category_id} item={cat}/>
                })}
                <CategoriesCard />
            </div>
        </section>
    )
}