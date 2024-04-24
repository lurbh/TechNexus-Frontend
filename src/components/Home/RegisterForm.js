import React, { useState } from "react";

export default function RegisterForm()
{
    const [formState, setFormState] = useState({
        email: "",
        username: "",
        role_id: 2,
        password: "",
        confirm_password: ""
    }) 

    const updateFormField = (e) => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    return (
        <section className="login-section">
            <h2 className="login-header">Register for Account</h2>
            <div className="login-body">
                <table border={0} className="login-form-table">
                    <tbody>
                        <tr className="login-input-section">
                            <td className="login-input-table-label">
                                <label className="login-input-label">Email:</label>
                            </td>
                            <td className="login-table-input">
                                <input type="text" name="email" className="login-input" value={formState.email} onChange={updateFormField}/>
                            </td>
                        </tr>
                        <tr className="login-input-section">
                            <td className="login-input-table-label">
                                <label className="login-input-label">Username:</label>
                            </td>
                            <td className="login-table-input">
                                <input type="text" name="username" className="login-input" value={formState.username} onChange={updateFormField}/>
                            </td>
                        </tr>
                        <tr className="login-input-section">
                            <td className="login-input-table-label">
                                <label className="login-input-label">Password:</label>
                            </td>
                            <td className="login-table-input">
                                <input type="text" name="password" className="login-input" value={formState.password} onChange={updateFormField}/>
                            </td>
                        </tr>
                        <tr className="login-input-section">
                            <td className="login-input-table-label">
                                <label className="login-input-label">Confirm Password:</label>
                            </td>
                            <td className="login-table-input">
                                <input type="text" name="confirm_password" className="login-input" value={formState.confirm_password} onChange={updateFormField}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="login-form-btn" onClick={()=> {
                }}>Register</button>
            </div>
        </section>
    )
}