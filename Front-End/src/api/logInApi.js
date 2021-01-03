import axiosClient from "./axiosClient";

// api/logInApi.js
const logInApi = {
    login : (account) => {
        const url = "/api/auth/login";
        return axiosClient.post(url, account);
    }
}

export default logInApi;