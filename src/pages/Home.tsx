import Input from "antd";
import axios from "axios";
import {profesor, createApi} from "../services/Back"
import { useState } from "react";

export const Home = () => {
    const [post, setPost] = useState({
        
        nombres: "",
        apellidos: "",
        telefono: 0,
        email: "",
        imagen: ""
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
            nombres: post.nombres,
            apellidos: post.apellidos,
            telefono:post.telefono,
            email: post.email,
            imagen: post.imagen,
        };
        
        axios.post("http://localhost:8081/profesor", userData).then((response) => {
            console.log(response.status, response.data.token);
          });
        };
        return (
            <div>
                <h1>Ingresos nuevos profesores</h1>
                <form onSubmit={handleSubmit}>
                    <ul>
                        <li>
                    <label htmlFor="nombres">
                        Nombres
                        <input
                        type="nombres"
                        name="nombres"
                        value={post.nombres}
                        onChange={handleChange}
                        />
                    </label>
                    </li><br></br>
                    <li>
                    <label htmlFor="apellidos">
                        Apellidos
                        <input
                        type="apellidos"
                        name="apellidos"
                        value={post.apellidos}
                        onChange={handleChange}
                        />
                    </label>
                    </li><br></br>
                    <li>
                    <label htmlFor="telefono">
                        Telefono
                        <input
                        type="telefono"
                        name="telefono"
                        value={post.telefono}
                        onChange={handleChange}
                        />
                    </label>
                    </li><br></br>
                    <li>
                    <label htmlFor="email">
                        Email
                        <input
                        type="email"
                        name="email"
                        value={post.email}
                        onChange={handleChange}
                        />
                    </label>
                    </li><br></br>
                    <li>
                    <label htmlFor="imagen">
                        Materia
                        <input
                        type="imagen"
                        name="imagen"
                        value={post.imagen}
                        onChange={handleChange}
                        />
                    </label>
                    </li><br></br>
                    <li>
                    <button type="submit">Ingresar</button>
                    </li><br></br>
                    </ul>
                </form>
                
            </div>
        );
      

        

        


    }


    