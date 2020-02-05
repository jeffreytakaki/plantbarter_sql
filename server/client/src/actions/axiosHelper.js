import axios from 'axios';

const getjwtcookie = () => {
    if(localStorage.plantToken) return localStorage.plantToken;
}
export const instance = axios.create({
    headers: {'Authorization': `JWT ${getjwtcookie()}`}
});



