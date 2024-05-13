import React, { useContext, useEffect } from "react";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import OrdersContextData from "../context/OrdersContext";
import OrderList from "../components/Order/OrderList";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Orders() {
  let navigate = useNavigate();
  const context = useContext(UserContext);

  useEffect(() => {
    if (context.getRole() === 0) navigate("/");
  }, [context, navigate]);

  return (
    <>
      <Navbar currPage="Account" />
      <OrdersContextData>
        <OrderList />
      </OrdersContextData>
      <Footer />
    </>
  );
}
