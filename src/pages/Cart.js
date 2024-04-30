import React from "react";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import CartContextData from "../context/CartContext";
import CartSection from "../components/Cart/CartSection";


export default function Cart()
{
    
    return (
        <>
            <Navbar currPage='Cart' />
            <CartContextData>
                <CartSection />
            </CartContextData>
            <Footer />
        </>
    )
}