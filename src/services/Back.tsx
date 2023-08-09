import axios from 'axios';

export const profesor = 'http://localhost:8081/profesor';
export const materia = 'http://localhost:8081/materia';
export const curso = 'http://localhost:8081/curso';
export const alumnos = 'http://localhost:8081/alumnos';
export const parametros = 'http://localhost:8081/parametros';
export const comportamiento = 'http://localhost:8081/comportamiento';

export const getApi = async (url: string) => {
    const response = await axios.get(url);
    return response.data
}

export const createApi = async (url: string,{arg}:any) => {
    const response = await axios.post(url, arg );
    return response.data
}

export const updateApi = async (url: string, {arg}:any) => {
    const response = await axios.patch(url, arg);
    return response.data
}

