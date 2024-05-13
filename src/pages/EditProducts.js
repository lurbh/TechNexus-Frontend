import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import ProductContextData from "../context/ProductContext";
import EditProductsForm from "../components/Products/EditProductsForm";
import { UserContext } from "../context/UserContext";

export default function EditProducts() {
  const { productID } = useParams();
  let navigate = useNavigate();
  const context = useContext(UserContext);
  useEffect(() => {
    if (context.getRole() === 0 || context.getRole() === 2) navigate("/");
  }, [context, navigate]);

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
