import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from 'react-router-dom';

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

    let navigate = useNavigate();
    const context = useContext(UserContext);

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
                                <input type="password" name="password" className="login-input" value={formState.password} onChange={updateFormField}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="login-form-btn" onClick={async ()=> {
                    const result = await context.login(
                        formState.email,
                        formState.password,
                    )
                    if(result)
                        navigate("/")
                }}>Login</button>
            </div>
        </section>
    )
}