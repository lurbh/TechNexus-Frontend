import React from "react";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import ProductContextData from "../context/ProductContext";
import ProductsListSeller from "../components/Products/ProductsListSeller";

export default function ProductsSeller() {
  return (
    <>
      <Navbar currPage="Products" />
      <ProductContextData>
        <ProductsListSeller />
      </ProductContextData>
      <Footer />
    </>
  );
}
