import { createContext, useEffect, useState } from "react";
import APIHandler from '../api/api';

export const ProductContext = createContext();

const BASE_API_URL = "https://7319-lurbh-technexusbackend-fkikxvtooya.ws-us110.gitpod.io/api"//process.env.REACT_APP_BASE_API_URL;

export default function ProductContextData(props) 
{
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [brands, setBrands] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const responseproducts = await APIHandler.get("/products");
            setProducts(responseproducts.data.products)
            const responsecategories = await APIHandler.get("/products/allcategories");
            setCategories(responsecategories.data.categories)
            const responsebrands = await APIHandler.get("/products/brands");
            setBrands(responsebrands.data.brands)
        }

        fetchData()
    },[])

    const addProduct = async (product_name,category_id,brand_id,description,price,quantity_available) => {
        const response = await APIHandler.post("/products/", {
            product_name : product_name,
            category_id : category_id,
            brand_id: brand_id,
            description: description,
            price: price,
            quantity_available : quantity_available
        });
        let id = response.data.message.id;
        setProducts([...products,{
            id: id,
            product_name: product_name,
            category_id: category_id,
            brand_id: brand_id,
            description: description,
            price: price,
            quantity_available: quantity_available
        }])
    }

    const updateProduct = async (id,product_name,category_id,brand_id,description,price,quantity_available) => {
        const response = await  APIHandler.put(`/products/${id}`, {
            product_name : product_name,
            category_id : category_id,
            brand_id: brand_id,
            description: description,
            price: price,
            quantity_available : quantity_available
        });
        if(response.status === 202)
        {
            const updatedProduct = {
                id: id,
                product_name: product_name,
                category_id: category_id,
                brand_id: brand_id,
                description: description,
                price: price,
                quantity_available: quantity_available
            }
            // const cloneproducts = products.slice();
            // const indexToUpdate = cloneproducts.findIndex((p) => p.id===id)
            // cloneproducts.splice(indexToUpdate,1,updatedProduct);
            // setProducts(cloneproducts);
            setProducts(prevState => {
                const indexToUpdate = prevState.findIndex((p) => p.id===id);
                prevState.splice(indexToUpdate,1,updatedProduct)
            })
        }
    }

    const deleteProduct = async (ProductID) => {
        const response = await  APIHandler.delete(`/products/${ProductID}`);
        if(response.status===200)
        {
            setProducts(prevState => {
                const indexToUpdate = prevState.findIndex((p) => p.id===ProductID);
                prevState.splice(indexToUpdate,1)
            })
            // const cloneproducts = products.slice();
            // const indexToUpdate = cloneproducts.findIndex((p) => p.id===ProductID)
            // cloneproducts.splice(indexToUpdate,1);
            // setProducts(cloneproducts);
        }
    }

    const getProductByID = (ProductParams) => {
        const foundProduct = products.filter((p) => p.id === parseInt(ProductParams)) 
        return foundProduct;
    }

    const context =  {
            products : products,
            getProducts : () => {return products;},
            addProduct : addProduct,
            updateProduct : updateProduct,
            deleteProduct : deleteProduct,
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