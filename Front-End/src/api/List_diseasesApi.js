import axiosClient from "./axiosClient";

// api/List_diseasesApi.js
const List_diseasesApi = {
    getAll : (params) => {
        const url = '/api/auth/list-diseases';
        return axiosClient.get(url, { params });
    },
}

export default List_diseasesApi;