import React, { useContext, useEffect } from "react";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import CartSection from "../components/Cart/CartSection";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Cart() {
  let navigate = useNavigate();
  const context = useContext(UserContext);
  useEffect(() => {
    if (context.getRole() !== 2) navigate("/");
  }, [context, navigate]);

  return (
    <>
      <Navbar currPage="Cart" />
      <CartSection />
      <Footer />
    </>
  );
}
