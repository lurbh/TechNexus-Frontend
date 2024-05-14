import React, { useContext, useEffect } from "react";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import ProductContextData from "../context/ProductContext";
import ProductsListSeller from "../components/Products/ProductsListSeller";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function ProductsSeller() {
  let navigate = useNavigate();
  const context = useContext(UserContext);

  useEffect(() => {
    console.log(context.getRole())
    if (context.getRole() === 0 || context.getRole() === 2) navigate("/");
  }, [context, navigate]);

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
