import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import ProductContextData from "../context/ProductContext";
import DeleteProduct from "../components/Products/DeleteProducts";
import { UserContext } from "../context/UserContext";

export default function DelProducts() {
  const { productID } = useParams();
  let navigate = useNavigate();
  const context = useContext(UserContext);
  useEffect(() => {
    if (context.getRole() !== 1 || context.getRole() !== 3) navigate("/");
  }, [context, navigate]);
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
