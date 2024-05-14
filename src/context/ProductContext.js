import { createContext, useContext, useEffect, useState } from "react";
import APIHandler from "../api/api";
import { UserContext } from "./UserContext";
import { notifyError, notifySuccess } from "../utils";

export const ProductContext = createContext();

export default function ProductContextData(props) {
  const userContext = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responseproducts = await APIHandler.get("/products");
      setProducts(responseproducts.data.products);
      const responsecategories = await APIHandler.get(
        "/products/allcategories"
      );
      setCategories(responsecategories.data.categories);
      const responsebrands = await APIHandler.get("/products/brands");
      setBrands(responsebrands.data.brands);
    };

    fetchData();
  }, []);

  const addProduct = async (
    product_name,
    category_id,
    brand_id,
    description,
    price,
    quantity_available,
    image_url
  ) => {
    try {
      const response = await APIHandler.post("/products/", {
        product_name: product_name,
        category_id: category_id,
        brand_id: brand_id,
        description: description,
        price: price,
        quantity_available: quantity_available,
        image_url: image_url,
      });
      if (response.status === 201) {
        let id = response.data.message.id;
        setProducts([
          ...products,
          {
            id: id,
            product_name: product_name,
            category_id: category_id,
            brand_id: brand_id,
            description: description,
            price: price,
            quantity_available: quantity_available,
            image_url: image_url,
          },
        ]);
        notifySuccess(`${product_name} has been added`, "Product Added")
      }
    } catch (error) {
      notifyError(`Erro adding ${product_name}`, "Product add Error")
      console.log(error);
      userContext.refresh();
      addProduct(
        product_name,
        category_id,
        brand_id,
        description,
        price,
        quantity_available,
        image_url
      );
    }
  };

  const updateProduct = async (
    id,
    product_name,
    category_id,
    brand_id,
    description,
    price,
    quantity_available,
    image_url
  ) => {
    const response = await APIHandler.put(`/products/${id}`, {
      product_name: product_name,
      category_id: category_id,
      brand_id: brand_id,
      description: description,
      price: price,
      quantity_available: quantity_available,
      image_url: image_url,
    });
    if (response.status === 202) {
      const updatedProduct = {
        id: id,
        product_name: product_name,
        category_id: category_id,
        brand_id: brand_id,
        description: description,
        price: price,
        quantity_available: quantity_available,
        image_url: image_url,
      };
      // const cloneproducts = products.slice();
      // const indexToUpdate = cloneproducts.findIndex((p) => p.id===id)
      // cloneproducts.splice(indexToUpdate,1,updatedProduct);
      // setProducts(cloneproducts);
      setProducts((prevState) => {
        const indexToUpdate = prevState.findIndex((p) => p.id === id);
        prevState.splice(indexToUpdate, 1, updatedProduct);
      });
      notifySuccess(`${product_name} has been updated`, "Product Updated")
    } else if (response.status === 498) {
      userContext.refresh();
    }
  };

  const deleteProduct = async (ProductID) => {
    const response = await APIHandler.delete(`/products/${ProductID}`);
    if (response.status === 200) {
        const product = getProductByID(ProductID)
      setProducts((prevState) => {
        const indexToUpdate = prevState.findIndex((p) => p.id === ProductID);
        prevState.splice(indexToUpdate, 1);
      });
      notifySuccess(`${product.product_name} has been Deleted`, "Product Deleted")
      // const cloneproducts = products.slice();
      // const indexToUpdate = cloneproducts.findIndex((p) => p.id===ProductID)
      // cloneproducts.splice(indexToUpdate,1);
      // setProducts(cloneproducts);
    } else if (response.status === 498) {
        
      userContext.refresh();
    }
  };

  const searchProduct = async (name, category, brand, minprice, maxprice) => {
    const response = await APIHandler.post(`products/search`, {
      name: name,
      category: category,
      brand: brand,
      minprice: minprice,
      maxprice: maxprice,
    });
    if (response.status === 200) {
      return response.data.products;
    } else {
      console.log("Error");
    }
  };

  const getProductByID = (ProductParams) => {
    const foundProduct = products.filter(
      (p) => p.id === parseInt(ProductParams)
    );
    return foundProduct;
  };

  const context = {
    products: products,
    getProducts: () => {
      return products;
    },
    addProduct: addProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
    getProductByID: getProductByID,
    searchProduct: searchProduct,
    getCategories: () => {
      return categories;
    },
    getBrands: () => {
      return brands;
    },
  };

  return (
    <ProductContext.Provider value={context}>
      {props.children}
    </ProductContext.Provider>
  );
}
