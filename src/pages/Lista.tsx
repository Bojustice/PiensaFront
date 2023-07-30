import {alumnos, getAlumnos} from "../services/Back";
import useSWR from 'swr';
import React from "react";
import AntCard from "../components/AntCard";
import styles from './profesor.module.css';


interface AlumnosData {
    results:Array<{
        id:number;
        nombres:string;
        apellidos:string;
        telefono:number;
        email:string;
        imagen:string;
      
    }>;
}

export const Lista: React.FC = () => {
    const {data, error} = useSWR<AlumnosData>( alumnos, getAlumnos, {
        suspense: false,
    });

    return (
        <>
        <h1>Listado de alumnos</h1>

        <div className={styles.container}>
            {data?.results.map((alumnos)=>(
                <AntCard key={alumnos.id} nombre={alumnos.nombres} apellido={alumnos.apellidos} telefono={alumnos.telefono} email={alumnos.email} image={alumnos.imagen}></AntCard>
            ))}
        </div>

        </>
    );
};