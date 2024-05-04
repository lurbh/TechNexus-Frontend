import React from "react";
import { useParams } from "react-router-dom";
import OrdersContextData from "../context/OrdersContext";
import Success from "../components/Order/Success";

export default function PaymentSuccess()
{
    const { orderID } = useParams();
    
    
    return (
        <OrdersContextData>
            <Success orderID={orderID}/>
        </OrdersContextData>
    )
}