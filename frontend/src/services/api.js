import axios from 'axios';

const api = axios.create({
    //baseURL: "http://localhost:5000"
    baseURL: "https://wise-snail-51.serverless.social"
});

export default api;