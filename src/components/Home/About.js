import React from "react";

export default function About()
{
    return (
        <section className="about-us">
            <h2 className="about-us-title">About Us - TechNexus</h2>
            <div className="about-us-body">
                <div className="about-1">
                    <  h3 className="about-us-subheader">Our Mission</h3>
                    <p className="about-us-body-p">At TechNexus, our mission is to provide you with the latest news, reviews, and insights from the world of technology. We strive to keep you informed about the latest innovations, trends, and developments in the tech industry.</p>
                </div>
                <div className="about-2">
                    <h3 className="about-us-subheader">What We Offer</h3>
                    <ul className="about-us-body-list">
                        <li>News and Updates</li>
                        <li>Product Reviews</li>
                        <li>How-to Guides</li>
                        <li>Community Engagement</li>
                    </ul>
                </div>
                <div className="about-3">
                    <h3 className="about-us-subheader">Our Team</h3>
                    <p className="about-us-body-p">Our team of tech enthusiasts is passionate about technology and dedicated to bringing you the best content possible. From seasoned tech journalists to industry experts, our team is committed to providing you with accurate, reliable, and insightful information.</p>
                </div>
                <div className="about-4">
                    <h3 className="about-us-subheader">Contact Us</h3>
                    <p className="about-us-body-p">Have a question, feedback, or suggestion? We'd love to hear from you! Get in touch with us via email, phone, or social media, and we'll do our best to assist you.</p>
                </div>
            </div>
        </section>
    )
}