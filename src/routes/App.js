import React from 'react';
import {BrowserRouter, Switch, Router, Route} from 'react-router-dom';
import PageCeo from '../pages/PageCeo';
import PageNuestraEmpresa from '../pages/PageNuestraEmpresa';
import PageCotizador1 from '../pages/PageCotizador1';
import PageCotizador2 from '../pages/PageCotizador2';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Switch>
          <Route exact path="/" component={PageCeo} />
          <Route exact path="/nuestraEmpresa" component={PageNuestraEmpresa} />
          <Route exact path="/cotizador" component={PageCotizador1} />
          <Route exact path="/detalledelpedido" component={PageCotizador2} />
      </Switch>    

      </BrowserRouter>
    </div>
  );
}


