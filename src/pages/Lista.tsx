import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Table, Modal, Space,  Select, Input} from 'antd';
import AntCard from '../components/AntCard';
import { profesor } from '../services/Back';
import styles from './profesor.module.css';
import Mod from '../components/Modal'
import { time } from 'console';

export const Lista = () => {
    const [post, setPost] = useState({
        
        fecha: "",
        inatencion: 0,
        inatencion2: 0,
        hiperactividad: 0,
        hiperactividad2: 0,
        hiperactividad3: 0,
        alumnosId:0,
        profesorId:0,
        comentarios: ""
        
    });

    const handleChange = (e:any)=>{
        const value=e.target.value;
        setPost({
            ...post,[e.target.name]:value
        });
    };

    const handleSubmit=(e:any)=>{
        e.preventDefault();
        const userData ={
            fecha: post.fecha,
            inatencion: post.inatencion,
            inatencion2: post.inatencion2,
            hiperactividad: post.hiperactividad,
            hiperactividad2: post.hiperactividad2,
            hiperactividad3: post.hiperactividad3,
            alumnosId: post.alumnosId,
            profesorId: post.profesorId,
            comentarios: post.comentarios
        };
        
        axios.post("http://localhost:8081/comportamiento", userData).then((response) => {
            console.log(response.status, response.data.token);
          });
        };
        return (
            <div>
                <h1>Novedades</h1>
                <form onSubmit={handleSubmit}>
                    <ul>
                        <li>
                    <label htmlFor="profesorId">
                        Profesor
                        <input
                        type="profesorId"
                        name="profesorId"
                        value={post.profesorId}
                        onChange={handleChange}
                        />
                    </label>
                    </li><br></br>
                    <li>
                    <label htmlFor="alumnosId">
                        Alumno
                        <input
                        type="alumnosId"
                        name="alumnosId"
                        value={post.alumnosId}
                        onChange={handleChange}
                        />
                    </label>
                    </li><br></br>
                    <li>

                    <Select
                    defaultValue=""
                    style={{width:480}}
                    onChange={handleChange}
                    options={[
                        {value:post.inatencion+=1, label:'No acata directrices'},
                        {value:post.inatencion2+=1, label:'No copia los deberes'},
                        {value:post.hiperactividad+=1, label:'Se levanta de su puesto'},
                        {value:post.hiperactividad2+=1, label:'Hace escandalos en la hora de clases'},
                        {value:post.hiperactividad3+=1, label:'Molesta al resto de compañeros'}
                    ]
                    } 
                    />
                    </li><br></br>
                    <li>
                    <label htmlFor="fecha">
                        Fecha
                        <input
                        type="fecha"
                        name="fecha"
                        value={post.fecha}
                        onChange={handleChange}
                        />
                    </label>   
                    </li><br></br>
                    <li>
                    <label htmlFor="comentarios">
                        Comentarios
                        <input
                        type="comentarios"
                        name="comentarios"
                        value={post.comentarios}
                        onChange={handleChange}
                        />
                    </label>
                        
                    </li> 
                    <li>
                    <button type="submit">Ingresar</button>
                    </li><br></br>
                    </ul>
                </form>
                
            </div>
        );
      

        

        


    }