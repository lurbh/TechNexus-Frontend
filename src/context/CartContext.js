import { createContext, useContext, useEffect, useState } from "react";
import APIHandler from '../api/api';
import { UserContext } from "./UserContext";

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

  const getCartItemQty = (product_id) => {
    const cartitem = cart.find((index) =>  {return index.product_id === product_id});
    console.log(cartitem.id);
    return cartitem.quantity;
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
        if(error.response.status === 498)
          userContext.refresh();
      }
    }

    fetchData()
  },[userContext.userid, userContext])

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
      if(error.response.status === 498)
        userContext.refresh();
    }
    
  }

  const increaseQuantity = async (product_id) => {
    try {
      const cartitemID = getCartItemID(product_id);
      const cartqty = getCartItemQty(product_id)
      const response = await APIHandler.put(`/cart/usercart/${cartitemID}`, {
        user_id : userContext.userid,
        product_id : product_id,
        quantity: cartqty + 1
      })
      if (response.status === 201)
      {
        console.log(response.data.message);
        const clonecart = cart.slice();
        const indexToUpdate = clonecart.findIndex((p) => p.id===cartitemID)
        clonecart.splice(indexToUpdate,1,response.data.message);
        setCart(clonecart);
      }
    } catch (error) {
      console.log(error);
      if(error.response.status === 498)
        userContext.refresh();
    }
  }

  const decreaseQuantity = async (product_id) => {
    try {
      const cartitemID = getCartItemID(product_id);
      const cartqty = getCartItemQty(product_id)
      if(cartqty === 1)
      {
        deleteFromCart(product_id);
      }
      else
      {
        const response = await APIHandler.put(`/cart/usercart/${cartitemID}`, {
          user_id : userContext.userid,
          product_id : product_id,
          quantity: cartqty - 1
        })
        if (response.status === 201)
        {
          console.log(response.data.message);
          const clonecart = cart.slice();
          const indexToUpdate = clonecart.findIndex((p) => p.id===cartitemID)
          clonecart.splice(indexToUpdate,1,response.data.message);
          setCart(clonecart);
        }
      }
    } catch (error) {
      console.log(error);
      if(error.response.status === 498)
        userContext.refresh();
    }
  }

  const deleteFromCart = async (product_id) => {
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
      if(error.response.status === 498)
        userContext.refresh();
    }
  }

  const checkout = async () => {
    try {
      const response = await APIHandler.post(`/checkout`, {
        user_id : userContext.userid,
      });
      if(response.status === 200)
      {
        setCart([]);
        window.location.href = response.data.stripeURL;
      }

    } catch (error) {
      console.log(error);
      if(error.response.status === 498)
        userContext.refresh();
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
    checkout: checkout
  }

  return (
    <CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>
)

}