import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/TechNexus-Logo.png"
import '../../assets/style.css'
import { UserContext } from "../../context/UserContext";

export default function Navbar(props) 
{
  let navigate = useNavigate();
  const context = useContext(UserContext);

  return (
    <header className="header">
        <a onClick={() => navigate("/")} className="header-image-link"><img 
            src={logo}
            className="header-image"
            alt="TechNexus Logo"
        /></a>
        <input type="checkbox" id="menu-toggle" className="menu-toggle"/>
        <label htmlFor="menu-toggle" className="menu-btn">&#9776;</label>
        <div className="header-links">
          <ul className="header-navlist">
            <li><a onClick={() => navigate("/")} className={`header-link ${props.currPage == "Home"?"nav-selected":"" }`}>Home</a></li>
            <li className="header-dropdown">
              <a onClick={() => navigate("/products")} className={`header-link ${props.currPage == "Products"?"nav-selected":"" }`}>Products</a>
              <div className="header-link-dropdown">
                <span><a onClick={() => navigate("/products")}>View All Products</a></span>
                <span><a onClick={() => navigate("/products/add")}>Add Products</a></span>
              </div>
            </li>
            <li><a onClick={() => navigate("/")} className={`header-link ${props.currPage == "Categories"?"nav-selected":"" }`}>Categories</a></li>
            <li><a onClick={() => navigate("/")} className={`header-link ${props.currPage == "News"?"nav-selected":"" }`}>News</a></li>
            <li><a onClick={() => navigate("/about")} className={`header-link ${props.currPage == "About"?"nav-selected":"" }`}>About</a></li>
            <li><a onClick={() => navigate("/contactus")} className={`header-link ${props.currPage == "Contact Us"?"nav-selected":"" }`}>Contact Us</a></li>
          </ul>
          <ul className="header-nav-seprator"><b>|</b></ul>
          {
            context.checkLogin() ? <ul className="header-userlist">
            <li><a onClick={() => navigate("/account")} className={`header-link ${props.currPage == "Account"?"nav-selected":"" }`}>Hi, {context.getUsername()}</a></li>
            <li><a onClick={() => context.logout()} className={`header-link ${props.currPage == "Logout"?"nav-selected":"" }`}>Sign Out</a></li>
            <li><a onClick={() => navigate("/")} className={`header-link ${props.currPage == "Cart"?"nav-selected":"" }`}><i className="bi bi-cart"></i></a></li>
          </ul> : <ul className="header-userlist">
            <li><a onClick={() => navigate("/login")} className={`header-link ${props.currPage == "Login"?"nav-selected":"" }`}>Login</a></li>
            <li><a onClick={() => navigate("/register")} className={`header-link ${props.currPage == "Register"?"nav-selected":"" }`}>Register</a></li>
            <li><a onClick={() => navigate("/")} className={`header-link ${props.currPage == "Cart"?"nav-selected":"" }`}><i className="bi bi-cart"></i></a></li>
          </ul>
          }
          
        </div>
    </header>
  )
}