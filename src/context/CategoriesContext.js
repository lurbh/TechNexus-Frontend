import { createContext, useState } from "react";

export const CategoriesContext = createContext();

export default function CategoriesContextData(props) {
    const [categories, setCategories] = useState([
        {
            category_id :1 ,
            category_name : "Smartphones",
            category_img_url : "",
        },
        {
            category_id :2 ,
            category_name : "Laptops",
            category_img_url : "",
        },
        {
            category_id :3 ,
            category_name : "Headphones",
            category_img_url : "",
        },
        {
            category_id :4 ,
            category_name : "Gaming Consoles",
            category_img_url : "",
        }
    ]);

    const context = {
        getCategories : () => {return categories;}
    }

    return (
        <CategoriesContext.Provider value={context}>
            {props.children}
        </CategoriesContext.Provider>
    )
} 