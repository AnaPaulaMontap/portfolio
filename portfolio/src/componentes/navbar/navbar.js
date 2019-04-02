import React from 'react';
//import { Link } from 'react-router-dom';
import './navbar.css'
import logo from './NewLogo.png'

function Navbar (props){
  
    return(
       //<div></div>
        //<Link to="/menu" className="menu" onClick={props.onClick}><img src={logo} className="logo"alt="logo"/></Link>
        //<NavbarContenido />
        <button className="menu" onClick={props.onClick} ><img src={logo} className="logo"alt="logo"/></button>
    )
    
}

export default Navbar