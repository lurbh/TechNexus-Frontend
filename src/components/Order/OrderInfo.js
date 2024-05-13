import React, { useContext, useEffect, useState } from "react";
import { OrdersContext } from "../../context/OrdersContext";
import OrderCard from "./OrderCard";

export default function OrderInfo(props) {
  const ordercontext = useContext(OrdersContext);
  const [orderDetail, setOrderDetail] = useState({});

  useEffect(() => {
    const fetchorder = async () => {
      let tempOrder = await ordercontext.getOrderByID(props.orderID);
      if (Array.isArray(tempOrder) && tempOrder.length) {
        setOrderDetail(...tempOrder);
      }
    };
    fetchorder();
  }, [props.orderID, ordercontext]);

  return (
    <div className="order-info">
      <h2 className="order-info-title">Order Info</h2>
      {Object.keys(orderDetail).length === 0 ? (
        <></>
      ) : (
        <OrderCard item={orderDetail} />
      )}
    </div>
  );
}
