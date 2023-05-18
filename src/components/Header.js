import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
  
      <div className="Encabezado">
  
        <div className="RecuadroLogo">
          <h1><b className="Logo_Text">Myfullmetallist</b></h1>
          <img className='Logo_Img' src='./Imagenes/icono.png' alt='Textp'></img>
        </div>
  
        <div className="menu">
          <nav>
            <ul>
              <li>
                <Link to="/Inicio" className="no-underline black">
                  Perfil
                </Link>
              </li>
  
              <li>
                <Link to="/Tutorials" className="no-underline black">
                  Lista-fotos
                </Link>
              </li>
  
              <li>
                <Link to="/add" className="no-underline black" >
                  Agregar-foto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
  
      </div>
    );
  };
  
  export default Header;