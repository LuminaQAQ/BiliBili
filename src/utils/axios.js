import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/api/",
    timeout: 10 * 1000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});

instance.interceptors.request.use(config => {
    return config;
}, (e) => {
    return Promise.reject(e);
});

instance.interceptors.response.use(response => {
    return response;
}, function (e) {
    return Promise.reject(e);
});

/**
 * axios的get请求
 * @param {String} url api接口(不带baseURL, 如果有错, 在 /src/utils/axios.js 中修改)
 * @param {Object} params get的params参数, 例如: {id: 1}}
 * @returns 
 */
export const getData = (url, params) => {
    return new Promise((resolve, reject) => {
        instance.get(url, {
            params: {
                ...params
            }
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err);
        });
    });
};

/**
 * axios的post请求
 * @param {String} url api接口(不带baseURL, 如果有错, 在 /src/utils/axios.js 中修改)
 * @param {Object} params post的params参数, 例如: {id: 1}
 * @returns 
 */
export const postData = (url, params) => {
    return new Promise((resolve, reject) => {
        instance.post(
            url,
            params
        ).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err);
        });
    });
};