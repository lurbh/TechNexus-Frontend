import { createContext, useContext, useEffect, useState } from "react";
import APIHandler from '../api/api';
import { UserContext } from "./UserContext";
import { set } from "@cloudinary/url-gen/actions/variable";

export const CartContext = createContext();

export default function CartContextData(props) {

  const userContext = useContext(UserContext);
  const [cart,setCart] = useState([]);
  const [noOfItems, setNoOfItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0.0)
  
  useEffect(() => {

    const fetchData = async () => {
      try {
        if(userContext.getUserID())
        {
          const getCartItems = await APIHandler.get("/cart/usercart", {
            user_id : userContext.getUserID()
          })
          console.log(getCartItems);
          setCart(getCartItems.data.cart_items)
        }
      }
      catch(error)
      {
        console.log(error)
      }
    }

    fetchData()
  },[UserContext.userid])

  const context =  {
  }

  return (
    <CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>
)

}