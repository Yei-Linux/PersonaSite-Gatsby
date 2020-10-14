import axios from 'axios';

const notificationAxiosClient = axios.create({
    baseURL: process.env.GATSBY_NOTIFICATION_URL
});

notificationAxiosClient.interceptors.request.use((config)=>{
    config.headers["api-key"] = process.env.GATSBY_NOTIFICATION_KEY
    return config;
},(error)=>{
    return Promise.reject(error);
});

export default notificationAxiosClient;