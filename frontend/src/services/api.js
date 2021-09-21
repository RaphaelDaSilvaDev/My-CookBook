import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5000"
    //baseURL: "https://funny-warthog-14.serverless.social"
});

export default api;