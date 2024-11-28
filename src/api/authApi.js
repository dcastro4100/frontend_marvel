import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';


const {VITE_MARVEL_API_URL_BACKEND}=getEnvVariables();

const authAPI=axios.create({
    baseURL: VITE_MARVEL_API_URL_BACKEND
});

authAPI.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'Authorization': 'Bearer '+localStorage.getItem('token')
    }

    return config;
})

export default authAPI;