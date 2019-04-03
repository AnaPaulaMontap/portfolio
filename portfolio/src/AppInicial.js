
import React from "react";
import ReactPageScroller from "react-page-scroller";
import Portada from "./componentes/portada/portada"
import SobreMi from "./componentes/sobremi/sobremi"
import Proyectos from "./componentes/proyectos/pruebaproyecto"
import data from './componentes/proyectos/data'

import './AppInicial.css'



export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentPage: 1};
        this._pageScroller = null;
        
    }

    goToPage = (eventKey) => {
        this._pageScroller.goToPage(eventKey);
    };

    pageOnChange = (number) => {
        this.setState({currentPage: number});
    };

    
    
     render() {

        return <div className="section">
        
        <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}
                           containerWidth={window.innerWidth * 0.96} containerHeight={window.innerHeight * 0.96}>  
        <Portada/>
        <SobreMi/> 
        <Proyectos data={data}/>      
        </ReactPageScroller>
       
        
        
        
        
</div>
       
    }
}
