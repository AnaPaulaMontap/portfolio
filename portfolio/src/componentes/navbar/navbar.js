import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar (){
    return(
       
        <Link to="/menu" className="menu">APMT</Link>
    )
}

export default Navbar