import Input from "antd";
import axios from "axios";
import {profesor, createProfesor} from "../services/Back"
import { useState } from "react";

export const Home = () => {
    const [post, setPost] = useState({
        nombres: '',
        apellidos: '',
        telefono: '',
        email: '',
        image: ''
    })
    const handleInput = (event: { target: { name: any; value: any; }; }) => {
        setPost({...post, [event.target.name]: event.target.value})
    }

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault()
        axios.post('http://localhost:8081/profesor', {post})
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    return (
        <div className='d-flex align-items-center justify-content-center vh-100 w-100'>
            <div className='w-50 text-center'>
                <form onSubmit={handleSubmit}>
                    Nombres: <input type="text"onChange={handleInput} name="nombres"></input><br/><br />
                    Apellidos: <input type="text"onChange={handleInput} name="apellidos"></input><br/><br />
                    Telefono: <input type="text"onChange={handleInput} name="telefono"></input><br/><br />
                    Email: <input type="text"onChange={handleInput} name="email"></input><br/><br />
                    Imagen: <input type="text"onChange={handleInput} name="image"></input><br/><br />
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    )
}