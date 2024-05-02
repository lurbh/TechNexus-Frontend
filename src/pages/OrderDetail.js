import React from "react";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import OrdersContextData from "../context/OrdersContext";
import OrderInfo from "../components/Order/OrderInfo";


export default function OrderDetail()
{
    
    return (
        <>
            <Navbar currPage='Orders' />
                <OrdersContextData>
                    <OrderInfo />
                </OrdersContextData>
            <Footer />
        </>
    )
}