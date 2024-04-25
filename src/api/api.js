import axios from 'axios';

export let BASE_API_URL = "https://7319-lurbh-technexusbackend-fkikxvtooya.ws-us110.gitpod.io/api";

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
