import axios from "axios";

const encrypted = axios.create({
    baseURL: process.env.AXIOS_BASE_URL
});

export default encrypted;
