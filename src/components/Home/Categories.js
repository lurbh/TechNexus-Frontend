import React, { useContext } from "react";
import CategoriesCard from "../Main/CategoriesCard";
import { CategoriesContext } from "../../context/CategoriesContext";

export default function Categories()
{
    const context = useContext(CategoriesContext);

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