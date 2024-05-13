import React from "react";
import CategoryImage from "../../assets/Smartphone-Category.png";
import { useNavigate } from "react-router-dom";

export default function CategoriesCard(props) {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${props.item.id}`);
  };

  return (
    <>
      <div className="card-category" onClick={handleClick}>
        <img
          src={props.item ? props.item.category_img_url : CategoryImage}
          alt="Category Card"
          className="card-category-image"
        />
        <div>
          <h2 className="card-category-title">
            {props.item ? props.item.category_name : "Title"}
          </h2>
        </div>
      </div>
    </>
  );
}
