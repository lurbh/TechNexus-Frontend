import React from "react";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import AddProductsForm from "../components/Products/AddProductsForm";
import ProductContextData from "../context/ProductContext";

export default function AddProducts()
{
    
    return (
        <>
            <Navbar currPage='Products' />
            <ProductContextData>
                <AddProductsForm />
            </ProductContextData>
            <Footer />
        </>
    )
}