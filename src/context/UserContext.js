import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

const BASE_API_URL = "https://7319-lurbh-technexusbackend-fkikxvtooya.ws-us110.gitpod.io/api"//process.env.REACT_APP_BASE_API_URL;

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
                let defaultrole = localStorage.getItem("role")? localStorage.getItem("role") : 0;
                setUsername(defaultUserName);
                setEmail(defaultemail)
                setAccessToken(accessToken);
                setRole(defaultrole)
                if(defaultUserName)
                    setLoginState(true)
            } catch (error) {
                console.error('Error in username and id retrieval and token', error)
            }
        }
        retrieveData();
    }, [])

    const register = async (email,username,password,confirm_password,role_id) => {
        const response = await axios.post(BASE_API_URL + "/user/register", {
            email: email,
            password: password,
            username: username,
            confirm_password: confirm_password,
            role_id: 2
        });
    }

    const login = async (email,password) => {
        try {
            const response = await axios.post(BASE_API_URL + "/user/login", {
                email : email,
                password : password
            });
            console.log(response.data);
            setAccessToken(response.data.accessToken)
            setEmail(response.data.user.email)
            setUsername(response.data.user.username);
            setRole(response.data.user.role_id)
            setLoginState(true)
            return true;
        } catch (error) {
            console.log("Error", error);
            return false;
        }
         
    }

    const context =  {
        login : login,
        register : register,
        checkLogin : () => {return loginState;}, 
        getUsername : () => {return username}
    }

    return (
        <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
    )
}