import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone62-aa29d/us-central1/api'
});

export default instance;