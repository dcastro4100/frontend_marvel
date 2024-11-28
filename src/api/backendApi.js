import axios from 'axios';
import CryptoJS from 'crypto-js';
import { getEnvVariables } from '../helpers/getEnvVariables';

const {VITE_MARVEL_API_URL_BACKEND,VITE_MARVEL_API_PUBLIC_KEY,VITE_MARVEL_API_PRIVATE_KEY}=getEnvVariables();

const backendApi=axios.create({
    baseURL: VITE_MARVEL_API_URL_BACKEND
});

backendApi.interceptors.request.use((config) => {
    const ts = new Date().getTime().toString(); // Generar un timestamp único

    // Generar el hash con ts, privateKey y publicKey
    const hash = CryptoJS.MD5(ts + VITE_MARVEL_API_PRIVATE_KEY + VITE_MARVEL_API_PUBLIC_KEY).toString();
    

    // Añadir los parámetros de la API de Marvel
    config.params = {
        ...config.params, // Mantener cualquier parámetro existente
        apikey: VITE_MARVEL_API_PUBLIC_KEY,
        hash: hash,
        ts: ts,
    };

    return config;
});

export default backendApi;