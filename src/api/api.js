import axios from 'axios';


export let BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

const APIHandler = axios.create({
    "baseURL": BASE_API_URL
})

export let headersData = {}

export const setAuthHeader = async (accessToken, refreshToken) => {

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    headersData["Authorization"] = `${accessToken}`
    APIHandler.defaults.headers.common["Authorization"] = headersData["Authorization"]
}

export const clearAuthHeader = () => {
    delete APIHandler.defaults.headers.common["Authorization"];
    localStorage.clear();
}

export default APIHandler;
