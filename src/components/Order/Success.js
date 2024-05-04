import React, { useContext, useEffect } from "react";
import { OrdersContext } from "../../context/OrdersContext";
import { useNavigate } from "react-router-dom";

export default function Success(props)
{
    const orderscontext = useContext(OrdersContext);
    let navigate = useNavigate();

    useEffect(()=> {
        console.log("Hit")
        if(orderscontext.paymentCompleted(props.orderID))
            navigate(`/orders/${props.orderID}`)
    },[props.orderID, orderscontext, navigate])

    return (
        <>
        </>
    )
}