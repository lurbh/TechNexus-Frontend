import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import ProductContextData from "../context/ProductContext";
import DeleteProduct from "../components/Products/DeleteProducts";

export default function DelProducts() {
  const { productID } = useParams();
  return (
    <>
      <Navbar currPage="Products" />
      <ProductContextData>
        <DeleteProduct productID={productID} />
      </ProductContextData>
      <Footer />
    </>
  );
}
