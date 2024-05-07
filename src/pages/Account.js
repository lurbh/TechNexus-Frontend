import React from "react";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import AccountSection from "../components/Main/AccountSection";

export default function Account() {
  return (
    <>
      <Navbar currPage="Account" />
      <AccountSection />
      <Footer />
    </>
  );
}
