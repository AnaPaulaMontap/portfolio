import React, { Component } from 'react';
import { BrowserRouter, Route, Switch , Redirect} from 'react-router-dom';
import Portada from './componentes/portada/portada'
import SobreMi from './componentes/sobremi/sobremi'
import './App.css';
import Navbar from './componentes/navbar/navbar'
import NavbarContenido from'./componentes/navbar/navbarContenido'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App-header"> 
      <Navbar/>      
        <Switch>           
          <Route exact path='/' component={Portada} />
          <Route path='/menu' component={NavbarContenido} />
          <Route path='/sobremi' component={SobreMi} />                        
        <Redirect path="/" to="/"></Redirect>      
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
