import axiosClient from "./axiosClient";

// api/productApi.js
const productApi = {
    getAll : (params) => {
        const url = '/api/auth/list-diseases';
        return axiosClient.get(url, { params });
    },


}

export default productApi;