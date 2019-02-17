import React, { Fragment, Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import Contacto from './contacto';
import Perfil from './perfil';
import Videos from '../containers/videos';


//const Rutas = () => (
class Rutas extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Home}/>
        <Route exact path="/videos" component={Videos}/>
        <Route path="/contacto" component={Contacto}/>
        <Route path="/perfil" component={Perfil}/>
      </Fragment>
    )  
  }
}

export default Rutas;