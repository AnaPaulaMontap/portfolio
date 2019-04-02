import React, {Component} from 'react';
import  './sobremi.css';
import yo from './imagendemi.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

  
class SobreMi extends Component{
    componentDidMount () {
      AOS.init({
        duration : 2000
      });

    };
    render (){
    return (
      <div className="SplitPane" data-aos="fade-right">
        <div className="SplitPane-left" >
          <img alt="mifoto" src={yo} className="foto"/> 
        </div>
        <div className="SplitPane-right" data-aos="fade-right">
          <h1 className="titulo">Hola!</h1>
          <p className='parrafo'>Mi nombre es Ana Paula Monsalve, soy egresada de la septima generación de Laboratoria como FrontEnd Developer.</p>
          <button className="boton">Conocer más</button>
        </div>
      </div>
    )
    }
  };

  export default SobreMi