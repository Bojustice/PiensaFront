import './App.css';
import RootLayout from './layouts/RootLayout';
import {Home} from "./pages/Home";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {Profesor} from "./pages/Profesores";
import {Cursos} from "./pages/Cursos";
import {Materias} from "./pages/Materias";
import {Lista} from "./pages/Lista";
import React from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='profesores' element={<Profesor/>}/>
      <Route path='cursos' element={<Cursos/>}/>
      <Route path='materias' element={<Materias/>}/>
      <Route path='lista' element={<Lista/>}/>
    </Route>
  )
)

function App() {
  return(
          <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
