import React, { useContext } from "react";
import { OrdersContext } from "../../context/OrdersContext";
import OrderCard from "./OrderCard";

export default function OrderList() {
  const ordercontext = useContext(OrdersContext);

  return (
    <div className="orders-section">
      <h2 className="order-list-header">Order List</h2>
      {ordercontext.orders.length ? (
        <ul className="order-list-user">
          {ordercontext.orders.map((order) => (
            <OrderCard key={order.id} item={order} button={true} />
          ))}
        </ul>
      ) : (
        <h4 className="loading">Loading ...</h4>
      )}
    </div>
  );
}
