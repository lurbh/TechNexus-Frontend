import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import ProductContextData from "../context/ProductContext";
import EditProductsForm from "../components/Products/EditProductsForm";

export default function EditProducts() {
  const { productID } = useParams();
  return (
    <>
      <Navbar currPage="Products" />
      <ProductContextData>
        <EditProductsForm productID={productID} />
      </ProductContextData>
      <Footer />
    </>
  );
}
