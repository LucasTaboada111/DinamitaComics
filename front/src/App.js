import React from 'react';
import Login from './components/Login';
import Register from './components/Register'
import { Route, Switch } from 'react-router';

import './App.css';
import "primereact/resources/themes/saga-blue/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Home from './components/Home'
import Footer from './components/Footer';


function App() {
 /*  aca van las rutas */
  return (
    <div>
         <Navbar />


        <Switch>
          

        <Route path="/register" component={Register} /> 
        <Route path="/login" component={Login} />
        
        <Route path="/products" component={Home} />
       

        </Switch>


        <Footer />
    </div>
  );
}

export default App;
