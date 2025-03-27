import axios from "axios";

const BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})

const http = {
    get: api.get,
    post: api.post,
    patch: api.patch,
    delete: api.delete,
    put: api.put
}

export default http