import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

const BASE_API_URL = "https://7319-lurbh-technexusbackend-fkikxvtooya.ws-us110.gitpod.io/api"//process.env.REACT_APP_BASE_API_URL;

export default function ProductContextData(props) 
{
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [brands, setBrands] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const responseproducts = await axios.get(BASE_API_URL + "/product");
            setProducts(responseproducts.data.products)
            const responsecategories = await axios.get(BASE_API_URL + "/product/allcategories");
            setCategories(responsecategories.data.categories)
            const responsebrands = await axios.get(BASE_API_URL + "/product/brands");
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
        if(response.status === 202)
        {
            const updatedProduct = {
                product_id: id,
                product_name: product_name,
                category_id: category_id,
                brand_id: brand_id,
                description: description,
                price: price,
                quantity_available: quantity_available
            }
            // const cloneproducts = products.slice();
            // const indexToUpdate = cloneproducts.findIndex((p) => p.product_id===id)
            // cloneproducts.splice(indexToUpdate,1,updatedProduct);
            // setProducts(cloneproducts);
            setProducts(prevState => {
                const indexToUpdate = prevState.findIndex((p) => p.product_id===id);
                prevState.splice(indexToUpdate,1,updatedProduct)
            })
        }
    }

    const deleteProduct = async (ProductID) => {
        const response = await axios.delete(BASE_API_URL + `/products/${ProductID}`);
        if(response.status===200)
        {
            setProducts(prevState => {
                const indexToUpdate = prevState.findIndex((p) => p.product_id===ProductID);
                prevState.splice(indexToUpdate,1)
            })
            // const cloneproducts = products.slice();
            // const indexToUpdate = cloneproducts.findIndex((p) => p.product_id===ProductID)
            // cloneproducts.splice(indexToUpdate,1);
            // setProducts(cloneproducts);
        }
    }

    const getProductByID = (ProductParams) => {
        const foundProduct = products.filter((p) => p.product_id === parseInt(ProductParams)) 
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