import { createContext, useContext, useEffect, useState } from "react";
import APIHandler from "../api/api";
import { UserContext } from "./UserContext";

export const OrdersContext = createContext();

export default function OrdersContextData(props) {
  const userContext = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userContext.userid) {
          const getOrderItems = await APIHandler.get(
            `/orders/${userContext.userid}`
          );
          setOrders(getOrderItems.data.orders);
        } else {
          setOrders([]);
        }
      } catch (error) {
        console.log(error);
        if (error.response.status === 498) userContext.refresh();
      }
    };

    fetchData();
  }, [userContext]);

  const getOrderByID = async (order_id) => {
    if (orders.length) {
      const foundOrder = orders.filter((o) => o.id === parseInt(order_id));
      return foundOrder;
    }
  };

  const paymentCompleted = async (order_id) => {
    try {
      const response = await APIHandler.put(`/orders/payment/${order_id}`);
      if (response.status === 200) {
        const cloneorders = orders.slice();
        const indexToUpdate = cloneorders.findIndex((p) => p.id === order_id);
        cloneorders.splice(indexToUpdate, 1, response.data.orders);
        setOrders(cloneorders);
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      if (error.response.status === 498) userContext.refresh();
    }
  };

  const context = {
    orders,
    getOrderByID: getOrderByID,
    paymentCompleted: paymentCompleted,
  };

  return (
    <OrdersContext.Provider value={context}>
      {props.children}
    </OrdersContext.Provider>
  );
}
