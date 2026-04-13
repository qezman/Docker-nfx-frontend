import axios from 'axios';

export default axios.create({
    baseURL:'http://44.195.83.48:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
