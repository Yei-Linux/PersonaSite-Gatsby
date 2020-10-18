import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `https://www.yeilinux.com/.netlify/functions`
});

export default axiosClient;