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
                    const getCartItems = await APIHandler.get(`/orders/${userContext.userid}`);
                    setOrders(getCartItems.data.cart_items)
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

    const context =  {
        orders
      }
    
      return (
        <OrdersContext.Provider value={context}>
            {props.children}
        </OrdersContext.Provider>
    )
}