import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/TechNexus-Logo-Clear.png"
import '../../assets/style.css'


export default function Footer() 
{
    const [email,setEmail] = useState("");

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
                        <li><a onClick={() => navigate("/about")}>About</a></li>
                        <li><a onClick={() => navigate("/contactus")}>Contact</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <label className="news-letter-header">Subscribe To Newsletter</label>
                <div className="news-letter">
                    <input type="text" placeholder="Enter Email Here" className="input-field" name="email" onChange={(event)=>{setEmail(event.target.value)}}/>
                    <button type="submit" className="submit-button"><i className="bi bi-envelope-fill"/></button>
                </div>
            </div>
        </footer>
    )
}