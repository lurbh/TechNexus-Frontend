import React from "react";
import logo from "../assets/TechNexus-Logo.png"
import '../assets/style.css'

export default function Navbar(props) {
  return (
    <>
    <header className="header">
        <a href="" className="header-image-link"><img 
            src={logo}
            className="header-image"
            alt="TechNexus Logo"
        /></a>
        <div className="header-links">
          <ul className="header-navlist">
          <li><a href="#" className={`header-link ${props.currPage == "Home"?"nav-selected":"" }`}>Home</a></li>
            <li><a href="#" className={`header-dropdown ${props.currPage == "Products"?"nav-selected":"" }`}>Products</a>
              <div className="header-link-dropdown">
                <span><a href="#">Test Long text</a></span>
                <span><a href="#">1.1</a></span>
              </div>
            </li>
            <li><a href="#" className="header-link">Categories</a></li>
            <li><a href="#" className="header-link">News</a></li>
            <li><a href="#" className="header-link">About</a></li>
          </ul>
          <ul className="header-nav-seprator"><b>|</b></ul>
          <ul className="header-userlist">
            <li><a href="#" className="header-link">Login</a></li>
            <li><a href="#" className="header-link">Sign Up</a></li>
            <li><a href="#" className="header-link">Cart</a></li>
          </ul>
        </div>
    </header>
    </>
  )
}