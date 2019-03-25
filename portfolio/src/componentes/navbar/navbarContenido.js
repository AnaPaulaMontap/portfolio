import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function NavbarContenido (){
    return(
        <div className="menuHeader">
        <Link to="/" className="optionMenu">Inicio</Link>
        <Link to="/sobremi" className="optionMenu">Sobre Mí</Link>
        <p>Proyectos</p>
        <Link href="##"className="optionMenu">BurguerQueen</Link>
        <Link href="##"className="optionMenu">MdLinks</Link>
        <Link href="##"className="optionMenu">DataLovers</Link>
        <Link href="##"className="optionMenu">Cipher</Link>
        </div>
    )
}

export default NavbarContenido