import React from 'react';
import Login from './components/Login';
import Register from './components/Register'
import { Route, Switch, Redirect } from 'react-router';

import './App.css';
import "primereact/resources/themes/saga-blue/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Home from './components/Home'
import Footer from './components/Footer';
import './styles/global.module.css'
import NotFound from './components/NotFound';

function App() {
 /*  aca van las rutas */
  return (
    <div>
         <Navbar />


        <Switch>
          

        <Route path="/register" component={Register} /> 
        <Route path="/login" component={Login} />
        
        <Route path="/" component={Home} />
       
        <Route path="/404" component={NotFound} />
        </Switch>


        <Footer />
    </div>
  );
}

export default App;
