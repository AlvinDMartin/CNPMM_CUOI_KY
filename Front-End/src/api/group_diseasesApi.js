import axiosClient from "./axiosClient";

// api/group_diseasesApi.js
const group_diseasesApi = {
    getAll : (params) => {
        const url = '/api/auth/group-diseases';
        return axiosClient.get(url, { params });
    },
    postAll : (params) => {
        const url = '/api/auth/group-diseases';
        return axiosClient.post(url,  params );
    },
}

export default group_diseasesApi;