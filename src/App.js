import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageLanding from './componentes/paginas/PageLanding';
import Footer from './componentes/componentesTripcost/Footer';
import './componentes/css/style.css';
import Navbar from './componentes/componentesTripcost/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

//Import Pages
import PageHome from './componentes/paginas/PageHome';
import PageExplore from './componentes/paginas/PageExplore';
import PageContact from './componentes/paginas/PageContact';
import NotFoundPage from './componentes/paginas/NotFoundPage';
import PageDetallesReserva from './componentes/paginas/PageDetallesReserva';
import {PrivateRoute} from './componentes/PrivateRoute';

function App() {

  return (
    <div>
    <Switch>
      <Route exact path="/" component={PageLanding} />
        <Route path="/home" component={PageHome} />
        <Route path="/explore" component={PageExplore} />
        <Route path="/contact" component={PageContact} />
        <PrivateRoute exact path="/DetalleReserva" component={PageDetallesReserva}/>
        <Route component={NotFoundPage}/>

      </Switch>

    </div>
  );
}

export default App;

