import React, { useState } from "react";

export default function ContactForm()
{
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    })

    const updateFormField = (e) => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    return (
        <div className="contact-form-container">
            <h2>Contact Us</h2>
            <div id="contact-form">
                <div className="form-group-contact">
                <label>Name:</label>
                <input type="text" id="name" name="name" onChange={updateFormField} value={formState.name}/>
                </div>
                <div className="form-group-contact">
                <label>Email:</label>
                <input type="email" id="email" name="email" onChange={updateFormField} value={formState.email}/>
                </div>
                <div className="form-group-contact">
                <label>Message:</label>
                <textarea id="message" name="message" rows="5" onChange={updateFormField} value={formState.message}/>
                </div>
                <button className="contact-button">Send Message</button>
            </div>
        </div>
    )
}