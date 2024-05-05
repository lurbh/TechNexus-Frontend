import React from "react";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import OrdersContextData from "../context/OrdersContext";
import OrderInfo from "../components/Order/OrderInfo";
import { useParams } from "react-router-dom";

export default function OrderDetail() {
  const { orderID } = useParams();
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
