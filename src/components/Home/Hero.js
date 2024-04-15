import React from "react";
import logo from "../../assets/TechNexus-Logo-Clear.png"
import '../../assets/style.css'

export default function Hero() 
{
    return (
        <section className="hero-section">
            <div className="section-content">
                <img src={logo} className="hero-image" alt="TechNexus"/>
                <h1>Welcome to TechNexus!</h1>
                <p className="hero-description"> Welcome to TechNexus, where innovation meets exploration. 
                    Dive into a world of groundbreaking technology, discover the latest gadgets, and stay ahead of the curve with expert insights, reviews, and tutorials. 
                    Whether you're a tech enthusiast, professional, or casual user, TechNexus is your ultimate destination for all things tech.</p>
                <p>Discover the latest in tech products and news.</p>
            </div>
        </section>
    )
}