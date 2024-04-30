import { createContext, useContext, useEffect, useState } from "react";
import APIHandler from '../api/api';
import { UserContext } from "./UserContext";
import { set } from "@cloudinary/url-gen/actions/variable";

export const CartContext = createContext();

export default function CartContextData(props) {

  const userContext = useContext(UserContext);
  const [cart,setCart] = useState([]);
  const [noOfItems, setNoOfItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0.0);

  const getCartItemID = (product_id) => {
    const cartitem = cart.find((index) =>  {return index.product_id === product_id});
    console.log(cartitem.id);
    return cartitem.id;
  }
  
  useEffect(() => {

    const fetchData = async () => {
      try {
        if(userContext.userid)
        {
          const getCartItems = await APIHandler.get(`/cart/usercart/${userContext.userid}`);
          setCart(getCartItems.data.cart_items)
        }
        else
        {
          setCart([]);
        }
      }
      catch(error)
      {
        console.log(error)
      }
    }

    fetchData()
  },[userContext.userid])

  useEffect(() => {
    console.log(cart)
    if(cart)
    {
      if(cart.length)
      {
        setNoOfItems(cart.length);
        let totalPrice = 0;
        for (let item of cart)
        {
          let itemprice = item.quantity * item.product.price
          totalPrice += itemprice;
        }
        setTotalPrice(totalPrice)
      }
    }
    else
    {
      setNoOfItems(0);
      setTotalPrice(0);  
    }
    
  },[cart])

  const addToCart = async (product_id) => {
    try {
      const response = await APIHandler.post("/cart/usercart", {
        user_id : userContext.userid,
        product_id : product_id,
        quantity: 1
      })
      
      if(response.status === 201)
      {
        console.log(response.data.message)
        setCart([...cart,response.data.message])
      }
    } catch (error) {
      console.log(error);
    }
    
  }

  const increaseQuantity = async (product_id) => {

  }

  const decreaseQuantity = async (product_id) => {
    
  }

  const deleteFromCart = async (product_id) => {
    console.log("Remove Cart In")
    try {
      const cartitemID = getCartItemID(product_id)
      const response = await APIHandler.delete(`/cart/usercart/${cartitemID}`)
      if(response.status === 200)
      {
        const clonecart = cart.slice();
        const indexToUpdate = clonecart.findIndex((p) => p.id===cartitemID)
        clonecart.splice(indexToUpdate,1);
        setCart(clonecart);
      }
    } catch (error) {
      console.log(error);
    }
  }


  const context =  {
    cart,
    noOfItems,
    totalPrice,
    addToCart : addToCart,
    increaseQuantity: increaseQuantity,
    decreaseQuantity : decreaseQuantity,
    deleteFromCart : deleteFromCart,
  }

  return (
    <CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>
)

}