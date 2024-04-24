import React from "react";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import RegisterForm from "../components/Home/RegisterForm";

export default function Register() 
{

    return (
        <>
            <Navbar currPage='Register'/>
            <RegisterForm />
            <Footer />
        </>
    )
}