import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageLanding from './componentes/paginas/PageLanding';
import Footer from './componentes/componentesTripcost/Footer';
import './componentes/css/style.css';
import Navbar from './componentes/componentesTripcost/Navbar';
import { Switch, Route } from 'react-router-dom';

//Import Pages
import PageHome from './componentes/paginas/PageHome';
import PageExplore from './componentes/paginas/PageExplore';
import PageContact from './componentes/paginas/PageContact';
import NotFoundPage from './componentes/paginas/NotFoundPage';

function App() {
  return (
    <div>
<Switch>
      <Route exact path="/" component={PageLanding} />
        <Route path="/home" component={PageHome} />
        <Route path="/explore" component={PageExplore} />
        <Route path="/contact" component={PageContact} />
        <Route component={NotFoundPage}/>

      </Switch>

    </div>




  );
}

export default App;
