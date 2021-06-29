import React from 'react';
import Login from './components/Login';
import Register from './components/Register'
import { Route, Switch } from 'react-router';

import './App.css';
import "primereact/resources/themes/saga-blue/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"



function App() {
 /*  aca van las rutas */
  return (
    <div>
        
        <Switch>

        <Route path="/register" component={Register} /> 
        <Route path="/login" component={Login} />


        </Switch>

    </div>
  );
}

export default App;
