import {profesor, getProfesor} from "../services/Back";
import useSWR from 'swr';
import React from "react";
import AntCard from "../components/AntCard";
import styles from './profesor.module.css';


interface ProfesorData {
    results:Array<{
        id:number;
        nombres:string;
        apellidos:string;
        telefono:number;
        email:string;
        image:string
    }>;
}

export const Profesor: React.FC = () => {
    const {data, error} = useSWR<ProfesorData>( profesor, getProfesor, {
        suspense: false,
    });

    return (
        <>
        <h1>Profesores</h1>

        <div className={styles.container}>
            {data?.results.map((profesor)=>(
                <AntCard key={profesor.id} nombre={profesor.nombres} apellido={profesor.apellidos} telefono={profesor.telefono} email={profesor.email}></AntCard>
            ))}
        </div>

        </>
    );
};