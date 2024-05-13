import React, { useContext, useEffect } from "react";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import AccountSection from "../components/Main/AccountSection";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Account() {
  let navigate = useNavigate();
  const context = useContext(UserContext);
  useEffect(() => {
    if (context.getRole() === 0) navigate("/");
  }, [context, navigate]);

  return (
    <>
      <Navbar currPage="Account" />
      <AccountSection />
      <Footer />
    </>
  );
}
