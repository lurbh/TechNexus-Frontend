import React, { useContext, useEffect } from "react";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import AddProductsForm from "../components/Products/AddProductsForm";
import ProductContextData from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function AddProducts() {
  let navigate = useNavigate();
  const context = useContext(UserContext);
  useEffect(() => {
    if (context.getRole() !== 1 || context.getRole() !== 3) navigate("/");
  }, [context, navigate]);
  return (
    <>
      <Navbar currPage="Products" />
      <ProductContextData>
        <AddProductsForm />
      </ProductContextData>
      <Footer />
    </>
  );
}
