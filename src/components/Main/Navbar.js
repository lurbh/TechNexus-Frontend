import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/TechNexus-Logo.png";
import "../../assets/style.css";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";

export default function Navbar(props) {
  let navigate = useNavigate();
  const context = useContext(UserContext);
  const cartcontext = useContext(CartContext);

  const handleClickOpen = (e) => {
    const menu = document.querySelector(".header-links");
    const toggle = document.querySelector("#menu-toggle");
    toggle.checked = !toggle.checked;
    menu.style.display = "flex";
  };

  const handleClickClose = (e) => {
    const menu = document.querySelector(".header-links");
    const toggle = document.querySelector("#menu-toggle");
    toggle.checked = !toggle.checked;
    menu.style.display = "none";
  };

  return (
    <header className="header">
      <span onClick={() => navigate("/")} className="header-image-link">
        <img src={logo} className="header-image" alt="TechNexus Logo" />
      </span>
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <button
        htmlFor="menu-toggle"
        className="menu-btn"
        onClick={handleClickOpen}
      >
        &#9776;
      </button>
      <div className="header-links">
        <ul className="header-navlist">
          <li>
            <span
              onClick={() => navigate("/")}
              className={`header-link ${
                props.currPage === "Home" ? "nav-selected" : ""
              }`}
            >
              Home
            </span>
          </li>
          {
            context.getRole() === 2 || context.getRole() === 0 ? <li className="header-dropdown">
            <span
              onClick={() => navigate("/products")}
              className={`header-link ${
                props.currPage === "Products" ? "nav-selected" : ""
              }`}
            >
              Products
            </span>
            {/* <div className="header-link-dropdown">
              <span onClick={() => navigate("/products")}>
                View All Products
              </span>
              <span onClick={() => navigate("/products/add")}>
                Add Products
              </span>
            </div> */}
          </li> :
          <li className="header-dropdown">
          <span
            onClick={() => navigate("/sellerproducts")}
            className={`header-link ${
              props.currPage === "Products" ? "nav-selected" : ""
            }`}
          >
            Products Seller
          </span>
          <div className="header-link-dropdown">
            <span onClick={() => navigate("/sellerproducts")}>
              View All Products
            </span>
            <span onClick={() => navigate("/sellerproducts/add")}>
              Add Products
            </span>
          </div>
        </li>
          }
          {/* <li className="header-dropdown">
            <span
              onClick={() => navigate("/products")}
              className={`header-link ${
                props.currPage === "Products" ? "nav-selected" : ""
              }`}
            >
              Products
            </span>
            <div className="header-link-dropdown">
              <span onClick={() => navigate("/products")}>
                View All Products
              </span>
              <span onClick={() => navigate("/products/add")}>
                Add Products
              </span>
            </div>
          </li> */}
          {/* <li>
            <span
              onClick={() => navigate("/")}
              className={`header-link ${
                props.currPage === "Categories" ? "nav-selected" : ""
              }`}
            >
              Categories
            </span>
          </li> */}
          <li>
            <span
              onClick={() => navigate("/")}
              className={`header-link ${
                props.currPage === "News" ? "nav-selected" : ""
              }`}
            >
              News
            </span>
          </li>
          <li>
            <span
              onClick={() => navigate("/about")}
              className={`header-link ${
                props.currPage === "About" ? "nav-selected" : ""
              }`}
            >
              About
            </span>
          </li>
          <li>
            <span
              onClick={() => navigate("/contactus")}
              className={`header-link ${
                props.currPage === "Contact Us" ? "nav-selected" : ""
              }`}
            >
              Contact Us
            </span>
          </li>
        </ul>
        <ul className="header-nav-seprator">
          <b>|</b>
        </ul>

        {context.checkLogin() ? (
          <ul className="header-userlist">
            <li className="close-nav" onClick={handleClickClose}>
              <i className="bi bi-x"></i>
            </li>
            <li className="header-dropdown">
            <span
                onClick={() => navigate("/account")}
                className={`header-link ${
                  props.currPage === "Account" ? "nav-selected" : ""
                }`}
                >
                    Hi, {context.getUsername()}
                </span>
                <div className="header-link-dropdown">
                <span onClick={() => navigate("/account")}>
                    Account
                </span>
                <span onClick={() => navigate("/orders")}>
                    Orders
                </span>
                </div>
            </li>
            <li>
              <span
                onClick={() => context.logout()}
                className={`header-link ${
                  props.currPage === "Logout" ? "nav-selected" : ""
                }`}
              >
                Sign Out
              </span>
            </li>
            <li>
              <span
                onClick={() => navigate("/cart")}
                className={`header-link ${
                  props.currPage === "Cart" ? "nav-selected" : ""
                }`}
              >
                <i className="bi bi-cart badge">
                  {cartcontext.noOfItems && (
                    <span className="cart-badge">{cartcontext.noOfItems}</span>
                  )}
                </i>
              </span>
            </li>
          </ul>
        ) : (
          <ul className="header-userlist">
            <li onClick={handleClickClose} className="close-nav">
              <i className="bi bi-x"></i>
            </li>
            <li>
              <span
                onClick={() => navigate("/login")}
                className={`header-link ${
                  props.currPage === "Login" ? "nav-selected" : ""
                }`}
              >
                Login
              </span>
            </li>
            <li>
              <span
                onClick={() => navigate("/register")}
                className={`header-link ${
                  props.currPage === "Register" ? "nav-selected" : ""
                }`}
              >
                Register
              </span>
            </li>
            <li>
              <span
                onClick={() => navigate("/cart")}
                className={`header-link ${
                  props.currPage === "Cart" ? "nav-selected" : ""
                }`}
              >
                <i className="bi bi-cart"></i>
              </span>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
