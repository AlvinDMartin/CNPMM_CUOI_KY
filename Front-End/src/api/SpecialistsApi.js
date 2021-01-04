import axiosClient from "./axiosClient";

// api/SpecialistsApi.js
const SpecialistsApi = {
    getAll : (params) => {
        const url = '/api/auth/get-specialists';
        return axiosClient.get(url, { params });
    },
    postAll : (params) => {
        const url = '/api/auth/get-specialists';
        return axiosClient.post(url,  params );
    },
}

export default SpecialistsApi;