import React from "react";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import ProductsList from "../components/Products/ProductsList";
import ProductContextData from "../context/ProductContext";

export default function Products() {
  return (
    <>
      <Navbar currPage="Products" />
      <ProductContextData>
        <ProductsList />
      </ProductContextData>
      <Footer />
    </>
  );
}
