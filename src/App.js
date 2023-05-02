import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, Link } from "react-router-dom";
import React, {Component, useState} from "react";

import AddFullmetal from "./components/add-fullmetal.components";
import FullmetalList from "./components/fullmetal-list.components";
import {Informacion, Imagen, Alumno}  from "./components/Inicio";
import Header from "./components/Header";



class App extends Component {
  render() {
    return (
      <div>
        <Imagen />
        <Header />
        <div className="container mt-3">
          <h2>FOTOS FULL METAL </h2>
          <Routes>
            <Route  path="/Inicio" element={<Alumno/>} />
            <Route  path="/tutorials" element={<FullmetalList/>} />
            <Route  path="/add" element={<AddFullmetal/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;