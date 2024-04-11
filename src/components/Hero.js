import React from "react";
import logo from "../assets/TechNexus-Logo.png"
import '../assets/style.css'

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="section-content">
                <img src={logo} className="hero-image" alt="TechNexus"/>
                <h1>Welcome to TechNexus!</h1>
                <p>Discover the latest in tech products and news.</p>
            </div>
        </section>
    )
}