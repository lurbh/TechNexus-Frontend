import React from "react";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import ProductsList from "../components/Products/ProductsList";
import ProductContextData from "../context/ProductContext";
import { useParams } from "react-router-dom";

export default function Products() {
  const { catogeryID } = useParams();
  return (
    <>
      <Navbar currPage="Products" />
      <ProductContextData>
        <ProductsList catogeryID={catogeryID} />
      </ProductContextData>
      <Footer />
    </>
  );
}
