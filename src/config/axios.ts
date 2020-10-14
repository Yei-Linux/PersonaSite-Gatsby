import axios from 'axios';

const axiosClient = axios.create({
    baseURL: process.env.GATSBY_LAMBDA_URL
});

export default axiosClient;