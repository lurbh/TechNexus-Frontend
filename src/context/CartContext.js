import { createContext, useContext, useEffect, useState } from "react";
import APIHandler from '../api/api';
import { UserContext } from "./UserContext";

export const CartContext = createContext();

export default function CartContextData(props) {

  const userContext = useContext(UserContext);
  const [cart,setCart] = useState([]);
  const [noOfItems, setNoOfItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0.0)
  
  useEffect(() => {

    const fetchData = async () => {
      try {
        if(userContext.userid)
        {
          const getCartItems = await APIHandler.get(`/cart/usercart/${userContext.userid}`);
          setCart(getCartItems.data.cart_items);
          setNoOfItems(getCartItems.data.cart_items.length);
          let totalPrice = 0;
          for (let item of getCartItems.data.cart_items)
          {
            let itemprice = item.quantity * item.product.price
            totalPrice += itemprice;
          }
          setTotalPrice(totalPrice)
        }
      }
      catch(error)
      {
        console.log(error)
      }
    }

    fetchData()
  },[userContext.userid])

  const context =  {
    cart,
    noOfItems,
    totalPrice
  }

  return (
    <CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>
)

}