import axios from 'axios';

const axiosClient = axios.create({
    baseURL: process.env.NOTIFICATION_URL
});

axiosClient.interceptors.request.use((config)=>{
    config.headers["api-key"] = process.env.NOTIFICATION_KEY
    return config;
},(error)=>{
    return Promise.reject(error);
});

export default axiosClient;