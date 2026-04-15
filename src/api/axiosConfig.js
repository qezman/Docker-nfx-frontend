import axios from 'axios';

export default axios.create({
    baseURL:'http://44.193.39.54:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
