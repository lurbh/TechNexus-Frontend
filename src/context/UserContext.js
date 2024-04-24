import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export default function UserContextData(props) {
    const [userState, setuserState] = useState({
        username: 0,
        role_id: 0,
        accessToken:""
    }) 
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState(0);
    const [accessToken, setAccessToken] = useState("");
    const [loginState, setLoginState] = useState(false);

    useEffect(()=> {
        const retrieveData = async() => {
            try{
                let defaultUserName = localStorage.getItem("username")? localStorage.getItem("username") : '';
                let defaultemail = localStorage.getItem("email")? localStorage.getItem("email") : '';
                let accessToken = localStorage.getItem("accessToken")? localStorage.getItem("accessToken") : '';
                let role = localStorage.getItem("role")? localStorage.getItem("role") : 0;
                setUsername(defaultUserName);
                setEmail(defaultemail)
                setAccessToken(accessToken);
                setLoginState((prevState)=>!prevState)
            } catch (error) {
                console.error('Error in username and id retrieval and token', error)
            }
        }
        retrieveData();
    }, [])

    const context =  {
        
    }

    return (
        <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
    )
}