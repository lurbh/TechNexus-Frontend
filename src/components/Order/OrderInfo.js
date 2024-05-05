import React, { useContext, useEffect, useState } from "react";
import { OrdersContext } from "../../context/OrdersContext";
import OrderCard from "./OrderCard";

export default function OrderInfo(props) {
  const ordercontext = useContext(OrdersContext);
  const [orderDetail, setOrderDetail] = useState({});

  useEffect(() => {
    const fetchorder = async () => {
      let tempOrder = await ordercontext.getOrderByID(props.orderID);
      console.log(tempOrder);
      if (tempOrder.length) {
        setOrderDetail(...tempOrder);
      }
    };
    fetchorder();
  }, [props.orderID, ordercontext]);

  console.log(orderDetail);

  return <OrderCard item={orderDetail} />;
}
