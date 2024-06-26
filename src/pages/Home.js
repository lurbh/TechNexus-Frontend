import React from "react";
import Navbar from "../components/Main/Navbar";
import Hero from "../components/Home/Hero";
import Footer from "../components/Main/Footer";
import Categories from "../components/Home/Categories";
import ProductContextData from "../context/ProductContext";

export default function Home() {
  return (
    <>
      <Navbar currPage="Home" />
      <Hero />
      <ProductContextData>
        <Categories />
      </ProductContextData>
      <Footer />
    </>
  );
}
