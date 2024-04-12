import React from "react";
import CategoryImage from "../../assets/Smartphone-Category.png";

export default function CategoriesCard(props){

    return (
        <>
            <div className="card-category">
                <img src={CategoryImage} alt="Category Card Image" className="card-category-image"/>
                <div>
                    <h2 className="card-category-title">{props.item?props.item.category_name:"Title"}</h2>
                </div>
                
            </div>
        </>
    )
}