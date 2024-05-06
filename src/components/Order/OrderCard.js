import React from "react";
import OrderProduct from "./OrderProduct";
import { useNavigate } from "react-router-dom";

export default function OrderCard(props) {
  const navigate = useNavigate();
  const localDate = new Date(props.item.order_date).toLocaleString();
  let totalPrice = 0;
  for (let i of props.item.order_items) totalPrice += i.unit_price;
  return (
    <div className="card-order">
      <div className="order-bar">
        <span className="order-id">Order ID: {props.item.id}</span>
        <span className="order-status">
          Status: {props.item.order_status.status_name}
        </span>
        <span className="order-date">Date Ordered: {localDate}</span>
      </div>
      <div className="order-products">
        {props.item.order_items.map((item) => (
          <OrderProduct key={item.id} item={item} />
        ))}
      </div>
      <div className="order-price">
        { props.button && <button className="order-detail-button" onClick={()=>{
            navigate(`/orders/${props.item.id}`)
        }}>View Order</button> }
        <span className="order-price-span">Total Price: {totalPrice}</span>
      </div>
    </div>
  );
}
