import React, { useState } from "react";

export default function LoginForm()
{
    const [formState, setFormState] = useState({
        email: "",
        password: "",
    }) 

    const updateFormField = (e) => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    return (
        <section className="login-section">
            <h2 className="login-header">Login</h2>
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
                                <label className="login-input-label">Password:</label>
                            </td>
                            <td className="login-table-input">
                                <input type="text" name="password" className="login-input" value={formState.password} onChange={updateFormField}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="login-form-btn" onClick={()=> {
                }}>Login</button>
            </div>
        </section>
    )
}