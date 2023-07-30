import axios from 'axios';

export const profesor = 'http://localhost:8081/profesor';
export const materia = 'http://localhost:8081/materia';
export const curso = 'http://localhost:8081/curso';
export const alumnos = 'http://localhost:8081/alumnos';
export const parametros = 'http://localhost:8081/parametros';
export const comportamiento = 'http://localhost:8081/comportamiento';

export const getProfesor = async (url: string) => {
    const response = await axios.get(url);
    return response.data
}

export const createProfesor = async (url: string,{arg}:any) => {
    const response = await axios.post(url, arg );
    return response.data
}

export const updateProfesor = async (url: string, {arg}:any) => {
    const response = await axios.patch(url, arg);
    return response.data
}

export const getMateria = async (url: string) => {
    const response = await axios.get(url);
    return response.data
}

export const createMateria = async (url: string,{arg}:any) => {
    const response = await axios.post(url, arg );
    return response.data
}

export const updateMateria = async (url: string, {arg}:any) => {
    const response = await axios.patch(url, arg);
    return response.data
}

export const getCurso = async (url: string) => {
    const response = await axios.get(url);
    return response.data
}

export const createCurso = async (url: string,{arg}:any) => {
    const response = await axios.post(url, arg );
    return response.data
}

export const updateCurso = async (url: string, {arg}:any) => {
    const response = await axios.patch(url, arg);
    return response.data
}

export const getAlumnos = async (url: string) => {
    const response = await axios.get(url);
    return response.data
}

export const createAlumnos = async (url: string,{arg}:any) => {
    const response = await axios.post(url, arg );
    return response.data
}

export const updateAlumnos = async (url: string, {arg}:any) => {
    const response = await axios.patch(url, arg);
    return response.data
}

export const getParametros = async (url: string) => {
    const response = await axios.get(url);
    return response.data
}

export const createParametros = async (url: string,{arg}:any) => {
    const response = await axios.post(url, arg );
    return response.data
}

export const updateParametros = async (url: string, {arg}:any) => {
    const response = await axios.patch(url, arg);
    return response.data
}

export const getComportamiento = async (url: string) => {
    const response = await axios.get(url);
    return response.data
}

export const createComportamiento = async (url: string,{arg}:any) => {
    const response = await axios.post(url, arg );
    return response.data
}

export const updateComportamiento = async (url: string, {arg}:any) => {
    const response = await axios.patch(url, arg);
    return response.data
}