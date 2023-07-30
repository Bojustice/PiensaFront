import {materia, getMateria} from "../services/Back";
import useSWR from 'swr';
import React from "react";
import AntCard from "../components/AntCard";
import styles from './profesor.module.css';


interface MateriaData {
    results:Array<{
        id:number;
        materia:string;
        profesorId: number;
        cursoId: number;
        imagen: string;
      
    }>;
}

export const Materias: React.FC = () => {
    const {data, error} = useSWR<MateriaData>( materia, getMateria, {
        suspense: false,
    });

    return (
        <>
        <h1>Materias</h1>

        <div className={styles.container}>
            {data?.results.map((materia)=>(
                <AntCard key={materia.id} nombre={materia.materia} image= {materia.imagen}></AntCard>
            ))}
        </div>

        </>
    );
};