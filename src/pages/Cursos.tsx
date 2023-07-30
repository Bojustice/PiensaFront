import {curso, getCurso} from "../services/Back";
import useSWR from 'swr';
import React from "react";
import AntCard from "../components/AntCard";
import styles from './profesor.module.css';


interface CursoData {
    results:Array<{
        id:number;
        curso:string;
      
    }>;
}

export const Cursos: React.FC = () => {
    const {data, error} = useSWR<CursoData>( curso, getCurso, {
        suspense: false,
    });

    return (
        <>
        <h1>Cursos</h1>

        <div className={styles.container}>
            {data?.results.map((curso)=>(
                <AntCard key={curso.id} nombre={curso.curso}></AntCard>
            ))}
        </div>

        </>
    );
};