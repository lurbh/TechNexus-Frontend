import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

export default function AccountSection(){
    const userContext = useContext(UserContext);
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(()=>{
        const loadUserInfo = () => {
            setUserName(userContext.getUsername())
            setEmail(userContext.getEmail())
        }
        loadUserInfo();
    },[userContext])
    

    return (
        <section className="account-section">
            
        </section>
    )
}