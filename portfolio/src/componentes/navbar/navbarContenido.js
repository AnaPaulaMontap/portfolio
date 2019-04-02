import React from 'react';
//import { Link } from 'react-router-dom';
import './navbar.css'

function NavbarContenido (){
    return(
        <div className="menuHeader">
        <a href="#inicio" className="optionMenu">Inicio</a>
        <a href="/sobremi" className="optionMenu">Sobre Mí</a>
        <p>Proyectos</p>
        <a  href="/bqueen" className="optionMenu">BurguerQueen</a>
        <a href="/mdlinks" className="optionMenu">MdLinks</a>
        <a href="/datalover" className="optionMenu">DataLovers</a>
        <a href="/cipher" className="optionMenu">Cipher</a>
        </div>
    )
}

export default NavbarContenido