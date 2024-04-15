import { createContext, useEffect, useMemo, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

const BASE_API_URL = "https://7319-lurbh-technexusbackend-kpjjsas47oi.ws-us110.gitpod.io";

export default function ProductContextData(props) 
{
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [brands, setBrands] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const responseproducts = await axios.get(BASE_API_URL + "/products");
            setProducts(responseproducts.data.products)
            const responsecategories = await axios.get(BASE_API_URL + "/products/allcategories");
            setCategories(responsecategories.data.categories)
            const responsebrands = await axios.get(BASE_API_URL + "/products/brands");
            setBrands(responsebrands.data.brands)
        }

        fetchData()
    },[])

    const addProduct = async (product_name,category_id,brand_id,description,price,quantity_available) => {
        const response = await axios.post(BASE_API_URL + "/products/", {
            product_name : product_name,
            category_id : category_id,
            brand_id: brand_id,
            description: description,
            price: price,
            quantity_available : quantity_available
        });
        let id = response.data.message[0].insertId;
        setProducts([...products,{
            product_id: id,
            product_name: product_name,
            category_id: category_id,
            brand_id: brand_id,
            description: description,
            price: price,
            quantity_available: quantity_available
        }])
    }

    const updateProduct = async (id,product_name,category_id,brand_id,description,price,quantity_available) => {
        const response = await axios.put(BASE_API_URL + `/products/${id}`, {
            product_name : product_name,
            category_id : category_id,
            brand_id: brand_id,
            description: description,
            price: price,
            quantity_available : quantity_available
        });
        const updatedProduct = {
            product_id: id,
            product_name: product_name,
            category_id: category_id,
            brand_id: brand_id,
            description: description,
            price: price,
            quantity_available: quantity_available
        }
        const cloneproducts = products.slice();
        const indexToUpdate = cloneproducts.findIndex((p) => p.product_id===id)
        cloneproducts.splice(indexToUpdate,1,updatedProduct);
        setProducts(cloneproducts);
    }

    const getProductByID = (ProductParams) => {
        console.log(products);
        const foundProduct = products.filter((p) => p.product_id === parseInt(ProductParams)) 
        console.log(foundProduct);
        return foundProduct;
    }

    const context =  {
            products : products,
            getProducts : () => {return products;},
            addProduct : addProduct,
            updateProduct : updateProduct,
            getProductByID: getProductByID,
            getCategories : () => {return categories;},
            getBrands : () => {return brands;}
    }

    return (
        <ProductContext.Provider value={context}>
            {props.children}
        </ProductContext.Provider>
    )
}