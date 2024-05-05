import React from "react";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import About from "../components/Home/About";

export default function AboutUs() {
  return (
    <>
      <Navbar currPage="About" />
      <About />
      <Footer />
    </>
  );
}
