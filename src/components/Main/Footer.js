import React from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/TechNexus-Logo-Clear.png"
import '../../assets/style.css'


export default function Footer() 
{
    let navigate = useNavigate();
    return (
        <footer className="footer">
            <div>
                <img src={logo} className="footer-logo" alt="TechNexus" />
            </div>
            <div className="container">
                <div className="footer-content">
                    <p>&copy; 2024 TechNexus. All rights reserved.</p>
                    <ul className="footer-links">
                        <li><a onClick={() => navigate("/")}>Home</a></li>
                        <li><a onClick={() => navigate("/products")}>Products</a></li>
                        <li><a onClick={() => navigate("/")}>About</a></li>
                        <li><a onClick={() => navigate("/")}>Contact</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <label className="news-letter-header">Subscribe To Newsletter</label>
                <form className="news-letter">
                    <input type="text" placeholder="Enter Email Here" className="input-field"/>
                    <button type="submit" className="submit-button"><i className="fa fa-envelope"/></button>
                </form>
            </div>
        </footer>
    )
}