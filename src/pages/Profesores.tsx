import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Table, Typography, Space, Button, Checkbox} from 'antd';
import AntCard from '../components/AntCard';
import { profesor } from '../services/Back';
import styles from './profesor.module.css';
import { useHref , Link} from 'react-router-dom';
import { Content } from 'antd/es/layout/layout';

export interface Profe {
    content:Content[]

}
type Content= {
    id:number;
    nombres:string;
    apellidos:string;
    telefono:number;
    email:string;
    imagen: string;
}

export default function Profesor(){
    const [data,setData] = useState<Profe>()

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async()=>{
        try{
            await axios.get('http://localhost:8081/profesor').then((res)=>setData(res.data))
        }catch(error){
            console.log(error)
        }
    }
    const columns =[
        {
            title: 'Numero',
            dataIndex:'id',
            key: 'id',
                
        },
        {
            title: 'Nombres',
            dataIndex:'nombres',
            key: 'nombres'        
        },
        {
            title: 'Apellidos',
            dataIndex:'apellidos',
            key: 'apellidos'        
        },
        {
            title: 'Telefono',
            dataIndex:'telefono',
            key: 'telefono'        
        },
        {
            title: 'Email',
            dataIndex:'email',
            key: 'email'        
        },
        {
            title: 'Materia',
            dataIndex:'imagen',
            key: 'imagen'        
        },
       
        
    ];
    return(
        <form>
       
        <div>
           
            <Table columns={columns} dataSource={data?.content}>
                

            </Table>
            
            


            </div>
        </form>
       
      
    );
};
