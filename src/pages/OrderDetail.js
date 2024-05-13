import React, { useContext, useEffect } from "react";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import OrdersContextData from "../context/OrdersContext";
import OrderInfo from "../components/Order/OrderInfo";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function OrderDetail() {
  const { orderID } = useParams();
  let navigate = useNavigate();
  const context = useContext(UserContext);
  useEffect(() => {
    if (context.getRole() !== 2) navigate("/");
  }, [context, navigate]);

  return (
    <>
      <Navbar currPage="Account" />
      <OrdersContextData>
        <OrderInfo orderID={orderID} />
      </OrdersContextData>
      <Footer />
    </>
  );
}
