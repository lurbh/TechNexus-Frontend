import React from "react";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import LoginForm from "../components/Home/LoginForm";

export default function Login() 
{

    return (
        <>
            <Navbar currPage='Login'/>
            <LoginForm />
            <Footer />
        </>
    )
}