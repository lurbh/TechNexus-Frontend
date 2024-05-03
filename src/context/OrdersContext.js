import { createContext, useContext, useEffect, useState } from "react";
import APIHandler from '../api/api';
import { UserContext } from "./UserContext";

export const OrdersContext = createContext();

export default function OrdersContextData(props) {
    const userContext = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if(userContext.userid)
                {
                    const getOrderItems = await APIHandler.get(`/orders/${userContext.userid}`);
                    console.log(getOrderItems)
                    setOrders(getOrderItems.data.orders)
                }
                else
                {
                    setOrders([]);
                }
            }
            catch(error)
            {
                console.log(error)
                if(error.response.status === 498)
                userContext.refresh();
            }
            }
        
            fetchData()
    },[userContext])

    const getOrderByID = async (order_id) => {
        const foundOrder = orders.filter((o) => o.id === parseInt(order_id)) 
        console.log(foundOrder);
        return foundOrder;
    }


    const context =  {
        orders,
        getOrderByID:getOrderByID
      }
    
      return (
        <OrdersContext.Provider value={context}>
            {props.children}
        </OrdersContext.Provider>
    )
}