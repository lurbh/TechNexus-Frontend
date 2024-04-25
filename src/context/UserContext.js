import { createContext, useEffect, useState } from "react";
import APIHandler, { setAuthHeader, clearAuthHeader } from '../api/api';

export const UserContext = createContext();

export default function UserContextData(props) {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState(0);
    const [accessToken, setAccessToken] = useState("");
    const [refreshToken, setRefreshToken] = useState("");
    const [loginState, setLoginState] = useState(false);


    useEffect(()=> {
        const retrieveData = async() => {
            try{
                let defaultUserName = localStorage.getItem("username")? localStorage.getItem("username") : '';
                let defaultemail = localStorage.getItem("email")? localStorage.getItem("email") : '';
                let accessToken = localStorage.getItem("accessToken")? localStorage.getItem("accessToken") : '';
                let refreshToken = localStorage.getItem("refreshToken")? localStorage.getItem("refreshToken") : '';
                let defaultrole = localStorage.getItem("role")? localStorage.getItem("role") : 0;
                setUsername(defaultUserName);
                setEmail(defaultemail)
                setAccessToken(accessToken);
                setRefreshToken(refreshToken);
                setRole(defaultrole)
                setAuthHeader(accessToken,refreshToken)
                if(defaultUserName)
                    setLoginState(true)
            } catch (error) {
                console.error('Error in username and id retrieval and token', error)
            }
        }
        retrieveData();
    }, [])

    const register = async (email,username,password,confirm_password,role_id) => {
        const response = await APIHandler.post("/user/register", {
            email: email,
            password: password,
            username: username,
            confirm_password: confirm_password,
            role_id: role_id
        });
        if (response.status == 201)
            return true;
        else 
            return false;
    }

    const login = async (email,password) => {
        try {
            const response = await APIHandler.post("/user/login", {
                email : email,
                password : password
            });
            if(response.status == 200)
            {
                setAccessToken(response.data.accessToken)
                setEmail(response.data.user.email)
                setUsername(response.data.user.username);
                setRole(response.data.user.role_id)
                setLoginState(true)
                setAuthHeader(response.data.accessToken, response.data.refreshToken)
                localStorage.setItem("username", response.data.user.username)
                localStorage.setItem("email", response.data.user.email)
                localStorage.setItem("accessToken", response.data.accessToken)
                localStorage.setItem("role", response.data.user.role_id)
                return true;
            }
            else
            {
                return false;
            }
            
        } catch (error) {
            console.log("Error", error);
            return false;
        }
         
    }

    const refresh = async () => {
        try {
            const response = await  APIHandler.post("/user/refresh", {
                refreshToken : localStorage.getItem("refreshToken")
            })
        } catch (error) {
            console.log("Error", error);
            return false;
        }
    }

    const logout = async () => {
        try {
            const response = await  APIHandler.post("/user/logout", {
                refreshToken : localStorage.getItem("refreshToken")
            });
            if(response.status == 200)
            {
                setAccessToken("")
                setEmail("")
                setUsername("");
                setRole(0)
                setLoginState(false);
                clearAuthHeader();
                return true;
            }
            else
            {
                return false
            }
        } catch (error) {
            console.log("Error", error);
            return false;
        }
    }

    const context =  {
        login : login,
        register : register,
        logout : logout,
        refresh: refresh,
        checkLogin : () => {return loginState;}, 
        getUsername : () => {return username},
        getRole : () => {return role},
        getAccessToken : () => {return accessToken},
        getrefreshToken : () => {return refreshToken},
        getEmail : () => {return email}
    }

    return (
        <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
    )
}