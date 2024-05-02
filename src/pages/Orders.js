import React from "react";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import OrdersContextData from "../context/OrdersContext";
import OrderList from "../components/Order/OrderList";


export default function Orders()
{
    
    return (
        <>
            <Navbar currPage='Account' />
                <OrdersContextData>
                    <OrderList />
                </OrdersContextData>
            <Footer />
        </>
    )
}