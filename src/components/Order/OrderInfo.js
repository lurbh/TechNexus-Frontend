import React, { useContext, useEffect, useState } from "react";
import { OrdersContext } from "../../context/OrdersContext";


export default function OrderInfo(props)
{
    const ordercontext = useContext(OrdersContext);
    const [orderDetail,setOrderDetail] = useState({})

    useEffect(()=> {
        const fetchorder = () => {
            let tempOrder = ordercontext.getOrderByID(props.orderID)
            if(tempOrder.length)
            {
                setOrderDetail(...tempOrder);
                console.log(orderDetail)
            }
        }
        fetchorder()
    },[props.orderID])

    return (
        <></>
    )
}