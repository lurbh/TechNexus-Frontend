import { createContext, useEffect, useState } from "react";
import APIHandler, { setAuthHeader, clearAuthHeader } from '../api/api';

export const UserContext = createContext();

export default function UserContextData(props) {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState(0);
    const [accessToken, setAccessToken] = useState("");
    const [refreshToken, setRefreshToken] = useState("");
    const [userid, setUserID] = useState(0)
    const [loginState, setLoginState] = useState(false);


    useEffect(()=> {
        const retrieveData = async() => {
            try{
                let defaultUserName = localStorage.getItem("username")? localStorage.getItem("username") : '';
                let defaultemail = localStorage.getItem("email")? localStorage.getItem("email") : '';
                let accessToken = localStorage.getItem("accessToken")? localStorage.getItem("accessToken") : '';
                let refreshToken = localStorage.getItem("refreshToken")? localStorage.getItem("refreshToken") : '';
                let defaultrole = localStorage.getItem("role")? localStorage.getItem("role") : 0;
                let defaultUser = localStorage.getItem("UserID")?localStorage.getItem("UserID") : 0;
                setUsername(defaultUserName);
                setEmail(defaultemail)
                setAccessToken(accessToken);
                setRefreshToken(refreshToken);
                setRole(defaultrole);
                setAuthHeader(accessToken,refreshToken);          
                if(defaultUserName)
                {
                    refresh();
                    setLoginState(true);
                    setUserID(defaultUser);
                }
            } catch (error) {
                console.error('Error in username and id retrieval and token', error)
            }
        }

        const timeoutId = setTimeout(() => {
            localStorage.clear();
        }, 180 * 60 * 1000); 

        retrieveData();
        return () => clearTimeout(timeoutId);
    }, [])

    const register = async (email,username,password,confirm_password,role_id) => {
        const response = await APIHandler.post("/user/register", {
            email: email,
            password: password,
            username: username,
            confirm_password: confirm_password,
            role_id: role_id
        });
        if (response.status === 201)
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
            if(response.status === 200)
            {
                setAccessToken(response.data.accessToken)
                setRefreshToken(response.data.refreshToken)
                setEmail(response.data.user.email)
                setUsername(response.data.user.username);
                setRole(response.data.user.role_id)
                setLoginState(true)
                await setAuthHeader(response.data.accessToken, response.data.refreshToken)
                setUserID(response.data.user.user_id)
                localStorage.setItem("username", response.data.user.username)
                localStorage.setItem("email", response.data.user.email)
                localStorage.setItem("accessToken", response.data.accessToken)
                localStorage.setItem("role", response.data.user.role_id)
                localStorage.setItem("UserID", response.data.user.user_id)
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
            setAuthHeader(response.data.accessToken, localStorage.getItem("refreshToken"))
        } catch (error) {
            console.log("Error", error);
            setAccessToken("")
            setRefreshToken("")
            setEmail("")
            setUsername("");
            setRole(0)
            setLoginState(false);
            setUserID(0);
            clearAuthHeader();
            localStorage.clear();
            return false;
        }
    }

    const logout = async () => {
        try {
            const response = await  APIHandler.post("/user/logout", {
                refreshToken : localStorage.getItem("refreshToken")
            });
            if(response.status === 200)
            {
                setAccessToken("")
                setRefreshToken("")
                setEmail("")
                setUsername("");
                setRole(0)
                setLoginState(false);
                setUserID(0);
                clearAuthHeader();
                localStorage.clear();
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
        getEmail : () => {return email},
        getUserID : () => {return userid},
        userid
    }

    return (
        <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
    )
}