import axios from "axios";
import Swal from "sweetalert2";
const instance = axios.create({
    baseURL: "http://localhost:3000",
});
let errorCatch = false;
instance.interceptors.response.use(
    function (config) {
        errorCatch = false;
        return config;
    },
    function (error) {
        if (error.response && error.response.status) {
            if (error.response.status === 401) {
                if (!errorCatch) {
                    //Swal.warning("Tài khoản hết hiệu lực sử dụng");
                    Swal.fire({
                        text: "Tài khoản hết hiệu lực sử dụng",
                        icon: "warning",
                    }).then(() => {
                        localStorage.clear();
                        window.location.reload(false);
                    });
                }
                errorCatch = true;
            }
        }
        return Promise.reject(error);
    },
);
//api login
export const login = function (data) {
    const req = instance.post(
        "/api/auth/login", data,
        {
            //headers: { "x-access-token": token },
        },
    );
    return req;
};
export const getDiseases = function (data) {
    const req = instance.get(
        "/api/auth/list-diseases",
        {
            //headers: { "x-access-token": token },
        },
    );
    return req;
};

export const getGroupDiseases = function (data) {
    const req = instance.get(
        "/api/auth/group-diseases",
        {
            //headers: { "x-access-token": token },
        },
    );
    return req;
};

export const addDiseases = function (data) {
    const req = instance.post(
        "/api/auth/diseases",data,
        {
            //headers: { "x-access-token": token },
        },
    );
    return req;
};

export const updateDiseases = function (data) {
    const req = instance.put(
        "/api/auth/diseases",data,
        {
            //headers: { "x-access-token": token },
        },
    );
    return req;
};

export const getBookedCases = function (data) {
    const req = instance.get(
        "/api/auth/booking-cases",data,
        {
            //headers: { "x-access-token": token },
        },
    );
    return req;
};
export const getCasesDoctors = function (data) {
    const req = instance.get(
        "/api/auth/cases-doctors",data,
        {
            //headers: { "x-access-token": token },
        },
    );
    return req;
};
export const getCustomer = function (data) {
    const req = instance.get(
        "/api/auth/customers",data,
        {
            //headers: { "x-access-token": token },
        },
    );
    return req;
};
export const getDoctors = function (data) {
    const req = instance.get(
        "/api/auth/doctors",data,
        {
            //headers: { "x-access-token": token },
        },
    );
    return req;
};
export const getCases = function (data) {
    const req = instance.get(
        "/api/auth/cases",data,
        {
            //headers: { "x-access-token": token },
        },
    );
    return req;
};
export const updateBookedCase = function (data) {
    const req = instance.put(
        "/api/auth/booking-cases",data,
        {
            //headers: { "x-access-token": token },
        },
    );
    return req;
};