import React from "react";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import ContactForm from "../components/Home/ContactForm";

export default function ContactUs() 
{

    return (
        <>
            <Navbar currPage='Contact Us'/>
            <ContactForm />
            <Footer />
        </>
    )
}