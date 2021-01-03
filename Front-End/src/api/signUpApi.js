import axiosClient from "./axiosClient";

// api/signUpApi.js
const signUpApi = {
    signUp : (account) => {
        const url = "/api/auth/signup";
        return axiosClient.post(url, account);
    }
}

export default signUpApi;