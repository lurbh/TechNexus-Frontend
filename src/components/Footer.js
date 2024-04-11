import React from "react";
import logo from "../assets/TechNexus-Logo.png"
import '../assets/style.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                <p>&copy; 2024 TechNexus. All rights reserved.</p>
                <ul className="footer-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                </div>
            </div>
        </footer>
    )
}