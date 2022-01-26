import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';

export const getData = () => {
    const url = baseUrl + '/test/data';

    return axios.get(url)
        .then(res => res.data)
        .catch(err => console.log(err));
}