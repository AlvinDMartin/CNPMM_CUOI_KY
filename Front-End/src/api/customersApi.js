import axiosClient from "./axiosClient";

// api/customersApi.js
const customersApi = {
    getAll : (params) => {
        const url = '/api/auth/customers';
        return axiosClient.get(url, { params });
    },

    post : (params) => {
        const url = '/api/auth/customers';
        return axiosClient.post(url,  params );
    },

    put : (params) => {
        const url = '/api/auth/customers';
        return axiosClient.put(url, { params });
    },
}

export default customersApi;